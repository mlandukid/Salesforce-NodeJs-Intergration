var express = require('express'); // Adding Express
var http = require('http'); // Adding http
var jsforce = require('jsforce'); // Adding JSforce
var application = express();
var app = express();

app.set('port', process.env.PORT || 3001);

app.get('/', function(req, res) {
  work(req, res);
});

var conn = new jsforce.Connection({
  // you can change the login URL to interface with the sandbox or prerelease env.
  // loginUrl : 'https://test.salesforce.com'
});

var username = 'asifjee@salesforce.com';
var secretPhrase = 'PassWord+SecurityToken';

conn.login(username, secretPhrase, function(err, userInfo) {
  if (err) {
    return console.error(err);
  }
  // Now, you can get the access token and instance URL information.
  // Save them to set up a connection later.
  console.log(conn.accessToken);
  console.log(conn.instanceUrl);
  // signed in user property
  console.log("User ID: " + userInfo.id);
  console.log("Org ID: " + userInfo.organizationId);
  // Perform SOQL Query
  var records = [];
  conn.query("SELECT Id, Name FROM Account", function(err, result) {
    if (err) {
      return console.error(err);
    }
    console.log("total : " + result.totalSize);
    console.log("fetched : " + result.records.length);
  });
});

// Perform account insertion
var accounts = [
  { Name: 'MyAccount 1', Site: 'heySalesforce.org' },
  { Name: 'MyAccount 2', Site: 'heySalesforce.org' },
  { Name: 'MyAccount 3', Site: 'heySalesforce.org' },
  { Name: 'MyAccount 4', Site: 'heySalesforce.org' }
];

conn.bulk.load("Account", "insert", accounts, function(err, rets) {
  if (err) {
    return console.error(err);
  }
  for (var i=0; i<rets.length; i++) {
    if (rets[i].success) {
      console.log("#" + (i+1) + " loaded successfully, id = " + rets[i].id);
    } else {
      console.log("#" + (i+1) + " error occurred, message = " + rets[i].errors.join(', '));
    }
  }
});

app.get('/', function(req, res) {
  res.send('heySalesforce: JSForce Connection Successful!');
});

http.createServer(application).listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
