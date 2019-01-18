var Nightmare = require("nightmare");


new Nightmare({ show: true })
 
  .goto("https://unicorns01.herokuapp.com/")

  .scrollTo(500, 0)
   
  .screenshot("login.png")
  
  .click("#signupPage")
  .wait(1000)
  
  .screenshot("login.png")
  
  .scrollTo(500, 0)
  
  .screenshot("courses.png")
  
  .end()
  
  .then(function() {
    console.log("Done!");
  })
 
  .catch(function(err) {
    console.log(err);
  });
