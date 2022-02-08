import React from 'react';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { HeroImage } from '../../components/HeroImage';
import { Container } from './styles';

export function Profile() {
  return (
    <Container>
      <Header />
      <HeroImage
        title={['Discover all comics this', 'character took part in']}
        enableBackButton
      />

      <Footer />
    </Container>
  );
}
