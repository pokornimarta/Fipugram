<template>
  
 <div class="row">
 <div class="col-8">
   <Instagram-card v-for="card in filteredCards" :key="card.url" :info="card"/>
  <Instagram-card  />
  <Instagram-card  />
 </div>
 <div class="col-4">
  Sidebar
 </div>
 </div>

</template>

<script>
// @ is an alias to /src
import InstagramCard from '@/components/InstagramCard.vue'
import store from "@/store"

let cards =[];

cards = [
  {url: "https://picsum.photos/id/1/400/400",
  description: "laptop",
  time: 'few minutes ago..' },
  {url: "https://picsum.photos/id/2/400/400",
  description: "laptop #2",
  time: 'hours minutes ago..' },
  {url: "https://picsum.photos/id/3/400/400",
  description: "laptop #3",
  time: '13 minutes ago..' }
]

export default {
  name: 'Home',
  data: function() {
    return {
      cards,
      store,
    };
  },
  computed: {
    filteredCards() {
      //filter koji se ponaša kao da filtrira
      let termin = this.store.searchTerm;
      let newCards = [];
      for (let card of this.cards) {
        if (card.description.indexOf(termin) >= 0) {
          newCards.push(card);
        }
      }
      return newCards;
    },
  },
  components: {
    InstagramCard
  }
}
</script>
