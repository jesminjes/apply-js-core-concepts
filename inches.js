const myInches = 12;
const myFeet = myInches /12;
console.log(myFeet);

const dataInches = 144;
const dadaFeet = dataInches / 12;
console.log('data feet', dadaFeet);

const dadiInches = 60;
const dadiFeet = dadiInches / 12;
console.log('dadiFeet', dadaFeet)

function inchToFeet(inches){
   const feet = inches / 12;
   return feet;
}

const dadaFeet = inchToFeet(dadaInches);
console.log(dadaFeet);
const nanaInches = 168;
const nanaFeet = inchToFeet(nanaFeet);