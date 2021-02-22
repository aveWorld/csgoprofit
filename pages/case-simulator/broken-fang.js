import React from 'react';
import Roullete from '../../components/Roullete';

import { data } from '../../data/brokenFang';

export default function BrokenFang() {
  return <Roullete data={data} casePrice={Number(0.71)} />;
}
