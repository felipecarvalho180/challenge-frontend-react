import styled from 'styled-components';

import bannerImage from '../../assets/banner.png';

export const Banner = styled.div`
  display: flex;
  width: 100%;
  height: 491px;
  background-image: url(${bannerImage});
  background-position: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const BannerContent = styled.div``;

export const TitleWrapper = styled.div`
  margin-bottom: 38px;
`;

export const Title = styled.div`
  font-weight: bold;
  font-size: 42px;
  line-height: 49px;
  color: ${({ theme }) => theme.colors.text};
`;
