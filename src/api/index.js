import axios from 'axios';

function getRequest(url) {
  return axios.get(url);
}

function getWhiskies() {
  return getRequest('./src/assets/data/whiskies.json');
}

export default {
  getWhiskies,
};
