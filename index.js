const express = require("express");
const parkinsonsRoutes = require('./routes/parkinsons'); // import the routes
const routes = require('./routes/chestXray');
const cors = require('cors');
const serverless = require('serverless-http');
const app = express();

//apply middleware
app.use(cors());
app.use(express.json({limit: "5mb"})); // parses incoming requests with JSON payloads

app.use('/', parkinsonsRoutes); //to use the routes
app.use('/', routes);


exports.handler = serverless(app);
// const listener = app.listen(process.env.PORT || 3000, () => {
//     console.log('App is listening on port ' + listener.address().port)
// })
