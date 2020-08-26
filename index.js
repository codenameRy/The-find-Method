//Querying for Records with Find

var users = [
  { name: 'Jill' },
  { name: 'Leslie' },
  { name: 'Samantha' }
];

var user;
//For Loop
for (var i = 0; i < users.length; i++) {
  if (users[i].name === 'Leslie') {
    user = users[i];
  }
}

console.log(user)

//Refactor for Find Method
var findUsers = users.find((user) => {
  return user.name === 'Jill';
})

console.log(findUsers)

//Find Continued

function car(model) {
  this.model = model;
}

var cars = [
  new car('Zonda'),
  new car('McLaren'),
  new car('Lamborghini')
]

cars.find((car) => {
  return car.model === 'Lamborghini';
})


//New Problem
var posts = [
  { id: 1, title: 'New Post' },
  { id: 2, title: 'Old Post' }
]

var comment = { postId: 1, content: 'Greatest Post' }

function postForComment(posts, comment) {
  return posts.find((post) => {
    return post.Id = comment.postId
  })
}

console.log(postForComment(posts, comment))

//Using Find to Search for users

//Challenge 1 - Finding Admin users

//Find the user in the users array who is an admin

var users = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true }
];

var admin = users.find((user) => {
  return user.admin === true;
})

console.log(admin)

//Challenge 2 - What's Your Balance?

//Find the account with a balance of 12 and assign it to a varibale account

var accounts = [
  { balance: -10 },
  { balance: 12 },
  { balance: 0 }
];

var account = accounts.find((account)=> {
  return account.balance === 12;
})

console.log(account)
