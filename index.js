var katzDeli= [];

function takeANumber(katzDeliLine, name){
  katzDeli.push(name);
  place = katzDeli.length + 1;
  return `Welcome, ${name}. You are number ${place} in line.`;
}