import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.colors.primary};
  padding: 32px 215px;
`;

export const Text = styled.span`
  font-size: 20px;
  line-height: 23px;
  color: ${({ theme }) => theme.colors.text};
`;

export const Name = styled(Text)`
  color: ${({ theme }) => theme.colors.textGray};
`;
