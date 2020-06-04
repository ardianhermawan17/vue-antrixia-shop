<template>
    <div>
        <v-subheader>Histori Belanja</v-subheader>
        <v-card flat>
            <v-container>
                <v-row dense>
                    <v-col sm="12" v-for="item in items" :key="item.id" >
                        <v-card color="teal" dark class="row">
                            <v-col >
                                <v-card-title class="headline">
                                    Invoice: {{ item.invoice_number }}
                                </v-card-title>
                                <v-card-subtitle>
                                    <div class="white--text title">Rp. {{ item.total_bill.toLocaleString('id-ID') }}</div>
                                    <small>date: {{ item.updated_at }}. courier: {{ item.courier_service }}</small>
                                </v-card-subtitle>
                            </v-col>
                            <v-spacer></v-spacer>
                            <v-col  class="d-flex justify-center align-center">
                                <v-card-subtitle class="text--white">
                                    Status :
                                </v-card-subtitle>
                                <v-btn v-if="item.status === 'FINISH' " depressed dark color="success" class="pa-2">
                                    {{ item.status }}
                                </v-btn>
                                <v-btn v-if="item.status === 'SUBMIT' " depressed dark color="primary" class="pa-2">
                                    {{ item.status }}
                                </v-btn>
                                <v-btn v-if="item.status === 'PROCESS' " depressed dark color="warning" class="pa-2">
                                    {{ item.status }}
                                </v-btn>
                                <v-btn v-if="item.status === 'CANCEL' " depressed dark color="error" class="pa-2">
                                    {{ item.status }}
                                </v-btn>
                            </v-col>
                        </v-card>
                    </v-col>
                </v-row>

            </v-container>
        </v-card>
    </div>
</template>

<script>
    import {mapGetters,mapActions} from 'vuex'
    export default {
        name: "MyOrder",
        data () {
            return {
                items: [],
            }
        },
        computed: {
            ...mapGetters({
                user    : 'auth/user',
            })
        },
        methods: {
            ...mapActions({
                setAlert  : 'alert/set',
            }),
        },
        mounted(){
            let config = {
                headers: {
                    'Authorization': 'Bearer ' + this.user.api_token,
                },
            }
            this.axios.get('/my-order',config)
                .then((response) => {
                    let {data } = response.data
                    this.items = data
                    console.log(data)
                })
                .catch((error) => {
                    let {data} = error.response
                    this.setAlert({
                        status : true,
                        text  : data.message,
                        color  : 'error',
                    })
                })
        }
    }
</script>

<style scoped>

</style>