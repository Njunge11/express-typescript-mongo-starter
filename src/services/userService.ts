import { findUserById } from '../models/users';

export const getUserById = (id: string) => {
  return findUserById(id);
};
