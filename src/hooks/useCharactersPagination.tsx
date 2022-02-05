import { useEffect, useMemo, useState } from 'react';
import { Character } from '../@types/characters';
import { getCharacters } from '../services/characters';

export function useCharactersPagination() {
  const [characters, setCharacters] = useState<Character[]>([] as Character[]);
  const [totalCharacters, setTotalCharacters] = useState<string>('0');
  const [pageIndex, setPageIndex] = useState<number>(0);
  const [listNumbers, setListNumbers] = useState<number[]>([1, 2, 3]);

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

  useMemo(() => {
    const list: number[] = [];
    for (let i = pageIndex - 2; i <= pageIndex + 2; i++) {
      if (i > 0 && i < Number(totalCharacters) / 8) {
        list.push(i);
      }
    }

    setListNumbers(list);
  }, [pageIndex]);

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

  return {
    characters,
    totalCharacters,
    pageIndex,
    listNumbers,
    handleNextPagination,
    handlePrevPagination,
  };
}
