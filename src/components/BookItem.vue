<template>
    <div>
        <v-card :to="'/book/'+ book.slug">
            <v-img
                    :src="getImage(book.cover)"
                    class="white--text"
                    height="200px"
                    width="auto"
            >
            </v-img>
            <v-card-title
                    class="fill-height align-end"
                    v-text="book.title"
            ></v-card-title>

            <v-card-actions>
                <v-icon large color="green darken">mdi-cash</v-icon>
                <span class="ml-2 orange--text"> Rp {{ book.price.toLocaleString('id-ID') }}
        </span>
                <v-spacer></v-spacer>
                <v-icon  color="blue darken-2">mdi-eye</v-icon>
                <span class="ml-1">{{ book.views }}</span>
            </v-card-actions>

        </v-card>
    </div>
</template>

<script>
    export default {
        name: "BookItem",
        props: ['book'],
        data: () => ({

        }),
    }
</script>

<style scoped>

</style>