function findNewMoon( ts ) {
  var today = new moment.unix(ts);
  var year = parseFloat(today.format('YYYY'));
  var ydays = 365;
  var spd = 86400;
  if (today.isLeapYear() ) ydays++;
  var decimal = parseFloat(today.format('DDD')) / ydays * spd;
  var secs = parseFloat(today.format('H')) * 3600 + parseFloat(today.format('m')) * 60 + parseFloat(today.format('s'));
  decimal = (decimal + secs) / spd;
  var Y = year + decimal;
  // k is an integer for new moon incremented by 0.25 for first quarter 0.5 for new etc.
  var k=Math.floor((parseFloat(today.format('YYYY'))+((parseFloat(today.format('M'))-1)+parseFloat(today.format('D'))/30)/12-2000)*12.3685);
  // Time in Julian centuries since 2000.0
  var T=k/1236.85;
  // Sun's mean anomaly
  var M=rev(2.5534+29.10535669*k-0.0000218*T*T);
  // Moon's mean anomaly (M' in Meeus)
  var MP=rev(201.5643+385.81693528*k+0.0107438*T*T+0.00001239*T*T*T-0.00000011*T*T*T);
  var E=1-0.002516*T-0.0000074*T*T;
  // Moons argument of latitude
  var F=rev(160.7108+390.67050274*k-0.0016341*T*T-0.00000227*T*T*T+0.000000011*T*T*T*T);
  // Longitude of ascending node of lunar orbit
  var Omega=rev(124.7746-1.56375580*k+0.0020691*T*T+0.00000215*T*T*T);
  // The full planetary arguments include 14 terms, only used the 7 most significant
  var B = new Array();
  B[1]=rev(299.77+ 0.107408*k-0.009173*T*T);
  B[2]=rev(251.88+ 0.016321*k);
  B[3]=rev(251.83+26.651886*k);
  B[4]=rev(349.42+36.412478*k);
  B[5]=rev( 84.88+18.206239*k);
  B[6]=rev(141.74+53.303771*k);
  B[7]=rev(207.14+ 2.453732*k);

  // New moon
  var JDE0=2451550.09765+29.530588853*k+0.0001337*T*T-0.000000150*T*T*T+0.00000000073*T*T*T*T;
  // Correct for TDT since 1 July 2015
  JDE0=JDE0-58.184/(24*60*60);
  var JDE=JDE0 -0.40720*sind(MP)      +0.17241*E*sind(M)      +0.01608*sind(2*MP)    +0.01039*sind(2*F)
               +0.00739*E*sind(MP-M)  -0.00514*E*sind(MP+M)   +0.00208*E*E*sind(2*M) -0.00111*sind(MP-2*F)
               -0.00057*sind(MP+2*F)  +0.00056*E*sind(2*MP+M) -0.00042*sind(3*MP)    +0.00042*E*sind(M+2*F)
               +0.00038*E*sind(M-2*F) -0.00024*E*sind(2*MP-M) -0.00017*sind(Omega)   -0.00007*sind(MP+2*M);

  var F=0.000325*sind(B[1])+0.000165*sind(B[2])+0.000164*sind(B[3])+0.000126*sind(B[4])
                 +0.000110*sind(B[5])+0.000062*sind(B[6])+0.000060*sind(B[7]);
  var newmoon = new moment(A.JulianDay.jdToDate(JDE + F)).subtract(2, 'h').unix();
  if ( ts < newmoon ) newmoon = findNewMoon( new moment.unix(ts).subtract(1, 'h').unix());
  return newmoon;
} //End calcMoonPhase

function getZodiac(deg, sidereal = false) {
  if ( sidereal == true ) {
    deg += 27.74;
    if ( deg > 360 ) deg =- 360;
  }
  var obj = {
    sign: Math.ceil(deg / 30),
    decan: Math.ceil(deg / 10)
  }
  return obj;
}

function getLunarMansion(deg, sidereal = false) {
  // global variable def needs to be declared before using this function
  if (!sidereal) var mansion = def.moon.mansion.tropical;
  else var mansion = def.moon.mansion.constellational;
  var i = 1;
  var m;
  while ( deg > zodToDeg(mansion[i]) ) i++;
  return i;
}

