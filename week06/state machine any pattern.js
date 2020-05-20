
function match(string, pattern){
  let state = found(0, pattern);
  for(let c of string){
    state = state(c);
  }  
   return state === end
}

function found(i, pattern){
  return function(c){
    //console.log(c, pattern[i])
    if(c == pattern[i]){
      if(i == pattern.length -1){
        return end;
      }else{
        return found(i+1, pattern);
      }
    }else{
        let hasBefore = false;
        for(let j = i-1; j >= 0;j--){
          if(pattern[j] == c){
             i = j;
             hasBefore = true;
             break;
          }
        }
        if(hasBefore){
          return found(i + 1, pattern)
        }else{
          return found(0, pattern);
        }
    }
  }
}

function end(){
  return end;
}

console.log(match('ababxababc', 'ababx'));
console.log(match('abcabcabx', 'abcabx'));
console.log(match('abcababcabx', 'abcabx'));
console.log(match('abababcababababx', 'ababx'));