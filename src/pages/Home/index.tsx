import React from 'react';

import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { HeroImage } from '../../components/HeroImage';
import CharactersPagination from '../../components/CharactersPagination';
import {
  Container,
  SearchBarWrapper,
  SearchBar,
  IconWrapper,
  Icon,
  Content,
} from './styles';

export function Home() {
  return (
    <Container>
      <Header />
      <HeroImage title={['Explore the most powerful', 'characters in Marvel']}>
        <SearchBarWrapper>
          <SearchBar />
          <IconWrapper>
            <Icon />
          </IconWrapper>
        </SearchBarWrapper>
      </HeroImage>

      <Content>
        <CharactersPagination />
      </Content>

      <Footer />
    </Container>
  );
}
