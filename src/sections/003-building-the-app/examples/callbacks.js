setTimeout(() => {
  alert('This code ran after 5000 ms without blocking the main thread');
}, 5000);

getGoogleResults('software academy', results => {
  alert('This code will run when results have been loaded');
});

// Problem: Callback hell
getGoogleResults('software academy', results => {
  results.forEach(result => {
    loadPageContent(result, page => {
      addToIndex(page);
      findLinks(page).forEach(link => {
        loadPageContent(link, page => {
          addToIndex(page);
        });
      });
    });
  });
});
