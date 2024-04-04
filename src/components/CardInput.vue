<!-- 添加任务 -->
<template>
    <input
        class="input-card"
        type="text"
        placeholder="Create a Card"
        v-model="cardName"
        @keyup.enter="createCard"
    />
</template>

<script lang="ts" name="Card" setup>
import { ref,defineProps } from 'vue'
let cardName = ref('')
const {listId} = defineProps(['listId'])
import {useListsStore} from '../store/lists'
const store=useListsStore()

//将输入的值写出对象形式，添加到pinia中state的cards里
function createCard(){
    if (cardName.value !== "") {
        const card = {
          listId: listId,
          name: cardName.value,
        };
        store.createCard(card)
        cardName.value=''
    }
    else{
        alert('输入不能为空')
    }
}
</script>

<style scoped>
.input-card {
    width: 100%;
    border: none;
    outline: none;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
}
/* .input-card {
  position: relative;
  background-color: white;
  min-height: 30px;
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 5px;
  padding: 10px;
  word-break: break-all;
  font-size: 16px;
} */
</style>