// const API_URL = "https://randomuser.me/api/?results=3";
const API_URL = 'http://localhost:8000/wp-json';

const results = fetch(API_URL)
  .then(async (intialResponse) => {
    const transformedResponse = await intialResponse.json();
    const routes = transformedResponse.routes;
    Object.keys(routes).map((route) => {
      // REGEX to remove the initial /wp/v2/
      // And anything after the subsequent "/"
      console.log(route);
    });
  })
  .catch((e) => console.error(e));

results.then(() => console.log('Here we go!!!', results));
