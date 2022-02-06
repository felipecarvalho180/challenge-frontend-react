import { useCallback, useContext, useMemo, useState } from 'react';

import { Character } from '../@types/characters';
import { LoadingContext } from '../context/LoadingContext';
import { getCharacters } from '../services/characters';

export function useCharactersPagination() {
  const { updateLoading } = useContext(LoadingContext);

  const [activeCharacterName, setActiveCharacterName] = useState<string>();
  const [characters, setCharacters] = useState<Character[]>([] as Character[]);
  const [totalCharacters, setTotalCharacters] = useState<number>(0);
  const [pageIndex, setPageIndex] = useState<number>(0);
  const [listNumbers, setListNumbers] = useState<number[]>([1, 2, 3]);
  const [offset, setOffset] = useState<number>(0);

  useMemo(() => {
    const list: number[] = [];
    for (let i = pageIndex - 2; i <= pageIndex + 2; i++) {
      if (
        Math.round(Number(totalCharacters) / 8) === 0 &&
        !list.find((item) => item === 1)
      ) {
        list.push(1);
      }

      if (i > 0 && i <= Math.round(Number(totalCharacters) / 8)) {
        list.push(i);
      }
    }

    setListNumbers(list);
  }, [pageIndex, totalCharacters]);

  const initialGet = useCallback(async () => {
    updateLoading(true);
    try {
      const response = await getCharacters({ offset });
      console.log(response.results);
      setCharacters(response.results);
      setTotalCharacters(response.total);
      setOffset(0);
      setPageIndex(1);
      setActiveCharacterName('');
    } catch (error) {
      if (error instanceof TypeError) {
        console.error(error.message);
      }
    } finally {
      updateLoading(false);
    }
  }, []);

  const handleNextPagination = useCallback(async () => {
    updateLoading(true);
    try {
      const response = await getCharacters({
        offset: offset + 8,
        characterName: activeCharacterName,
      });
      setCharacters(response.results);
      setOffset(response.offset);
      setPageIndex(pageIndex + 1);
    } catch (error) {
      if (error instanceof TypeError) {
        console.error(error.message);
      }
    } finally {
      updateLoading(false);
    }
  }, [offset, pageIndex, activeCharacterName]);

  const handlePrevPagination = useCallback(async () => {
    updateLoading(true);
    try {
      const response = await getCharacters({
        offset: offset - 8,
        characterName: activeCharacterName,
      });

      setCharacters(response.results);
      setOffset(response.offset);
      setPageIndex(pageIndex - 1);
    } catch (error) {
      if (error instanceof TypeError) {
        console.error(error.message);
      }
    } finally {
      updateLoading(false);
    }
  }, [offset, pageIndex, activeCharacterName]);

  const handlePageNumberSelected = useCallback(
    async (pageNumber: number) => {
      updateLoading(true);
      try {
        const response = await getCharacters({
          offset: pageNumber * 8 - 8,
          characterName: activeCharacterName,
        });
        setCharacters(response.results);
        setOffset(response.offset);
        setPageIndex(pageNumber);
      } catch (error) {
        if (error instanceof TypeError) {
          console.error(error.message);
        }
      } finally {
        updateLoading(false);
      }
    },
    [pageIndex, activeCharacterName],
  );

  const handleSearchByString = useCallback(async (characterName?: string) => {
    updateLoading(true);
    try {
      setActiveCharacterName(characterName);
      const response = await getCharacters({ offset: 0, characterName });

      setCharacters(response.results);
      setOffset(response.offset);
      setTotalCharacters(response.total);
      setPageIndex(1);
    } catch (error) {
      if (error instanceof TypeError) {
        console.error(error.message);
      }
    } finally {
      updateLoading(false);
    }
  }, []);

  return {
    characters,
    totalCharacters,
    pageIndex,
    listNumbers,
    initialGet,
    handleNextPagination,
    handlePrevPagination,
    handlePageNumberSelected,
    handleSearchByString,
  };
}
