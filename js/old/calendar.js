var timestamp;

function getLocation() {
  navigator.geolocation.getCurrentPosition(function(position){
    setCoords(position);
  }, function () {
    setCoords({coords: { latitude: latitude, longitude: longitude }});
  });
}

function getAirportLocation() {
  $.getJSON( "https://raw.githubusercontent.com/mwgg/Airports/master/airports.json", function( data ) {
    $('#iata input').addClass('loading');
    var iatacode = $('#iata input').val();
    Defiant.getSnapshot(data, function(snapshot) {
      var found = JSON.search(snapshot, '//*[iata="'+iatacode.toUpperCase()+'"]');
      /*
      var minlat = Math.floor($('#lat').val()) - 2;
      var maxlat = Math.ceil($('#lat').val()) + 2;
      var minlon = Math.floor($('#lon').val()) - 2;
      var maxlon = Math.ceil($('#lon').val()) + 2;
      var foundlat = JSON.search(snapshot, '//*[lat<'+maxlat+' and lat>'+minlat+']');
      var found = JSON.search(foundlat, '//*[lon<'+maxlon+' and lon>'+minlon+']');
      var distances = [];
      for (index = 0; index < found.length; ++index) {
        distances.push(getDistance($('#lat').val(), $('#lon').val(), found[index].lat, found[index].lon));
      }
      var idx = distances.indexOf(Math.min.apply(Math,distances));
      var airport = found[idx];
      */
      var airport = found[0];
      $.getJSON( "https://raw.githubusercontent.com/dmfilipenko/timezones.json/master/timezones.json", function( zones ) {
        var off = JSON.search( zones, '//*[utc="'+airport.tz+'"]');
        $('#lat').val(airport.lat);
        $('#lon').val(airport.lon);
        $('#offset').val(off[0].offset);
        $('#iata-info').text(airport.name+', '+airport.city+', '+airport.country+' (Timezone: '+airport.tz+')');
        $('#iata input').removeClass('loading');
      });
    });
  });
}

function setCoords(location) {
  $('#lat').val(location.coords.latitude);
  $('#lon').val(location.coords.longitude);
  var now = new Date()
  var off = now.getTimezoneOffset();
  $('#offset').val(off/60*-1);
}

