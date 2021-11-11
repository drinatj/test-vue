<template>
    <h3>CALCULATOR</h3>
    <input type="number" v-model="bil1"> + <input type="number" v-model="bil2"> <button @click="tambah()">=</button>
    <p id=hasil> {{hasil}}</p>
</template>

<script >
    export default {
        data () {
            return{
                bil1: "",
                bil2: "",
                hasil: ""
            }
        },
        methods: {
            tambah(){
                this.hasil = parseInt(this.bil1) + parseInt(this.bil2);
                return this.hasil;
            }
        }
    }
</script>
