// counts the length of a string or arrary that is entered into function
console.log(length("YesSir!"))
function length(string) {
  var counter = 0;
  let i = 0;

  while (string[i]) {
    counter++;
    i++;
  }
  return (counter);
}

console.log(slice(0,5))
function slice (num1,num2)
{
    var string = "Hello World"
    var sliced = string.substring(num1, num2)
    return (sliced);
}

//Replaces one charcater, the first matched character
//replace("l", "s")
//Heslo
console.log(replace("l", "s", "Hello"));
function replace(replace, char, word) 
{
    let newString ="";
    let index = -1;
    //var string = "Hello";
    for(let i = 0; i<length(word); i++)
    {
        if(word[i] === replace)
        {
            index = i;
            break;
        }
    }

    for(let i = 0; i < length(word); i++){
        if(i === index){
            newString += char;
        }
        else{
            newString += word.charAt(i);
        }
    }

    return newString;
}



//Replaces all matching charcaters in the string
//Hesso
console.log(replaceAll("l","s","Hello"))
function replaceAll (replace, char, word)
{
    let newString ="";
    let index = []
    for(let i = 0; i<length(word); i++)
    {
        if(word[i] === replace)
        {
            index.push(i)
        }
    }

    for(let i = 0; i < length(word); i++){
        if (index.includes(i)) 
        {
            newString += char;
        } else 
        {
            newString += word.charAt(i);
        }
    }

    return newString;
}

//merges the two strings together; concatanates the two strings.
console.log(concat("Yes","Sirrrrrr!"))
function concat (string1,string2) 
{
    var newString = string1+string2
    return (newString);
}

//gets the character at the selected index
console.log(charAt ("yes sir",2))
function charAt (word,number)
{
    return(word[number]);
}