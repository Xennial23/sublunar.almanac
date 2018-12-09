function getFilter(m) {
  var a = [];
  for (var d = 1, dlen = m.length; d < dlen; d++) {
    var md = m[d];
    for (var h = 0, hlen = md.length; h < hlen; h++) {
      a.push(md[h]);
    }
  }
  a = $.unique(a);
  var actions = getActions(a, action);
  var obj = {
    tags : actions.tags.list,
    actions: $.unique(actions.actions.list.sort(function (a, b) { return a.action.localeCompare( b.action ); }))
  }
  return obj;
}

function getLunardayFilter() {
  return getFilter(matrix.lunar.day);
}

function getLunarmansionFilter() {
  return getFilter(matrix.lunar.mansion);
}

function getClaviculaFilter() {
  return getFilter(matrix.clavicula);
}

function getPlanetaryFilter() {
  var m = matrix.planetary;
  var a = [];
  for (var d = 0, dlen = m.day.length; d < dlen; d++) {
    for (var h = 0, hlen = m.day[d].hour.length; h < hlen; h++) {
      a.push(m.day[d].hour[h].for);
    }
  }
  a = $.unique(a);
  var actions = getActions(a, action);
  var tags = $.unique(actions.tags.list).sort();
  var acts = $.unique(actions.actions.list).sort(function (a, b) { return a.action.localeCompare( b.action ); });
  var obj = {
    tags : tags,
    actions: acts
  }
  return obj;
}

function getLunarsignFilter() {
  var m = matrix.lunar.sign;
  var a = [];
  for (var d = 1, dlen = m.length; d < dlen; d++) {
    for (var h = 0, hlen = m[d].for.length; h < hlen; h++) {
      a.push(m[d].for[h]);
    }
  }
  a = $.unique(a);
  var actions = getActions(a, action);
  var obj = {
    tags : actions.tags.list,
    actions: $.unique(actions.actions.list.sort(function (a, b) { return a.action.localeCompare( b.action ); }))
  }
  return obj;
}

