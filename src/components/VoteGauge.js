import React from 'react';
import { Pie } from '@visx/shape';
import { Group } from '@visx/group';
import { Text } from '@visx/text';

const style = {
  gaugeContainer: 'bg-[#081C22] rounded-full p-1',
  gaugeText: 'font-bold text-sm',
};

function VoteGauge({ vote }) {
  const width = 35;
  const half = width / 2;
  const restOfVote = 100 - vote;

  const voteColor = () => {
    if (vote >= 70) return '#21D07A';
    if (vote >= 40 && vote < 70) return '#D2D531';
    if (vote > 0 && vote < 40) return '#DA2360';
    else return '#666666';
  };

  const altVoteColor = () => {
    if (restOfVote <= 30) return '#204428';
    if (restOfVote <= 60 && restOfVote > 30) return '#3F3C0F';
    if (restOfVote < 100 && restOfVote > 60) return '#571435';
    else return '#666666';
  };

  const data = [
    { key: 1, amount: vote, color: voteColor() },
    { key: 2, amount: restOfVote, color: altVoteColor() },
  ];

  return (
    <div className={style.gaugeContainer}>
      <svg width={width} height={width}>
        <Group top={half} left={half}>
          <Pie
            data={data}
            pieValue={(data) => data.amount}
            outerRadius={half}
            innerRadius={half - 2}
            padAngle={0.1}>
            {(pie) => {
              return pie.arcs.map((arc) => {
                return (
                  <g key={arc.data.key}>
                    <path d={pie.path(arc)} fill={arc.data.color}></path>
                  </g>
                );
              });
            }}
          </Pie>
          <Text
            className={style.gaugeText}
            textAnchor="middle"
            verticalAnchor="middle"
            fill="#FFF">
            {vote}
          </Text>
        </Group>
      </svg>
    </div>
  );
}

export default VoteGauge;
