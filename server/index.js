/* eslint consistent-return:0 */
// npm run start --host rcluster-shard-00-00-rwpwp.mongodb.net --port 27017

const express = require('express');
const logger = require('./logger');

const argv = require('minimist')(process.argv.slice(2));
const setup = require('./middlewares/frontendMiddleware');
const isDev = process.env.NODE_ENV !== 'production';
const ngrok = (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel ? require('ngrok') : false;
const resolve = require('path').resolve;
const app = express();


/*const mongoose = require('mongoose');
const password = 'qsEObMRDqRDD311T';
const dbName = 'raindb';
const connectString = 'mongodb://Rain:' + password + '@rcluster-shard-00-00-rwpwp.mongodb.net:27017,rcluster-shard-00-01-rwpwp.mongodb.net:27017,rcluster-shard-00-02-rwpwp.mongodb.net:27017/' + dbName + '?ssl=true&replicaSet=RCluster-shard-0&authSource=admin';

mongoose.connect(connectString, {config: {autoIndex: !isDev}});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected');
});


// If you need a backend, e.g. an API, add your custom backend-specific middleware here

const productSchema = mongoose.Schema({
  category: String,
  name: String,
  image: String,
  price: String,
  salePrice: String
});

// (model name, schema name, collection name)
const ProductModel = mongoose.model('products', productSchema, 'products');

app.use('/product-list', (req, res) => {
  //let collection = db.collection('film');
  //collection.find().toArray((err, itemList) => {
  //  res.send(itemList);
  //});

  //FilmModel.find({}, 'id title cover', (err, filmList) => {
  ProductModel.find((err, productList) => {
    if (err) {
      return res.send(err);
    }

    res.send(productList);
  });
});

app.use('/add-film', (req, res) => {
  let newFilmData = {
    title: req.title,
    subtitle: req.subtitle,
    cover: req.cover,
    genre: req.genre,
    description: req.description
  };

  FilmModel.create(newFilmData, function (err) {
    if (err) {
      return res.send(err);
    }

    res.send('New record saved');
  });
});

app.use('/update-film', (req, res) => {
  let whereQuery = Object.assign({}, req.whereQuery),
      updateQuery = Object.assign({}, req.updateQuery);

  if (whereQuery.hasOwnProperty('_id')) {
    whereQuery._id = mongoose.Types.ObjectId(whereQuery._id);
  }

  FilmModel.update(whereQuery, updateQuery, (err, raw) => {
    if (err) {
      return res.send(err);
    }

    res.send('Record updated ' + raw.nModified);
  });
});*/

// In production we need to pass these values in instead of relying on webpack
setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';

const port = argv.port || process.env.PORT || 3000;

// Start your app.
app.listen(port, host, (err) => {
  if (err) {
    return logger.error(err.message);
  }

  // Connect to ngrok in dev mode
  if (ngrok) {
    ngrok.connect(port, (innerErr, url) => {
      if (innerErr) {
        return logger.error(innerErr);
      }

      logger.appStarted(port, prettyHost, url);
    });
  } else {
    logger.appStarted(port, prettyHost);
  }
});
