import styled from 'styled-components';
import { IoClose } from 'react-icons/io5';

interface PageIndexNumbersProps {
  activePage?: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CharacterCardContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  column-gap: 30px;
  row-gap: 52px;
  margin-bottom: 23px;
`;

export const ClearSearchButton = styled.button`
  display: flex;
  align-items: center;
  width: fit-content;
  align-self: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.text};
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 23px;

  :hover {
    background-color: ${({ theme }) => theme.colors.secondaryHover};
  }
`;

export const ClearSearchIcon = styled(IoClose)`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.text};
  margin-right: 10px;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const PageIndexNumbersWrapper = styled.div`
  display: flex;
  margin-right: 170px;
  column-gap: 10px;
`;

export const PageIndexNumbers = styled.button<PageIndexNumbersProps>`
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: ${({ theme, activePage, disabled }) =>
    disabled
      ? theme.colors.disabled
      : activePage
      ? theme.colors.secondary
      : theme.colors.primary};
`;

export const PageIndex = styled.button`
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: ${({ theme, disabled }) =>
    disabled ? theme.colors.disabled : theme.colors.primary};

  :last-child {
    margin-left: 27px;
  }
`;
