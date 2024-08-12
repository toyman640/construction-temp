import React from 'react';
import { Gauge } from '@mui/x-charts/Gauge';

const ProgressChart = () => (
  <Gauge width={100} height={100} value={70} valueMax={100} startAngle={-110} endAngle={110} text={({ value, valueMax }) => `${value} / ${valueMax}`} />
);

export default ProgressChart;
