<template>
  <div  id="app1">
    
    <user 
      v-for="item in list_user" 
      v-bind:key="item.id"
      v-bind:user="item"
      v-on:handClick_deleteUser="deleteUser"
      />
    
  </div>


</template>

<script>
import user from './user.vue';

export default {
  
    name : 'list-user' , 
    props:{
      list_user:{
        type: Array, 
        default: "List User", 
      }
    },
    data(){
        return{ 
        }
    },
    components:{
      user 
    }, 
    methods:{
      deleteUser(data){
        console.log("sự kiện trong listusser.vue") ; 
        this.$emit("handleDeleteUser" , data) ; 
      }
    }
}
</script>

<style>

</style>