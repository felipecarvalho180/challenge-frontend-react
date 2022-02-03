import React from 'react';

import { Banner, BannerContent, TitleWrapper, Title } from './styles';

interface HeroImageProps {
  children: React.ReactNode;
  title?: string[];
}

export function HeroImage({ children, title }: HeroImageProps) {
  return (
    <Banner>
      <BannerContent>
        <TitleWrapper>
          {title && title.map((item) => <Title key={item}>{item}</Title>)}
        </TitleWrapper>
        {children}
      </BannerContent>
    </Banner>
  );
}
