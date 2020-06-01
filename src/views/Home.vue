<template>
<!--  <div class="home">-->
<!--    <img alt="Vue logo" src="../assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/-->
<!--      -->
<!--  </div>-->
    <div>
        <!-- template categries -->
        <v-container class="ma-0 pa-0" grid-list-sm>
            <div class="text-right">
                <v-btn small text to="/categories" class="blue--text">
                    All Categories <v-icon>mdi-chevron-right</v-icon>
                </v-btn>
            </div>
            <v-layout wrap>
                <v-flex v-for="(category) in categories"
                        :key="`category-`+category.id"
                        xs6>
                    <v-card :to="'/category/'+ category.slug">
                        <v-img
                                :src="getImage('categories/' + category.image)"
                                class="white--text"
                                max-height="300px"
                        >
                            <v-card-title
                                    class="fill-height align-end"
                                    v-text="category.name"
                            ></v-card-title>
                            <v-card-text>
                                {{category.image}}
                            </v-card-text>
                        </v-img>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>

        <!-- template books -->
        <v-container class="ma-0 pa-0 mt-2" grid-list-sm>
            <div class="text-right">
                <v-btn small text to="/books" class="blue--text">
                    All Books <v-icon>mdi-chevron-right</v-icon>
                </v-btn>
            </div>
            <v-layout wrap>
                <v-flex v-for="(book) in books" :key="`book-`+book.id" xs6>
                   <book-item :book="book" />
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
    // components: {
    //     HelloWorld
    // },
  data: () => ({
      categories: [],
      books: [
          // ....
      ]
  }),
    components: {
        BookItem: () => import(/* webpackChunkName: "book-item" */ '@/components/BookItem.vue')
    },
    created () {
      this.axios.get('/categories/random/2')
      .then((response) => {
          let {data} = response.data
          this.categories = data
          // console.log(this.categories)
      })
      .catch((error) => {
          let {response} = error
           console.log(response)
      })
     this.axios.get('/books/top/4')
        .then((response) => {
            let {data} = response.data
            this.books = data
            // console.log(this.books)
        })
        .catch((error) => {
            let {responses} = error
            console.log(responses)
        })
  }
}
</script>
