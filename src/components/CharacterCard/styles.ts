import styled from 'styled-components';
import { MdGroup } from 'react-icons/md';

interface CharacterImageProps {
  url: string;
}

interface IconProps {
  selected?: boolean;
}

export const Container = styled.div`
  border-bottom-left-radius: 20px;
  border-top-right-radius: 20px;
  width: 270px;
  height: 370px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  overflow: hidden;
`;

export const CharacterImage = styled.div<CharacterImageProps>`
  width: 270px;
  height: 198px;
  background: ${({ url }) => `url(${url})`};
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Content = styled.div`
  position: relative;
  padding: 0px 30px 20px 30px;
  white-space: nowrap;
`;

export const FavoriteButton = styled.button<IconProps>`
  width: 54px;
  height: 54px;
  background-color: ${({ selected, theme }) =>
    selected ? theme.colors.secondary : theme.colors.text};
  position: absolute;
  top: -45px;
  right: 10px;
  border-radius: 50%;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const Icon = styled(MdGroup)<IconProps>`
  font-size: 24px;
  color: ${({ selected, theme }) =>
    selected ? theme.colors.text : theme.colors.primary};
`;

export const Name = styled.h1`
  font-weight: bold;
  font-size: 32px;
  line-height: 37px;
  color: ${({ theme }) => theme.colors.primary};
  text-overflow: ellipsis;
  overflow: hidden;
  margin-right: 25px;
`;

export const Description = styled.p`
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: ${({ theme }) => theme.colors.primary};
  max-width: 100%;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: pre-wrap;
`;
