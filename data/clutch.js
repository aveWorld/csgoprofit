import { nanoid } from 'nanoid';
import { shuffle } from '../utils/shuffle';
import { isWebpSupported } from 'react-image-webp/dist/utils';

const aug = isWebpSupported
  ? require('../assets/clutch/aug_stym.webp')
  : require('../assets/clutch/aug_stym.png');
const awp = isWebpSupported
  ? require('../assets/clutch/awp_mortis.webp')
  : require('../assets/clutch/awp_mortis.png');
const bizon = isWebpSupported
  ? require('../assets/clutch/bizon_riot.webp')
  : require('../assets/clutch/bizon_riot.png');
const glock = isWebpSupported
  ? require('../assets/clutch/glock_moon.webp')
  : require('../assets/clutch/glock_moon.png');
const gloves = isWebpSupported
  ? require('../assets/clutch/gloves_pow.webp')
  : require('../assets/clutch/gloves_pow.png');
const m4a4 = isWebpSupported
  ? require('../assets/clutch/m4a4_neo.webp')
  : require('../assets/clutch/m4a4_neo.png');
const mag7 = isWebpSupported
  ? require('../assets/clutch/mag7_swag.webp')
  : require('../assets/clutch/mag7_swag.png');
const mp7 = isWebpSupported
  ? require('../assets/clutch/mp7_blood.webp')
  : require('../assets/clutch/mp7_blood.png');
const mp9 = isWebpSupported
  ? require('../assets/clutch/mp9_sand.webp')
  : require('../assets/clutch/mp9_sand.png');
const negev = isWebpSupported
  ? require('../assets/clutch/negev_lion.webp')
  : require('../assets/clutch/negev_lion.png');
const nova = isWebpSupported
  ? require('../assets/clutch/nova_wild.webp')
  : require('../assets/clutch/nova_wild.png');
const p2000 = isWebpSupported
  ? require('../assets/clutch/p2000_hazard.webp')
  : require('../assets/clutch/p2000_hazard.png');
const revolver = isWebpSupported
  ? require('../assets/clutch/revolver_grip.webp')
  : require('../assets/clutch/revolver_grip.png');
const seven = isWebpSupported
  ? require('../assets/clutch/seven_flame.webp')
  : require('../assets/clutch/seven_flame.png');
const sg = isWebpSupported
  ? require('../assets/clutch/sg_aloha.webp')
  : require('../assets/clutch/sg_aloha.png');
const ump = isWebpSupported
  ? require('../assets/clutch/ump45_artic.webp')
  : require('../assets/clutch/ump45_artic.png');
const usps = isWebpSupported
  ? require('../assets/clutch/usps_cortex.webp')
  : require('../assets/clutch/usps_cortex.png');
const xm = isWebpSupported
  ? require('../assets/clutch/xm1014_blaze.webp')
  : require('../assets/clutch/xm1014_blaze.png');

const guns = [
  {
    type: 'blue',
    id: nanoid(),
    name: 'XM1014 | Oxide Blaze',
    img: xm,
    price: 0.1,
  },
  {
    type: 'blue',
    id: nanoid(),
    name: 'P2000 | Urban Hazard',
    img: p2000,
    price: 0.1,
  },
  {
    type: 'blue',
    id: nanoid(),
    name: 'PP-Bizon | Night Riot',
    img: bizon,
    price: 0.1,
  },
  {
    type: 'blue',
    id: nanoid(),
    name: 'Five-SeveN | Flame Test',
    img: seven,
    price: 0.1,
  },
  {
    type: 'blue',
    id: nanoid(),
    name: 'SG 553 | Aloha',
    img: sg,
    price: 0.1,
  },
  {
    type: 'blue',
    id: nanoid(),
    name: 'R8 Revolver | Grip',
    img: revolver,
    price: 0.1,
  },
  {
    type: 'blue',
    id: nanoid(),
    name: 'MP9 | Black Sand',
    img: mp9,
    price: 0.1,
  },
  {
    type: 'purple',
    id: nanoid(),
    name: 'Negev | Lionfish',
    img: negev,
    price: 0.41,
  },
  {
    type: 'purple',
    id: nanoid(),
    name: 'Nova | Wild Six',
    img: nova,
    price: 0.41,
  },
  {
    type: 'purple',
    id: nanoid(),
    name: 'UMP-45 | Arctic Wolf',
    img: ump,
    price: 0.48,
  },
  {
    type: 'purple',
    id: nanoid(),
    name: 'MAG-7 | SWAG-7',
    img: mag7,
    price: 0.4,
  },
  {
    type: 'purple',
    id: nanoid(),
    name: 'Glock-18 | Moonrise',
    img: glock,
    price: 0.77,
  },
  {
    type: 'pink',
    id: nanoid(),
    name: 'AUG | Stymphalian',
    img: aug,
    price: 2.21,
  },
  {
    type: 'pink',
    id: nanoid(),
    name: 'AWP | Mortis',
    img: awp,
    price: 4.4,
  },
  {
    type: 'pink',
    id: nanoid(),
    name: 'USP-S | Cortex',
    img: usps,
    price: 4.84,
  },
  {
    type: 'red',
    id: nanoid(),
    name: 'MP7 | Bloodsport',
    img: mp7,
    price: 4.71,
  },
  {
    type: 'red',
    id: nanoid(),
    name: 'M4A4 | Neo-Noir',
    img: m4a4,
    price: 15.73,
  },
  {
    type: 'rare',
    id: nanoid(),
    name: 'Moto Gloves | POW!',
    img: gloves,
    price: 560,
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
