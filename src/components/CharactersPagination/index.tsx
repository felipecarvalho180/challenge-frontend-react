import React, { useEffect, useMemo, useState } from 'react';

import { Character } from '../../@types/characters';
import { getCharacters } from '../../services/characters';
import { Container, Footer } from './styles';

function PaginationComponent() {
  const [characters, setCharacters] = useState<Character[]>([] as Character[]);
  const [totalCharacters, setTotalCharacters] = useState<string>('0');
  const [pageIndex, setPageIndex] = useState<number>(0);
  const [listNumbers, setListNumbers] = useState<number[]>([1, 2, 3]);

  useMemo(() => {
    const list: number[] = [];
    for (let i = pageIndex - 2; i <= pageIndex + 2; i++) {
      if (i > 0 && i < Number(totalCharacters) / 8) {
        list.push(i);
      }
    }

    setListNumbers(list);
  }, [pageIndex]);

  useEffect(() => {
    async function initialGet() {
      try {
        const response = await getCharacters({ offset: 0 });

        setCharacters(response.results);
        setTotalCharacters(response.total);
        setPageIndex(1);
      } catch (error) {
        if (error instanceof TypeError) {
          console.error(error.message);
        }
      }
    }

    initialGet();
  }, []);

  async function handleNextPagination() {
    try {
      const response = await getCharacters({ offset: pageIndex * 8 });
      setCharacters(response.results);
      setPageIndex(pageIndex + 1);
    } catch (error) {
      if (error instanceof TypeError) {
        console.error(error.message);
      }
    }
  }

  async function handlePrevPagination() {
    try {
      const response = await getCharacters({ offset: characters.length - 8 });
      setCharacters(response.results);
      setPageIndex(pageIndex - 1);
    } catch (error) {
      if (error instanceof TypeError) {
        console.error(error.message);
      }
    }
  }

  return (
    <Container>
      <span>{totalCharacters}</span>
      {characters.map((character) => (
        <span key={character.id}>{character.name}</span>
      ))}
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
