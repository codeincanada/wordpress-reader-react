const API_URL = "http://localhost:8000/wp-json/wp/v2/categories";

const GetCategories = fetch(API_URL)
  .then(async intialResponse => {
    const transformedResponse = await intialResponse.json();
    return transformedResponse.map(entry => {
      // console.info(entry);
      return entry;
    });
  })
  .catch(e => console.error(e));

export default GetCategories;
