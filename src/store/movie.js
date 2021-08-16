import axios from 'axios'

export default {
  // module!  module화되서 사용
  namespaced: true,
  // data!    취급해야하는 데이터를 의미
  state: () => ({
    movies: [],
    message: '',
    loading: false
  }),
  // computed!    계산된 데이터를 만든다.
  getters: {},
  // methods!     함수를 만들어 활용
  // 변이     데이터를 변경 시킬수 있다. mutations를 통해서만 변경이 가능하다.
  mutations: {
    updateState(state, payload) {
      // ['movies', 'message', 'loading']
      Object.keys(payload).forEach(key => {
        state[key] = payload[key]
      })
    },
    resetMovies(state) {
      state.movies = []
    }
  },
  // 비동기
  actions: {
    async searchMovies({commit}, payload) {
      const {title, type, number, year} = payload
      // Search Movie..
      const OMDB_API_KEY = '7035c60c'
      const res = await axios.get(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=1`)
      const {Search, totalResult} = res.data
      commit('updateState', {
        movies: Search
      })
    }
  }
}