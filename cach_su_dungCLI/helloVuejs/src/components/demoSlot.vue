<template >
  <div class="demo-slot">
    <h1>demoSlot</h1>
      <slot>
          
      </slot>
     <comp-tab title="Tile tab">
       <ul class="tab-header">
         <li 
          v-for="(item, index ) in tabHeader" 
          v-bind:key="index"
          v-on:click="setAcitve(index)" 
          v-bind:class="{active: index === tabActive }"
        > 
            {{item.text}}
          </li>
       </ul>
       <div class="tab-content tab1" v-if="tabActive === 0 ">
          Tab1 1Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde rem ducimus deleniti, amet temporibus accusamus ex non beatae pariatur, fugit corrupti excepturi iste. Cupiditate, enim labore ex doloribus pariatur ea?
       </div>

       <div class="tab-content tab2" v-if="tabActive === 1 ">
         
          Tab2 1Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde rem ducimus deleniti, amet temporibus accusamus ex non beatae pariatur, fugit corrupti excepturi iste. Cupiditate, enim labore ex doloribus pariatur ea?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus necessitatibus quis magni soluta, animi minus veritatis velit. Veritatis est delectus fugiat ipsam maiores distinctio, quo, inventore et, alias quibusdam unde!
       </div>

       <div class="tab-content tab3" v-if="tabActive === 2 ">
          Tab3 1Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde rem ducimus deleniti, amet temporibus accusamus ex non beatae pariatur, fugit corrupti excepturi iste. Cupiditate, enim labore ex doloribus pariatur ea?
       </div>
     </comp-tab>
  </div>

</template>

<script>
import compTab from './compTab.vue';

export default {
  components: { compTab },
  name: 'demo-slot', 
  data(){
    return{
      tabHeader:[
        {text: 'tab1'} , 
        {text: 'tab2'} , 
        {text: 'tab3'}, 
      ], 
      tabActive: 0 , 
    }
  },
  methods:{
    setAcitve(index){
      this.tabActive = index  ; 
    } , 
  }
}
</script>

<style>
.demo-slot{
  padding: 10px;
  margin-top: 10px;
  width: 800px;
  height: auto;
  align-content: center;
  display: inline-block;
  border: 3px solid #dcdcdc ;
}
</style>