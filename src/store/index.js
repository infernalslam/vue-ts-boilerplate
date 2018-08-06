import Vue from 'vue';
import Vuex from 'vuex';
import { state, BaseState } from './state';
import { mutations, BaseMutation } from './mutations';
import { actions, BaseAction } from './actions';
import { getters, BaseGetter } from './getters';
// import { StoreOptions } from 'vuex';

Vue.use(Vuex);

// interface RootState {
//   state: BaseState;
//   mutations: BaseMutation;
//   actions: BaseAction;
//   getters: BaseGetter;
// }

// const store: StoreOptions<BaseState> = {
//   state,
//   mutations,
//   actions,
//   getters,
// };

const store = {
  state,
  mutations,
  actions,
  getters,
};

export default new Vuex.Store(store);
