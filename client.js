const net = require("net");
const constants = require('./constants');

const connect = () => {
  const conn = net.createConnection(
  {
    host: constants.IP ,
    port: constants.PORT
  });

  conn.setEncoding('utf8');

  conn.on('data', (data) => {
    console.log(data)
  });

  conn.on('connect', () => {
    console.log("Snek time!!!");
    
  });
  
  conn.write("Name: FNZ");

return conn;
};

module.exports = connect;
