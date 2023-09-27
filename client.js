const net = require("net");

const connect = () => {
  const conn = net.createConnection(
  {
    host:"165.227.47.243 ",
    port:"50541"
  });

  conn.setEncoding('utf8');

  conn.on('data', (data) => {
    console.log(data)
  });

  conn.on('connect', () => {
    console.log("Snek time!!!");
    
    // for (let i = 0; i < 5; i++) {
    //   setTimeout((i) => conn.write("Move: up"), i * 500)
    // }
  });
  
  conn.write("Name: FNZ");

return conn;
};

module.exports = connect;
