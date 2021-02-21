<template>
  <header>
    <h1>{{ title_header}} </h1>
    <button v-on:click="changeTitle()">thay đổi title từ CompHeader </button>
  </header>
 
</template>

<script>
export default {
    name: 'comp-header' , 
    props: {
      title_header :{
        type: String , 
        default: "HEADER" ,
      }
    },
    data(){
      return {
            text: "hello mọi người" ,
      }
      
    },
    methods:{
      changeTitle(){
        var data = {
          title : 'text - > data truyền trong biến event'
        }
        this.$emit("changeTitleEvent" , data) ; 
        // this.title_header = "Học lập trình Vue .js" ; 
        // console.log("Sau khi click button ") ; 
      }
    }
}
</script>

<style>

</style>