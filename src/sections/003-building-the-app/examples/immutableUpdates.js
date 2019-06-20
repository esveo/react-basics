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
  return {
    ...user,
    adress: {
      ...user.adress,
      number: 22
    }
  };
}

const newUser = updateUser(user);

const userChanged = newUser !== user; // true
const adressChanged = newUser.adress !== user.adress; // true
const parentChanged = newUser.parent !== user.parent; // false
const numberChange = newUser.adress.number !== user.adress.number; // false
