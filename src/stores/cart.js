export default {
    name: "cart",
    namespaced: true,
    state: {
        carts: [],
    },
    mutations: {
        insert: (state, payload) => {
            state.carts.push({
                id: payload.id,
                title: payload.title,
                cover: payload.cover,
                price: payload.price,
                weight: payload.weight,
                quantity: 1
            })
        },
        update: (state, paylaod) => {
            let idx = state.carts.indexOf(paylaod)
            state.carts.splice(idx, 1,{
                id: paylaod.id,
                title: paylaod.title,
                cover: paylaod.cover,
                price: paylaod.price,
                weight: paylaod.weight,
                quantity: paylaod.quantity
            });

            if(paylaod.quantity <= 0){
                state.carts.splice(idx,1)
            }
        },
        set: (state, payload) => {
            state.carts  = payload
        },
    },
    actions: {
        add: ({state, commit}, payload) => {
            //cek apakah data yang diinput ada dicart
            let cartItem = state.carts.find(item => item.id === payload.id)
            //jika tidak maka mutation insert, payload adalah object datanya/buku
            if(!cartItem){
                commit('insert', payload)
            }
            //jika tidak mutation update, cartItem itu datanya yang sudah dicari
            else{
                cartItem.quantity++
                commit('update', cartItem)
            }
        },

        //menghapus cart
        remove: ({state, commit}, payload) => {
            let cartItem = state.carts.find(item => item.id === payload.id)
            if(cartItem){
                cartItem.quantity--
                commit('update', cartItem)
            }
        },

        //batch update carts
        set: ({commit}, payload) => {
            commit('set', payload)
        }
    },
    getters: {
        carts :  state => state.carts,
        count  : (state) => {
            return state.carts.length
        },

        //count price
        totalPrice: (state) => {
          let total = 0
          state.carts.forEach((cart) => {
              total += cart.price * cart.quantity
          })
            return total
        },

        //count total items
        totalQuantity: (state) => {
            let total = 0
            state.carts.forEach((cart) => {
                total += cart.quantity
            })
            return total
        },

        //total weight items
        totalWeight: (state) => {
            let total = 0
            state.carts.forEach((cart) => {
                total += cart.weight
            })
            return total
        },
    }
}