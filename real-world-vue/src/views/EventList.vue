<template>
  <div>
    <h1>Event List</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <BaseIcon />
  </div>
</template>

<script>
import EventCard from '../components/EventCard';
import BaseIcon from '../components/BaseIcon.vue';
import EventService from '../services/EventService.js';

export default {
  components: {
    EventCard,
    BaseIcon
  },
  data() {
    return {
      events: []
    }
  },
  created() {
    EventService.getEvents()
    .then(res => {
      this.events = res.data
    })
    .catch(err => console.log(`error ${err}`))
  }
}
</script>

