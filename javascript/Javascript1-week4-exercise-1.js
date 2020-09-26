let name = {};
let todo = {};
let sumOfTodo = 0;
let result;


// For time out section
function setTimer(who) {
    alert(`Hello ${who}!`);
}


let alertForTimer = setTimeout(setTimer, 4 * 1000, '4 min passed')




function getReply(command) {


    if (command == "Hello my name is Benjamin" && name["name"] == "Benjamin") {
        return "Benjamin, your name is saved.";
    } else if (command == "Hello my name is Benjamin" && name["name"] != "Benjamin") {
        name["name"] = "Benjamin";
        return "Nice to meet you Benjamin";
    } else if (command == "what is my name?" && name["name"] == "Benjamin") {
        return "Your name is Benjamin"
    } else if (command == "what is my name?" && name["name"] == null) {
        return "The name has not been mentioned"
    } else if (command == "Add fishing to my todo") {
        todo["exercise"] = "fishing"
        return "fishing added to your todo"
    } else if (command == "Add singing in the shower to my todo") {
        todo["singing"] = "singing in the shower"
        return todo
    } else if (command == "Remove fishing from my todo") {
        delete todo["exercise"];
        return todo;
    } else if (command == "What is on my todo?") {


        return "you have " + Object.keys(todo).length + " item in your ToDo list,  " + todo["exercise"] + " and " + todo["singing"]
    } else if (command == "What day is it today?") {
        let today = new Date();
        return today.toDateString()

    } else if (command == "what is 3 + 2 ?") {

        if (text.split(" ")[3] == "+") {
            result = parseInt(text.split(" ")[2]) + parseInt(text.split(" ")[4]);
        } else if (text.split(" ")[3] == "-") {
            result = text.split(" ")[2] - text.split(" ")[4];
        } else if (text.split(" ")[3] == "*") {
            result = text.split(" ")[2] * text.split(" ")[4];
        } else if (text.split(" ")[3] == "/") {
            result = text.split(" ")[2] / text.split(" ")[4];
        }

    } else if (command == "Set a timer for 4 minutes") {

        console.log("Timer set for 4 minutes")
        return alertForTimer;

    }
}


// console.log(getReply("Hello my name is Benjamin"));
// console.log(getReply("what is my name?"));
// console.log(getReply("Add fishing to my todo"));
// console.log(getReply("Add singing in the shower to my todo"));
// console.log(getReply("Remove fishing from my todo"));
// console.log(getReply("What is on my todo?"));
// console.log(getReply("What day is it today?"));
// console.log(getReply("What is 3 + 3?"));
// console.log(getReply("Set a timer for 4 minutes"))
