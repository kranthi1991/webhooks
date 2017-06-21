var express = require('express');
var router = express.Router();
var WebHooks = require('node-webhooks');
console.log(WebHooks);
var webHooks = new WebHooks({
    db: './webHooksDB.json', // json file that store webhook URLs
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
webHooks.add('shortname1', "http://127.0.0.1:9000/prova/other_url").then(function(){
    // done
}).catch(function(err){
    console.log(err)
})

webHooks.trigger('shortname1', {data: 123})


var webHooks = new WebHooks({
    db: './webHooksDB.json',
    DEBUG: true
})

var emitter = webHooks.getEmitter()

emitter.on('*.success', function (shortname, statusCode, body) {
    console.log('Success on trigger webHook' + shortname + 'with status code', statusCode, 'and body', body)
})

emitter.on('*.failure', function (shortname, statusCode, body) {
    console.error('Error on trigger webHook' + shortname + 'with status code', statusCode, 'and body', body)
})
module.exports = router;


