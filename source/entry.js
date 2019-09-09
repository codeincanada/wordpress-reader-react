const API_URL = 'https://randomuser.me/api/?results=3';

const results = fetch(API_URL)
  .then((x) => {
    console.info('x', x);
    // Stream is converted to Promise after json() call
    return x.json().then((y) => {
      const results = y.results;
      console.info('results', results);
      results.map((z) => {
        console.log('name:', z.name.first + ' ' + z.name.last);
        return z.picture.medium;
      });
    });
  })
  .catch((e) => console.error(e));

console.log('Here we go!!!', results);
