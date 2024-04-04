<template>
    <transition>
        <div v-if="store.overlay" class="modal">
            <h1>List Name : {{ store.currentData.listName }}</h1>
            <input :placeholder="store.currentData.name" v-model="cardName" />
            <div class="container-button">
            <button class="blue" @click="saveElement">save</button>
            <button class="red" @click="deleteElement">delete</button>
            </div>
        </div>
    </transition>
</template>

<script lang="ts" name="" setup>
import { ref } from 'vue'
import {useListsStore} from '../store/lists'
const store=useListsStore()
let cardName=ref(null)

function saveElement(){
    if (cardName.value === null) {
        cardName.value = store.currentData.name;
    }
    const card = {
        listId: store.currentData.listId,
        id: store.currentData.id,
        name: cardName.value,
    };
    store.saveCard(card)
    cardName.value = null;
    store.toggleOverlay() 
}
function deleteElement(){
    store.deleteCard(store.currentData)
    store.toggleOverlay()
}
</script>

<style scoped>
.v-enter-from {
  opacity: 0;
}

.v-enter-active {
  transition: all 0.3s ease-out;
}

.v-enter-to {
  opacity: 1;
}

.v-leave-from {
  opacity: 1;
}

.v-leave-active {
  transition: all 0.3s ease-in;
}

.v-leave-to {
  opacity: 0;
}
.modal{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    background-color: pink;
    padding: 20px;
    width: 400px;
    border-radius: 10px;
    background-color: rgba(235, 236, 240, 1);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 550;

}
input {
  width: 250px;
  padding: 10px 20px;
  border: 1px solid rgba(60, 60, 60, 0.2);
  border-radius: 10px;
  outline: none;
  margin: 10px 0;
}

button {
  display: flex;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 15px;
  cursor: pointer;
  transition-duration: 0.4s;
}

button:hover {
  color: white;
}

.blue {
  background-color: rgba(1, 100, 255, 1);
}

.blue:hover {
  background-color: rgba(1, 100, 255, 0.8);
}

.red {
  background-color: rgba(250, 52, 75, 1);
}
.red:hover {
  background-color: rgba(250, 52, 75, 0.8);
}

.container-button {
  display: flex;
  flex-direction: row;
  gap: 30px;
}
</style>