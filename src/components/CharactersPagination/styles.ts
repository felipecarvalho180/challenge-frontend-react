import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.text};
`;

export const Footer = styled.div`
  display: flex;
`;
