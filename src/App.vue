<template>
  <div class="sum">
    <Overlay />
    <Popup />
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
                <CardList :listId="element.id"  :listName="element.name"/>
              </div>
              <div class="list-footer">
                <CardInput :listId="element.id"/>
              </div>
          </div>    
        </template>
      </draggable>
      <input
          class="input-new-list"
          type="text"
          placeholder="Create a List"
          v-model="listName"
          @keyup.enter="createList"
      />
    </div>
  </div>
</template>

<script lang="ts" name="App" setup>
import Overlay from './components/Overlay.vue'
import Popup from './components/Popup.vue'
import CardList from './components/CardList.vue'
import CardInput from './components/CardInput.vue'
import { ref } from 'vue'
import {useListsStore} from './store/lists'
import draggable from 'vuedraggable'
let listName = ref('')
const store=useListsStore()

function createList(){
    if (listName.value !== "") {
        const list = {
          name: listName.value,
        };
        store.createList(list)
        listName.value=''
    }
    else{
        alert('输入不能为空')
    }
}
</script>

<style scoped>
.sum{
  position: relative;
}
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
.input-new-list {
  display: flex;
  height: 30px;
  padding: 10px;
  border-radius: 5px;
  outline: none;
}
</style>
