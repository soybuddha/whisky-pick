import axios from 'axios';
import { slugify } from '../util';

const WHISKIES_URL = '/src/assets/data/whiskies.json';
const TASTERS_URL = '/src/assets/data/tasters.json';

function getRequest(url) {
  return axios.get(url);
}

function getWhiskies() {
  return getRequest(WHISKIES_URL);
}

async function getWhiskyById(id, whiskies) {
  const whisky = await whiskies.find(w => w.id === id);
  return whisky;
}

function getTasters() {
  return getRequest(TASTERS_URL);
}

async function getTasterById(id, tasters) {
  const taster = await tasters.find(t => t.id === id);
  return taster;
}

async function getTasterWhiskiesById(id, whiskies) {
  const tastersWhiskies = await whiskies.filter(whisky => {
    const allTasterIds = whisky.ratings.map(rating => slugify(rating.name));
    return allTasterIds.includes(id);
  });

  return tastersWhiskies;
}

export default {
  getWhiskies,
  getWhiskyById,
  getTasters,
  getTasterById,
  getTasterWhiskiesById,
};
