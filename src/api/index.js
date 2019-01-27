import axios from 'axios';

function getRequest(url) {
  return axios.get(url);
}

function getWhiskies() {
  return getRequest('./src/assets/data/whiskies.json');
}

function getWhiskyById(id, whiskies) {
  return Promise.resolve(whiskies.find(whisky => whisky.id === id));
}

export default {
  getWhiskies,
  getWhiskyById,
};
