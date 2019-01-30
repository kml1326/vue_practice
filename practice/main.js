var app = new Vue({
  el: '#app',
  data: {
    message: 'hello Vue!'
  }
});

app.message = 'I have changed data.';

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'you loaded this page on' + new Date().toLocaleString()
  }
});

var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true,
  }
});

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Learn Vuex' },
    ]
  }
});

var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello World!!'
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message.split('').reverse().join('');
    }
  }
});

var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!'
  }
});

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{todo.text}}</li>'
});

var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Whatever else human are supposed to eat' }
    ]
  }
});
