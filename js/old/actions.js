function v() { return true; }

actionMatrix = [
  "void",
  {
    "id": "1",
    "action": "appearing at war",
    "tags": "war"
  },
  {
    "id": "2",
    "action": "appearing before a king",
    "tags": "authority"
  },
  {
    "id": "3",
    "action": "appearing before a lady",
    "tags": "authority"
  },
  {
    "id": "4",
    "action": "asking aid",
    "tags": "aid"
  },
  {
    "id": "5",
    "action": "asking aid your salvation",
    "tags": "aid"
  },
  {
    "id": "6",
    "action": "Be careful",
    "tags": "careful"
  },
  {
    "id": "7",
    "action": "Be extremely careful",
    "tags": "careful"
  },
  {
    "id": "8",
    "action": "Begin an address",
    "tags": "beginning"
  },
  {
    "id": "9",
    "action": "Begin plans early morning",
    "tags": "beginning"
  },
  {
    "id": "10",
    "action": "Begin praising someone",
    "tags": "beginning"
  },
  {
    "id": "11",
    "action": "Begin praying",
    "tags": "beginning prayer"
  },
  {
    "id": "12",
    "action": "Begin to sell",
    "tags": "beginning business"
  },
  {
    "id": "13",
    "action": "Begin whatever journey you want",
    "tags": "beginning journey"
  },
  {
    "id": "14",
    "action": "binding couples with spells",
    "tags": "binding couple spells"
  },
  {
    "id": "15",
    "action": "binding someone with love spells",
    "tags": "binding love spells"
  },
  {
    "id": "16",
    "action": "Blessed start",
    "tags": "beginning"
  },
  {
    "id": "17",
    "action": "bringing someone into discredit",
    "tags": "harm"
  },
  {
    "id": "18",
    "action": "casting binding spells",
    "tags": "binding"
  },
  {
    "id": "19",
    "action": "casting spells",
    "tags": "spells"
  },
  {
    "id": "20",
    "action": "Cause jealousy",
    "tags": "harm love"
  },
  {
    "id": "21",
    "action": "causing a shipwreck",
    "tags": "harm"
  },
  {
    "id": "22",
    "action": "causing fear and enmity",
    "tags": "harm"
  },
  {
    "id": "23",
    "action": "causing jealousy in love",
    "tags": "harm love"
  },
  {
    "id": "24",
    "action": "causing love",
    "tags": "love"
  },
  {
    "id": "25",
    "action": "causing peoples to plunge into the sea",
    "tags": "harm"
  },
  {
    "id": "26",
    "action": "causing visions",
    "tags": "visions"
  },
  {
    "id": "27",
    "action": "cohabiting with a woman",
    "tags": "sex"
  },
  {
    "id": "28",
    "action": "contemning (treat with disdain)",
    "tags": "harm"
  },
  {
    "id": "29",
    "action": "craftiness",
    "tags": "craft"
  },
  {
    "id": "30",
    "action": "decrees and conversations",
    "tags": "communication"
  },
  {
    "id": "31",
    "action": "Beneficial discovering secret things",
    "tags": "secrets"
  },
  {
    "id": "32",
    "action": "displaying your military skills",
    "tags": "war"
  },
  {
    "id": "33",
    "action": "Do mighty deeds",
    "tags": "good"
  },
  {
    "id": "34",
    "action": "Do not work on anything",
    "tags": "rest work"
  },
  {
    "id": "35",
    "action": "Do nothing",
    "tags": "rest"
  },
  {
    "id": "36",
    "action": "Do whatever you want",
    "tags": "anything"
  },
  {
    "id": "37",
    "action": "dominating a woman",
    "tags": "power"
  },
  {
    "id": "38",
    "action": "Enviable hour",
    "tags": "anything"
  },
  {
    "id": "39",
    "action": "every kind of healing",
    "tags": "healing"
  },
  {
    "id": "40",
    "action": "everything",
    "tags": "anything"
  },
  {
    "id": "41",
    "action": "Useful everything and retribution",
    "tags": "anything"
  },
  {
    "id": "42",
    "action": "Useful finding treasure",
    "tags": "treasures"
  },
  {
    "id": "43",
    "action": "gaining money in dice",
    "tags": "gambling"
  },
  {
    "id": "44",
    "action": "Give thanks",
    "tags": "good"
  },
  {
    "id": "45",
    "action": "Go to war",
    "tags": "war"
  },
  {
    "id": "46",
    "action": "going on a journey",
    "tags": "journey"
  },
  {
    "id": "47",
    "action": "Good",
    "tags": "anything"
  },
  {
    "id": "48",
    "action": "Good hour, beneficial for love",
    "tags": "anything love"
  },
  {
    "id": "49",
    "action": "harming someone",
    "tags": "harm"
  },
  {
    "id": "50",
    "action": "hassle and enmity",
    "tags": "avoid"
  },
  {
    "id": "51",
    "action": "healing a king",
    "tags": "healing authority"
  },
  {
    "id": "52",
    "action": "healing a lady",
    "tags": "healing authority"
  },
  {
    "id": "53",
    "action": "healing men and animals",
    "tags": "healing"
  },
  {
    "id": "54",
    "action": "helping a friend",
    "tags": "aid"
  },
  {
    "id": "55",
    "action": "hindering",
    "tags": "harm"
  },
  {
    "id": "56",
    "action": "Hour for success",
    "tags": "anything"
  },
  {
    "id": "57",
    "action": "Hour without virtue",
    "tags": "avoid"
  },
  {
    "id": "58",
    "action": "hunting",
    "tags": "hunting"
  },
  {
    "id": "59",
    "action": "interceding to a dealing",
    "tags": "business"
  },
  {
    "id": "60",
    "action": "invisibility and children",
    "tags": "invisibility children"
  },
  {
    "id": "61",
    "action": "Joyous for everything",
    "tags": "anything"
  },
  {
    "id": "62",
    "action": "keeping concealed",
    "tags": "secrets"
  },
  {
    "id": "63",
    "action": "love",
    "tags": "love"
  },
  {
    "id": "64",
    "action": "To make a nocturnal battle",
    "tags": "war night"
  },
  {
    "id": "65",
    "action": "Make a start",
    "tags": "beginning"
  },
  {
    "id": "66",
    "action": "Make a talisman buying and selling",
    "tags": "business"
  },
  {
    "id": "67",
    "action": "Make a talisman the love of lords",
    "tags": "love"
  },
  {
    "id": "68",
    "action": "making a couple hate each other",
    "tags": "harm"
  },
  {
    "id": "69",
    "action": "making a talisman concerning dreams",
    "tags": "dreams"
  },
  {
    "id": "70",
    "action": "making agreements",
    "tags": "agreements"
  },
  {
    "id": "71",
    "action": "making excuses",
    "tags": "excuses"
  },
  {
    "id": "72",
    "action": "making litigants mad at each other",
    "tags": "harm"
  },
  {
    "id": "73",
    "action": "making lords fight each other",
    "tags": "harm war authority"
  },
  {
    "id": "74",
    "action": "making retribution",
    "tags": "good"
  },
  {
    "id": "75",
    "action": "Making talismans to harm enemies.",
    "tags": "harm"
  },
  {
    "id": "76",
    "action": "marching against enemies",
    "tags": "war"
  },
  {
    "id": "77",
    "action": "matchmaking",
    "tags": "matchmaking"
  },
  {
    "id": "78",
    "action": "merchandise",
    "tags": "business"
  },
  {
    "id": "79",
    "action": "Move and stir affairs",
    "tags": "action"
  },
  {
    "id": "80",
    "action": "nocturnal affairs",
    "tags": "action night"
  },
  {
    "id": "81",
    "action": "Obstacles of love",
    "tags": "love harm"
  },
  {
    "id": "82",
    "action": "Open your workshop",
    "tags": "business"
  },
  {
    "id": "83",
    "action": "opening a workshop",
    "tags": "business beginning"
  },
  {
    "id": "84",
    "action": "performing basin divination",
    "tags": "divination"
  },
  {
    "id": "85",
    "action": "performing skull divination",
    "tags": "divination"
  },
  {
    "id": "86",
    "action": "plans",
    "tags": "plans"
  },
  {
    "id": "87",
    "action": "practicing alchemy",
    "tags": "alchemy"
  },
  {
    "id": "88",
    "action": "Pray to God",
    "tags": "prayer"
  },
  {
    "id": "89",
    "action": "preventing an address",
    "tags": "harm"
  },
  {
    "id": "90",
    "action": "preventing luck",
    "tags": "harm"
  },
  {
    "id": "91",
    "action": "preventing working",
    "tags": "harm"
  },
  {
    "id": "92",
    "action": "profit",
    "tags": "business"
  },
  {
    "id": "93",
    "action": "reconciling with your enemy at noon",
    "tags": "good"
  },
  {
    "id": "94",
    "action": "Rest",
    "tags": "rest"
  },
  {
    "id": "95",
    "action": "resting and cheering",
    "tags": "rest"
  },
  {
    "id": "96",
    "action": "restraining every good thing",
    "tags": "harm"
  },
  {
    "id": "97",
    "action": "restraining love",
    "tags": "harm love"
  },
  {
    "id": "98",
    "action": "restraining somebody's activities",
    "tags": "harm"
  },
  {
    "id": "99",
    "action": "revealing secret things",
    "tags": "secrets"
  },
  {
    "id": "100",
    "action": "rising in honour",
    "tags": "honour"
  },
  {
    "id": "101",
    "action": "secret messages",
    "tags": "secrets"
  },
  {
    "id": "102",
    "action": "seeing people long dead",
    "tags": "magic"
  },
  {
    "id": "103",
    "action": "seeing visions by water divination",
    "tags": "divination"
  },
  {
    "id": "104",
    "action": "selling",
    "tags": "business"
  },
  {
    "id": "105",
    "action": "To send dreams of love",
    "tags": "dreams love"
  },
  {
    "id": "106",
    "action": "sending dreams",
    "tags": "dreams"
  },
  {
    "id": "107",
    "action": "sending dreams to a king",
    "tags": "dreams authority"
  },
  {
    "id": "108",
    "action": "sending dreams to a lady",
    "tags": "dreams authority"
  },
  {
    "id": "109",
    "action": "sending messages/dreams of hatred",
    "tags": "dreams communication harm"
  },
  {
    "id": "110",
    "action": "setting up a business",
    "tags": "business"
  },
  {
    "id": "111",
    "action": "setting up enchantments",
    "tags": "magic"
  },
  {
    "id": "112",
    "action": "sickness",
    "tags": "harm"
  },
  {
    "id": "113",
    "action": "speaking with demons",
    "tags": "magic"
  },
  {
    "id": "114",
    "action": "Start plans",
    "tags": "beginning plans"
  },
  {
    "id": "115",
    "action": "stirring your work",
    "tags": "business"
  },
  {
    "id": "116",
    "action": "success",
    "tags": "success"
  },
  {
    "id": "117",
    "action": "Take care to do nothing",
    "tags": "rest"
  },
  {
    "id": "118",
    "action": "taking loot",
    "tags": "business harm"
  },
  {
    "id": "119",
    "action": "teaching",
    "tags": "education"
  },
  {
    "id": "120",
    "action": "the decision of a tribunal",
    "tags": "justice"
  },
  {
    "id": "121",
    "action": "the learning of rhetoric",
    "tags": "education"
  },
  {
    "id": "122"
  },
  {
    "id": "123",
    "action": "Useless hour",
    "tags": "avoid"
  },
  {
    "id": "124",
    "action": "Very malign hour",
    "tags": "careful avoid"
  },
  {
    "id": "125",
    "action": "war and victory",
    "tags": "war"
  },
  {
    "id": "126",
    "action": "winning over an opponent",
    "tags": "war"
  },
  {
    "id": "127",
    "action": "women",
    "tags": "women"
  },
  {
    "id": "128",
    "action": "working",
    "tags": "business"
  },
  {
    "id": "129",
    "action": "working at night",
    "tags": "business night"
  },
  {
    "id": "130",
    "action": "appearing in front of lords",
    "tags": "authority"
  },
  {
    "id": "131",
    "action": "beginning a trial",
    "tags": "beginning justice"
  },
  {
    "id": "132",
    "action": "beginning a work",
    "tags": "beginning business"
  },
  {
    "id": "133",
    "action": "blood tests",
    "tags": "healing"
  },
  {
    "id": "134",
    "action": "building high edifices",
    "tags": "good"
  },
  {
    "id": "135",
    "action": "buying",
    "tags": "business"
  },
  {
    "id": "136",
    "action": "buying camels donkeys and goats",
    "tags": "business"
  },
  {
    "id": "137",
    "action": "buying lands and farms and guarding them",
    "tags": "business"
  },
  {
    "id": "138",
    "action": "buying precious stones",
    "tags": "business"
  },
  {
    "id": "139",
    "action": "buying sheep",
    "tags": "business"
  },
  {
    "id": "140",
    "action": "changing residence",
    "tags": "journey travelling"
  },
  {
    "id": "141",
    "action": "communicating",
    "tags": "communication"
  },
  {
    "id": "142",
    "action": "consecrating temples",
    "tags": "magic prayer"
  },
  {
    "id": "143",
    "action": "cultivating",
    "tags": "good"
  },
  {
    "id": "144",
    "action": "doing something that has to do with fires",
    "tags": "fire"
  },
  {
    "id": "145",
    "action": "educating children",
    "tags": "education"
  },
  {
    "id": "146",
    "action": "emigrating",
    "tags": "journey travelling"
  },
  {
    "id": "147",
    "action": "engaging",
    "tags": "love"
  },
  {
    "id": "148",
    "action": "fishing",
    "tags": "fishing"
  },
  {
    "id": "149",
    "action": "sowing",
    "tags": "craft"
  },
  {
    "id": "150",
    "action": "laying foundations",
    "tags": "beginning"
  },
  {
    "id": "151",
    "action": "laying foundations of churches",
    "tags": "beginning prayer"
  },
  {
    "id": "152",
    "action": "leading an army",
    "tags": "war"
  },
  {
    "id": "153",
    "action": "making gargles",
    "tags": "healing"
  },
  {
    "id": "154",
    "action": "making perfumes",
    "tags": "craft"
  },
  {
    "id": "155",
    "action": "marrying",
    "tags": "love"
  },
  {
    "id": "156",
    "action": "meeting civilians",
    "tags": "communication"
  },
  {
    "id": "157",
    "action": "meeting eunuchs",
    "tags": "communication"
  },
  {
    "id": "158",
    "action": "meeting high church officials",
    "tags": "communication"
  },
  {
    "id": "159",
    "action": "meeting matchmakers",
    "tags": "matchmaking"
  },
  {
    "id": "160",
    "action": "meeting mediators",
    "tags": "communication"
  },
  {
    "id": "161",
    "action": "meeting monks",
    "tags": "communication"
  },
  {
    "id": "162",
    "action": "meeting musicians",
    "tags": "communication music"
  },
  {
    "id": "163",
    "action": "meeting Patriarchs",
    "tags": "communication"
  },
  {
    "id": "164",
    "action": "meeting philosophers",
    "tags": "communication"
  },
  {
    "id": "165",
    "action": "meeting prostitutes",
    "tags": "communication sex"
  },
  {
    "id": "166",
    "action": "navigating",
    "tags": "journey"
  },
  {
    "id": "167",
    "action": "negotiating",
    "tags": "communication"
  },
  {
    "id": "168",
    "action": "planting",
    "tags": "planting"
  },
  {
    "id": "169",
    "action": "planting vineyards",
    "tags": "planting"
  },
  {
    "id": "170",
    "action": "playing cymbals",
    "tags": "music"
  },
  {
    "id": "171",
    "action": "reading letters",
    "tags": "communication"
  },
  {
    "id": "172",
    "action": "reconciling",
    "tags": "good"
  },
  {
    "id": "173",
    "action": "riding",
    "tags": "journey"
  },
  {
    "id": "174",
    "action": "seeing one's relatives",
    "tags": "family"
  },
  {
    "id": "175",
    "action": "sailing",
    "tags": "journey"
  },
  {
    "id": "176",
    "action": "selling slaves",
    "tags": "business"
  },
  {
    "id": "177",
    "action": "sending messengers",
    "tags": "communication"
  },
  {
    "id": "178",
    "action": "starting a big business",
    "tags": "beginning business"
  },
  {
    "id": "179",
    "action": "starting ecclesiastical operations",
    "tags": "beginning magic prayer"
  },
  {
    "id": "180",
    "action": "tailoring",
    "tags": "craft"
  },
  {
    "id": "181",
    "action": "taking emetics",
    "tags": "healing"
  },
  {
    "id": "182",
    "action": "taking high office",
    "tags": "good"
  },
  {
    "id": "183",
    "action": "taking purgatives",
    "tags": "healing"
  },
  {
    "id": "184",
    "action": "trading",
    "tags": "business"
  },
  {
    "id": "185",
    "action": "transplanting",
    "tags": "planting"
  },
  {
    "id": "186",
    "action": "travelling",
    "tags": "travelling journey"
  },
  {
    "id": "187",
    "action": "treating a patient",
    "tags": "healing"
  },
  {
    "id": "188",
    "action": "wearing new clothes",
    "tags": "clothes"
  },
  {
    "id": "189",
    "action": "working magic",
    "tags": "magic"
  },
  {
    "id": "190",
    "action": "writing contracts",
    "tags": "communication"
  },
  {
    "id": "191",
    "action": "writing letters, nominations and orders",
    "tags": "communication"
  },
  {
    "id": "192",
    "action": "fighting",
    "tags": "war"
  },
  {
    "id": "193",
    "action": "Phlebotomy",
    "tags": "healing"
  },
  {
    "id": "194",
    "action": "Planting trees",
    "tags": "planting"
  },
  {
    "id": "195",
    "action": "Meeting a king",
    "tags": "authority"
  },
  {
    "id": "196",
    "action": "Meeting women",
    "tags": "women"
  },
  {
    "id": "197",
    "action": "going out of the city",
    "tags": "journey travelling"
  },
  {
    "id": "198",
    "action": "playing music",
    "tags": "music"
  },
  {
    "id": "199",
    "action": "winning in gambling",
    "tags": "gambling"
  },
  {
    "id": "200",
    "action": "winning in chess",
    "tags": "gambling"
  },
  {
    "id": "201",
    "action": "winning in games",
    "tags": "gambling"
  },
  {
    "id": "202",
    "action": "luck",
    "tags": "success"
  },
  {
    "id": "203",
    "action": "for gain",
    "tags": "success"
  },
  {
    "id": "204",
    "action": "make a talisman for war",
    "tags": "war"
  },
  {
    "id": "205",
    "action": "causing love in a couple",
    "tags": "love couple"
  },
  {
    "id": "206",
    "action": "causing the love of kings and lords",
    "tags": "love authority"
  },
  {
    "id": "207",
    "action": "beneficial judgements.",
    "tags": "justice"
  },
  {
    "id": "208",
    "action": "divining with a vessel",
    "tags": "divination"
  },
  {
    "id": "209",
    "action": "finding treasures in the earth",
    "tags": "treasures"
  },
  {
    "id": "210",
    "action": "happiness within the family",
    "tags": "family"
  },
  {
    "id": "211",
    "action": "taking care of the house",
    "tags": "housework"
  },
  {
    "id": "212",
    "action": "curing the epileptic",
    "tags": "healing"
  },
  {
    "id": "213",
    "action": "making children obey their father",
    "tags": "family children"
  },
  {
    "id": "214",
    "action": "making fathers love their children",
    "tags": "family children"
  },
  {
    "id": "215",
    "action": "increase of one's property",
    "tags": "success business"
  },
  {
    "id": "216",
    "action": "seeing the spirits and for subjugating them",
    "tags": "magic"
  },
  {
    "id": "217",
    "action": "speaking with demons",
    "tags": "magic"
  },
  {
    "id": "218",
    "action": "making a man to love his wife",
    "tags": "love"
  },
  {
    "id": "219",
    "action": "restraining a boat from sailing",
    "tags": "harm journey"
  },
  {
    "id": "220",
    "action": "For a woman to confess whatever she did",
    "tags": "women"
  },
  {
    "id": "221",
    "action": "opening locks",
    "tags": "beginning opening"
  },
  {
    "id": "222",
    "action": "destroying one's enemies and opponents",
    "tags": "war"
  },
  {
    "id": "223",
    "action": "binding the evil tonue",
    "tags": "magic"
  },
  {
    "id": "224",
    "action": "unbinding sorceries",
    "tags": "magic"
  },
  {
    "id": "225",
    "action": "not being afraid of punishment",
    "tags": "justice"
  },
  {
    "id": "226",
    "action": "binding or unbinding a couple",
    "tags": "couple love harm"
  },
  {
    "id": "227",
    "action": "compelling enemies",
    "tags": "communication"
  },
  {
    "id": "228",
    "action": "compelling masters",
    "tags": "communication"
  },
  {
    "id": "229",
    "action": "bindings of love",
    "tags": "love"
  },
  {
    "id": "230",
    "action": "destruction",
    "tags": "war"
  },
  {
    "id": "231",
    "action": "taking medicine",
    "tags": "healing"
  },
  {
    "id": "232",
    "action": "making a servant flee",
    "tags": "harm"
  },
  {
    "id": "233",
    "action": "dig streams, wells",
    "tags": "water"
  },
  {
    "id": "234",
    "action": "finding lost treasures",
    "tags": "treasure"
  },
  {
    "id": "235",
    "action": "have plenty of corn",
    "tags": "agriculture food business"
  },
  {
    "id": "236",
    "action": "strengthen prisons",
    "tags": "protection war building captivity"
  },
  {
    "id": "237",
    "action": "protect sailors at sea",
    "tags": "sailing protection"
  },
  {
    "id": "238",
    "action": "make master shrink back from servant",
    "tags": "harm"
  },
  {
    "id": "239",
    "action": "set boys to learn skills",
    "tags": "children education"
  },
  {
    "id": "240",
    "action": "safeguarding travellers",
    "tags": "journey protection"
  },
  {
    "id": "241",
    "action": "improve buildings",
    "tags": "building"
  },
  {
    "id": "242",
    "action": "bring friendship",
    "tags": "love friendship"
  },
  {
    "id": "243",
    "action": "increase trade and profit",
    "tags": "business"
  },
  {
    "id": "244",
    "action": "increase crops",
    "tags": "food agriculture business"
  },
  {
    "id": "245",
    "action": "expel flies",
    "tags": "protection animals"
  },
  {
    "id": "246",
    "action": "gain favor of kings and authorities",
    "tags": "authority"
  },
  {
    "id": "247",
    "action": "expel mice and bugs",
    "tags": "protection animals"
  },
  {
    "id": "248",
    "action": "protect from another man's claims",
    "tags": "protection business"
  },
  {
    "id": "249",
    "action": "cause love between a man and a woman",
    "tags": "love"
  },
  {
    "id": "250",
    "action": "release captives",
    "tags": "captivity"
  },
  {
    "id": "251",
    "action": "travel safely in hot places",
    "tags": "journey protection"
  },
  {
    "id": "252",
    "action": "increase wealth of allies",
    "tags": "business friendship"
  },
  {
    "id": "253",
    "action": "help allies, authorities, captives and servants",
    "tags": "aid friendship authorities captivity"
  },
  {
    "id": "254",
    "action": "heal the sick by drugs, medicine",
    "tags": "healing"
  },
  {
    "id": "255",
    "action": "destroy lust",
    "tags": "harm love"
  },
  {
    "id": "256",
    "action": "improve luck of kings",
    "tags": "authority"
  },
  {
    "id": "257",
    "action": "scatter your enemies",
    "tags": "war"
  },
  {
    "id": "258",
    "action": "help the deceived",
    "tags": "aid"
  },
  {
    "id": "259",
    "action": "tame vicious beasts",
    "tags": "animals"
  },
  {
    "id": "260",
    "action": "people you want to come to you",
    "tags": "people"
  },
  {
    "id": "261",
    "action": "for allying good men with each other",
    "tags": "friendship"
  },
  {
    "id": "262",
    "action": "soldiers to report victory",
    "tags": "war"
  },
  {
    "id": "263",
    "action": "summon the souls from Hades who died a natural death",
    "tags": "magic"
  },
  {
    "id": "264",
    "action": "bring good or bad fortune to buildings",
    "tags": "protection harm building"
  },
  {
    "id": "265",
    "action": "have familiar spirits visit in sleep",
    "tags": "magic dreams"
  },
  {
    "id": "266",
    "action": "cause good or ill in business, possessions, goods, seeds, fruits, and similar things, in order to acquire learning",
    "tags": "harm business food agriculture education"
  },
  {
    "id": "267",
    "action": "to bring destruction and to give death, and to sow hatred and discord.",
    "tags": "harm war"
  },
  {
    "id": "268",
    "action": "obtain honours, acquire riches",
    "tags": "treasure business"
  },
  {
    "id": "269",
    "action": "contracting friendships",
    "tags": "friendship"
  },
  {
    "id": "270",
    "action": "preserving health",
    "tags": "healing"
  },
  {
    "id": "271",
    "action": "arriving at all you can desire",
    "tags": "anything"
  },
  {
    "id": "272",
    "action": "eloquence and intelligence; promptitude in business; science and divination; wonders; apparitions; and answers regarding the future",
    "tags": "business magic divination science"
  },
  {
    "id": "273",
    "action": "thefts; writings; deceit; and merchandise",
    "tags": "harm business"
  },
  {
    "id": "274",
    "action": "embassies; voyages; envoys; messages; navigation; reconciliation; love; and the acquisition of merchandise by water",
    "tags": "love authority friendship business water"
  },
  {
    "id": "275",
    "action": "communicating and speaking with spirits",
    "tags": "magic"
  },
  {
    "id": "276",
    "action": "recovering thefts by the means of spirits",
    "tags": "magic treasure"
  },
  {
    "id": "277",
    "action": "summoning souls from Hades, especially of those slain in battle",
    "tags": "magic war"
  },
  {
    "id": "278",
    "action": "preparing any operations whatsoever of love, of kindness, and of invisibility",
    "tags": "love friendship magic"
  },
  {
    "id": "279",
    "action": "undertaking experiments relating to games, raillery, jests, sports, and the like",
    "tags": "luck gambling games"
  },
  {
    "id": "280",
    "action": "good for all extraordinary, uncommon, and unknown operations",
    "tags": "anything magic"
  },
  {
    "id": "281",
    "action": "recover stolen property",
    "tags": "treasure"
  },
  {
    "id": "282",
    "action": "preparing anything relaed to water",
    "tags": "water"
  },
  {
    "id": "283",
    "action": "preparing lots, poisons, powders for madness and the like",
    "tags": "protection animals"
  }
]