var planetaryActions = {
  "day" : [
    {
      "hour" : [
        {
         "angel": "Mikhaēl",
         "demon": "Autodyo",
         "planet": 1,
         "for": 8,
         "manuscript": 1
        },
        {
         "angel": "Arphanai",
         "demon": "Ornai",
         "planet": 6,
         "for": 11,
         "manuscript": 1
        },
        {
         "angel": "Pelouēl",
         "demon": "Pērathoui",
         "planet": 4,
         "for": 106,
         "manuscript": 1
        },
        {
         "angel": "Ēththaēl",
         "demon": "Silidō",
         "planet": 2,
         "for": 19,
         "manuscript": 1
        },
        {
         "angel": "Piel",
         "demon": "Siteos",
         "planet": 7,
         "for": 123,
         "manuscript": 1
        },
        {
         "angel": "Iōouph",
         "demon": "Zadiphōr",
         "planet": 5,
         "for": 49,
         "manuscript": 1
        },
        {
         "angel": "Pelouēl",
         "demon": "Manēr",
         "planet": 3,
         "for": 74,
         "manuscript": 1
        },
        {
         "angel": "Ioran",
         "demon": "Osmie",
         "planet": 1,
         "for": 61,
         "manuscript": 1
        },
        {
         "angel": "Katiēl",
         "demon": "Piēz",
         "planet": 6,
         "for": 106,
         "manuscript": 1
        },
        {
         "angel": "Bidouēl",
         "demon": "Tarat",
         "planet": 4,
         "for": 119,
         "manuscript": 1
        },
        {
         "angel": "Idoēl",
         "demon": "Nistik",
         "planet": 2,
         "for": 116,
         "manuscript": 1
        },
        {
         "angel": "Sanaēl",
         "demon": "Piliour",
         "planet": 7,
         "for": 6,
         "manuscript": 1
        },
        {
         "angel": "Opseēl",
         "demon": "Isstos",
         "planet": 5,
         "for": 54,
         "manuscript": 2
        },
        {
         "angel": "Saraēl",
         "demon": "Opios",
         "planet": 3,
         "for": 89,
         "manuscript": 2
        },
        {
         "angel": "Lisiel",
         "demon": "Nikōn",
         "planet": 1,
         "for": 107,
         "manuscript": 2
        },
        {
         "angel": "Naououēl",
         "demon": "Nintiaph",
         "planet": 6,
         "for": 108,
         "manuscript": 2
        },
        {
         "angel": "Ormiel",
         "demon": "Orax",
         "planet": 4,
         "for": 35,
         "manuscript": 2
        },
        {
         "angel": "Pelēl",
         "demon": "Asēns",
         "planet": 2,
         "for": 128,
         "manuscript": 2
        },
        {
         "angel": "Iaēl",
         "demon": "Synopigos",
         "planet": 7,
         "for": 117,
         "manuscript": 2
        },
        {
         "angel": "Ēthiēl",
         "demon": "Araps",
         "planet": 5,
         "for": 67,
         "manuscript": 2
        },
        {
         "angel": "Thamniēl",
         "demon": "Tartaroēl",
         "planet": 3,
         "for": 98,
         "manuscript": 2
        },
        {
         "angel": "Bradaēl",
         "demon": "Mekhmeth",
         "planet": 1,
         "for": 2,
         "manuscript": 2
        },
        {
         "angel": "Alēnos",
         "demon": "Methridan",
         "planet": 6,
         "for": 3,
         "manuscript": 2
        },
        {
         "angel": "Iōn",
         "demon": "Phrodrinos",
         "planet": 4,
         "for": 94,
         "manuscript": 2
        }
      ]
    },
    {
      "hour" : [
        {
         "angel": "Gabriel",
         "demon": "Mamounas",
         "planet": 2,
         "for": 66,
         "manuscript": 2
        },
        {
         "angel": "Phasaphaeēl",
         "demon": "Skolion",
         "planet": 7,
         "for": 112,
         "manuscript": 1
        },
        {
         "angel": "Pinoel",
         "demon": "Thetodoph",
         "planet": 5,
         "for": 83,
         "manuscript": 1
        },
        {
         "angel": "Kopiel",
         "demon": "Arban",
         "planet": 3,
         "for": 91,
         "manuscript": 1
        },
        {
         "angel": "Keleēl",
         "demon": "Azan",
         "planet": 1,
         "for": 12,
         "manuscript": 1
        },
        {
         "angel": "Kariēl",
         "demon": "Memakhth",
         "planet": 6,
         "for": 59,
         "manuscript": 1
        },
        {
         "angel": "Mnēdiēl",
         "demon": "Skamidinos",
         "planet": 4,
         "for": 46,
         "manuscript": 1
        },
        {
         "angel": "Ezeēl",
         "demon": "Gerphan",
         "planet": 2,
         "for": 129,
         "manuscript": 1
        },
        {
         "angel": "Iōēl",
         "demon": "Giram",
         "planet": 7,
         "for": 35,
         "manuscript": 1
        },
        {
         "angel": "Sinaēl",
         "demon": "Mektimanas",
         "planet": 5,
         "for": 110,
         "manuscript": 1
        },
        {
         "angel": "Skenaēl",
         "demon": "Mexiphōn",
         "planet": 3,
         "for": 90,
         "manuscript": 2
        },
        {
         "angel": "Rhokhaēl",
         "demon": "Outolokh",
         "planet": 1,
         "for": 110,
         "manuscript": 2
        },
        {
         "angel": "Pseēl",
         "demon": "Nyktidōn",
         "planet": 6,
         "for": 94,
         "manuscript": 1
        },
        {
         "angel": "Tipidōēl",
         "demon": "Ouistos",
         "planet": 4,
         "for": 92,
         "manuscript": 1
        },
        {
         "angel": "Akētoēl",
         "demon": "Kasiereph",
         "planet": 2,
         "for": 78,
         "manuscript": 1
        },
        {
         "angel": "Oorgaēl",
         "demon": "Kysiepotos",
         "planet": 7,
         "for": 34,
         "manuscript": 1
        },
        {
         "angel": "Rhomatiēl",
         "demon": "Apophaēl",
         "planet": 5,
         "for": 55,
         "manuscript": 1
        },
        {
         "angel": "Serpidōn",
         "demon": "Niokhel",
         "planet": 3,
         "for": 35,
         "manuscript": 1
        },
        {
         "angel": "Ētiton",
         "demon": "Ētouros",
         "planet": 1,
         "for": 114,
         "manuscript": 1
        },
        {
         "angel": "Metabiēl",
         "demon": "Siriton",
         "planet": 6,
         "for": 34,
         "manuscript": 1
        },
        {
         "angel": "Kabaēl",
         "demon": "Phrinaphe",
         "planet": 4,
         "for": 79,
         "manuscript": 1
        },
        {
         "angel": "Ēkoniēl",
         "demon": "Kanops",
         "planet": 2,
         "for": 9,
         "manuscript": 1
        },
        {
         "angel": "Genēkiēl",
         "demon": "Euknitiēl",
         "planet": 7,
         "for": 34,
         "manuscript": 1
        },
        {
         "angel": "Kronitiēl",
         "demon": "Arkidōd",
         "planet": 5,
         "for": 82,
         "manuscript": 1
        }
      ]
    },
    {
      "hour" : [
        {
         "angel": "Samouēl",
         "demon": "Lithidos",
         "planet": 3,
         "for": 125,
         "manuscript": 1
        },
        {
         "angel": "Kasaēl",
         "demon": "Kanistōn",
         "planet": 1,
         "for": 118,
         "manuscript": 1
        },
        {
         "angel": "Phirpheēl",
         "demon": "Maithoth",
         "planet": 6,
         "for": 32,
         "manuscript": 1
        },
        {
         "angel": "Ediēl",
         "demon": "Sarpidie",
         "planet": 4,
         "for": 45,
         "manuscript": 3
        },
        {
         "angel": "Tektonoēl",
         "demon": "Kernoudēs",
         "planet": 2,
         "for": 64,
         "manuscript": 3
        },
        {
         "angel": "Akaēl",
         "demon": "Kerinoude",
         "planet": 7,
         "for": 7,
         "manuscript": 3
        },
        {
         "angel": "Gnathaēl",
         "demon": "Kyienotēs",
         "planet": 5,
         "for": 44,
         "manuscript": 3
        },
        {
         "angel": "Perganaēl",
         "demon": "Pyrotorō",
         "planet": 3,
         "for": 5,
         "manuscript": 3
        },
        {
         "angel": "Gesteēl",
         "demon": "Ptēlaton",
         "planet": 1,
         "for": 36,
         "manuscript": 3
        },
        {
         "angel": "Germiēlēl",
         "demon": "Sithlos",
         "planet": 6,
         "for": 33,
         "manuscript": 3
        },
        {
         "angel": "Nakhoēl",
         "demon": "Orthrdile",
         "planet": 4,
         "for": 71,
         "manuscript": 3
        },
        {
         "angel": "Oēnaēl",
         "demon": "Homitoton",
         "planet": 2,
         "for": 115,
         "manuscript": 3
        },
        {
         "angel": "Gorgiēl",
         "demon": "Aprixon",
         "planet": 7,
         "for": 6,
         "manuscript": 3
        },
        {
         "angel": "Patiēl",
         "demon": "Skonin",
         "planet": 5,
         "for": 17,
         "manuscript": 1
        },
        {
         "angel": "Pertan",
         "demon": "Prophi",
         "planet": 3,
         "for": 4,
         "manuscript": 1
        },
        {
         "angel": "Salpiel",
         "demon": "Akhlitōn",
         "planet": 1,
         "for": 123,
         "manuscript": 1
        },
        {
         "angel": "Abaēl",
         "demon": "Orian",
         "planet": 6,
         "for": 100,
         "manuscript": 1
        },
        {
         "angel": "Stratiēl",
         "demon": "Lemōth",
         "planet": 4,
         "for": 62,
         "manuscript": 1
        },
        {
         "angel": "Opadouēl",
         "demon": "Todidedos",
         "planet": 2,
         "for": 126,
         "manuscript": 1
        },
        {
         "angel": "Karniēl",
         "demon": "Tephraēl",
         "planet": 7,
         "for": 76,
         "manuscript": 1
        },
        {
         "angel": "Methaēl",
         "demon": "Iaran",
         "planet": 5,
         "for": 62,
         "manuscript": 1
        },
        {
         "angel": "Steroēl",
         "demon": "Rhakidōn",
         "planet": 3,
         "for": 88,
         "manuscript": 1
        },
        {
         "angel": "Esmouēl",
         "demon": "Ērgatige",
         "planet": 1,
         "for": 1,
         "manuscript": 1
        },
        {
         "angel": "Rhoutziēl",
         "demon": "Gisaor",
         "planet": 6,
         "for": 38,
         "manuscript": 1
        }
      ]
    },
    {
      "hour" : [
        {
         "angel": "Ourouēl",
         "demon": "Loutzipher",
         "planet": 4,
         "for": 60,
         "manuscript": 1
        },
        {
         "angel": "Arakiēl",
         "demon": "Goukoumon",
         "planet": 2,
         "for": 95,
         "manuscript": 1
        },
        {
         "angel": "Miephiēl",
         "demon": "Eistierix",
         "planet": 7,
         "for": 35,
         "manuscript": 1
        },
        {
         "angel": "Trosiēl",
         "demon": "Mēdikit",
         "planet": 5,
         "for": 87,
         "manuscript": 1
        },
        {
         "angel": "Khertosiēl",
         "demon": "Gtataphid",
         "planet": 3,
         "for": 99,
         "manuscript": 1
        },
        {
         "angel": "Sphitzioēl",
         "demon": "Skitogiri",
         "planet": 1,
         "for": 28,
         "manuscript": 1
        },
        {
         "angel": "Oulodias",
         "demon": "Phniditas",
         "planet": 6,
         "for": 37,
         "manuscript": 1
        },
        {
         "angel": "Kalphael",
         "demon": "Karatan",
         "planet": 4,
         "for": 120,
         "manuscript": 1
        },
        {
         "angel": "Skytokyēl",
         "demon": "Miag",
         "planet": 2,
         "for": 27,
         "manuscript": 1
        },
        {
         "angel": "Tiroēl",
         "demon": "Gitzar",
         "planet": 7,
         "for": 6,
         "manuscript": 1
        },
        {
         "angel": "Miel",
         "demon": "Pnidōr",
         "planet": 5,
         "for": 13,
         "manuscript": 1
        },
        {
         "angel": "Kharakiēl",
         "demon": "Tablas",
         "planet": 3,
         "for": 35,
         "manuscript": 1
        },
        {
         "angel": "Driēl",
         "demon": "Taxpon",
         "planet": 1,
         "for": 10,
         "manuscript": 1
        },
        {
         "angel": "Sidriēl",
         "demon": "Ophetēs",
         "planet": 6,
         "for": 11,
         "manuscript": 1
        },
        {
         "angel": "Laerpiēl",
         "demon": "Abrikhos",
         "planet": 4,
         "for": 69,
         "manuscript": 1
        },
        {
         "angel": "Maroēl",
         "demon": "Blekyn",
         "planet": 2,
         "for": 18,
         "manuscript": 1
        },
        {
         "angel": "Kortaēl",
         "demon": "Blemēn",
         "planet": 7,
         "for": 123,
         "manuscript": 1
        },
        {
         "angel": "Kapeēl",
         "demon": "Khirōt",
         "planet": 5,
         "for": 49,
         "manuscript": 1
        },
        {
         "angel": "Pēraniēl",
         "demon": "Ephipas",
         "planet": 3,
         "for": 41,
         "manuscript": 1
        },
        {
         "angel": "Satanaēl",
         "demon": "Akaēl",
         "planet": 1,
         "for": 40,
         "manuscript": 1
        },
        {
         "angel": "Katzaēl",
         "demon": "Loginar",
         "planet": 6,
         "for": 106,
         "manuscript": 1
        },
        {
         "angel": "Louliēl",
         "demon": "Pharai",
         "planet": 4,
         "for": 119,
         "manuscript": 1
        },
        {
         "angel": "Saltaēl",
         "demon": "Rhoustat",
         "planet": 2,
         "for": 56,
         "manuscript": 1
        },
        {
         "angel": "Gabtel",
         "demon": "Opnax",
         "planet": 7,
         "for": 123,
         "manuscript": 1
        }
      ]
    },
    {
      "hour" : [
        {
          "angel": "Rhaphaēl",
          "demon": "Melpiphron",
          "planet": 5,
          "for": 53,
          "manuscript": 1
        },
        {
          "angel": "Periphrel",
          "demon": "Okhlor",
          "planet": 3,
          "for": 123,
          "manuscript": 1
        },
        {
          "angel": "Isphraēl",
          "demon": "Oniros",
          "planet": 1,
          "for": 2,
          "manuscript": 1
        },
        {
          "angel": "Kaliēl",
          "demon": "Thaphōt",
          "planet": 6,
          "for": 3,
          "manuscript": 1
        },
        {
          "angel": "Glōssas",
          "demon": "Tzippat",
          "planet": 4,
          "for": 121,
          "manuscript": 1
        },
        {
          "angel": "Imeēl",
          "demon": "Amir",
          "planet": 2,
          "for": 93,
          "manuscript": 1
        },
        {
          "angel": "Khariēl",
          "demon": "Outaēl",
          "planet": 7,
          "for": 6,
          "manuscript": 1
        },
        {
          "angel": "Omēel",
          "demon": "Ouktak",
          "planet": 5,
          "for": 16,
          "manuscript": 3
        },
        {
          "angel": "Emiseēl",
          "demon": "Ergotas",
          "planet": 3,
          "for": 20,
          "manuscript": 1
        },
        {
          "angel": "Dalboth",
          "demon": "Azouboul",
          "planet": 1,
          "for": 40,
          "manuscript": 1
        },
        {
          "angel": "Khartoēl",
          "demon": "Aplēx",
          "planet": 6,
          "for": 127,
          "manuscript": 1
        },
        {
          "angel": "Klouphar",
          "demon": "Sigos",
          "planet": 4,
          "for": 29,
          "manuscript": 1
        },
        {
          "angel": "Siotiēl",
          "demon": "Emodias",
          "planet": 2,
          "for": 116,
          "manuscript": 1
        },
        {
          "angel": "Bokyēl",
          "demon": "Ooukh",
          "planet": 7,
          "for": 123,
          "manuscript": 1
        },
        {
          "angel": "Semoēl",
          "demon": "Monikonet",
          "planet": 5,
          "for": 39,
          "manuscript": 1
        },
        {
          "angel": "Oriatos",
          "demon": "Kopinos",
          "planet": 3,
          "for": 58,
          "manuscript": 1
        },
        {
          "angel": "Khēmeril",
          "demon": "Kaite",
          "planet": 1,
          "for": 51,
          "manuscript": 1
        },
        {
          "angel": "Orphaēl",
          "demon": "Lastor",
          "planet": 6,
          "for": 52,
          "manuscript": 1
        },
        {
          "angel": "Kydouēl",
          "demon": "Epios",
          "planet": 4,
          "for": 36,
          "manuscript": 1
        },
        {
          "angel": "Paēl",
          "demon": "Nierier",
          "planet": 2,
          "for": 80,
          "manuscript": 1
        },
        {
          "angel": "Kispoēl",
          "demon": "Ouanlēilos",
          "planet": 7,
          "for": 123,
          "manuscript": 3
        },
        {
          "angel": "Sarsaēl",
          "demon": "Oualielō",
          "planet": 5,
          "for": 36,
          "manuscript": 1
        },
        {
          "angel": "Kondarke",
          "demon": "Galiel",
          "planet": 3,
          "for": 36,
          "manuscript": 1
        },
        {
          "angel": "Kyrdipol",
          "demon": "Lior",
          "planet": 1,
          "for": 120,
          "manuscript": 1
        }
      ]
    },
    {
      "hour" : [
        {
          "angel": "Agathoēl",
          "demon": "Gouriēl",
          "planet": 6,
          "for": 24,
          "manuscript": 1
        },
        {
          "angel": "Idouēl",
          "demon": "Bizouk",
          "planet": 4,
          "for": 77,
          "manuscript": 1
        },
        {
          "angel": "Philoēl",
          "demon": "Zorzorath",
          "planet": 2,
          "for": 104,
          "manuscript": 1
        },
        {
          "angel": "Kakeenikel",
          "demon": "Rhariōph",
          "planet": 7,
          "for": 81,
          "manuscript": 1
        },
        {
          "angel": "Ekriroēl",
          "demon": "Ermag",
          "planet": 5,
          "for": 30,
          "manuscript": 1
        },
        {
          "angel": "Kermaniron",
          "demon": "Krodalos",
          "planet": 3,
          "for": 23,
          "manuscript": 1
        },
        {
          "angel": "Aniel",
          "demon": "Tabtalios",
          "planet": 1,
          "for": 48,
          "manuscript": 1
        },
        {
          "angel": "Mereēl",
          "demon": "Thapnix",
          "planet": 6,
          "for": 63,
          "manuscript": 1
        },
        {
          "angel": "Tophatiēl",
          "demon": "Elisem",
          "planet": 4,
          "for": 101,
          "manuscript": 1
        },
        {
          "angel": "Symitouēl",
          "demon": "Amikh",
          "planet": 2,
          "for": 40,
          "manuscript": 1
        },
        {
          "angel": "Kyēl",
          "demon": "Altidōn",
          "planet": 7,
          "for": 123,
          "manuscript": 1
        },
        {
          "angel": "Otraēl",
          "demon": "Ephorit",
          "planet": 5,
          "for": 70,
          "manuscript": 1
        },
        {
          "angel": "Talkidonios",
          "demon": "Stratiget",
          "planet": 3,
          "for": 77,
          "manuscript": 1
        },
        {
          "angel": "Rhoudiēl",
          "demon": "Anthēros",
          "planet": 1,
          "for": 14,
          "manuscript": 1
        },
        {
          "angel": "Thēkeēl",
          "demon": "Pixitor",
          "planet": 6,
          "for": 15,
          "manuscript": 1
        },
        {
          "angel": "Glykidōk",
          "demon": "Aprix",
          "planet": 4,
          "for": 105,
          "manuscript": 1
        },
        {
          "angel": "Psōlmaton",
          "demon": "Niphōn",
          "planet": 2,
          "for": 48,
          "manuscript": 1
        },
        {
          "angel": "Staphiliēl",
          "demon": "Atrikh",
          "planet": 7,
          "for": 109,
          "manuscript": 1
        },
        {
          "angel": "Deaukon",
          "demon": "Limer",
          "planet": 5,
          "for": 86,
          "manuscript": 1
        },
        {
          "angel": "Asphrodēl",
          "demon": "Mylin",
          "planet": 3,
          "for": 35,
          "manuscript": 1
        },
        {
          "angel": "Tetilol",
          "demon": "Kapnithen",
          "planet": 1,
          "for": 47,
          "manuscript": 1
        },
        {
          "angel": "Gorgeel",
          "demon": "Takhmnan",
          "planet": 6,
          "for": 63,
          "manuscript": 1
        },
        {
          "angel": "Betaniēl",
          "demon": "Oukisem",
          "planet": 4,
          "for": 65,
          "manuscript": 3
        },
        {
          "angel": "Poliōn",
          "demon": "Ounipheritousz",
          "planet": 2,
          "for": 97,
          "manuscript": 1
        }
      ]
    },
    {
      "hour" : [
        {
          "angel": "Sakipiēl",
          "demon": "Ēliditōr",
          "planet": 7,
          "for": 75,
          "manuscript": 1
        },
        {
          "angel": "Saliēl",
          "demon": "Lirik",
          "planet": 5,
          "for": 21,
          "manuscript": 1
        },
        {
          "angel": "Besaēl",
          "demon": "Spondōr",
          "planet": 3,
          "for": 111,
          "manuscript": 1
        },
        {
          "angel": "Abaēl",
          "demon": "Kēriam",
          "planet": 1,
          "for": 73,
          "manuscript": 1
        },
        {
          "angel": "Giel",
          "demon": "Nikem",
          "planet": 6,
          "for": 68,
          "manuscript": 1
        },
        {
          "angel": "Rhetaēl",
          "demon": "Kirie",
          "planet": 4,
          "for": 42,
          "manuscript": 1
        },
        {
          "angel": "Pelaphiēl",
          "demon": "Synigērōm",
          "planet": 2,
          "for": 113,
          "manuscript": 1
        },
        {
          "angel": "Samōsan",
          "demon": "Ephios",
          "planet": 7,
          "for": 84,
          "manuscript": 1
        },
        {
          "angel": "Platanix",
          "demon": "Thonios",
          "planet": 5,
          "for": 85,
          "manuscript": 1
        },
        {
          "angel": "Kapounēl",
          "demon": "Gorgopios",
          "planet": 3,
          "for": 25,
          "manuscript": 1
        },
        {
          "angel": "Marnikhaēl",
          "demon": "Stelpha",
          "planet": 1,
          "for": 72,
          "manuscript": 1
        },
        {
          "angel": "Altekharix",
          "demon": "Kytos",
          "planet": 6,
          "for": 22,
          "manuscript": 1
        },
        {
          "angel": "Arniēl",
          "demon": "Siar",
          "planet": 4,
          "for": 31,
          "manuscript": 1
        },
        {
          "angel": "Berbiēl",
          "demon": "Akrokh",
          "planet": 2,
          "for": 102,
          "manuscript": 1
        },
        {
          "angel": "Golgiēl",
          "demon": "Argētan",
          "planet": 7,
          "for": 103,
          "manuscript": 1
        },
        {
          "angel": "Sanipiēl",
          "demon": "Apomios",
          "planet": 5,
          "for": 119,
          "manuscript": 1
        },
        {
          "angel": "Bekharaēl",
          "demon": "Gnōtas",
          "planet": 3,
          "for": 124,
          "manuscript": 1
        },
        {
          "angel": "Apiaēl",
          "demon": "Ōketar",
          "planet": 1,
          "for": 123,
          "manuscript": 1
        },
        {
          "angel": "Ophtiēl",
          "demon": "Ioukhan",
          "planet": 6,
          "for": 43,
          "manuscript": 3
        },
        {
          "angel": "Ianouēl",
          "demon": "Amphou",
          "planet": 4,
          "for": 96,
          "manuscript": 3
        },
        {
          "angel": "Koudrouēl",
          "demon": "Manikos",
          "planet": 2,
          "for": 57,
          "manuscript": 3
        },
        {
          "angel": "Ouxynoēl",
          "demon": "Magras",
          "planet": 7,
          "for": 26,
          "manuscript": 3
        },
        {
          "angel": "Banaēl",
          "demon": "Nigrieph",
          "planet": 5,
          "for": 92,
          "manuscript": 3
        },
        {
          "angel": "Banaēl",
          "demon": "Nigrieph",
          "planet": 3,
          "for": 50,
          "manuscript": 3
        }
      ]
    }
  ]
}

