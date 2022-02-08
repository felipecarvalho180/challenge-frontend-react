import React from 'react';

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
  return (
    <Container to="profile">
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
