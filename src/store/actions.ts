interface BaseAction {
  setState(vuex: any, payload: SetStateData): void;
}

interface SetStateData {
  name: string;
  email: string;
}

export const actions: BaseAction = {
  setState({ commit }, data: SetStateData): void {
    commit('SET_STATE', data);
  },
};
