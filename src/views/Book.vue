<template>
    <div class="d-flex flex-column">
        <v-card v-if="book.slug">
            <v-img
                    :src="getImage(book.cover)"
                    class="white--text"
                    height="200px"
            >
            </v-img>
            <v-card-title
                    class="fill-height align-end"
                    v-text="book.title"
            >
            </v-card-title>

            <v-card-text>
                <v-simple-table dense>
                    <tbody>
                    <tr>
                        <td><v-icon color="teal darken-1">mdi-account-tie</v-icon> Author</td>
                        <td>{{ book.author}}</td>
                    </tr>
                    <tr>
                        <td><v-icon color="primary">mdi-bullhorn</v-icon> Publisher</td>
                        <td>{{ book.publisher}}</td>
                    </tr>
                    <tr>
                        <td><v-icon color="black">mdi-weight</v-icon> Weight</td>
                        <td>{{ book.weight }} kg</td>
                    </tr>
                    <tr>
                        <td><v-icon>mdi-format-list-bulleted</v-icon> Stock</td>
                        <td>{{ book.stock}} item</td>
                    </tr>
                    <tr>
                        <td><v-icon color="warning">mdi-eye</v-icon>  Views</td>
                        <td>{{ book.views}}</td>
                    </tr>
                    <tr>
                        <td><v-icon color="success">mdi-cash</v-icon>  Price</td>
                        <td class="orange--text">Rp {{ book.price.toLocaleString('id-ID')}}</td>
                    </tr>
                    </tbody>
                </v-simple-table>
                Description: <br>
                {{ book.description }}
                <br>
                Categories:
                <v-chip
                        v-for="category in book.categories"
                        :key="category.id"
                        :to="'/category/'+category.slug"
                        small>
                    {{ category.name }}
                </v-chip>
            </v-card-text>
            <v-card-actions>
                <v-btn
                        block
                        color="success"
                        @click="buy"
                        :disabled="book.stock==0">
                    <v-icon>mdi-cart-plus</v-icon> &nbsp;
                    BUY
                </v-btn>
            </v-card-actions>
        </v-card>
        <v-progress-circular
                v-if="!book.slug"
                :size="200"
                width="8"
                color="primary"
                indeterminate
                class="align-self-center"
        > Loading </v-progress-circular>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    export default {
        name: "Book",
        data: () => ({
            book: {}, // object book
        }),
        created() {
            this.go()
        },
        methods: {
            ...mapActions({
                addCart: 'cart/add',
                setAlert: 'alert/set',
            }),
            buy(){
              //alert('buy')
              // jika tanpa mapAction
              // this.$store.dispatch('cart/add',this.book)
              this.addCart(this.book)
              this.setAlert({
                  status : true,
                  color : 'success',
                  text : 'Added to cart',
              })
            },
            go(){
                let { slug } = this.$route.params
                let url = '/books/slug/' + slug
                url = url + '?page=' + this.page
                url = encodeURI(url)
                this.axios.get(url)
                .then((response) => {
                    let { data } = response.data
                    this.book = data
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

</style>