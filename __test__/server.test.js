"use strict";

var Nightmare = require("nightmare");

describe("Treasure Map", function() {
  // The default tests in mocha is 2 seconds.
  // Extending it to 30 seconds to have time to load the pages
  var signupPage = '#header__homepage';

  it("should require me to signup or login", function(done) {
    // ID for the login button.
    return Nightmare({
        show: true
      })
  .goto("https://unicorns01.herokuapp.com/")
  
  
  .scrollTo(500, 0)
   
  .screenshot("__test__/homepage.png")
  
  .click("#signupPage")
  .wait(1000)
  
  .screenshot("__test__/signupPage.png")
  
  .scrollTo(500, 0)
  
      .evaluate(function() {
        return document.title;
      })
      .end()
      // Asset the title is as expected
      .then(function(result) {
        expect(result).toBeDefined();
        done();
      });
  }, 30000);

  it("should require me to signup or login", function(done) {
    // ID for the login button.
    return Nightmare({
        show: true
      })
  .goto("https://unicorns01.herokuapp.com/")
  
  .click("#loginPage")
  .type("#loginEmail", "unicorns@testmail.com")
      // Enter password.
      .type("#loginPassword", "test")
      // Take a screenshot of the login form.
      .screenshot("__test__/login.png")
      // Click login button. Always check if you've done this where necessary!
      // It's easy to forget.
      .click("#loginBtn")
  
  
      .evaluate(function() {
        return document.title;
      })
      .end()
      // Asset the title is as expected
      .then(function(result) {
        expect(result).toBeDefined();
        done();
      })
      .catch(function(err) {
        console.log(err);
        done();
      });
  }, 30000);
});