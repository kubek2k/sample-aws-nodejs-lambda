module.exports = {
    main: function(event, context) {
              console.log("Hello world");
              context.succeed("done");
          }
}

