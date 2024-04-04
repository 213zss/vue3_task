<template>
  <div class="list-container">
    <div class="list-card" v-for="list in store.lists" :key="list.id">
        <div class="list-header">{{list.name}}</div>
        <div class="list-content">
          <CardList :listId="list.id"/>
        </div>
        <div class="list-footer">
          <CardInput :listId="list.id"/>
        </div>
      </div>
  </div>
</template>

<script lang="ts" name="" setup>
import {  } from 'vue'
import CardList from './components/CardList.vue'
import CardInput from './components/CardInput.vue'
import {useListsStore} from './store/lists'

const store=useListsStore()
console.log(store);
</script>

<style scoped>
.list-container{
  display: flex;
  justify-content: space-between;
}
.list-header{
  padding: 10px 0;
}
.list-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  background-color: #eee;
  border-radius: 10px;

}
.list-content,.list-footer{
  width: 80%;
  /* align-self: flex-start; */
}

</style>