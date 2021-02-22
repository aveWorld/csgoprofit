import { nanoid } from 'nanoid';
import { shuffle } from '../utils/shuffle';

const awp = require('../assets/bravo/awp_graphite.png');
const ak47 = require('../assets/bravo/ak47_serpent.png');
const berettas = require('../assets/bravo/berettas_limba.png');
const deagle = require('../assets/bravo/deagle_koi.png');
const g3sg1 = require('../assets/bravo/g3sg1_demeter.png');
const galil = require('../assets/bravo/galil_shattered.png');
const m4a1 = require('../assets/bravo/m4a1_water.png');
const m4a4 = require('../assets/bravo/m4a4_zirka.png');
const mac10 = require('../assets/bravo/mac10_graven.png');
const nova = require('../assets/bravo/nova_tempest.png');
const p90 = require('../assets/bravo/p90_dragon.png');
const p2000 = require('../assets/bravo/p2000_ocean.png');
const sg = require('../assets/bravo/sg_wave.png');
const ump = require('../assets/bravo/ump-45_bone.png');
const usp = require('../assets/bravo/usp_overgrowth.png');
const knife = require('../assets/bravo/flip_slaughter.png');

const guns = [
  {
    type: 'blue',
    id: nanoid(),
    name: 'G3SG1 | Demeter',
    img: g3sg1,
    price: 1.53,
  },
  {
    type: 'blue',
    id: nanoid(),
    name: 'Dual Berettas | Black Limba',
    img: berettas,
    price: 1.55,
  },
  {
    type: 'blue',
    id: nanoid(),
    name: 'Nova | Tempest',
    img: nova,
    price: 1.54,
  },
  {
    type: 'blue',
    id: nanoid(),
    name: 'SG 553 | Wave Spray',
    img: sg,
    price: 1.69,
  },
  {
    type: 'blue',
    id: nanoid(),
    name: 'Galil AR | Shattered',
    img: galil,
    price: 1.61,
  },
  {
    type: 'blue',
    id: nanoid(),
    name: 'UMP-45 | Bone Pile',
    img: ump,
    price: 1.58,
  },
  {
    type: 'purple',
    id: nanoid(),
    name: 'MAC-10 | Graven',
    img: mac10,
    price: 11.46,
  },
  {
    type: 'purple',
    id: nanoid(),
    name: 'M4A4 | Zirka',
    img: m4a4,
    price: 11.75,
  },
  {
    type: 'purple',
    id: nanoid(),
    name: 'M4A1-S | Bright Water',
    img: m4a1,
    price: 12,
  },
  {
    type: 'purple',
    id: nanoid(),
    name: 'USP-S | Overgrowth',
    img: usp,
    price: 10.9,
  },
  {
    type: 'pink',
    id: nanoid(),
    name: 'P2000 | Ocean Foam',
    img: p2000,
    price: 84,
  },
  {
    type: 'pink',
    id: nanoid(),
    name: 'AWP | Graphite',
    img: awp,
    price: 114,
  },
  {
    type: 'pink',
    id: nanoid(),
    name: 'P90 | Emerald Dragon',
    img: p90,
    price: 58,
  },
  {
    type: 'red',
    id: nanoid(),
    name: 'Desert Eagle | Golden Koi',
    img: deagle,
    price: 36,
  },
  {
    type: 'red',
    id: nanoid(),
    name: 'AK-47 | Fire Serpent',
    img: ak47,
    price: 590,
  },
  {
    type: 'rare',
    id: nanoid(),
    name: 'Flip Knife | Slaughter',
    img: knife,
    price: 240,
  },
];

const blue_guns = guns.filter((item) => item.type === 'blue');
const purple_guns = guns.filter((item) => item.type === 'purple');
const pink_guns = guns.filter((item) => item.type === 'pink');
const red_guns = guns.filter((item) => item.type === 'red');
const rare_guns = guns.filter((item) => item.type === 'rare');

let i = 0;
while (blue_guns.length < 102) {
  const item_tmp = { ...blue_guns[i] };
  item_tmp.id = nanoid();
  blue_guns.push(item_tmp);
  i++;
}
i = 0;
while (purple_guns.length < 20) {
  const item_tmp = { ...purple_guns[i] };
  item_tmp.id = nanoid();
  purple_guns.push(item_tmp);
  i++;
}

i = 0;
while (pink_guns.length < 7) {
  const item_tmp = { ...pink_guns[i] };
  item_tmp.id = nanoid();
  pink_guns.push(item_tmp);
  i++;
}

i = 0;
while (red_guns.length < 2) {
  const item_tmp = { ...red_guns[i] };
  item_tmp.id = nanoid();
  red_guns.push(item_tmp);
  i++;
}

let data = [...blue_guns, ...purple_guns, ...pink_guns, ...red_guns, ...rare_guns];

data = shuffle(data);

export { data };
