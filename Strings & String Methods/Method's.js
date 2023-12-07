function length(string) {
  var counter = 0;
  let i = 0;

  while (string[i]) {
    counter++;
    i++;
  }
  return (counter);
}

slice(0,5)
function slice (num1,num2)
{
    var string = "Hello World"
    var sliced = string.substring(num1, num2)
    console.log(sliced)
}

//Replaces one charcater, the first matched character

//replace("l", "s")
//Heslo
replace("l", "s");
function replace(replace, char) 
{
    var string = "Hello";
    for(let i = 0; i<string.length; i++)
    {
        if(string[i] === replace)
        {
            string[i] = char
            break
        }
    }
    console.log(string)
}

//Replaces all matching charcaters in the string
//Hesso
replaceAll("l","s")
function replaceAll (replace, char)
{
    var string = "Hello";
    for(let i = 0; i<length(string); i++)
    {
        if(string[i] === replace)
        {
            string[i] = char
        }
    }
    console.log(string)
}

//merges the two strings together; concatanates the two strings.
concat("Yes","Sirrrrrr!")
function concat (string1,string2) 
{
    var newString = string1+string2
    console.log(newString)
}

//gets the character at the selected index
charAt (2)
function charAt (number)
{
    var word = "yes sir"
    console.log(word[number])
}