import React from 'react';

import { Character } from '../../@types/characters';
import { CharacterCard } from '../CharacterCard';
import {
  Container,
  CharacterCardContent,
  Footer,
  PageIndexNumbersWrapper,
  PageIndexNumbers,
  PageIndex,
  ClearSearchButton,
  ClearSearchIcon,
} from './styles';

interface PaginationComponentProps {
  filter?: string;
  characters: Character[];
  totalCharacters: number;
  listNumbers: number[];
  pageIndex: number;
  handlePageNumberSelected: (pageIndex: number) => void;
  handleNextPagination: () => void;
  handlePrevPagination: () => void;
  initialGet: () => void;
}

function PaginationComponent({
  filter,
  characters,
  totalCharacters,
  listNumbers,
  pageIndex,
  handlePageNumberSelected,
  handleNextPagination,
  handlePrevPagination,
  initialGet,
}: PaginationComponentProps) {
  return (
    <Container>
      <CharacterCardContent>
        {characters.map((character) => (
          <CharacterCard key={character.id} {...character} />
        ))}
      </CharacterCardContent>

      {filter && (
        <ClearSearchButton onClick={initialGet}>
          <ClearSearchIcon /> Clear search
        </ClearSearchButton>
      )}

      <Footer>
        <PageIndexNumbersWrapper>
          {listNumbers.map((number) => (
            <PageIndexNumbers
              onClick={() => handlePageNumberSelected(number)}
              key={number}
              activePage={pageIndex === number}
            >
              {number}
            </PageIndexNumbers>
          ))}
          {!listNumbers.find(
            (number) => number === Math.round(Number(totalCharacters) / 8),
          ) &&
            listNumbers.length > 2 && (
              <>
                <PageIndexNumbers disabled>...</PageIndexNumbers>
                <PageIndexNumbers
                  onClick={() =>
                    handlePageNumberSelected(
                      Math.round(Number(totalCharacters) / 8),
                    )
                  }
                >
                  {Math.round(Number(totalCharacters) / 8)}
                </PageIndexNumbers>
              </>
            )}
        </PageIndexNumbersWrapper>

        <PageIndex disabled={pageIndex === 1} onClick={handlePrevPagination}>
          Prev
        </PageIndex>
        <PageIndex
          disabled={
            pageIndex === Math.round(Number(totalCharacters) / 8) ||
            Math.round(Number(totalCharacters) / 8) <= 0
          }
          onClick={handleNextPagination}
        >
          Next
        </PageIndex>
      </Footer>
    </Container>
  );
}

export default PaginationComponent;
