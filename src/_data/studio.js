const fetch = require('node-fetch');

module.exports = async () => {
  try {
    const res = await fetch(
      'https://11ty-from-scratch-content-feeds.piccalil.li/media.json'
    );
    const {items} = await res.json();

    return items;
  } catch (ex) {
    console.log(ex);
    return [];
  }
};