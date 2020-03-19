var path = require ("path")
//Exports so server.js can use this information

module.exports = function(app) {

//Routes to Home Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});


}