<template>
    <div class="d-flex flex-column">
        <v-card :to="'/category/'+ category.slug" v-if="category.slug">
            <v-img
                    :src="getImage(category.image)"
                    class="white--text"
                    max-height="400px"
            >
            </v-img>
            <v-card-title
                    class="fill-height align-end"
                    v-text="category.name"
            ></v-card-title>
        </v-card>
        <v-progress-circular
                v-if="!category.slug"
                :size="200"
                width="8"
                color="primary"
                indeterminate
                class="align-self-center"
        > Loading </v-progress-circular>

        <v-container class="ma-0 pa-0" grid-list-sm v-if="books">
            <v-subheader>
                All Books
            </v-subheader>
            <v-layout wrap>
                <v-flex v-for="(book) in books" :key="`book-`+book.id" xs6>
                    <v-card :to="'/book/'+ book.slug">
                        <v-img
                                :src="getImage(book.cover)"
                                class="white--text"
                                height="600px"
                        >
                        </v-img>
                        <v-card-title
                                class="fill-height align-end"
                                v-text="book.title"
                        ></v-card-title>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
        <template>
            <div class="text-center">
                <v-pagination
                        v-model="page"
                        @input="go"
                        :length="lengthPage"
                        :total-visible="5"
                ></v-pagination>
            </div>
        </template>
    </div>
</template>

<script>
    export default {
        name: 'Category',
        data: () => ({
            category: {}, //object category
            books: [], // daftar buku pada category tersebut
            page: 0,
            lengthPage: 0
        }),
        created() {
            this.go()
        },
        methods: {
            go(){
                let { slug } = this.$route.params
                let url = '/categories/slug/' + slug
                url = url + '?page=' + this.page
                url = encodeURI(url)
                this.axios.get(url)
                    .then((response) => {
                        let { data }  = response.data
                        let category = data
                        this.category = category
                        this.books = category.books.data
                        this.page = category.books.current_page
                        this.lengthPage = category.books.last_page
                        // console.log(this.category)
                        })
                    .catch((error) => {
                        let { responses } = error
                        console.log(responses)
                    })
            }
        }
    }
</script>

<style scoped>
    .v-progress-circular {
        margin: 2rem;
    }
</style>