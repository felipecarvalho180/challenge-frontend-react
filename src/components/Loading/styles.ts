import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: white;
  position: fixed;
  z-index: 9999;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.primaryOpacity};
`;