moonSignActions = [
  "void",
  {
    "planet": 3,
    "for": [2, 58, 132, 133, 173 ,180, 185, 186, 188],
    "not": [150, 183]
  },
  {
    "planet": 6,
    "for": [130, 138, 141, 150, 154, 155, 176, 184],
    "not": [186, 175, 133, 58]
  },
  {
    "planet": 4,
    "for": [145, 167, 169, 172, 191],
    "not": [192, 150, 133, 193]
  },
  {
    "planet": 2,
    "for": [104, 135, 140, 146, 180, 183, 186, 188],
    "not": [150, 155, 168, 133]
  },
  {
    "planet": 1,
    "for": [2, 133, 144, 168, 178, 182],
    "not": [183, 180,  188, 187]
  },
  {
    "planet": 4,
    "for": [143, 171, 184, 191],
    "not": [194, 175, 196, 198]
  },
  {
    "planet": 6,
    "for": [138, 139, 155, 157, 162, 165, 174],
    "not": [168, 149, 150]
  },
  {
    "planet": 3,
    "for": [131, 148, 152, 153, 166, 181, 183, 187],
    "not": [195, 146, 186]
  },
  {
    "planet": 5,
    "for": [142, 147, 151, 155, 159, 179, 186],
    "not": [181, 183, 153]
  },
  {
    "planet": 7,
    "for": [136, 156, 161, 164, 177, 180, 188],
    "not": [195, 196, 157]
  },
  {
    "planet": 7,
    "for": [134, 137, 150, 170, 189],
    "not": [180, 188, 146]
  },
  {
    "planet": 5,
    "for": [148, 158, 160, 163, 166, 180, 183, 188, 190],
    "not": [185, 197]
  }
];

