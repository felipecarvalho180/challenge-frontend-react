import React, { useEffect } from 'react';

import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { HeroImage } from '../../components/HeroImage';
import CharactersPagination from '../../components/CharactersPagination';
import { Container, Content } from './styles';
import { useCharactersPagination } from '../../hooks/useCharactersPagination';

export function Favorites() {
  const {
    initialGet,
    characters,
    totalCharacters,
    listNumbers,
    pageIndex,
    handlePageNumberSelected,
    handleNextPagination,
    handlePrevPagination,
  } = useCharactersPagination();

  useEffect(() => {
    initialGet();
  }, []);

  return (
    <Container>
      <Header />
      <HeroImage
        title={['Here is your own strike', 'team choice']}
        enableBackButton
      />
      <Content>
        <CharactersPagination
          characters={characters}
          listNumbers={listNumbers}
          pageIndex={pageIndex}
          totalCharacters={totalCharacters}
          handlePageNumberSelected={handlePageNumberSelected}
          handleNextPagination={handleNextPagination}
          handlePrevPagination={handlePrevPagination}
          initialGet={() => {
            initialGet();
          }}
        />
      </Content>

      <Footer />
    </Container>
  );
}
