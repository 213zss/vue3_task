import {defineStore} from 'pinia'
export const useListsStore=defineStore('lists',{
    state(){
        return {
            overlay: false,
            lastListId: 3,
            lastCardId: 3,
            lists: [
                {
                  id: 1,
                  name: "list #1",
                },
                {
                  id: 2,
                  name: "list #2",
                },
                {
                  id: 3,
                  name: "list #3",
                },
              ],
              cards: [
                {
                  listId: 1,
                  id: 1,
                  name: "card 1",
                },
                {
                  listId: 2,
                  id: 2,
                  name: "card 2",
                },
                {
                  listId: 3,
                  id: 3,
                  name: "card 3",
                },
              ],
        }
    },
    actions:{
      createCard(val:any) {
        this.lastCardId++
        const card={
          listId: val.listId,
          id: this.lastCardId,
          name: val.name,
        }
        this.cards.push(card)
        console.log(this.cards);
        
      },
    },
    getters:{
      getLastCardId(state) {
        return state.lastCardId;
      },
    }

})