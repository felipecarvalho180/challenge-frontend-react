import React from 'react';

import { Container, Name, Text } from './styles';

export function Footer() {
  return (
    <Container>
      <Text>Data provided by Marvel. © 2020 MARVEL</Text>
      <Text>
        Developed by <Name>Giovani</Name> and <Name>Luís</Name>
      </Text>
    </Container>
  );
}
