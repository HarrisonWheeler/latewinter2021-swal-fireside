<template>
  <div class="movie" @click="setActiveMovie">
  <div class="media">
    <!-- NOTE props can be accessed directly within the template by name -->
    <img class="mr-3" :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" alt="Movie Poster">
    <div class="media-body">
      <h5 class="mt-0">{{movie.title}}</h5>
      <p>Score: {{movie.vote_average}}</p>
    </div>
</div>
  </div>
</template>

<script>
import { movieService } from '../services/MovieService'
import NotificationService from '../services/NotificationService'

export default {
  name: 'movie',
  props: {
    movie: Object
  },
  setup(props) {
    return {
      async setActiveMovie() {
        // NOTE make sure to npm i axios and import it into the component where you need it

        if (await NotificationService.confirmAction('Hi Alex', 'lets delort this', 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c78bc3fc-9f08-47ca-81ae-d89055c7ec49/ddb5rzn-8a9d6155-7aa1-418a-8081-9227853f2c20.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvYzc4YmMzZmMtOWYwOC00N2NhLTgxYWUtZDg5MDU1YzdlYzQ5XC9kZGI1cnpuLThhOWQ2MTU1LTdhYTEtNDE4YS04MDgxLTkyMjc4NTNmMmMyMC5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.rt8BHtgkvctiKcaPNhjepb9rD-xwpvnEQkVyhi1aKE4')) { movieService.setActive(props.movie) }
      }
    }
  },
  components: {}
}
</script>

<style scoped>
img {
  width: 100px;
}
</style>
