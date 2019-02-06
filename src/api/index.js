import axios from 'axios';
import { slugify } from '../util';

const WHISKIES_URL = '/src/assets/data/whiskies.json';
const TASTERS_URL = '/src/assets/data/tasters.json';
const FILTERS_URL = '/src/assets/data/filters.json';

function getRequest(url) {
  return axios.get(url);
}

async function getWhiskies() {
  try {
    const whiskies = await getRequest(WHISKIES_URL);
    return whiskies.data;
  } catch (err) {
    console.log(err);
    return err;
  }
}

async function getTasters() {
  try {
    const tasters = await getRequest(TASTERS_URL);
    return tasters.data;
  } catch (err) {
    console.log(err);
    return err;
  }
}

async function getFilters() {
  try {
    const filters = await getRequest(FILTERS_URL);
    return filters.data;
  } catch (err) {
    console.log(err);
    return err;
  }
}

async function getFavoriteWhiskies() {
  try {
    const [whiskyTypes, allWhiskies] = await Promise.all([
      getFilters(),
      getWhiskies(),
    ]);

    const favorites = {};

    whiskyTypes.forEach(whiskyType => {
      const whiskies = allWhiskies.filter(w => w.type === whiskyType);

      favorites[whiskyType] = {
        id: slugify(whiskyType),
        name: whiskyType,
        whiskies: whiskies.sort((a, b) => b.average_rating - a.average_rating),
        average_age: Math.round(whiskies.reduce((all, cur) => all + cur.age, 0) / whiskies.length),
        average_price: Math.round(whiskies.reduce((all, cur) => all + cur.price, 0) / whiskies.length),
        average_rating: Math.round(whiskies.reduce((all, cur) => all + cur.average_rating, 0) / whiskies.length),
      };
    });

    return favorites;
  } catch (err) {
    console.log(err);
    return err;
  }
}

async function getWhiskyById(id, whiskies) {
  try {
    const whisky = await whiskies.find(w => w.id === id);
    return whisky;
  } catch (err) {
    console.log(err);
    return err;
  }
}

async function getTasterById(id, tasters, whiskies) {
  try {
    const taster = await tasters.find(t => t.id === id);

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
  } catch (err) {
    console.log(err);
    return err;
  }
}

export default {
  getWhiskies,
  getTasters,
  getFavoriteWhiskies,
  getWhiskyById,
  getTasterById,
};
