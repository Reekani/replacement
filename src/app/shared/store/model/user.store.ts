export interface UserStore {
  login: string;
  password: string;
}

export const initialUserState: UserStore = {
  login: null,
  password: null
}
