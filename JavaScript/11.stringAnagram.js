// Check for anagram. Write a function to determine if two strings are anagrams of each other.

// A string anagram is a permutation or rearrangement of the characters of a string to form a new string. Two strings are considered anagrams if they contain the same characters with the same frequencies, but in different orders.

const checkAnagram =(str1, str2)=>{

    let cleanStr1 = str1.replace(/[_\W]+/g, "").toLowerCase();
    let sortedStr1 = cleanStr1.split('').sort().join('');
    console.log(sortedStr1);
    let cleanStr2 = str2.replace(/[_\W]+/g, "").toLowerCase();
    let sortedStr2 = cleanStr2.split('').sort().join('');
    console.log(sortedStr2);
    if(sortedStr1 === sortedStr2){
        return "Strings Are Anagram."
    }
    else
    return "Strings Are not Anagram."
}

const string1= "Radu!m *_$? came";
const string2= "Ma! * ?%dam Curie";

const result =checkAnagram(string1,string2);
console.log(result);
