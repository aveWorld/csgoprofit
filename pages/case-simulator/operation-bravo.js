import React from 'react';
import Roullete from '../../components/Roullete';

import { data } from '../../data/bravo';

export default function Bravo() {
  return <Roullete data={data} casePrice={Number(25.53)} />;
}
