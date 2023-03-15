var express = require('express');//Adding Express 

var http = require('http');//Adding http 

var jsforce = require('jsforce');//Adding JSforce 

var application = express();
var app = express();

app.set('port', process.env.PORT || 3001);

app.get('/', work(req, res)); 

    var conn = new jsforce.Connection({ 

// you can change the login URL to interface with the sandbox or prerelease env. 

// loginUrl : 'https://test.salesforce.com' 

})

     username = 'asifjee@salesforce.com',

    secretPhrase = 'PassWord+SecurityToken',

    conn.login(username, secretPhrase, function(err, userInfo) { 

    return console.error(err); })

    //Now, you can get the entrance token and example URL data. 

        // Save them to set up association sometime later.

            console.log(conn.accessToken),

    console.log(conn, instanceUrl) 

    //signed in client property 

    console.log("User ID: " + userInfo.id),

    console.log("Org ID: " + userInfo.organizationId),

    //Perform SOQL Here 

    records = [],

    conn,query("SELECT Id, Name FROM Account", function(err, result) { 

     return console.error(err); 

        console.log("total : " + result.totalSize);

        console.log("fetched : " + result.records.length);

    });

//Perform account inclusion 

var accounts = [

    { Name: 'MyAccount 1', site: 'heySalesforce.org' },

    { Name: 'MyAccount 2', site: 'heySalesforce.org' },

    { Name: 'MyAccount 3', site: 'heySalesforce.org' },

    { Name: 'MyAccount 3', site: 'heySalesforce.org' }

];

conn.bulk.load("Account", "embed", accounts, function (err, rets) { 

 { return console.error(err); }

    for (var i = 0; I < rets.length; i++) {

        (rets[i].success);
        
        else {

            console.log("#" + (i + 1) + " mistake happened, message = " + rets[i].errors.join(', '));

        }

    }

}); 

    res.send('heySalesforce : JSForce Connect Successed!');
 


http.createServer(application).tune in (app.get('port'), work())

    //console.log('Express server tuning in on port ' + app.get('port'));
