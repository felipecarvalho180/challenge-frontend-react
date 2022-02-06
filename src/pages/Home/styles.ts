import styled from 'styled-components';
import { BiSearchAlt2 } from 'react-icons/bi';

export const Container = styled.div`
  height: 100vh;
`;

export const SearchBarWrapper = styled.div`
  display: flex;
  align-items: flex-start;

  @media (min-width: 1024px) {
    width: 670px;
  }
`;

export const SearchBar = styled.input.attrs({
  placeholder: 'Type in a character name',
})`
  width: 100%;
  height: 67px;
  font-size: 24px;
  line-height: 28px;
  padding-left: 30px;
  border-bottom-left-radius: 20px;
  border-top-left-radius: 5px;
  border: none;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
  }
  :-ms-input-placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
  }
`;

export const IconWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 94px;
  height: 70px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-top-right-radius: 20px;

  :hover {
    background-color: ${({ theme }) => theme.colors.secondaryHover};
  }
`;

export const Icon = styled(BiSearchAlt2)`
  color: ${({ theme }) => theme.colors.text};
  font-size: 28px;
`;

export const Content = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 41px 215px;
`;

export const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const Title = styled.h1`
  font-size: 42px;
  line-height: 49px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Results = styled.span`
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: ${({ theme }) => theme.colors.primary};
`;
