function processNumbers() {
    const number=[43,56,802,67,90]
    maximum=Math.max(...number)
    var suma = 0;
    for (var i = 0; i < number.length; i++) 
    {
      suma += number[i];
    }
    return {maximo: maximum,
            sum: suma}
    //
    }     

  //console.log(processNumbers([1]))
 module.exports = processNumbers;
  