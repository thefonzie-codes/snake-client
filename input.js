const constants = require('./constants');

let connection;

const setupInput = (conn) => {

  connection = conn;

  const stdin = process.stdin;
  stdin.on("data", handleUserInput)
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

const handleUserInput = (conn) => {
  
  if (conn === '\u0003') {
    console.log("exiting")
    process.exit();
  }

  connection.write(constants.inputs[conn]);
};
  // if (conn === 'w') {
  // connection.write("Move: up")
  // }

  // if (conn === 'a') {
  // connection.write("Move: left")
  // }

  // if (conn === 's') {
  // connection.write("Move: down")
  // }

  // if (conn === 'd') {
  // connection.write("Move: right")
  // }

  // if (conn === 'q') {
  // connection.write("Say: Hiiiiii!")
  // }

  // if (conn === 'e') {
  // connection.write("Say: EZ")
  // }

  // if (conn === 'x') {
  // connection.write("Say: POG")
  // }

  // if (conn === 'x') {
  // connection.write("Say: Boop")
  // }


//};

module.exports = setupInput;