function generate() {
  $('#grid').empty();
  var data = generateJSON((Math.floor($('#lat').val())+'-'+Math.floor($('#lon').val())), new moment().unix(), $('#offset').val(), ($('#days').val()-1), $('#lat').val(), $('#lon').val());
  var j = 0;
  function makePHour(j) {
    if ( j == data.planetaryhours.length-1 ) {
      clearTimeout(everyday);
      NProgress.done();
      var now = moment().subtract($('#offset').val(), 'h').unix();
      $('.planetaryhour').each( function( idx, element ) {
        if ( $(element).attr('ts') < now && now < $(element).next().attr('ts') ) {
          $(element).addClass('now');
        }
      });
      return;
    }
    var m = data.planetaryhours[j];
    var localTime = new moment.unix(m.ts).add($('#offset').val(), 'h');
    var zodiac         = getZodiac(m.solar.lng);
    var moonsign       = getZodiac(m.lunar.lng);
    var mansion        = getLunarMansion(m.lunar.lng);
    var hygromanteia   = getActions(matrix.planetary.day[m.planetary.day].hour[m.planetary.hour.number].for, action, 'hygromanteia');
    var lunarday       = getActions(matrix.lunar.day[m.lunar.day.day], action, 'lunarday');
    var lunarsign      = getActions(matrix.lunar.sign[zodiac.sign].for, action, 'lunarsign');
    var lunarmansion   = getActions(matrix.lunar.mansion[mansion], action, 'lunarmansion');
    var claviculaday   = getActions(matrix.clavicula[m.planetary.day+1], action, 'clavicula');
    var claviculahour  = getActions(matrix.clavicula[matrix.planetary.day[m.planetary.day].hour[m.planetary.hour.number].planet], action, 'clavicula');
    var clavicula = [claviculaday.actions.string, claviculahour.actions.string];
    $('<div/>').loadTemplate($("#tpl-planetaryhour"), {
        ruler       : def.planet.symbol[m.planetary.day+1],
        date        : new moment.unix(m.ts).format('D/M'),
        lunarday    : '☾'+m.lunar.day.day+'☽',
        hourstart   : new moment.unix(m.planetary.hour.begin).add($('#offset').val(), 'h').format('HH:mm'),
        hournumber  : (m.planetary.hour.number+1)+'<br />'+def.planet.symbol[matrix.planetary.day[m.planetary.day].hour[m.planetary.hour.number].planet],
        hourend     : new moment.unix(m.planetary.hour.end).add($('#offset').val(), 'h').format('HH:mm'),
        moonsign    : def.zodiac.symbol[moonsign.sign],
        moonphase   : def.moon.phase.symbol[m.lunar.phase.simple]+' <small>'+m.lunar.phase.illumination+'%</small>',
        moonmansion : '|'+mansion+'|'
    })
    .addClass(hygromanteia.actions.string)
    .addClass($.unique(clavicula.join(" ").split(' ')).join(" "))
    .addClass(lunarday.actions.string)
    .addClass(lunarsign.actions.string)
    .addClass(lunarmansion.actions.string)
    .addClass(addPlanetClasses(m.solar.lng, 'sun'))
    .addClass(addPlanetClasses(m.lunar.lng, 'moon'))
    .addClass(addPlanetClasses(m.planet.mars.lng, 'mars'))
    .addClass(addPlanetClasses(m.planet.mercury.lng, 'mercury'))
    .addClass(addPlanetClasses(m.planet.jupiter.lng, 'jupiter'))
    .addClass(addPlanetClasses(m.planet.venus.lng, 'venus'))
    .addClass(addPlanetClasses(m.planet.saturn.lng, 'saturn'))
    .addClass('col-md-2 centered planetaryhour')
    .attr('id', 'c'+j+'d'+m.planetary .day+'h'+m.planetary.hour.number )
    .attr('day', m.planetary.day)
    .attr('hour', m.planetary.hour.number)
    .attr('ts', m.ts)
    .attr('ts-end', new moment.unix(m.planetary.hour.end).add($('#offset').val(), 'h').unix())
    .attr('sun-lng', m.solar.lng)
    .attr('moon-lng', m.lunar.lng)
    .attr('moon-day', m.lunar.day.day)
    .attr('moon-phase', m.lunar.phase.simple)
    .attr('moon-angle', Math.round(m.lunar.phase.angle *100) / 100 )
    .attr('moon-illumination', m.lunar.phase.illumination)
    .attr('mars-lng', m.planet.mars.lng)
    .attr('mercury-lng', m.planet.mercury.lng)
    .attr('jupiter-lng', m.planet.jupiter.lng)
    .attr('venus-lng', m.planet.venus.lng)
    .attr('saturn-lng', m.planet.saturn.lng)
    .appendTo('#grid');
    if ( $('#c'+j+'d'+m.planetary .day+'h'+m.planetary.hour.number).attr('hour') > 11 ) {
      $('#c'+j+'d'+m.planetary .day+'h'+m.planetary.hour.number).addClass('night-hour');
    }
    NProgress.set(j/data.planetaryhours.length);
  }
  for (var i = 0, len = data.planetaryhours.length; i < len; i++) {
    var everyday = setTimeout( makePHour, 10, i);
  }
}

function generateJSON(iata, timestamp, timeoffset, days, latitude, longitude) {
  var caldata = [];
  var queryday = new moment.unix(timestamp).startOf('day');
  var j = 0;
  while ( j <= days ) {
    var m = planetaryMoment(latitude, longitude, queryday.unix());
    var sol = m.solar.day;
    var h = 0;
    var interval;
    var start;
    var m;
    while ( h < 24 ) {
      if ( h < 12 ) {
        interval = sol.day.hourSecs;
        start = sol.day.start;
        m = h;
      } else {
        interval = sol.night.hourSecs;
        start = sol.night.start;
        m = h - 12;
      }
      var hm = start + m * interval;
      pm = planetaryMoment(latitude, longitude, hm);
      caldata.push(pm);
      h++;
    }
    queryday.add(1, 'd');
    j++;
  };
  console.log(caldata);
  var data = {
    iata: iata,
    time: {
      starttime: timestamp,
      days: days,
      offset: timeoffset
    },
    coords: {
      lat: latitude,
      lng: longitude
    },
    planetaryhours: caldata
  };
  return data;
}

