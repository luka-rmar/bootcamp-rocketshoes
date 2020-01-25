import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

/* rodar json-server

json-server --watch -p 3333 server.json
*/

export default api;
