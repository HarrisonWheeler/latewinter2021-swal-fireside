<template>
  <div class="app">
    <header class="container-fluid bg-primary text-light">
      <div class="row">
        <div class="col text-center">
          <h1> Welcome to <img alt="Vue logo" src="./assets/logo.png">ue-Flix</h1>
        </div>
      </div>
    </header>
    <main class="container">
      <div class="row">
        <div class="col">
          <!-- NOTE Search gets defined with prevent to stop reload -->
          <form @submit.prevent="search">
            <!-- NOTE We bind to the state with v-model from our input -->
            <input class="mx-1" type="text" placeholder="Movie Title..." v-model="state.query">
            <button type="submit" class="btn btn-outline-success">Search</button>
          </form>
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <MovieResults />
        </div>
        <div class="col-6">
          <MovieDetails />
        </div>
      </div>
    </main>
    <footer class="container-fluid bg-primary text-light">
      <div class="row">
        <div class="col text-center">
          <p class="m-3"> Made with ♥ by codeworks</p>
        </div>
      </div>
    </footer>
  </div>

</template>

<script>
import { computed, reactive } from 'vue'
import { movieService } from './services/MovieService'
import { AppState } from './AppState'
import MovieResults from './components/MovieResults'
import MovieDetails from './components/MovieDetails'

export default {
  name: 'App',
  setup() {
    const state = reactive({
      query: '',
      movies: computed(() => AppState.movies)
    })
    return {
      state,
      async search() {
        try {
          // NOTE call to service and await the results
          await movieService.searchMovies(state.query)
          // NOTE due to two way data binding we reset the form by resetting the value of query
          state.query = ''
        } catch (error) {
          console.error(error)
        }
      }
    }
  },
  components: {
    MovieResults,
    MovieDetails
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.app {
 display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex-grow: 1;
}

h1 img {
  height: 1em;
}
</style>