function createFilterModal(id, getFunction) {
  var items = getFunction();
  var title = $('#navigation a[data-target="#'+id+'"]').clone();
  var tagfilters = "";
  var actions = "";
  for (var i = 0, len = items.tags.length; i < len; i++) {
    tagfilters += '<li><input type="checkbox" class="actiontag" value=".'+items.tags[i]+'" id="'+id+'-'+items.tags[i]+'" />&nbsp;'+items.tags[i]+'</li>';
  }
  for (var i = 0, len = items.actions.length; i < len; i++) {
    actions += '<li class="operation '+items.actions[i].tags+'"><input type="checkbox" value=".'+id+'-'+items.actions[i].id+'" id="'+id+'-'+items.actions[i].id+'" />&nbsp;'+items.actions[i].action+'</li> ';
  }
  $('<div/>').loadTemplate($("#tpl-modal"), {
      title : 'Filter by'+title[0].innerText,
      left  : '<h4>Tags</h4><ul class="option-set">'+tagfilters+'</ul>',
      right : '<h4>Operations</h4><ul class="option-set">'+actions+'</ul>'
  })  .appendTo('#modals').attr('id', id).attr('tabindex', '-1').attr('role', 'dialog').addClass('modal fade')
      .find('.col-sm-4')
        .addClass('actionlistfilter')
        .find('ul')
          .attr('id', id+'-tags' )
          .attr('data-group', id )
      .parents('.modal-body')
      .find('.col-sm-8')
        .addClass('filteroptions')
        .find('ul')
          .attr('id', id+'-actions')
          .attr('data-group', id+'-actions' );
}

function createInfoModal() {
  $('<div/>').loadTemplate($("#tpl-modal"), {
      title : 'Planetary Hour <span id="p-hour"></span>',
      left  : '<div id="p-info"></div>',
      right : '<div id="p-actions"></div>'
  })  .appendTo('#modals').attr('id', 'hourinfo').attr('tabindex', '-1').attr('role', 'dialog').addClass('modal fade').modal({ show: false});
}

