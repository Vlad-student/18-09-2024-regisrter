import { createContext } from 'react';

export const ThemeContext = createContext();
// const ThemeContext = {Provider:{}, Consumer:{}}

const userAccount = {
  firstName: 'Brad',
  lastName: 'Pitt',
};
export const UserAccountContext = createContext(userAccount);
// const UserAccountContext = {Provider:{value: userAccount}, Consumer:{}}

export const UserContext = createContext();