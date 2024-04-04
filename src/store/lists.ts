import {defineStore} from 'pinia'
export const useListsStore=defineStore('lists',{
    state(){
        return {
            overlay: false,
            lastListId: 3,
            lastCardId: 3,
            currentData:null,
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
      createList(val:any) {
        this.lastListId++
        const list={
          id: this.lastListId,
          name: val.name,
        }
        this.lists.push(list)

      },
      createCard(val:any) {
        this.lastCardId++
        const card={
          listId: val.listId,
          id: this.lastCardId,
          name: val.name,
        }
        this.cards.push(card)
      },
      openForm(val:any) {
        this.currentData = val;
      },
      toggleOverlay() {
        this.overlay = !this.overlay;
      },
      saveCard(val:any) {
        this.cards = this.cards.map((card) => {
          if (card.id === val.id) {
            return Object.assign({}, card, val);
          }
          return card;
        });        
      },
      deleteCard(val:any) {
        const indexToDelete = this.cards
          .map((card) => card.id)
          .indexOf(val.id);
        this.cards.splice(indexToDelete, 1);
      },
    },
    getters:{
      getLastCardId(state) {
        return state.lastCardId;
      },
    }

})