function getHourInfo() {
  var ts = $(this).attr('ts');
  var tsend = $(this).attr('ts-end');
  var day = parseFloat($(this).attr('day'));
  var hour = parseFloat($(this).attr('hour'));
  var sunlng = parseFloat($(this).attr('sun-lng'));
  var moonlng = parseFloat($(this).attr('moon-lng'));
  var marslng = parseFloat($(this).attr('mars-lng'));
  var mercurylng = parseFloat($(this).attr('mercury-lng'));
  var jupiterlng = parseFloat($(this).attr('jupiter-lng'));
  var venuslng = parseFloat($(this).attr('venus-lng'));
  var saturnlng = parseFloat($(this).attr('saturn-lng'));
  var zodiac = getZodiac(sunlng);
  var moonsign = getZodiac(moonlng);
  var marssign = getZodiac(marslng);
  var mercurysign = getZodiac(mercurylng);
  var jupitersign = getZodiac(jupiterlng);
  var venussign = getZodiac(venuslng);
  var saturnsign = getZodiac(saturnlng);
  var mansion = getLunarMansion(moonlng);
  var moonday = parseFloat($(this).attr('moon-day'));
  var phase = parseFloat($(this).attr('moon-phase'));
  var angle = parseFloat($(this).attr('moon-angle'));
  var illumination = parseFloat($(this).attr('moon-illumination'));
  var hygromanteia   = getActions(matrix.planetary.day[day].hour[hour].for, action);
  var lunarday       = getActions(matrix.lunar.day[lunarday], action);
  var lunarsign      = getActions(matrix.lunar.sign[moonsign.sign].for, action);
  var lunarmansion   = getActions(matrix.lunar.mansion[mansion], action);
  var claviculaday   = getActions(matrix.clavicula[day+1], action);
  var claviculahour  = getActions(matrix.clavicula[matrix.planetary.day[day].hour[hour].planet], action);
  $('#p-hour').html((hour+1));
  $('#p-info').html(
    $('<ul/>').append(
      '<li><h4>Data</h4></li>'+
      '<li>Day: '+def.planet.day[day+1]+'</li>'+
      '<li>Ruler: '+def.planet.name[day+1]+'</li>'+
      '<li>&nbsp;</li>'+
      '<li>Hour: '+(hour+1)+'</li>'+
      '<li>Ruler: '+def.planet.name[matrix.planetary.day[day].hour[hour].planet]+'</li>'+
      '<li>Angel: '+matrix.planetary.day[day].hour[hour].angel+'</li>'+
      '<li>Demon: '+matrix.planetary.day[day].hour[hour].demon+'</li>'+
      '<li>&nbsp;</li>'+
      '<li>Zodiac Sign: '+def.zodiac.name[zodiac.sign]+'</li>'+
      '<li>Ruler: '+def.planet.name[def.zodiac.ruler[zodiac.sign]]+'</li>'+
      '<li>Ecliptic Lng.: '+Math.round(sunlng * 100) / 100+'°</li>'+
      '<li>&nbsp;</li>'+
      '<li>Decan: '+zodiac.decan+'</li>'+
      '<li>Greek: '+def.decan.greek[zodiac.decan]+'</li>'+
      '<li>Latin: '+def.decan.latin[zodiac.decan]+'</li>'+
      '<li>Ruler: '+def.planet.name[def.decan.ruler[zodiac.sign]]+'</li>'+
      '<li>&nbsp;</li>'+
      '<li>Lunar Day: '+moonday+'</li>'+
      '<li>&nbsp;</li>'+
      '<li>'+def.moon.phase.symbol[phase]+' '+def.moon.phase.name[phase]+'</li>'+
      '<li>Angle: '+Math.round(angle * 180 / Math.PI * 100) / 100+'°</li>'+
      '<li>Illumination: '+illumination+'%</li>'+
      '<li>&nbsp;</li>'+
      '<li>Lunar Sign: '+def.zodiac.name[moonsign.sign]+'</li>'+
      '<li>Ruler: '+def.planet.name[def.zodiac.ruler[moonsign.sign]]+'</li>'+
      '<li>Ecliptic Lng.: '+Math.round(moonlng * 100) / 100+'°</li>'+
      '<li>&nbsp;</li>'+
      '<li>Lunar Mansion: '+mansion+'</li>'+
      '<li>Arabic: '+def.moon.mansion.arabic[mansion]+'</li>'+
      '<li>Latin: '+def.moon.mansion.latin[mansion]+'</li>'+
      '<li>&nbsp;</li>'+
      '<li>Lunar Decan: '+moonsign.decan+'</li>'+
      '<li>Greek: '+def.decan.greek[moonsign.decan]+'</li>'+
      '<li>Latin: '+def.decan.latin[moonsign.decan]+'</li>'+
      '<li>Ruler: '+def.planet.name[def.decan.ruler[moonsign.sign]]+'</li>'+
      '<li>&nbsp;</li>'+
      '<li>Mars</li>'+
      '<li>Ecliptic Lng.: '+Math.round(marslng * 100) / 100+'°</li>'+
      '<li>Zodiac: '+def.zodiac.name[marssign.sign]+'</li>'+
      '<li>Ruler: '+def.planet.name[def.zodiac.ruler[marssign.sign]]+'</li>'+
      '<li>Decan: '+marssign.decan+' ('+def.decan.greek[marssign.decan]+')</li>'+
      '<li>Ruler: '+def.planet.name[def.decan.ruler[marssign.sign]]+'</li>'+
      '<li>&nbsp;</li>'+
      '<li>Mercury</li>'+
      '<li>Ecliptic Lng.: '+Math.round(mercurylng * 100) / 100+'°</li>'+
      '<li>Zodiac: '+def.zodiac.name[mercurysign.sign]+'</li>'+
      '<li>Ruler: '+def.planet.name[def.zodiac.ruler[mercurysign.sign]]+'</li>'+
      '<li>Decan: '+mercurysign.decan+' ('+def.decan.greek[mercurysign.decan]+')</li>'+
      '<li>Ruler: '+def.planet.name[def.decan.ruler[mercurysign.sign]]+'</li>'+
      '<li>&nbsp;</li>'+
      '<li>Jupiter</li>'+
      '<li>Ecliptic Lng.: '+Math.round(jupiterlng * 100) / 100+'°</li>'+
      '<li>Zodiac: '+def.zodiac.name[jupitersign.sign]+'</li>'+
      '<li>Ruler: '+def.planet.name[def.zodiac.ruler[jupitersign.sign]]+'</li>'+
      '<li>Decan: '+jupitersign.decan+' ('+def.decan.greek[jupitersign.decan]+')</li>'+
      '<li>Ruler: '+def.planet.name[def.decan.ruler[jupitersign.sign]]+'</li>'+
      '<li>&nbsp;</li>'+
      '<li>Venus</li>'+
      '<li>Ecliptic Lng.: '+Math.round(venuslng * 100) / 100+'°</li>'+
      '<li>Zodiac: '+def.zodiac.name[venussign.sign]+'</li>'+
      '<li>Ruler: '+def.planet.name[def.zodiac.ruler[venussign.sign]]+'</li>'+
      '<li>Decan: '+venussign.decan+' ('+def.decan.greek[venussign.decan]+')</li>'+
      '<li>Ruler: '+def.planet.name[def.decan.ruler[venussign.sign]]+'</li>'+
      '<li>&nbsp;</li>'+
      '<li>Saturn</li>'+
      '<li>Ecliptic Lng.: '+Math.round(saturnlng * 100) / 100+'°</li>'+
      '<li>Zodiac: '+def.zodiac.name[saturnsign.sign]+'</li>'+
      '<li>Ruler: '+def.planet.name[def.zodiac.ruler[saturnsign.sign]]+'</li>'+
      '<li>Decan: '+saturnsign.decan+' ('+def.decan.greek[saturnsign.decan]+')</li>'+
      '<li>Ruler: '+def.planet.name[def.decan.ruler[saturnsign.sign]]+'</li>'
    )
  );
  $('#p-actions').html(
    $('<ul/>').append(
      '<li><h4>Operations</h4></li>'+
      '<li><b>Key of Solomon</b></li>'+
      '<li><ul class="kos-actions"></ul></li>'+
      '<li><b>Hygromanteia</b></li>'+
      '<li><ul class="hyg-actions"></ul></li>'+
      '<li><b>Lunar Day</b></li>'+
      '<li><ul class="lud-actions"></ul></li>'+
      '<li><b>Moon Sign</b></li>'+
      '<li><ul class="mos-actions"></ul></li>'+
      '<li><b>Lunar Mansion</b></li>'+
      '<li><ul class="lum-actions"></ul></li>'
    )
  );
  $('<li/>').text('All Day:').appendTo('ul.kos-actions');
  $.each(claviculaday.actions.list.sort(function (a, b) { return a.action.localeCompare( b.action ); }), function(i) {
    $('<li/>').text(claviculaday.actions.list[i].action).appendTo('ul.kos-actions');
  });
  $('<li/>').html('&nbsp;').appendTo('ul.kos-actions');
  $('<li/>').text('This Hour:').appendTo('ul.kos-actions');
  $.each(claviculahour.actions.list.sort(function (a, b) { return a.action.localeCompare( b.action ); }), function(i) {
    $('<li/>').text(claviculahour.actions.list[i].action).appendTo('ul.kos-actions');
  });
  $('<li/>').html('&nbsp;').appendTo('ul.kos-actions');
  $.each(hygromanteia.actions.list.sort(function (a, b) { return a.action.localeCompare( b.action ); }), function(i) {
    $('<li/>').text(hygromanteia.actions.list[i].action).appendTo('ul.hyg-actions');
  });
  $('<li/>').html('&nbsp;').appendTo('ul.hyg-actions');
  $.each(lunarday.actions.list.sort(function (a, b) { return a.action.localeCompare( b.action ); }), function(i) {
    $('<li/>').text(lunarday.actions.list[i].action).appendTo('ul.lud-actions');
  });
  $('<li/>').html('&nbsp;').appendTo('ul.lud-actions');
  $.each(lunarsign.actions.list.sort(function (a, b) { return a.action.localeCompare( b.action ); }), function(i) {
    $('<li/>').text(lunarsign.actions.list[i].action).appendTo('ul.mos-actions');
  });
  $('<li/>').html('&nbsp;').appendTo('ul.mos-actions');
  $.each(lunarmansion.actions.list.sort(function (a, b) { return a.action.localeCompare( b.action ); }), function(i) {
    $('<li/>').text(lunarmansion.actions.list[i].action).appendTo('ul.lum-actions');
  });
  if ( !$('.addtocalendar').length ) $('<button/>').attr('type', 'button').addClass('btn btn-default').append($('<span/>').addClass('addtocalendar addeventatc')).prependTo('#hourinfo .modal-footer');
  var desc = $('#p-info').html()+'\n\n'+$('#p-actions').html();
  $('.addtocalendar').empty().loadTemplate('#tpl-atc', {
    start       : new moment.unix(ts).format('YYYY-MM-DD HH:mm:ss'),
    end         : new moment.unix(tsend).format('YYYY-MM-DD HH:mm:ss'),
    timezone    : 'UTC',
    title       : 'Planetary Hour '+$('#p-hour').text(),
    description : toMarkdown(desc),
    location    : $('#lat').val()+', '+$('#lon').val(),
    organizer   : 'http://www.sublunar.space',
    email       : 'calendar@sublunar.space'
  });
  if (window.addtocalendar)if(typeof window.addtocalendar.start == "function")return;
  window.addtocalendar.load();
  $('#hourinfo').modal('show');
}

