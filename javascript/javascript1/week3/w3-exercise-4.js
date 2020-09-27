//-------------First Step
let notes = [];
function saveNote(content, id) {
  notes.push({ id: id, content: content });
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes); // [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]

//-------------Second Step

function getNote(id) {
  for (let i = 0; i < notes.length; i++) {
    if (notes[i]["id"] == id) {
      return notes[i];
    }
  }
  for (let i = 0; i < notes.length; i++) {
    if (notes[i]["id"] != id) {
      return "There is no Note with such an id";
    }
  }
}

const firstNote = getNote(2);
console.log(firstNote); // {content: 'Pick up groceries', id: 1}

//-------------Third Step

function logOutNotesFormatted() {
  for (let i = 0; i < notes.length; i++) {
    console.log(
      "The note with id: " +
        notes[i]["id"] +
        " , has the following note text: " +
        notes[i]["content"]
    );
  }
}

logOutNotesFormatted(); // should log out the text below

// The note with id: 1, has the following note text: Pick up groceries
// The note with id: 2, has the following note text: Do laundry
