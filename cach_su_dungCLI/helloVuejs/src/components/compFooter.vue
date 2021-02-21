<template>
    <h2>{{title_footer }}</h2>
</template>

<script>
export default {
    name : 'comp-footer',  
    props:{
        title_footer:{
            type: String , 
            default: "Foooterr" ,
        },
        
    },
    data(){
        return {
            text: 'footer ' ,
        }
    }
}
</script>

<style>

</style>