// const API_URL = "https://randomuser.me/api/?results=3";
const API_URL = "http://localhost:8000/wp-json/wp/v2/posts";

const results = fetch(API_URL)
  .then(async intialResponse => {
    const transformedResponse = await intialResponse.json();
    transformedResponse.map(entry => {
      console.info(entry);
    });
  })
  .catch(e => console.error(e));

results.then(() => console.log("Here we go!!!", results));
