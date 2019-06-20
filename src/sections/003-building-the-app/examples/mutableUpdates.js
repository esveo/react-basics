let user = {
  adress: {
    street: 'Long',
    number: 21
  },
  parent: {
    name: 'Howard'
  }
};

function updateUser(user) {
  user.adress.number = 22;
}

// adress number has changed
// Change detection after the fact not possible
updateUser(user);
