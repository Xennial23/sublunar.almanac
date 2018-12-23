/**
* @preserve Copyright (c) 2018 T. F. Raaion, www.sublunar.space
* License MIT: http://www.opensource.org/licenses/MIT
*/

//Defines Calendar Objects and Methods
var module_decans_solar = {

  definitions: {
    name: "Solar Decade",
    group: {
      id: "decans",
      text: "Decans",
      info: "true"
    },
    actions: [
       [0],
       [
          {
             "id":28,
             "action":"Aries 1: Chontare / Senator",
             "tags":"chontare senator aries1"
          }
       ],
       [
          {
             "id":29,
             "action":"Aries 2: Chontachre / Senacher",
             "tags":"chontachre senacher aries2"
          }
       ],
       [
          {
             "id":30,
             "action":"Aries 3: Siket / Sentacher",
             "tags":"siket sentacher aries3"
          }
       ],
       [
          {
             "id":31,
             "action":"Taurus 1: Chôou / Suo",
             "tags":"choou suo taurus1"
          }
       ],
       [
          {
             "id":32,
             "action":"Taurus 2: Erô / Aryo",
             "tags":"ero aryo taurus2"
          }
       ],
       [
          {
             "id":33,
             "action":"Taurus 3: Hrombromare / Romanae",
             "tags":"hrombromare romanae taurus3"
          }
       ],
       [
          {
             "id":34,
             "action":"Gemini 1: Thosolk / Thesogar",
             "tags":"thosolk thesogar gemini1"
          }
       ],
       [
          {
             "id":35,
             "action":"Gemini 2: Ouare / Ver",
             "tags":"ouare ver gemini2"
          }
       ],
       [
          {
             "id":36,
             "action":"Gemini 3: Phouori / Tepis",
             "tags":"phouori tepis gemini3"
          }
       ],
       [
          {
             "id":1,
             "action":"Cancer 1: Sôthis / Sothis",
             "tags":"sothis sothis cancer1"
          }
       ],
       [
          {
             "id":2,
             "action":"Cancer 2: Sit / Sith",
             "tags":"sit sith cancer2"
          }
       ],
       [
          {
             "id":3,
             "action":"Cancer 3: Chnoumis / Thiumis",
             "tags":"chnoumis thiumis cancer3"
          }
       ],
       [
          {
             "id":4,
             "action":"Leo 1: Charchnoumis / Craumonis",
             "tags":"charchnoumis craumonis leo1"
          }
       ],
       [
          {
             "id":5,
             "action":"Leo 2: Êpê / Sic",
             "tags":"epe sic leo2"
          }
       ],
       [
          {
             "id":6,
             "action":"Leo 3: Phoupê / Futile",
             "tags":"phoupe futile leo3"
          }
       ],
       [
          {
             "id":7,
             "action":"Virgo 1: Tôm / Thumis",
             "tags":"tom thumis virgo1"
          }
       ],
       [
          {
             "id":8,
             "action":"Virgo 2: Ouestebkôt / Tophicus",
             "tags":"ouestebkot tophicus virgo2"
          }
       ],
       [
          {
             "id":9,
             "action":"Virgo 3: Aphoso / Afut",
             "tags":"aphoso afut virgo3"
          }
       ],
       [
          {
             "id":10,
             "action":"Libra 1: Souchôe / Seuichut",
             "tags":"souchoe seuichut libra1"
          }
       ],
       [
          {
             "id":11,
             "action":"Libra 2: Ptêchout / Sepisent",
             "tags":"ptechout sepisent libra2"
          }
       ],
       [
          {
             "id":12,
             "action":"Libra 3: Chontare / Senta",
             "tags":"chontare senta libra3"
          }
       ],
       [
          {
             "id":13,
             "action":"Scorpio 1: Stôchnêne / Sentacer",
             "tags":"stochnene sentacer scorpio1"
          }
       ],
       [
          {
             "id":14,
             "action":"Scorpio 2: Sesme / Tepsisen",
             "tags":"sesme tepsisen scorpio2"
          }
       ],
       [
          {
             "id":15,
             "action":"Scorpio 3: Sisieme / Sentineu",
             "tags":"sisieme sentineu scorpio3"
          }
       ],
       [
          {
             "id":16,
             "action":"Sagittarius 1: Hrêouô / Eregbuo",
             "tags":"hreouo eregbuo sagittarius1"
          }
       ],
       [
          {
             "id":17,
             "action":"Sagittarius 2: Sesme / Sagon",
             "tags":"sesme sagon sagittarius2"
          }
       ],
       [
          {
             "id":18,
             "action":"Sagittarius 3: Komme / Chenene",
             "tags":"komme chenene sagittarius3"
          }
       ],
       [
          {
             "id":19,
             "action":"Capricorn 1: Smat / Themeso",
             "tags":"smat themeso capricorn1"
          }
       ],
       [
          {
             "id":20,
             "action":"Capricorn 2: Srô / Epiemu",
             "tags":"sro epiemu capricorn2"
          }
       ],
       [
          {
             "id":21,
             "action":"Capricorn 3: Isrô / Omot",
             "tags":"isro omot capricorn3"
          }
       ],
       [
          {
             "id":22,
             "action":"Aquarius 1: Ptiau / Oro",
             "tags":"ptiau oro aquarius1"
          }
       ],
       [
          {
             "id":23,
             "action":"Aquarius 2: Aue / Cratero",
             "tags":"aue cratero aquarius2"
          }
       ],
       [
          {
             "id":24,
             "action":"Aquarius 3: Ptêbuou / Tepis",
             "tags":"ptebuou tepis aquarius3"
          }
       ],
       [
          {
             "id":25,
             "action":"Pisces 1: Biou / Acha",
             "tags":"biou acha pisces1"
          }
       ],
       [
          {
             "id":26,
             "action":"Pisces 2: Chontare / Tepibui",
             "tags":"chontare tepibui pisces2"
          }
       ],
       [
          {
             "id":27,
             "action":"Pisces 3: Ptibiou / Uiu",
             "tags":"ptibiou uiu pisces3"
          }
       ]
    ]
  },
  property: function(m) {
    return SL.Astro.Logy.getZodiac(m.ephemeris.sun.deg).decan;
  },
  calculate: function(definitions, property) {
    return definitions.actions[property];
  }
};

