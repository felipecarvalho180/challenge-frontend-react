import React from 'react';

import { useCharactersPagination } from '../../hooks/useCharactersPagination';
import { CharacterCard } from '../CharacterCard';
import { Container, CharacterCardContent, Footer } from './styles';

function PaginationComponent() {
  const {
    characters,
    totalCharacters,
    listNumbers,
    pageIndex,
    handlePrevPagination,
    handleNextPagination,
  } = useCharactersPagination();

  return (
    <Container>
      <span>{totalCharacters}</span>
      <CharacterCardContent>
        {characters.map((character) => (
          <CharacterCard key={character.id} {...character} />
        ))}
      </CharacterCardContent>
      <Footer>
        {listNumbers.map((number) => (
          <span key={number}>{number}</span>
        ))}

        <button disabled={pageIndex === 1} onClick={handlePrevPagination}>
          Prev
        </button>
        <button
          disabled={pageIndex === Number(totalCharacters) / 8}
          onClick={handleNextPagination}
        >
          Next
        </button>
      </Footer>
    </Container>
  );
}

export default PaginationComponent;
