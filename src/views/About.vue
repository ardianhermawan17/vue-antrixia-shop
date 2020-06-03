<template>
  <v-card
          class="mx-auto"
          color="primary"
          dark
          max-width="800"
  >
    <v-card-title>
      <v-icon
              large
              left
      >
        mdi-format-quote-close-outline
      </v-icon>
      <span class="title font-weight-light">Quotes</span>
    </v-card-title>

    <v-card-text class="headline font-weight-bold">
      "Just ordinary man who have interest in Frontend and Artifical Intelegent"
    </v-card-text>

    <v-card-actions>
      <v-list-item class="grow">
        <v-list-item-avatar color="grey darken-3">
          <v-img
                  class="elevation-6"
                  src="/img/fotoku.jpg"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Imanuddin Ardian Hermawan</v-list-item-title>
        </v-list-item-content>

        <v-row
                align="center"
                justify="end"
        >
          <v-btn class="ma-2" tile large color="#E0F7FA" href="https://github.com/ardianhermawan17" icon>
            <v-icon right large>mdi-github</v-icon>
          </v-btn>
          <v-btn class="ma-2" tile large color="#E0F7FA" href="https://www.linkedin.com/in/imanuddin-ardian-hermawan-059963170/" icon>
            <v-icon right large>mdi-linkedin</v-icon>
          </v-btn>
        </v-row>
      </v-list-item>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      //
    }),
  }
</script>

<style scoped>

</style>