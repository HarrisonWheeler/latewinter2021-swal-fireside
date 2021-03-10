<template>
  <div class="movie-results border border-danger">
    <h3> Search Results:  {{state.movies.length}}</h3>
    <ol>
      <!-- NOTE V-for itterates over the collection of resutls
      binding the key to a unique value within the movie object -->
      <li v-for="movieData in state.movies" :key="movieData.id">
        <!-- NOTE props are passed through element attributes, here bound due to the value being an object -->
        <Movie :movie="movieData"/>
      </li>
    </ol>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { computed } from 'vue'
import { AppState } from '../AppState'
import Movie from './Movie'

export default {
  name: 'MovieResults',
  setup() {
    const state = reactive({
      // NOTE computed watches for changes on any of its returned values
      movies: computed(() => AppState.movies)
    })
    return {
      state
    }
  },
  components: {
    Movie
  }
}
</script>

<style scoped>
li {
  cursor: pointer
}

li:hover {
  background-color: rgb(187, 186, 186);
}
</style>
