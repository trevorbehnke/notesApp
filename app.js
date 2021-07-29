const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes.js");

yargs.version("1.1.0");

// Add note command
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

// Remove note command
yargs.command({
  command: "remove",
  describe: "Remove an old note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.removeNote(argv.title);
  },
});

// List note command
yargs.command({
  command: "list",
  describe: "Listing all notes",
  handler: function () {
    console.log("Listing all notes!");
  },
});

// Read note command
yargs.command({
  command: "read",
  describe: "Reading a note",
  handler: function () {
    console.log("Reading a note!");
  },
});

yargs.parse();
