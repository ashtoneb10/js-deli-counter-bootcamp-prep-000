var katzDeli= [];

var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  var place = katzDeliLine.length;
  return `Welcome, ${name}. You are number ${place} in line.`;
}

function nowServing(){
  if(katzDeliLine.length <0){
    return katzDeliLine.shift();
} else return "There is nobody waiting to be served!"
}

function currentLine(){
  if(katzDeliLine.length <0){
    return katzDeliLine;
} else return "The line is currently empty."
}
