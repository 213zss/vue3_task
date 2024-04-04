<template>
    <!-- <draggable v-model:items="thisCards" itemKey="id">
        <template #item="{card}">
            <div class="element-card">
                {{ card.name }}
            </div>
        </template>  
    </draggable> -->
    <div class="element-card" v-for="card in cards" :key="card.id">
        {{ card.name }}
    </div>
</template>

<script lang="ts" name="CardList" setup>
import { watchEffect, defineProps,ref } from 'vue'
// import draggable from 'vuedraggable'
const {listId} = defineProps(['listId'])
import {useListsStore} from '../store/lists'
const store=useListsStore()
const cards = ref<object[]>([]);
watchEffect(() => {
    cards.value = store.cards.filter(card => card.listId === listId);
});
</script>


<style scoped>
.element-card {
  background-color: white;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  word-break: break-all;
  text-align: left;
}
</style>