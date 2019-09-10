getGoogleResults('software academy')
  .then(results => {
    return loadPageContent(results[0]);
  })
  .then(page => {
    addToIndex(page);
    return loadPageContent(findLinks(page)[0]);
  })
  .then(linkPage => {
    addToIndex(linkPage);
  })
  .catch(err => {
    console.log('Any error thrown in the promise chain will end up here.');
  });
