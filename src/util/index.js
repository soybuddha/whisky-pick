const removeSpecialChars = (str) => str.replace(/[^a-zA-Z0-9 ]/g, '');
const convertDiacriticChars = (str) => str.replace('â', 'a').replace('é', 'e');
const capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export function slugify(str) {
  return removeSpecialChars(
    convertDiacriticChars(str).toLowerCase()
  ).replace(/ /g, '-');
}

export function unslugify(str) {
  return str.split('-').map(s => capitalizeFirstLetter(s)).join(' ');
}

export const CLOUDINARY_WHISKIES_BASE_URL = 'https://res.cloudinary.com/kevinnayar/image/upload/v1549831642/whiskies/';
export const CLOUDINARY_TASTERS_BASE_URL = 'https://res.cloudinary.com/kevinnayar/image/upload/v1549831499/tasters/';

export default {
  slugify,
  unslugify,
  CLOUDINARY_WHISKIES_BASE_URL,
  CLOUDINARY_TASTERS_BASE_URL,
};
