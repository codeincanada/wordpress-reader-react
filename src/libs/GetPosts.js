// const API_URL = "http://localhost:8000/wp-json/wp/v2/posts";
const API_URL = "https://css-tricks.com/wp-json/wp/v2/posts";

const GetPosts = fetch(API_URL)
  .then(async intialResponse => {
    const transformedResponse = await intialResponse.json();
    return transformedResponse.map(entry => {
      // console.info(entry);
      return entry;
    });
  })
  .catch(e => console.error(e));

export default GetPosts;
