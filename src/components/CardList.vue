<template>
    <!-- 实现每一条任务的拖动效果 -->
   <draggable
        :list="cards"
        class="list-group"
        group="item"
        item-key="id"
      >
        <template #item="{ element }">
          <div class="list-group-item" @click="togglePopup(element)">
            {{ element.name }}
          </div>
        </template>
    </draggable>
</template>

<script lang="ts" name="CardList" setup>
import { watchEffect, defineProps,ref } from 'vue'
import draggable from 'vuedraggable'
const {listId,listName} = defineProps(['listId','listName'])
import {useListsStore} from '../store/lists'
const store=useListsStore()
const cards = ref<object[]>([]);
watchEffect(() => {
    cards.value = store.cards.filter(card => card.listId === listId);
});
function togglePopup(data:object){
  const currentData = {
        listId: listId,
        listName: listName,
        id: data.id,
        name: data.name,
      };
  store.toggleOverlay()
  store.openForm(currentData)
  console.log(currentData);
  
}
</script>


<style scoped>
.list-group-item{
  background-color: white;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  word-break: break-all;
  text-align: left;
}
</style>