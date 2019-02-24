import axios from 'axios';
import { slugify } from '../util';

const WHISKIES_URL = '/src/assets/data/whiskies.json';
const TASTERS_URL = '/src/assets/data/tasters.json';
const TYPES_URL = '/src/assets/data/types.json';
const PROFILES_URL = '/src/assets/data/profiles.json';

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

async function getTypes() {
  try {
    const types = await getRequest(TYPES_URL);
    return types.data;
  } catch (err) {
    console.log(err);
    return err;
  }
}

async function getProfiles() {
  try {
    const types = await getRequest(PROFILES_URL);
    return types.data;
  } catch (err) {
    console.log(err);
    return err;
  }
}

async function getFavoriteWhiskies(whiskies) {
  try {
    const whiskyTypes = await getTypes();
    const favorites = {};

    whiskyTypes.forEach(whiskyType => {
      const selectedWhiskies = whiskies.filter(w => w.type === whiskyType);

      favorites[whiskyType] = {
        id: slugify(whiskyType),
        name: whiskyType,
        whiskies: selectedWhiskies.sort((a, b) => b.average_rating - a.average_rating),
        average_age: Math.round(selectedWhiskies.reduce((all, cur) => all + cur.age, 0) / selectedWhiskies.length),
        average_price: Math.round(selectedWhiskies.reduce((all, cur) => all + cur.price, 0) / selectedWhiskies.length),
        average_rating: Math.round(selectedWhiskies.reduce((all, cur) => all + cur.average_rating, 0) / selectedWhiskies.length),
      };
    });

    return favorites;
  } catch (err) {
    console.log(err);
    return err;
  }
}

async function filterWhiskies(profiles, types, whiskies) {
  let filteredWhiskies = await whiskies.filter(whisky => {
    const currentProfiles = whisky.profiles.map(p => p);
    return currentProfiles.every(profile => profiles.includes(profile));
  });

  filteredWhiskies = await filteredWhiskies.filter(whisky => types.includes(whisky.type));

  return filteredWhiskies;
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

async function getSearchResults(matches, whiskies) {
  if (matches.length === 0) return whiskies;

  const matchedWhiskies = await whiskies.filter(whisky => {
    const whiskyName = `${whisky.brand} ${whisky.name}`.toLowerCase();
    return matches.includes(whiskyName);
  });

  return matchedWhiskies;
}

export default {
  getWhiskies,
  getFavoriteWhiskies,
  getWhiskyById,
  getTasters,
  getTasterById,
  getProfiles,
  getTypes,
  filterWhiskies,
  getSearchResults,
};
