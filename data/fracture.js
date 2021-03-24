import { nanoid } from 'nanoid';
import { shuffle } from '../utils/shuffle';
import { isWebpSupported } from 'react-image-webp/dist/utils';

const ak = isWebpSupported
  ? require('../assets/fracture/ak_legion.webp')
  : require('../assets/fracture/ak_legion.png');
const bizon = isWebpSupported
  ? require('../assets/fracture/bizon_runic.webp')
  : require('../assets/fracture/bizon_runic.png');
const deagle = isWebpSupported
  ? require('../assets/fracture/deagle_print.webp')
  : require('../assets/fracture/deagle_print.png');
const galil = isWebpSupported
  ? require('../assets/fracture/galil_connexion.webp')
  : require('../assets/fracture/galil_connexion.png');
const glock = isWebpSupported
  ? require('../assets/fracture/glock_vogue.webp')
  : require('../assets/fracture/glock_vogue.png');
const m4a4 = isWebpSupported
  ? require('../assets/fracture/m4a4_tooth.webp')
  : require('../assets/fracture/m4a4_tooth.png');
const mac10 = isWebpSupported
  ? require('../assets/fracture/mac10_allure.webp')
  : require('../assets/fracture/mac10_allure.png');
const mag7 = isWebpSupported
  ? require('../assets/fracture/mag7_monster.webp')
  : require('../assets/fracture/mag7_monster.png');
const mp5 = isWebpSupported
  ? require('../assets/fracture/mp5_kitbash.webp')
  : require('../assets/fracture/mp5_kitbash.png');
const negev = isWebpSupported
  ? require('../assets/fracture/neveg_ultralight.webp')
  : require('../assets/fracture/neveg_ultralight.png');
const p90 = isWebpSupported
  ? require('../assets/fracture/p90_freight.webp')
  : require('../assets/fracture/p90_freight.png');
const p250 = isWebpSupported
  ? require('../assets/fracture/p250_cassette.webp')
  : require('../assets/fracture/p250_cassette.png');
const p2000 = isWebpSupported
  ? require('../assets/fracture/p2000_gnarled.webp')
  : require('../assets/fracture/p2000_gnarled.png');
const knife = isWebpSupported
  ? require('../assets/fracture/paracord_web.webp')
  : require('../assets/fracture/paracord_web.png');
const sg = isWebpSupported
  ? require('../assets/fracture/sg_rusty.webp')
  : require('../assets/fracture/sg_rusty.png');
const ssg = isWebpSupported
  ? require('../assets/fracture/ssg_mainframe.webp')
  : require('../assets/fracture/ssg_mainframe.png');
const tec9 = isWebpSupported
  ? require('../assets/fracture/tec9_brother.webp')
  : require('../assets/fracture/tec9_brother.png');
const xm = isWebpSupported
  ? require('../assets/fracture/xm1014_entombed.webp')
  : require('../assets/fracture/xm1014_entombed.png');

const guns = [
  {
    type: 'blue',
    id: nanoid(),
    name: 'Negev | Ultralight',
    img: negev,
    price: 0.1,
  },
  {
    type: 'blue',
    id: nanoid(),
    name: "SG 553 | Ol' Rusty",
    img: sg,
    price: 0.1,
  },
  {
    type: 'blue',
    id: nanoid(),
    name: 'P2000 | Gnarled',
    img: p2000,
    price: 0.1,
  },
  {
    type: 'blue',
    id: nanoid(),
    name: 'P90 | Freight',
    img: p90,
    price: 0.1,
  },
  {
    type: 'blue',
    id: nanoid(),
    name: 'PP-Bizon | Runic',
    img: bizon,
    price: 0.1,
  },
  {
    type: 'blue',
    id: nanoid(),
    name: 'P250 | Cassette',
    img: p250,
    price: 0.1,
  },
  {
    type: 'blue',
    id: nanoid(),
    name: 'SSG 08 | Mainframe 001',
    img: ssg,
    price: 0.1,
  },
  {
    type: 'purple',
    id: nanoid(),
    name: 'Galil AR | Connexion',
    img: galil,
    price: 0.82,
  },
  {
    type: 'purple',
    id: nanoid(),
    name: 'Tec-9 | Brother',
    img: tec9,
    price: 0.87,
  },
  {
    type: 'purple',
    id: nanoid(),
    name: 'MP5-SD | Kitbash',
    img: mp5,
    price: 0.84,
  },
  {
    type: 'purple',
    id: nanoid(),
    name: 'MAC-10 | Allure',
    img: mac10,
    price: 0.88,
  },
  {
    type: 'purple',
    id: nanoid(),
    name: 'MAG-7 | Monster Call',
    img: mag7,
    price: 0.87,
  },
  {
    type: 'pink',
    id: nanoid(),
    name: 'XM1014 | Entombed',
    img: xm,
    price: 8.25,
  },
  {
    type: 'pink',
    id: nanoid(),
    name: 'Glock-18 | Vogue',
    img: glock,
    price: 8.55,
  },
  {
    type: 'pink',
    id: nanoid(),
    name: 'M4A4 | Tooth Fairy',
    img: m4a4,
    price: 8.25,
  },
  {
    type: 'red',
    id: nanoid(),
    name: 'AK-47 | Legion of Anubis',
    img: ak,
    price: 30,
  },
  {
    type: 'red',
    id: nanoid(),
    name: 'Desert Eagle | Printstream',
    img: deagle,
    price: 113,
  },
  {
    type: 'rare',
    id: nanoid(),
    name: 'Paracord Knife | Crimson Web',
    img: knife,
    price: 391,
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
