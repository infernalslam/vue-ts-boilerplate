import { BaseState } from './state';

interface BaseMutation {
  SET_STATE(state: BaseState, payload: SetStatePayload): void;
}

interface SetStatePayload {
  name: string;
  email: string;
}

export const mutations: BaseMutation = {
  SET_STATE(state: BaseState, payload: SetStatePayload): void {
    state.name = payload.name;
    state.email = payload.email;
  },
};
