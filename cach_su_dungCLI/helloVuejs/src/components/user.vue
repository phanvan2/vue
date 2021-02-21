<template>
   <div class="user">
       <button class="btn_delete" v-on:click="deleteUser">Delete</button>
       <h3 class="title-user">{{user.email}}</h3>
   </div>
    

</template>

<script>
export default {
    name : 'app1' , 
    props:{
        user:{
            type: Object , 
            default: "ko co email ", 
        }
    },
    data(){
        return {

        }
    }, 
    methods:{
        deleteUser(){
            var data = {
                id : this.user.id  
            }
            console.log("click btn trong user.vue") ; 
            this.$emit("handClick_deleteUser" , data)  ; 
        }
    }
}
</script>

<style>
    .user{
        display: inline-flex;
        border: 1px solid #000000;
        padding: 2px;
        margin: 10px;
        position: relative;
    }
    .title-user{
        margin-top:40px;
    }
    .btn_delete{
       
        position: absolute; 
        top: 3px ;
        right : 3px; 

    }
</style>