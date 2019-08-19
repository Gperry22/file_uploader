const express = require('express');
const fileUpload = require('express-fileupload');

var db = require('../models');

var router = express.Router();

// default options
router.use(fileUpload());

router.get("/api/pics", function(req, res) {
  db.Picture.findAll({}).then(result => {
    res.json(result);
  }).catch((err) => {
      console.log(err);
    });
 })

router.post('/upload', function(req, res) {
  if (Object.keys(req.files).length == 0) {
    return res.status(400).send('No files were uploaded.');
  }
  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  let sampleFile = req.files.sampleFile;

  db.Picture.findAll({}).then(result => {
    var count = result.length;
    var picName = 'public/images/picture_' + count + '.jpg'
    // Use the mv() method to place the file somewhere on your server
    sampleFile.mv(picName, function (err) {
      if (err) {
      return res.status(500).send(err);
    }
        else {
          var body = {
            pictureLink: picName
          }
        db.Picture.create(body).then((result) => {
          // res.send('File uploaded!');
          res.redirect("/")
          }).catch((err) => {
            console.log(err);
          });
        }
      });
    });
  });













module.exports = router;