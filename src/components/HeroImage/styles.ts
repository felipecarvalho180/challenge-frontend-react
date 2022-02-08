import styled, { css } from 'styled-components';
import { MdUndo } from 'react-icons/md';

import bannerImage from '../../assets/banner.png';

interface BannerProps {
  alignCenter: boolean;
}

export const Banner = styled.div<BannerProps>`
  display: flex;
  width: 100%;
  background-image: url(${bannerImage});
  background-position: center;
  justify-content: center;
  flex-direction: column;
  max-height: 500px;
  align-items: ${({ alignCenter }) => alignCenter && 'center'};
`;

export const BannerContent = styled.div<BannerProps>`
  margin-top: 132px;
  margin-bottom: 163px;
  padding: 41px 215px;

  ${({ alignCenter }) =>
    alignCenter &&
    css`
      padding: 0;
    `}
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  position: absolute;
  right: 215px;
  top: 161px;
`;

export const BackButtonText = styled.span`
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: ${({ theme }) => theme.colors.secondaryLight};
  margin-right: 10px;
`;

export const BackIcon = styled(MdUndo)`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.secondaryLight};
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
