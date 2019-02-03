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

async function getFavoriteWhiskies() {
  const response = await getWhiskies();
  const allWhiskies = response.data;

  const favorites = await {
    bourbon: allWhiskies
      .filter(w => w.type === 'Bourbon')
      .sort((a, b) => b.average_rating - a.average_rating)[0],
    irish: allWhiskies
      .filter(w => w.type === 'Irish')
      .sort((a, b) => b.average_rating - a.average_rating)[0],
    rye: allWhiskies
      .filter(w => w.type === 'Rye')
      .sort((a, b) => b.average_rating - a.average_rating)[0],
    scotch: allWhiskies
      .filter(w => w.type === 'Scotch')
      .sort((a, b) => b.average_rating - a.average_rating)[0],
    whisky: allWhiskies
      .filter(w => w.type === 'Whisky')
      .sort((a, b) => b.average_rating - a.average_rating)[0],
  };

  return favorites;
}

function getTasters() {
  return getRequest(TASTERS_URL);
}

async function getTasterById(id, tasters, whiskies) {
  const taster = tasters.find(t => t.id === id);

  const tastersWhiskies = whiskies.filter(whisky => {
    const allTasterIds = whisky.ratings.map(rating => slugify(rating.name));
    return allTasterIds.includes(id);
  });

  tastersWhiskies.forEach(whisky => {
    const tasterRating = whisky.ratings.find(rating => slugify(rating.name) === taster.id);
    whisky.taster_rating = tasterRating.score;
  });

  tastersWhiskies.sort((a, b) => b.taster_rating - a.taster_rating);

  taster.whiskies = await tastersWhiskies;

  return taster;
}

export default {
  getWhiskies,
  getWhiskyById,
  getFavoriteWhiskies,
  getTasters,
  getTasterById,
};