lunarDayActions = [
  [0],
  [199, 200, 201, 202],
  [200, 203],
  [204],
  [205],
  [206],
  [207],
  [208],
  [209],
  [210, 211],
  [212],
  [213],
  [214],
  [215],
  [216],
  [217],
  [218],
  [219],
  [220],
  [221],
  [222],
  [223],
  [224],
  [148],
  [225],
  [226],
  [227, 228],
  [63, 229],
  [63],
  [230]
];

lunarMansionActions = [
  [0],
  [46, 231, 232],
  [234, 233, 235, 236],
  [236, 237, 87, 144, 205], // 3
  [238], // 4
  [205, 239, 240, 241], // 5
  [242], // 6
  [237, 242, 243, 244, 245, 246], // 7
  [46, 236, 242, 247], // 8
  [248], // 9
  [236, 241, 242, 249], // 10
  [241, 243, 250, 251, 252], // 11
  [244, 253], // 12
  [243, 244, 246, 250, 251], // 13
  [237, 242, 249, 254, 255, 256], // 14
  [234, 233, 257], // 15
  [0], // 16
  [237, 205, 241, 242, 249], // 17
  [241, 250], // 18
  [240, 244], // 19
  [236, 240, 241, 259, 260, 261], // 20
  [240, 243, 244], // 21
  [254, 261], // 22
  [242, 254, 261], // 23
  [205, 243, 262], // 24
  [241], // 25
  [236, 240, 241, 242], // 26
  [243, 254, 261], // 27
  [236, 205, 240, 243, 244], // 28
];

claviculaActions = [
  [0],
  [92, 215, 116, 202, 203, 246, 269, 278, 280], // Sun
  [274, 275, 281, 265, 282], // Moon
  [125, 126, 222, 230, 257, 267, 275, 277], // Mars
  [272, 273, 276, 279], // Mercury
  [268, 269, 270, 271, 278, 280], // Jupiter
  [269, 63, 186, 278, 280, 283], // Venus
  [263, 264, 265, 266, 267, 275], // Saturn
];

actionMatrix = {
  planetary : planetaryActions,
  clavicula : claviculaActions,
  lunar : {
    day : lunarDayActions,
    sign : moonSignActions,
    mansion : lunarMansionActions
  }
};
