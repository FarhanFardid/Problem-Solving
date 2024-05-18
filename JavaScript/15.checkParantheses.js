// Check for balanced parentheses. Write a function to determine if a given string of parentheses is balanced.

const checkParantheses = (str) =>{
    let track= [];
    const paranthesesObj ={
        '(' : ')',
        '{' : '}',
        '[' : ']'
    };
    for(let val of str){
        if (val === '(' || val ==='{' || val === '['){
            track.push(val);
        }
        else if(val === ')' || val ==='}' || val === ']')
        {
            let top = track.pop();
            console.log(top);
            if(paranthesesObj[top] !== val ){
                return "Imbalanced";
            }
        }
   if(track.length === 0){
    return "Balanced";
   }
    }
    console.log(track);
    
}

const string ='([({[]})])';
const result = checkParantheses(string);

console.log("The parantheses are: ", result);