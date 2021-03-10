import { AppState } from '../AppState'
import { movieApi } from './AxiosService'

class MovieService {
  async searchMovies(query) {
    const res = await movieApi.get(query)
    AppState.movies = res.data.results
  }

  setActive(movie) {
    AppState.activeMovie = movie
  }
}

export const movieService = new MovieService()
