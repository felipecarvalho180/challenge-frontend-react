import React, { useContext } from 'react';
import Lottie from 'react-lottie';
import { LoadingContext } from '../../context/LoadingContext';
import animationData from '../../looties/45560-ironman-loader.json';

import { Container } from './styles';

// import {  } from 'react-icons'

export function Loading() {
  const { isLoading } = useContext(LoadingContext);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  if (!isLoading) return null;

  return (
    <Container>
      <Lottie options={defaultOptions} height={100} width={100} />
    </Container>
  );
}