function sunRiseSet(ts, coord) {
  // calculate sunrise and sunset
  var today = new moment.unix(ts).startOf('d');
  var tomorrow = new moment.unix(ts).startOf('d').add(1, 'd');
  //var todaySolarSecs = A.Solar.times(new A.JulianDay(today.toDate()), coord);
  //var tomorrowSolarSecs = A.Solar.times(new A.JulianDay(tomorrow.toDate()), coord);

  // fixed MeeusJS bug with working Peter Hayes code
  var todayHayes = SunRiseSet(parseFloat(today.format('YYYY')),parseFloat(today.format('M')),parseFloat(today.format('D')),parseFloat($('#lat').val()),parseFloat($('#lon').val()));
  var tomorrowHayes = SunRiseSet(parseFloat(tomorrow.format('YYYY')),parseFloat(tomorrow.format('M')),parseFloat(tomorrow.format('D')),parseFloat($('#lat').val()),parseFloat($('#lon').val()));
  var todaySolarSecs = {};
  var tomorrowSolarSecs = {};
  todaySolarSecs.rise = todayHayes[0] * 3600;
  todaySolarSecs.set = todayHayes[1] * 3600;
  tomorrowSolarSecs.rise = tomorrowHayes[0] * 3600;
  tomorrowSolarSecs.set = tomorrowHayes[1] * 3600;
  // end bugfix

  var todayPlanetDayStart = new moment.unix(ts).startOf('day').unix() + todaySolarSecs.rise;
  var todayPlanetNightStart = new moment.unix(ts).startOf('day').unix() + todaySolarSecs.set;
  var tomorrowPlanetDayStart = new moment.unix(ts).add(1, 'd').startOf('day').unix() + tomorrowSolarSecs.rise;
  var tomorrowPlanetNightStart = new moment.unix(ts).add(1, 'd').startOf('day').unix() + tomorrowSolarSecs.set;

  var planetaryDayHourSecs = (todayPlanetNightStart - todayPlanetDayStart) / 12;
  var planetaryNightHourSecs = (tomorrowPlanetDayStart - todayPlanetNightStart) / 12;

  var sol = {
    day : {
      start : Math.floor(todayPlanetDayStart),
      hourSecs : Math.round(planetaryDayHourSecs),
      end : Math.floor(todayPlanetNightStart - 1)
    },
    night : {
      start: Math.floor(todayPlanetNightStart),
      hourSecs : Math.round(planetaryNightHourSecs),
      end : Math.floor(tomorrowPlanetDayStart - 1)
    }
  }
  return sol;
}

