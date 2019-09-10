// To use await, the function needs the async annotation
async function crawlGoogle() {
  try {
    // you can await any promise
    const results = await getGoogleResults('software academy');
    const page = await loadPageContent(results[0]);
    addToIndex(page);
    const linkPage = await loadPageContent(findLinks(page)[0]);
    addToIndex(linkPage);
  } catch (err) {
    console.log('Any error thrown in the try block will end up here.');
  }
}

// Async functions always return a promise
crawlGoogle()
  .then(() => console.log('success'))
  .catch(err => console.log('error'));
