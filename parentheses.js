
/**
 * we check if the parethesis are used properly
 * @param {String} parentheses - a string of parethesis
 * @returns true or falsse
 */
function parentheses (parentheses){
    let a=0;


    if(parentheses[0]==")"){
        return false
    }
    else if(parentheses[(parentheses.length-1)]=="("){
        return false
    }
    

 for (let i = 0; i < parentheses.length; i++) {
    
    if (parentheses[i] === "(") {
        ++a;
        }
    else if (parentheses[i] === ")") {
        --a ;
        }
    
    
 }

 return a==0? true:false
    
    
}