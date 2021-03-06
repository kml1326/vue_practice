import axios from 'axios';

const apiClient = axios.create({
  baseUrl: 'http://localhost:3000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

export default {
  getEvents() {
    return apiClient.get('http://localhost:3000/events')
  },
  getEvent(id) {
    return apiClient.get(`http://localhost:3000/events/${id}`)
  }
}
