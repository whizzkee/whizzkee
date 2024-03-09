// Run this test in a suitable environment, such as a Node.js script.
const fetchMediumPosts = async () => {
  const parser = new Parser();
  const feed = await parser.parseURL(
    "https://medium.com/feed/@johnsontrevor53"
  );
  console.log(feed.items); // This should log the fetched items to the console.
  return feed.items;
};

// Call the function to test
fetchMediumPosts()
  .then((posts) => {
    console.log(posts); // Check the fetched data
  })
  .catch((error) => {
    console.error("Fetching posts failed:", error);
  });
