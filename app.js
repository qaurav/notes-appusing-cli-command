const yargs = require('yargs');
const notes = require('./notes.js');

yargs.version('1.1.0')


yargs.command({
    command: 'add',
    describe: 'Adding a new  note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'Note Body',
            demandOption: true,
            type:'string'

        }
    },
    handler: (argv) => {
        notes.addNote(argv.title, argv.body);
    }

})

yargs.command({
    command:'remove',
    describe:'Removing a note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.removeNote(argv.title); 

    }

})

yargs.command({
    command:'list',
    descrbe:"listing all the notes",
    handler: () =>{
        notes.listNotes();
    }
})

yargs.command({
    command: 'read',
    describe: 'reading a note',
    builder: {
        title:{
            describe: 'note title',
            demandOption: true,
            type:'string'
        }
    },
    handler: (argv) =>{
        notes.readNote(argv.title)
    }

})
yargs.parse()