/**
* @preserve Copyright (c) 2018 T. F. Raaion, www.sublunar.space
* License MIT: http://www.opensource.org/licenses/MIT
*/

//Defines Calendar Objects and Methods
var module_pgm_lsign = {

  definitions: {
    name: "Lunar Sign",
    group: {
      id: "pgm",
      text: "PGM",
      info: "true"
    },
    actions: [
      [
        {
          "id": "1",
          "action": "fire divination or love charm (VII.284ff)",
          "tags": "divination love"
        },
        {
          "id": "21",
          "action": "Oracle statue of Hermes (V.370ff)",
          "tags": "divination animation"
        }
      ],
      [
        {
          "id": "2",
          "action": "Incantation to a lamp (VII.284ff)",
          "tags": "divination"
        },
        {
          "id": "22",
          "action": "Ring for success, favour and victory (animation) (XII.270ff)",
          "tags": "animation success"
        }
      ],
      [
        {
          "id": "3",
          "action": "Spell for winning favour (VII.284ff)",
          "tags": "luck"
        },
        {
          "id": "13",
          "action": "Perform spells of binding (III.275ff)",
          "tags": "binding harm"
        }
      ],
      [
        {
          "id": "4",
          "action": "Making Phylacteries (VII.284ff)",
          "tags": "protection"
        },
        {
          "id": "14",
          "action": "Perform spells of reconciliation, air divination (III.275ff)",
          "tags": "divination friendship reconciliation"
        }
      ],
      [
        {
          "id": "5",
          "action": "Rings or binding spells (VII.284ff)",
          "tags": "binding harm protection"
        },
        {
          "id": "15",
          "action": "Making an amulet against gout (xiv.1003ff)",
          "tags": "healing"
        },
        {
          "id": "21",
          "action": "Oracle statue of Hermes (V.370ff)",
          "tags": "divination animation"
        }
      ],
      [
        {
          "id": "6",
          "action": "Everything is rendered obtainable (VII.284ff)",
          "tags": "anything"
        },
        {
          "id": "16",
          "action": "Anything is obtainable, bowl divination, as you wish (III.275ff)",
          "tags": "anything divination"
        },
        {
          "id": "21",
          "action": "Oracle statue of Hermes (V.370ff)",
          "tags": "divination animation"
        },
        {
          "id": "22",
          "action": "Ring for success, favour and victory (animation) (XII.270ff)",
          "tags": "animation success"
        }
      ],
      [
        {
          "id": "7",
          "action": "Necromancy (VII.284ff)",
          "tags": "necromancy"
        },
        {
          "id": "17",
          "action": "Perform invocation... spell of release... necromancy (III.275ff)",
          "tags": "invocation necromancy release"
        }
      ],
      [
        {
          "id": "8",
          "action": "Anything inflicting evil (VII.284ff)",
          "tags": "harm war"
        },
        {
          "id": "22",
          "action": "Ring for success, favour and victory (animation) (XII.270ff)",
          "tags": "animation success"
        },
        {
          "id": "23",
          "action": "send a star ... down (xiv.1180f)",
          "tags": ""
        }
      ],
      [
        {
          "id": "9",
          "action": "Invocations and incantations to the Sun and the Moon (VII.284ff)",
          "tags": "prayer invocation"
        },
        {
          "id": "18",
          "action": "Conduct business (III.275ff)",
          "tags": "business"
        },
        {
          "id": "21",
          "action": "Oracle statue of Hermes (V.370ff)",
          "tags": "divination animation"
        }
      ],
      [
        {
          "id": "10",
          "action": "Say whatever you wish for best results (VII.284ff)",
          "tags": "anything"
        },
        {
          "id": "19",
          "action": "Do what is appropriate (III.275ff)",
          "tags": "anything"
        }
      ],
      [
        {
          "id": "11",
          "action": "For a love charm (VII.284ff)",
          "tags": "love"
        },
        {
          "id": "22",
          "action": "Ring for success, favour and victory (animation) (XII.270ff)",
          "tags": "animation success"
        }
      ],
      [
        {
          "id": "12",
          "action": "For foreknowledge (VII.284ff)",
          "tags": "divination"
        },
        {
          "id": "20",
          "action": "OIÔ rite... or love charm (III.275ff)",
          "tags": "love"
        }
      ]
    ]
  },
  property: function(m) {
    return SL.Astro.Logy.getZodiac(m.ephemeris.moon.deg).sign;
  },
  calculate: function(definitions, property) {
    return definitions.actions[property-1];
  }
};
