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

export default {
  slugify,
  unslugify,
};
