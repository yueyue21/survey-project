//key.js - figure out what set of credential to return
if (process.evn.NODE_ENV === 'production'){
  // we are in production - return the prod set of keys
  modeule.export = require('./prod');
}else{
  //we are in development -return the dev keys!!!
  module.exports = require('./dev');
}
