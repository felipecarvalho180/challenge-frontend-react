import React from 'react';
import { useTheme } from 'styled-components';

import { Character } from '../../@types/characters';

import {
  Container,
  CharacterImage,
  FavoriteButton,
  Icon,
  Name,
  Description,
  Content,
} from './styles';

export function CharacterCard({ name, thumbnail, description }: Character) {
  const theme = useTheme();

  return (
    <Container>
      <CharacterImage url={`${thumbnail.path}.${thumbnail.extension}`} />
      <Content>
        <FavoriteButton>
          <Icon />
        </FavoriteButton>
        <Name>{name}</Name>
        <Description>
          {description ? description : 'No description'}
        </Description>
      </Content>
    </Container>
  );
}
