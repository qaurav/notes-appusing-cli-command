const fs = require('fs');

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note)=>{
        return note.title ===title;
    })

    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
    
        saveNotes(notes)
    }else{
        console.log('the title of the note is already taken.')
    }

}

const saveNotes = (notes) => {
    newData_json = JSON.stringify(notes)
    fs.writeFileSync('notes.json', newData_json)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const data = dataBuffer.toString()
        const book_obj =JSON.parse(data)
        return book_obj
    } 
    catch (error) {
        return []
        
    }
    
}

const removeNote = (title) =>{
    const notes = loadNotes();
    const remainingNotes = notes.filter((note) =>{
        return note.title !== title
    })
    if(notes.length >remainingNotes.length){
        saveNotes(remainingNotes);
    }else{
        console.log('the title of the note was not found')
    }


}

const listNotes = () =>{
    const notes = loadNotes()
    notes.forEach(note => {
     console.log(note.title)   
    });
}

const readNote = (title) =>{
    const notes = loadNotes()
    const note = notes.find((x) => {
        return x.title === title
    })
    if(note){
        console.log(note.title+'\n'+ note.body)
    }else{
        console.log('the note is not available');
    }

}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}