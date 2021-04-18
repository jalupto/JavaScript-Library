/*
FOR OF LOOPS
*/

//great for iterating over values in an object
//iteration requires numbered 'things' to work though

// let student = {name: 'Jared', isAwesome: true, degree: 'javascript', week: 1};

// for (item of student){
//     console.log(item);
// }

let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];

for (cat of catArray){
    console.log(cat, 'says meow');
}