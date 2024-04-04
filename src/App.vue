<template>
  <div class="list">
    <!-- 实现每整个任务的拖动效果 -->
    <draggable
        :list="store.lists"
        class="list-container"
        group="container"
        item-key="id"
      >
      <template #item="{ element }">
        <div class="list-card">
            <div class="list-header">{{element.name}}</div>
            <div class="list-content">
              <CardList :listId="element.id"/>
            </div>
            <div class="list-footer">
              <CardInput :listId="element.id"/>
            </div>
        </div>    
      </template>
    </draggable>
  </div>
</template>

<script lang="ts" name="App" setup>
import CardList from './components/CardList.vue'
import CardInput from './components/CardInput.vue'
import {useListsStore} from './store/lists'
import draggable from 'vuedraggable'

const store=useListsStore()

</script>

<style scoped>
.list-container{
  display: flex;
  justify-content: space-between;
}
.list-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  background-color: #eee;
  border-radius: 10px;

}
.list-header{
  padding: 10px 0;
}
.list-content,.list-footer{
  width: 80%;
}
</style>
