var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    methodOverride  = require("method-override")


// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

var codebreaker = require('./controllers/codebreaker');


// // Example Route
// var router = express.Router();
// router.get('/v1/codebreaker', function(req, res) {
//   res.send("Hello world!");
// });
// app.use(router);


var cb = express.Router();

cb.route('/adivinarsecreto/:secret')
  .get(codebreaker.adivinarSecreto);

cb.route('/setsecreto')
  .post(codebreaker.setSecret);

app.use(cb);
// // API routes
// var tvshows = express.Router();

// tvshows.route('/tvshows')
//   .get(TVShowCtrl.findAllTVShows)
//   .post(TVShowCtrl.addTVShow);

// tvshows.route('/tvshows/:id')
//   .get(TVShowCtrl.findById)
//   .put(TVShowCtrl.updateTVShow)
//   .delete(TVShowCtrl.deleteTVShow);

// app.use('/api', tvshows);

// Start server
app.listen(3000, function() {
  console.log("Node server running on http://localhost:3000");
});