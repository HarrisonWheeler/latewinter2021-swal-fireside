<template>
  <div class="movie-details" v-if="state.activeMovie.id">
     <img
      :src="`https://image.tmdb.org/t/p/w500/${state.activeMovie.poster_path}`"
      alt="Movie Poster"
    >
    <p>{{state.activeMovie.overview}}</p>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { computed } from 'vue'
import { AppState } from '../AppState'
export default {
  name: 'movie-details',
  setup() {
    const state = reactive({
      activeMovie: computed(() => AppState.activeMovie)
    })
    return {
      state
    }
  },
  components: {}
}
</script>

<style scoped>
img {
  width: 100%;
}
</style>
