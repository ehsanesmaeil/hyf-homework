
// Condition 3, Exercise for :
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Test_your_skills:_Conditionals

let response;
let score = 85;
let machineActive = true;


  switch (machineActive){
        
        case (score<19):
        response = "That was a terrible score — total fail!";
        break;
        
        case (score<39):
        response = "You know some things, but it's a pretty bad score. Needs improvement.";
        break;
        
        case (score<69):
        response = "You did a passable job, not bad!";
        break;
        
        case (score<89):
        response = "That\'s a great score, you really know your stuff.";
        break;
        
        case (score<100):
        response = "That\'s a great score, you really know your stuff.";
        break;
        
        default:
        response = 'The machine is turned off. Turn it on to process your score.';
        
        
        case (score<0 || score>100) :
         response = "This is not possible, an error has occurred.";
         
    }


console.log(response)