function addPlanetClasses(lng, planet) {
  var zodiac = getZodiac(lng);
  var zodiacClass = planet + '-zodiac-' + zodiac.sign;
  var decanClass = planet + '-decan-' + zodiac.decan;
  return zodiacClass + ' ' + decanClass;
}

function getActions(array, action, idstring = "") {
  var tags = [];
  var actions = [];
  var tagstring = "";
  var actionstring = "";
  if ( idstring != "" ) idstring += "-";
  if (array) {
    if (Array.isArray(array)) {
      for (var i = 0, len = array.length; i < len; i++) {
        if (action[array[i]].tags) tags.push(action[array[i]].tags);
        if (action[array[i]].action) actions.push(action[array[i]]);
      }
      if (tags) tagstring = $.unique(tags.join(" ").split(' ')).sort().join(" ");
      actionstring = array.sort().map(function(el) { return idstring + el; }).join(" ");
      actions.sort();
    }
    else if (action[array].tags) {
      tagstring = action[array].tags;
      actionstring = idstring + array;
      actions.push(action[array]);
    }
  }
  var obj = {
    tags : {
      string : tagstring,
      list : $.unique(tags.join(" ").split(' ')).sort()
    },
    actions : {
      string : actionstring,
      list   : actions
    }
  }
  return obj;
}

// from https://codepen.io/desandro/pen/MebyMR
function getComboFilter() {
  var combo = [];
  for ( var prop in filters ) {
    var group = filters[ prop ];
    if ( !group.length ) {
      // no filters in group, carry on
      continue;
    }
    // add first group
    if ( !combo.length ) {
      combo = group.slice(0);
      continue;
    }
    // add additional groups
    var nextCombo = [];
    // split group into combo: [ A, B ] & [ 1, 2 ] => [ A1, A2, B1, B2 ]
    for ( var i=0; i < combo.length; i++ ) {
      for ( var j=0; j < group.length; j++ ) {
        var item = combo[i] + group[j];
        nextCombo.push( item );
      }
    }
    combo = nextCombo;
  }
  var comboFilter = combo.join(', ');
  return comboFilter;
}
