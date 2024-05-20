// Implement a function that converts a number to its Roman numeral representation. 

const numToRomanNum = (num)=>{
    const romanLookup = [
        { value: 1000, numeral: 'M' },
        { value: 900, numeral: 'CM' },
        { value: 500, numeral: 'D' },
        { value: 400, numeral: 'CD' },
        { value: 100, numeral: 'C' },
        { value: 90, numeral: 'XC' },
        { value: 50, numeral: 'L' },
        { value: 40, numeral: 'XL' },
        { value: 10, numeral: 'X' },
        { value: 9, numeral: 'IX' },
        { value: 5, numeral: 'V' },
        { value: 4, numeral: 'IV' },
        { value: 1, numeral: 'I' }
      ];
  let roman ="";
      for(let i=0; i<romanLookup.length;i++){
        while(num >= romanLookup[i].value){
            roman += romanLookup[i].numeral;
            num -= romanLookup[i].value;
        }
      }

      console.log(roman);
      return roman;

}

const number = 15003;
const result = numToRomanNum(number);
console.log(`The ${number} after Roman Number Conversion is : ${result}`);