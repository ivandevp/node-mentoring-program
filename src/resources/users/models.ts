import uuid from "uuid";
import { User } from "../../types";

let users: User[] = [];

/** User Model */
export const userModel = {
  getAll(): User[] {
    return users.filter(user => !user.isDeleted);
  },
  getById(id: string): User | undefined {
    return users.find(user => user.id === id);
  },
  create(user: User): User {
    user.id = uuid();
    user.isDeleted = false;
    users.push(user);

    return user;
  },
  update(id: string, fields: User): User | null {
    let updatedUser = null;
    users = users.map(user => {
      if (user.id === id) {
        updatedUser = {
          ...user,
          ...fields
        };
        return updatedUser;
      }

      return user;
    });

    return updatedUser;
  },
  delete(id: string): User | null {
    let deletedUser = null;
    users = users.map(user => {
      if (user.id === id) {
        deletedUser = user;
        user.isDeleted = true;
      }

      return user;
    });

    return deletedUser;
  },
  searchByLogin(login: string, limit: number): User[] {
    const matchedUsers = users.filter(user =>
      user.login.toLowerCase().includes(login.toLowerCase())
    );

    if (matchedUsers.length > limit) {
      return matchedUsers.slice(0, limit);
    }

    return matchedUsers;
  }
};
