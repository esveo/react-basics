import styled from '@emotion/styled/macro';
import { Link as RouterLink, NavLink as RouterNavLink } from 'react-router-dom';

export const Link = styled(RouterLink)`
  color: rgb(63, 167, 254);
  text-decoration: none;
`;

export const NavLink = Link.withComponent(RouterNavLink);
