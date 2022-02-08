import React from 'react';
import { useNavigate } from 'react-router';

import {
  Banner,
  BannerContent,
  TitleWrapper,
  Title,
  BackButton,
  BackButtonText,
  BackIcon,
} from './styles';

interface HeroImageProps {
  children?: React.ReactNode;
  title?: string[];
  alignCenter?: boolean;
  enableBackButton?: boolean;
}

export function HeroImage({
  children,
  title,
  alignCenter = false,
  enableBackButton = false,
}: HeroImageProps) {
  const navigate = useNavigate();

  return (
    <Banner alignCenter={alignCenter}>
      <BannerContent alignCenter={alignCenter}>
        {enableBackButton && (
          <BackButton onClick={() => navigate(-1)}>
            <BackButtonText>Return to previous page</BackButtonText>
            <BackIcon />
          </BackButton>
        )}
        <TitleWrapper>
          {title && title.map((item) => <Title key={item}>{item}</Title>)}
        </TitleWrapper>
        {children}
      </BannerContent>
    </Banner>
  );
}
