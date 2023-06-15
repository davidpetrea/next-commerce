import { notFound } from 'next/navigation';
import React from 'react';

const validGames = ['wow', 'diablo4', 'wow-classic'];

const GameInfo = ({ params }: any) => {
  if (!validGames.includes(params.game)) notFound();
  return <div>{params.game}</div>;
};

export default GameInfo;
