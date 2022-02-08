import styled from 'styled-components';
import { FaUsers } from 'react-icons/fa';

import logoImage from '../../assets/logo.png';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.colors.primary};
  padding: 41px 215px;
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Logo = styled.div`
  width: 60px;
  height: 69px;
  background-image: url(${logoImage});
  background-position: center;
  margin-right: 19px;
`;

export const LogoTitle = styled.span`
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
  color: ${({ theme }) => theme.colors.text};
`;

export const TeamButton = styled(Link)`
  display: flex;
  align-items: center;
  padding: 15px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 20px;
  text-decoration: none;

  :hover {
    background-color: ${({ theme }) => theme.colors.secondaryHover};
  }
`;

export const TeamButtonText = styled.span`
  font-size: 24px;
  line-height: 28px;
  color: ${({ theme }) => theme.colors.text};
  margin-right: 12px;
`;

export const TeamButtonIcon = styled(FaUsers)`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.text};
`;
