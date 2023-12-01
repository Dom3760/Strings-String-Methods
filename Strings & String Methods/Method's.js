length("Hello")
function length(string)
{
    var counter = 0

    while(string[i]){
        counter++;
    }

    return counter;
    // for(let i = 0 ; i<string.length; i++)
    // {
    //     counter ++
    // }
    console.log(counter)
}

slice(0,5)
function slice (num1,num2)
{
    var string = "Hello World"
    var sliced = string.substring(num1, num2)
    console.log(sliced)
}

//Replaces one charcater, the first match

//replace("l", "s")
//Heslo
replace(0, "Hello");
function replace(num1, newWord) 
{
    var string = "Hi How are you?";
    var newString = string.substring(0, num1) + newWord + string.substring(num1 + length(newWord));
    console.log(newString);
}

//Replaces all matching charcaters in the string
//Hesso
replaceAll("yesSir")
function replaceAll (newWord)
{
    var word = "no"
    word = newWord
    console.log(word)
}

concat("Yes","Sirrrrrr!")
function concat (string1,string2) 
{
    var newString = string1+string2
    console.log(newString)
}

charAt (2)
function charAt (number)
{
    var word = "yes sir"
    console.log(word[number])
}