<template>
  <div >
      <div class="titleTab">
           {{ title }}
      </div>
     <slot >
     </slot>
  </div>
</template>

<script>
export default {
    name: 'comp-tab' ,
    data(){
        return{
            
        }
    },
    props:{
        title : String ,
    }
}
</script>

<style>
    .titleTab{
        display: inline-block;
        border: 1px solid #000;
        width: 80%;
    }
    .tab-header{
        border: 1px solid #00ff00;
        display: flex ;
        padding: 4px;
    }
    .tab-header li{
        padding: 4px; 
        border:1px solid #0000ff ; 
        color: #000 ; 
        background-color: #dcdcdc ; 
    }
    .tab-header li:hover{
        background-color:#fff;

    }
</style>