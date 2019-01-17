var Nightmare = require("nightmare");


new Nightmare({ show: true })
 
  .goto("http://localhost:8080/")

  .scrollTo(500, 0)
   
  .screenshot("login.png")
  
  .click("#download-button")
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
