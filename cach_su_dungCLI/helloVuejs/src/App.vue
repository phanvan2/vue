<template>
  <div id="app">
    <h1>{{ msg }}</h1>
   <comp-header 
   v-bind:title_header="msg"
   v-on:changeTitleEvent="HandleChangeTitle"
   />
   <list-user 
    v-bind:list_user="list_user"
    v-on:handleDeleteUser="deleteUser"
    />
    <!-- <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul> -->
    <comp-Footer v-bind:title_footer="msg"/>
    <div style="margin-top: 10px">
        <demo-ref/>
    </div>
    <demo-slot>
      <div class="tab1">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore animi itaque dolor. Optio beatae distinctio ea, sed libero illo a iure non, neque, id dolorum! Deleniti molestias similique tenetur. Enim.
      </div>
    </demo-slot>
    
  </div>
 
</template>

<script>
import listUser from './components/listUser.vue' ; 
import CompHeader from './components/CompHeader.vue' ;
import compFooter from './components/compFooter.vue' ; 
import DemoRef from './components/DemoRef.vue';
import demoSlot from './components/demoSlot.vue' ; 
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js ' , 
      title_header: "Comp_Header" ,
      title_footer: "Comp_foooter" , 
      list_user: [
        {id: 101 , email: "Phan1@gmail.com" , active:  false} , 
        {id: 102 , email: "Phan2@gmail.com" , active:  true} , 
        {id: 103 , email: "Phan3@gmail.com" , active:  false} , 
        {id: 104 , email: "Phan4@gmail.com" , active:  true} , 
        {id: 105 , email: "Phan5@gmail.com" , active:  true} , 
        {id: 106 , email: "Phan6@gmail.com" , active:  false} , 
      ]
    }
  },
  components:{
    CompHeader ,   
    compFooter , 
    listUser,
    DemoRef , 
    demoSlot 
  }, 
  methods:{
    HandleChangeTitle(data){
      //console.log("HandChageTitle trong App.vue", data) ; 
      this.msg = data.title  ;

    },
    deleteUser(data){
      this.list_user.forEach((item , index) => {
        if ( data.id === item.id) 
          //console.log(index) ; 
          this.list_user.splice(index , 1) ; 
      });
      console.log("Sự kiện trong app.vue" ,data) ; 
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
