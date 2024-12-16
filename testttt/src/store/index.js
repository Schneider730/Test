import { createStore } from 'vuex';

export default createStore({
  state: {
    categories: []
  },
  mutations: {
    setCategories(state, categories) {
      state.categories = categories;
    }
  },
  actions: {
    fetchCategories({ commit }) {
      return new Promise((resolve) => {
        import('../../category.json')
          .then((data) => {
            commit('setCategories', data.default);
            resolve();
          });
      });
    }
  },
  getters: {
    categories: (state) => state.categories
  }
});
