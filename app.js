const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes.js");

yargs.version("1.1.0");

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note Body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
  },
});
yargs.command({
  command: "remove",
  describe: "Remove an old note",
  handler: function () {
    console.log("Removing old note!");
  },
});
yargs.command({
  command: "list",
  describe: "Listing all notes",
  handler: function () {
    console.log("Listing all notes!");
  },
});
yargs.command({
  command: "read",
  describe: "Reading a note",
  handler: function () {
    console.log("Reading a note!");
  },
});

yargs.parse();
