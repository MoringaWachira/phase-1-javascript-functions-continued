// code your solution here

// const activity = "leisure"

// function saturdayFun(leisure = "swim") {
//     switch (activity) {

//     case "swim":
//     console.log(`This Saturday, I want to ${leisure}!`);

//     default:
//         console.log('This Saturday, I want to roller-skate');
//     }
    
// }

// saturdayFun("swim")



function saturdayFun(activity = "roller-skate" ) {
    return `This Saturday, I want to ${activity}!`;
}
console.log (saturdayFun());

function mondayWork(toDo = "go to the office") {
    return `This Monday, I will ${toDo}.`;
}
console.log (mondayWork());
// lab2

// const fn = function (toDo="go to the office") {
//     console.log(`This Monday, I will ${toDo}`)
// }
// fn();



// lab3

function wrapAdjective(person = "*") {
    return function (adjective = "a hard worker"){
    return  `You are ${person}${adjective}${person}!`;
    }
}

