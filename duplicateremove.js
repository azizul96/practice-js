// অনেকগুলো নামের মধ্যথেকে যেই নামগুলো একবারের বেশি আছে অইগুলকে বাদ দিতে হবে 
// আমি নতুন একটা array নিব  সেখানে নামগুলো  যেটা না থাকবে সেইটা এড করে দিব 

const names =  ["alif","abul","babul","alif","alif","abul","babul","alif"];

function uniqueName(names){
    let unique =[];
    for(let i=0; i<names.length; i++){
        const name = names[i];
        if(unique.includes(name) === false)
        unique.push(name);
        
    }
    return unique;
}
const allNames = uniqueName(names);
console.log(allNames);