
const PropertiesReader = require('properties-reader');

module.exports = {
    main: function(event, context) {
              const properties = PropertiesReader('env.properties');
              console.log("Hello world. Property A from properties == " + properties.get('A'));
              context.succeed("done");
          }
}

