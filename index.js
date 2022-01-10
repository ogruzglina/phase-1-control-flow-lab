function scuberGreetingForFeet(distance){
  // Write your code here!
  if (distance <= 400) {
    return 'This one is on me!';
  } else if (distance > 2000 && distance <= 2500) {
    return 'I will gladly take your thirty bucks.';
  } else if (distance > 2500){
    return 'No can do.';
  }
}
console.log(scuberGreetingForFeet(25));
console.log(scuberGreetingForFeet(500)); //undefined bc we don't have condition between 401 and 1999 feet
console.log(scuberGreetingForFeet(2500));
console.log(scuberGreetingForFeet(12500));

function ternaryCheckCity(city){
  // Write your code here!
  return city === "NYC" ? 'Ok, sounds good.' : 'No go.';
}
console.log(ternaryCheckCity('NYC'));
console.log(ternaryCheckCity('Dnipro'));
console.log(ternaryCheckCity(123));

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip){
    case 'generous': 
      return "Thank you so much.";
      break;
    case 'not as generous':
      return 'Thank you.';
      break;
    default: 
      return 'Bye.';
      break;
  }
}
console.log(switchOnCharmFromTip('generous'));
console.log(switchOnCharmFromTip('not as generous'));
console.log(switchOnCharmFromTip('thank you'));