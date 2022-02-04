import styled from 'styled-components';

import bannerImage from '../../assets/banner.png';

export const Banner = styled.div`
  display: flex;
  width: 100%;
  background-image: url(${bannerImage});
  background-position: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const BannerContent = styled.div`
  padding: 20px;
  margin-top: 132px;
  margin-bottom: 163px;
`;

export const TitleWrapper = styled.div`
  margin-bottom: 38px;
`;

export const Title = styled.div`
  font-weight: bold;
  font-size: 42px;
  line-height: 49px;
  color: ${({ theme }) => theme.colors.text};
`;