function planetaryMoment(lat, lon, ts) {

  var sidereal = false;
  var coord = A.EclCoord.fromWgs84(lat, lon, 0);
  var today = new moment.unix(ts);
  var tomorrow = new moment.unix(ts).add(1, 'd');
  var yesterday = new moment.unix(ts).subtract(1, 'd');
  var date = today.toDate();
  var jdo = new A.JulianDay(date);
  var suneq = A.Solar.apparentEquatorial(jdo);
  var mooneq = A.Moon.apparentEquatorial(jdo);
  var suntp = A.Solar.topocentricPosition(jdo, coord, true);
	var moontp = A.Moon.topocentricPosition(jdo, coord, true);
  var obliquity = A.Nutation.trueObliquity(jdo) * 180 / Math.PI;

  // get sun rise and set times
  var sol = sunRiseSet(ts, coord);
  var ps = sol;

 // calculate planetary hour of ts and when it starts and ends
  var phour = 0;
  var phstart;
  var phend;

  if ( ts >= ps.day.start && ts < ps.night.start ) {
    phour = (ts - ps.day.start) / ps.day.hourSecs;
    phstart = ps.day.start + phour * ps.day.hourSecs;
    phend = phstart + ps.day.hourSecs - 1;
  }
  else {
    if ( ts < ps.day.start ) {
      ps = sunRiseSet(yesterday.unix(), coord);
    }
    phour = (ts - ps.night.start) / ps.night.hourSecs + 12;
    phstart = ps.night.start + (phour - 12) * ps.night.hourSecs;
    phend = phstart + ps.night.hourSecs - 1;
  }

  // calculate planetary day of ts
  var pday = parseFloat(new moment.unix(ps.day.start).format('d'));

  // planet longitudes
  var pldate = {
    year:    parseFloat(today.format('YYYY')),
    month:   parseFloat(today.format('M')),
    day:     parseFloat(today.format('D')),
    hours:   parseFloat(today.format('H')),
    minutes: parseFloat(today.format('m')),
    seconds: 0};
  $const.tlong = lon // longitude
  $const.tlat = lat // latitude
  $processor.init ();
  var mars = $moshier.body.mars;
  var mercury = $moshier.body.mercury;
  var jupiter = $moshier.body.jupiter;
  var venus = $moshier.body.venus;
  var saturn = $moshier.body.saturn;
  $processor.calc (pldate, mars);
  $processor.calc (pldate, mercury);
  $processor.calc (pldate, jupiter);
  $processor.calc (pldate, venus);
  $processor.calc (pldate, saturn);

  // calculate lunar day
  var lastNewMoon = findNewMoon(ts);
  var nextNewMoon = findNewMoon(new moment.unix(lastNewMoon).add(31, 'd').unix());
  var startDate = new moment.unix(lastNewMoon).startOf('d');
  var endDate = new moment.unix(nextNewMoon).startOf('d');
  var cal = [];
  cal[0] = lastNewMoon;
  var daycount = 0;
  var rise = lastNewMoon + 1;
  while ( rise < nextNewMoon && rise < ts ) {
    var day = new moment(startDate.toDate()).add(daycount, 'd');
    var jdr = new A.JulianDay(day.toDate());
    var moontimes = A.Moon.times(jdr, coord);
    var hrs = MoonRise(parseFloat(day.format('YYYY')),parseFloat(day.format('M')),parseFloat(day.format('D')),0,parseFloat(lat),parseFloat(lon));
    if ( hrs[0] > 0 ) {
      var mt = hrs[0] * 60 * 60;
      var rise = day.add(mt, 's').unix();
      if ( rise > lastNewMoon && rise < nextNewMoon ) {
        cal.push(rise);
      }
    }
    daycount++;
  }
  var lday = 0;
  cal.forEach(function(lts, i, o) {
    if ( ts >= lts ) {
      lday = i;
    }
  });
  var luna = {
    day: lday + 1,
    start: cal[lday]
  }

  var suncoords = eqToEclDeg(suneq, obliquity);
  var sunlng = suncoords.lng;

  var mooncoords = eqToEclDeg(mooneq.eq, obliquity);
  var moonlng = mooncoords.lng;

  // calculate lunar phase
  var i = A.MoonIllum.phaseAngleEq2(moontp.eq, suntp.eq);
	var k = A.MoonIllum.illuminated(i);
  var chi =  A.MoonIllum.positionAngle(moontp.eq, suntp.eq);
  var angle = i * 180 / Math.PI;
  if ( chi < 0 ) angle = 360 - angle;
  var sphase;
  if      ( angle <  10 ) sphase = 5;
  else if ( angle <  80 ) sphase = 6;
  else if ( angle <  95 ) sphase = 7;
  else if ( angle < 170 ) sphase = 8;
  else if ( angle < 190 ) sphase = 1;
  else if ( angle < 260 ) sphase = 2;
  else if ( angle < 280 ) sphase = 3;
  else if ( angle < 350 ) sphase = 4;
  else                    sphase = 5;

  var phase = {
    simple: sphase,
    phase: angle,
    angle: chi,
    illumination : Math.round(k * 100)
  }

  var obj = {
    ts: ts,
    planetary : {
      hour  : {
        number: Math.round(phour),
        begin : phstart,
        end   : phend
      },
      day   : pday
    },
    solar : {
      day     : sol,
      lng     : Math.round(sunlng * 100) / 100
    },
    lunar : {
      day     : luna,
      lng     : Math.round(moonlng * 100) / 100,
      phase   : phase,
      lastnew : lastNewMoon
    },
    planet : {
      mars : {
        lng : Math.round(mars.position.apparentLongitude * 100) / 100
      },
      mercury : {
        lng : Math.round(mercury.position.apparentLongitude * 100) / 100
      },
      jupiter : {
        lng : Math.round(jupiter.position.apparentLongitude * 100) / 100
      },
      venus : {
        lng : Math.round(venus.position.apparentLongitude * 100) / 100
      },
      saturn : {
        lng : Math.round(saturn.position.apparentLongitude * 100) / 100
      }
    }
  }
  return obj;
}
