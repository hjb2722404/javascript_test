var odds = evens.map(v => v + 1);
var nums = evens.map((v, i) => v + i);

nums.forEach(v => {
  if (v % 5 === 0) fives.push(v);
});

var bob = {
  _name: "Bob",
  _friends: [],
  printFriends() {
    this._friends.forEach(f => console.log(this._name + " knows " + f));
  }
};

function square() {
  let example = () => {
    let numbers = [];
    for (let number of arguments) {
      numbers.push(number * number);
    }

    return numbers;
  };
  return example();
}

square(2, 4, 7.5, 8, 11.5, 21);
