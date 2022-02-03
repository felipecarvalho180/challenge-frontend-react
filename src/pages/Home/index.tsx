import React from 'react';
import { HeroImage } from '../../components/HeroImage';

import {
  Container,
  SearchBarWrapper,
  SearchBar,
  IconWrapper,
  Icon,
} from './styles';

export function Home() {
  return (
    <Container>
      <HeroImage title={['Explore the most powerful', 'characters in Marvel']}>
        <SearchBarWrapper>
          <SearchBar />
          <IconWrapper>
            <Icon />
          </IconWrapper>
        </SearchBarWrapper>
      </HeroImage>
    </Container>
  );
}
