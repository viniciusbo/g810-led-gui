const { exec } = require("sudo-prompt");

module.exports = (config) =>
  new Promise((resolve, reject) => {
    exec(config, { name: "React App" }, (err, stdout, stderr) => {
      console.log(config);
      if (err) console.error(err, stderr);
      else console.log(stdout);
    });
  });
