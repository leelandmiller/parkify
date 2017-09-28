const Nightmare = require('nightmare');
const should = require("chai").should();

let nightmare = Nightmare({
    show: true
});


nightmare
  .goto('http://localhost:3000/login')
  .type('#email', 'leelandmiller@gmail.com')
  .type('#password', 'Blackjack1')
  .click('#login-submit')
  .wait(2000)
  .evaluate(() => (
      document.querySelector('#email-td').innerText + '\n' + 
      document.querySelector('#name-td').innerText
    ))
  .end()
  .then(console.log)
  .catch((error) => {
    console.error('Search failed:', error);
  });
