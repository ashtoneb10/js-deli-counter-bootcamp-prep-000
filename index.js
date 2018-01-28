var katzDeli= [];

function takeANumber(katzDeliLine, name){
  katzDeli.push(name);
  var place = katzDeli.length;
  return `Welcome, ${name}. You are number ${place} in line.`;
}