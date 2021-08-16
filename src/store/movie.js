export default {
  // module!  module화되서 사용
  namespaced: true,
  // data!    취급해야하는 데이터를 의미
  state: () => ({
    movies: []
  }),
  // computed!    계산된 데이터를 만든다.
  getters: {
    movieIds(state) {
      return state.movies.map(m => m.imdbId)
    }
  },
  // methods!     함수를 만들어 활용
  // 변이     데이터를 변경 시킬수 있다. mutations를 통해서만 변경이 가능하다.
  mutations: {
    resetMovies(state) {
      state.movies = []
    }
  },
  // 비동기
  actions: {
    searchMovies() {
      
    }
  }
}