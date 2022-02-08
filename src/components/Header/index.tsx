import React from 'react';

import {
  Container,
  Logo,
  LogoTitle,
  LogoWrapper,
  TeamButton,
  TeamButtonIcon,
  TeamButtonText,
} from './styles';

export function Header() {
  return (
    <Container>
      <LogoWrapper>
        <Logo />
        <LogoTitle>Marvel Strike Team</LogoTitle>
      </LogoWrapper>

      <TeamButton to="favorites">
        <TeamButtonText>Your team</TeamButtonText>
        <TeamButtonIcon />
      </TeamButton>
    </Container>
  );
}
