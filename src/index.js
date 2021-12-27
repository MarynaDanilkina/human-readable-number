module.exports = function toReadable (number) {
    let hundred = Math.floor((number)/100) 
  
  let dozen = Math.floor((number-(hundred*100))/10)

  let unit =  number-((hundred*100)+(dozen*10));
  var a1 = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
  var a2 = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
  var a3 =['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  if (number === 0){
      return 'zero'
  } else if  (number >10 && number<20){
      return a2[unit-1]
  } else if (hundred === 0 && unit === 0){
      return a3[dozen-1]
  } else if (dozen === 0 && unit ===0 && hundred !== 0){
      return a1[hundred-1] + ' hundred'
  } else if ((hundred !== 0) && (dozen === 1) && (unit !== 0)){
      return a1[hundred-1] + ' hundred ' + a2[unit-1]
  } else if (hundred === 0 && dozen === 0){
      return a1[unit-1]
  } else if (hundred === 0 && dozen !==0 && unit !== 0){
      return a3[dozen-1] + ' '+ a1[unit-1]
  } else if(hundred !== 0 && dozen ===0 && unit !== 0){
      return a1[hundred-1] + ' hundred ' +a1[unit-1]
  } else if (hundred !== 0 && dozen !==0 && unit === 0){
      return a1[hundred-1] + ' hundred ' + a3[dozen-1]
  } else  {
      return a1[hundred-1] + ' hundred ' + a3[dozen-1] + ' ' + a1[unit-1]
  }
    } 

    