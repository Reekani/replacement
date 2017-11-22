export interface LeftBarStore {
  mode: 'LOGIN' | 'REGISTER' | 'LOGGED_IN';
}

export const initialLeftBarState: LeftBarStore = {
  mode: 'LOGIN'
}
