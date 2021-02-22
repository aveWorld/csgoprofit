import { nanoid } from 'nanoid';
import { shuffle } from '../utils/shuffle';

const awp = require('../assets/hydra/awp_taiji.png');
const berettas = require('../assets/hydra/berettas_cobra.png');
const five_seven = require('../assets/hydra/five_seven_hyper.png');
const galil = require('../assets/hydra/galil_sugar.png');
const hands_wrap = require('../assets/hydra/gloves_emerald.png');
const m4a1 = require('../assets/hydra/m4a1_briefing.png');
const m4a4 = require('../assets/hydra/m4a4_hellfire.png');
const p90 = require('../assets/hydra/p90_grip.png');
const p250 = require('../assets/hydra/p250_rock.png');
const ssg = require('../assets/hydra/ssg_head.png');
const ump = require('../assets/hydra/ump45_flowers.png');
const usp_s = require('../assets/hydra/usp_blueprint.png');
const ak47 = require('../assets/hydra/ak47_orbit.png');
const famas = require('../assets/hydra/famas_macabre.png');
const mac10 = require('../assets/hydra/mac10_aloha.png');
const mag7 = require('../assets/hydra/mag7_water.png');
const p2000 = require('../assets/hydra/p200_woodsman.png');
const tec9 = require('../assets/hydra/tec9_cut.png');

const guns = [
  {
    type: 'blue',
    id: nanoid(),
    name: 'UMP-45 | Metal Flowers',
    img: ump,
    price: 0.74,
  },
  {
    type: 'blue',
    id: nanoid(),
    name: 'FAMAS | Macabre',
    img: famas,
    price: 0.81,
  },
  {
    type: 'blue',
    id: nanoid(),
    name: 'MAG-7 | Hard Water',
    img: mag7,
    price: 0.82,
  },
  {
    type: 'blue',
    id: nanoid(),
    name: 'MAC-10 | Aloha',
    img: mac10,
    price: 0.82,
  },
  {
    type: 'blue',
    id: nanoid(),
    name: 'Tec-9 | Cut Out',
    img: tec9,
    price: 0.82,
  },
  {
    type: 'blue',
    id: nanoid(),
    name: 'M4A1-S | Briefing',
    img: m4a1,
    price: 1.46,
  },
  {
    type: 'blue',
    id: nanoid(),
    name: 'USP-S | Blueprint',
    img: usp_s,
    price: 4.15,
  },
  {
    type: 'purple',
    id: nanoid(),
    name: 'P250 | Red Rock',
    img: p250,
    price: 2.69,
  },
  {
    type: 'purple',
    id: nanoid(),
    name: 'P2000 | Woodsman',
    img: p2000,
    price: 2.77,
  },
  {
    type: 'purple',
    id: nanoid(),
    name: "SSG 08 | Death's Head",
    img: ssg,
    price: 2.91,
  },
  {
    type: 'purple',
    id: nanoid(),
    name: 'P90 | Death Grip',
    img: p90,
    price: 3.07,
  },
  {
    type: 'purple',
    id: nanoid(),
    name: 'AK-47 | Orbit Mk01',
    img: ak47,
    price: 12.39,
  },
  {
    type: 'pink',
    id: nanoid(),
    name: 'Galil AR | Sugar Rush',
    img: galil,
    price: 16.29,
  },
  {
    type: 'pink',
    id: nanoid(),
    name: 'Dual Berettas | Cobra Strike',
    img: berettas,
    price: 14.37,
  },
  {
    type: 'pink',
    id: nanoid(),
    name: 'M4A4 | Hellfire',
    img: m4a4,
    price: 16.13,
  },
  {
    type: 'red',
    id: nanoid(),
    name: 'Five-SeveN | Hyper Beast',
    img: five_seven,
    price: 21.54,
  },
  {
    type: 'red',
    id: nanoid(),
    name: 'AWP | Oni Taiji',
    img: awp,
    price: 141.08,
  },
  {
    type: 'rare',
    id: nanoid(),
    name: 'Specialist Gloves | Emerald Web',
    img: hands_wrap,
    price: 444,
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
