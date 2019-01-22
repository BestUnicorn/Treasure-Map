"use strict";

var Nightmare = require("nightmare");

describe("Treasure Map", function() {
  
  var signupPage = '#header__homepage';

  it("should require me to signup or login", function(done) {
   
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
  
  .then(function(result) {
    expect(result).toBeDefined();
    done();
    });
  }, 30000);

  it("should require me to signup or login", function(done) {
    
    return Nightmare({
        show: true
      })
  .goto("https://unicorns01.herokuapp.com/")
  
  .click("#loginPage")
  .type("#loginEmail", "unicorns@testmail.com")
    
  .type("#loginPassword", "test")
    
  .screenshot("__test__/login.png")
      
  .click("#loginBtn")

  .wait(1000)

  .scrollTo(600, 0)

  .screenshot("__test__/login1.png")
  
  
  .evaluate(function () {
     return document.title;
      })
  .end()
    
  .then(function (result) {
    expect(result).toBeDefined();
      done();
    })
  .catch(function (err) {
    console.log(err);
      done();
    });
  }, 30000);
});