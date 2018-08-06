import { BaseState } from './state';

interface BaseGetter {
  getName(state: BaseState): string;
  getEmail(state: BaseState): string;
}

export const getters: BaseGetter = {
  getName(state: BaseState): string {
    return state.name;
  },
  getEmail(state: BaseState): string {
    return state.email;
  },
};
