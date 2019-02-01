<template>
  <router-link :to="{ name: 'event-show', params: { id: event.id} }" class="event-link">
    <div class="event-card">
      <span class="eyebrow">@{{ event.time }} on {{ event.date }} </span>
      <h4 class="title">{{ event.title }}</h4>
      <span class="">{{ event.attendees.length }} attending</span>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    event: Object
  }
}
</script>
