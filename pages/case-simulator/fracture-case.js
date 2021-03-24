import React from 'react';
import Roullete from '../../components/Roullete';

import { data } from '../../data/fracture';

export default function Clutch() {
  return <Roullete data={data} casePrice={Number(0.55)} />;
}
