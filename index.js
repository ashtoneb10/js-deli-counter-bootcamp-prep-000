var katzDeli= [];

var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  var place = katzDeliLine.length;
  return `Welcome, ${name}. You are number ${place} in line.`;
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length >0){
    return `Currently serving ${katzDeliLine.shift()}.`;
} else return "There is nobody waiting to be served!"
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length >0){
    for(let i = 0; i<katzDeliLine.length; i++){
    return `The line is currently: ${i+ 1}. ${katzDeliLine[i]}`
    }
} else return "The line is currently empty."
}
