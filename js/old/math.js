function round2( x ) { return ( Math.round( 100*x )/100.0 );}
function normalize( v ) { v = v - Math.floor( v  ); if( v < 0 ) v = v + 1; return v;}

function radToDeg(ra, neg = true) {
  var deg = ra * 180 / Math.PI;
  if( deg < 0 ) deg = deg + 360;
  return deg;
}

function eqToEclDeg(eqobj, epsilon) {
  // https://en.wikipedia.org/wiki/Celestial_coordinate_system#Equatorial_.E2.86.94_ecliptic
  // not sure why longitude is 90° off, so i fixed it, but it works :)
  var delta = eqobj.dec * 180 / Math.PI;
  var alpha = eqobj.ra * 180 / Math.PI;
  var x = sind(alpha) * cosd(epsilon) + tand(delta) * sind(epsilon);
  var y = cosd(alpha);
  var z = sind(delta) * cosd(epsilon) - cosd(delta) * sind(epsilon) * sind(alpha);
  var obj = {
    lng : 90 - atan2d(y, x),
    lat : asind(z)
  }
  return obj;
}

function zodToDeg(zcoord) {
  var zdef = def.zodiac; // global variable needs to be declared before using this function
  var z = zcoord.split(" ");
  var m = 0;
  for (var i = 0, len = 13; i < len; i++) {
    if (zdef.name[i] == z[1] || zdef.symbol[i] == z[1] ) m = i-1;
  }
  return parseFloat(z[0]) + m * 30 + parseFloat(z[2]) / 60;
}

function getDistance(lat1,lon1,lat2,lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = (lat2-lat1) * (Math.PI/180);  // deg2rad below
  var dLon = (lon2-lon1) * (Math.PI/180);
  var a =
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos( lat1 * (Math.PI/180) ) * Math.cos(lat2 * (Math.PI/180) ) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ;
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  var d = R * c; // Distance in km
  return d;
}
