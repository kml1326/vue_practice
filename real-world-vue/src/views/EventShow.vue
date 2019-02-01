<template>
  <div>
    <h1>Event Show {{event.id}}</h1>
    <h1>{{event.date}}</h1>
    <h2>{{event.title}}</h2>
    <p>{{event.time}}</p>
    <ul>
      <li v-for="person in event.attendees" :key="person.id">{{person.name}}</li>
    </ul>
  </div>
</template>

<script>
import EventService from '../services/EventService.js';
export default {
  props: ['id'],
  data() {
    return {
      event: {}
    }
  },
  created() {
    EventService.getEvent(this.id)
    .then(res => {
      this.event = res.data
    })
    .catch(err => {
      console.log(err + 'err in eventshow component')
    })
  }
}
</script>

<style>
li {
  list-style-type: none;
}
</style>


