var surveyData = require("../data/friends.js");

module.exports = function(app) {

  // Displays surveys in json  

app.get("/api/survey", function(req, res) {
res.json(surveyData);
});

//posts surveys

app.post("/api/survey", function(req, res) {
    res.json(surveyData)
})

}