<template>
  <div class="demo-ref">
    <h3>{{ title }}</h3>
    <input
        ref="fileInputAvatar" 
        type="file" 
        style="display:none"
    >
    <button class="btn_changeAvatar" v-on:click="handleChangeAvatar">Thay đổi Avatar</button>
  </div>
</template>

<script>
export default {
    name: 'demo-ref' ,
    data(){
        return{
        title : 'demo ref' ,
        }
    }, 
    methods:{
        handleChangeAvatar(){
            this.$refs.fileInputAvatar.click() ; 
        }
    }
}
</script>

<style>
    .demo-ref{
        display: inline-block ; 
        align-content: center;
        border: 1px solid #000 ; 
        width: 500px ;
        height: 200px
    }
    .btn_changeAvatar{
        color:#fff; 
        background-color: #000; 
        border-style: none;
        width: 100px;
        height: 40px; 
    }
</style>