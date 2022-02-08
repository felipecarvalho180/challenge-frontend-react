import React, { useEffect, useState } from 'react';

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
  ContentHeader,
  Title,
  Results,
} from './styles';
import { useCharactersPagination } from '../../hooks/useCharactersPagination';

export function Home() {
  const {
    initialGet,
    characters,
    totalCharacters,
    listNumbers,
    pageIndex,
    handleSearchByString,
    handlePageNumberSelected,
    handleNextPagination,
    handlePrevPagination,
  } = useCharactersPagination();

  const [characterName, setCharacterName] = useState<string>();

  useEffect(() => {
    initialGet();
  }, []);

  function handleSearch() {
    document.getElementById('content')?.scrollIntoView({
      behavior: 'smooth',
    });

    handleSearchByString(characterName);
  }

  return (
    <Container>
      <Header />
      <HeroImage
        title={['Explore the most powerful', 'characters in Marvel']}
        alignCenter
      >
        <SearchBarWrapper>
          <SearchBar
            onChange={(e) => setCharacterName(e.target.value)}
            value={characterName}
          />
          <IconWrapper onClick={handleSearch} disabled={!characterName}>
            <Icon />
          </IconWrapper>
        </SearchBarWrapper>
      </HeroImage>

      <Content id="content">
        <ContentHeader>
          <Title>Characters</Title>
          <Results>{totalCharacters} results</Results>
        </ContentHeader>
        <CharactersPagination
          filter={characterName}
          characters={characters}
          listNumbers={listNumbers}
          pageIndex={pageIndex}
          totalCharacters={totalCharacters}
          handlePageNumberSelected={handlePageNumberSelected}
          handleNextPagination={handleNextPagination}
          handlePrevPagination={handlePrevPagination}
          initialGet={() => {
            initialGet();
            setCharacterName('');
          }}
        />
      </Content>

      <Footer />
    </Container>
  );
}