//Defines Calendar Objects and Methods
var module_decans_rising = {

  definitions: {
    name: "Rising Decan",
    group: {
      id: "decans",
      text: "Decans",
      info: "true"
    },
    actions: [
       [0],
       [
          {
             "id":28,
             "action":"Aries 1 rising: Chontare / Senator",
             "tags":"chontare senator aries1"
          }
       ],
       [
          {
             "id":29,
             "action":"Aries 2 rising: Chontachre / Senacher",
             "tags":"chontachre senacher aries2"
          }
       ],
       [
          {
             "id":30,
             "action":"Aries 3 rising: Siket / Sentacher",
             "tags":"siket sentacher aries3"
          }
       ],
       [
          {
             "id":31,
             "action":"Taurus 1 rising: Chôou / Suo",
             "tags":"choou suo taurus1"
          }
       ],
       [
          {
             "id":32,
             "action":"Taurus 2 rising: Erô / Aryo",
             "tags":"ero aryo taurus2"
          }
       ],
       [
          {
             "id":33,
             "action":"Taurus 3 rising: Hrombromare / Romanae",
             "tags":"hrombromare romanae taurus3"
          }
       ],
       [
          {
             "id":34,
             "action":"Gemini 1 rising: Thosolk / Thesogar",
             "tags":"thosolk thesogar gemini1"
          }
       ],
       [
          {
             "id":35,
             "action":"Gemini 2 rising: Ouare / Ver",
             "tags":"ouare ver gemini2"
          }
       ],
       [
          {
             "id":36,
             "action":"Gemini 3 rising: Phouori / Tepis",
             "tags":"phouori tepis gemini3"
          }
       ],
       [
          {
             "id":1,
             "action":"Cancer 1 rising: Sôthis / Sothis",
             "tags":"sothis sothis cancer1"
          }
       ],
       [
          {
             "id":2,
             "action":"Cancer 2 rising: Sit / Sith",
             "tags":"sit sith cancer2"
          }
       ],
       [
          {
             "id":3,
             "action":"Cancer 3 rising: Chnoumis / Thiumis",
             "tags":"chnoumis thiumis cancer3"
          }
       ],
       [
          {
             "id":4,
             "action":"Leo 1 rising: Charchnoumis / Craumonis",
             "tags":"charchnoumis craumonis leo1"
          }
       ],
       [
          {
             "id":5,
             "action":"Leo 2 rising: Êpê / Sic",
             "tags":"epe sic leo2"
          }
       ],
       [
          {
             "id":6,
             "action":"Leo 3 rising: Phoupê / Futile",
             "tags":"phoupe futile leo3"
          }
       ],
       [
          {
             "id":7,
             "action":"Virgo 1 rising: Tôm / Thumis",
             "tags":"tom thumis virgo1"
          }
       ],
       [
          {
             "id":8,
             "action":"Virgo 2 rising: Ouestebkôt / Tophicus",
             "tags":"ouestebkot tophicus virgo2"
          }
       ],
       [
          {
             "id":9,
             "action":"Virgo 3 rising: Aphoso / Afut",
             "tags":"aphoso afut virgo3"
          }
       ],
       [
          {
             "id":10,
             "action":"Libra 1 rising: Souchôe / Seuichut",
             "tags":"souchoe seuichut libra1"
          }
       ],
       [
          {
             "id":11,
             "action":"Libra 2 rising: Ptêchout / Sepisent",
             "tags":"ptechout sepisent libra2"
          }
       ],
       [
          {
             "id":12,
             "action":"Libra 3 rising: Chontare / Senta",
             "tags":"chontare senta libra3"
          }
       ],
       [
          {
             "id":13,
             "action":"Scorpio 1 rising: Stôchnêne / Sentacer",
             "tags":"stochnene sentacer scorpio1"
          }
       ],
       [
          {
             "id":14,
             "action":"Scorpio 2 rising: Sesme / Tepsisen",
             "tags":"sesme tepsisen scorpio2"
          }
       ],
       [
          {
             "id":15,
             "action":"Scorpio 3 rising: Sisieme / Sentineu",
             "tags":"sisieme sentineu scorpio3"
          }
       ],
       [
          {
             "id":16,
             "action":"Sagittarius 1 rising: Hrêouô / Eregbuo",
             "tags":"hreouo eregbuo sagittarius1"
          }
       ],
       [
          {
             "id":17,
             "action":"Sagittarius 2 rising: Sesme / Sagon",
             "tags":"sesme sagon sagittarius2"
          }
       ],
       [
          {
             "id":18,
             "action":"Sagittarius 3 rising: Komme / Chenene",
             "tags":"komme chenene sagittarius3"
          }
       ],
       [
          {
             "id":19,
             "action":"Capricorn 1 rising: Smat / Themeso",
             "tags":"smat themeso capricorn1"
          }
       ],
       [
          {
             "id":20,
             "action":"Capricorn 2 rising: Srô / Epiemu",
             "tags":"sro epiemu capricorn2"
          }
       ],
       [
          {
             "id":21,
             "action":"Capricorn 3 rising: Isrô / Omot",
             "tags":"isro omot capricorn3"
          }
       ],
       [
          {
             "id":22,
             "action":"Aquarius 1 rising: Ptiau / Oro",
             "tags":"ptiau oro aquarius1"
          }
       ],
       [
          {
             "id":23,
             "action":"Aquarius 2 rising: Aue / Cratero",
             "tags":"aue cratero aquarius2"
          }
       ],
       [
          {
             "id":24,
             "action":"Aquarius 3 rising: Ptêbuou / Tepis",
             "tags":"ptebuou tepis aquarius3"
          }
       ],
       [
          {
             "id":25,
             "action":"Pisces 1 rising: Biou / Acha",
             "tags":"biou acha pisces1"
          }
       ],
       [
          {
             "id":26,
             "action":"Pisces 2 rising: Chontare / Tepibui",
             "tags":"chontare tepibui pisces2"
          }
       ],
       [
          {
             "id":27,
             "action":"Pisces 3 rising: Ptibiou / Uiu",
             "tags":"ptibiou uiu pisces3"
          }
       ]
    ]
  },
  property: function(m) {
    return SL.Astro.Logy.getZodiac(m.ephemeris.asc.deg).decan;
  },
  calculate: function(definitions, property) {
    return definitions.actions[property];
  }
};
