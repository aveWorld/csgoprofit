import { nanoid } from 'nanoid';
import { shuffle } from '../utils/shuffle';
import { isWebpSupported } from 'react-image-webp/dist/utils';

const awp = isWebpSupported
  ? require('../assets/broken-fang/awp_exoskeleton.webp')
  : require('../assets/broken-fang/awp_exoskeleton.png');
const berettas = isWebpSupported
  ? require('../assets/broken-fang/berettas_dezastre.webp')
  : require('../assets/broken-fang/berettas_dezastre.png');
const cz75 = isWebpSupported
  ? require('../assets/broken-fang/cz75_vendetta.webp')
  : require('../assets/broken-fang/cz75_vendetta.png');
const five_seven = isWebpSupported
  ? require('../assets/broken-fang/five_seven_tale.webp')
  : require('../assets/broken-fang/five_seven_tale.png');
const g3sg1 = isWebpSupported
  ? require('../assets/broken-fang/g3sg1_mesh.webp')
  : require('../assets/broken-fang/g3sg1_mesh.png');
const galil = isWebpSupported
  ? require('../assets/broken-fang/galil_vandal.webp')
  : require('../assets/broken-fang/galil_vandal.png');
const glock = isWebpSupported
  ? require('../assets/broken-fang/glock_noir.webp')
  : require('../assets/broken-fang/glock_noir.png');
const hands_wrap = isWebpSupported
  ? require('../assets/broken-fang/hand-wraps_caution.webp')
  : require('../assets/broken-fang/hand-wraps_caution.png');
const m4a1 = isWebpSupported
  ? require('../assets/broken-fang/m4a1-s_printstream.webp')
  : require('../assets/broken-fang/m4a1-s_printstream.png');
const m4a4 = isWebpSupported
  ? require('../assets/broken-fang/m4a4_security.webp')
  : require('../assets/broken-fang/m4a4_security.png');
const m249 = isWebpSupported
  ? require('../assets/broken-fang/m249_relief.webp')
  : require('../assets/broken-fang/m249_relief.png');
const mp5 = isWebpSupported
  ? require('../assets/broken-fang/mp5-sd_zero.webp')
  : require('../assets/broken-fang/mp5-sd_zero.png');
const nova = isWebpSupported
  ? require('../assets/broken-fang/nova_polymer.webp')
  : require('../assets/broken-fang/nova_polymer.png');
const p90 = isWebpSupported
  ? require('../assets/broken-fang/p90_cocoa.webp')
  : require('../assets/broken-fang/p90_cocoa.png');
const p250 = isWebpSupported
  ? require('../assets/broken-fang/p250_contaminant.webp')
  : require('../assets/broken-fang/p250_contaminant.png');
const ssg = isWebpSupported
  ? require('../assets/broken-fang/ssg_parallax.webp')
  : require('../assets/broken-fang/ssg_parallax.png');
const ump = isWebpSupported
  ? require('../assets/broken-fang/ump_bismuth.webp')
  : require('../assets/broken-fang/ump_bismuth.png');
const usp_s = isWebpSupported
  ? require('../assets/broken-fang/usp-s_mashup.webp')
  : require('../assets/broken-fang/usp-s_mashup.png');

const guns = [
  {
    type: 'blue',
    id: nanoid(),
    name: 'P90 | Cocoa Rampage',
    img: p90,
    price: 0.15,
  },
  {
    type: 'blue',
    id: nanoid(),
    name: 'G3SG1 | Digital Mesh',
    img: g3sg1,
    price: 0.15,
  },
  {
    type: 'blue',
    id: nanoid(),
    name: 'CZ75-Auto | Vendetta',
    img: cz75,
    price: 0.13,
  },
  {
    type: 'blue',
    id: nanoid(),
    name: 'P250 | Contaminant',
    img: p250,
    price: 0.15,
  },
  {
    type: 'blue',
    id: nanoid(),
    name: 'M249 | Deep Relief',
    img: m249,
    price: 0.14,
  },
  {
    type: 'blue',
    id: nanoid(),
    name: 'MP5-SD | Condition Zero',
    img: mp5,
    price: 0.14,
  },
  {
    type: 'blue',
    id: nanoid(),
    name: 'Galil AR | Vandal',
    img: galil,
    price: 0.17,
  },
  {
    type: 'purple',
    id: nanoid(),
    name: 'UMP-45 | Gold Bismuth',
    img: ump,
    price: 0.74,
  },
  {
    type: 'purple',
    id: nanoid(),
    name: 'Nova | Clear Polymer',
    img: nova,
    price: 0.76,
  },
  {
    type: 'purple',
    id: nanoid(),
    name: 'Dual Berettas | Dezastre',
    img: berettas,
    price: 0.78,
  },
  {
    type: 'purple',
    id: nanoid(),
    name: 'SSG 08 | Parallax',
    img: ssg,
    price: 0.81,
  },
  {
    type: 'purple',
    id: nanoid(),
    name: 'AWP | Exoskeleton',
    img: awp,
    price: 2.43,
  },
  {
    type: 'pink',
    id: nanoid(),
    name: 'Five-SeveN | Fairy Tale',
    img: five_seven,
    price: 6.34,
  },
  {
    type: 'pink',
    id: nanoid(),
    name: 'USP-S | Monster Mashup',
    img: usp_s,
    price: 7.56,
  },
  {
    type: 'pink',
    id: nanoid(),
    name: 'M4A4 | Cyber Security',
    img: m4a4,
    price: 8.08,
  },
  {
    type: 'red',
    id: nanoid(),
    name: 'M4A1-S | Printstream',
    img: m4a1,
    price: 66.7,
  },
  {
    type: 'red',
    id: nanoid(),
    name: 'Glock-18 | Neo-Noir',
    img: glock,
    price: 18.7,
  },
  {
    type: 'rare',
    id: nanoid(),
    name: 'Hand Wraps | CAUTION!',
    img: hands_wrap,
    price: 605,
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
