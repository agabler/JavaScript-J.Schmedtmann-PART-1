/*let country='Poland';
let continent='Europe';
let population= 6000000;

console.log(country);
console.log(continent);
console.log(population);


let isIsland = true;
let language;

console.log(isIsland);
console.log(language);
console.log(population);
console.log(country);

language= 'polish';

const territory = '20 000m2';


let finlandPopulation = 6000000;

console.log(population > finlandPopulation);

let averagePopulation = 33000000;

console.log(population < averagePopulation);

let description = 'Portugal is in Europe, and its 11 million people speak portuguese';


let country = 'Portugal';
let continent = 'Europe';
let population = '11 million';
let language = 'portugese';

let descriptionNew = `${country} is in ${continent} ,and its ${population} people speak ${language}`;
console.log(descriptionNew);
*/











/*PART 1*/
/*******************************************Coding Challenge #1

let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;

const bmiMark = massMark / (heightMark * heightMark);

console.log(bmiMark); // 27,309

const bmiJohn = massJohn / (heightJohn * heightJohn);

console.log(bmiJohn); //24,194

const markHigherBmi = bmiMark > bmiJohn;

console.log(bmiMark > bmiJohn); //true
console.log(markHigherBmi); // true
*/

/*******************************************Coding Challenge #2

if(bmiMark > bmiJohn){
    console.log('Marks BMI is higher than Johns');
} else{
    const bmiDifference = bmiMark - bmiJohn;
    console.log('Marks BMI is not higher than Johns, because there is the difference of ${bmiDifference}');

}

*/

/*******************************************Coding Challenge #3

const scoreOneDolphins = 96;  //or: scoreDolphins = ()
const scoreTwoDolphins = 108;
const scoreThreeDolphins = 89;

console.log((scoreOneDolphins + scoreTwoDolphins + scoreThreeDolphins) / 3);  //97,66

const scoreOneKoalas = 88;
const scoreTwoKoalas = 91;
const scoreThreeKoalas = 110;

console.log((scoreOneKoalas + scoreTwoKoalas + scoreThreeKoalas) / 3);   //96,33

const averageScoreDolphins = 97.66;
const averageScoreKoalas = 96.33;

if(averageScoreDolphins > averageScoreKoalas){
    console.log('Dolphins is the winner');
} else if (averageScoreKoalas > averageScoreDolphins){
    console.log('Koalas is the winner');            
} else if(averageScoreDolphins === averageScoreKoalas){
    console.log('There is a draw');
}


const thereIsDraw = false;

if(thereIsDraw && minimumScoreDolphins){
    console.log('Dolphins is the winner');
} else{
    console.log("Dolphins isn't the winner");
}


if(thereIsDraw && minimumScoreKoalas){
    console.log('Koalas is the winner');
} else{
    console.log("Koalas isn't the winner");
}




const minimumScore = 100;
const minimumScoreDolphins = false;
const hasHigherScoreThanKoalas = true;

if(minimumScoreDolphins && hasHigherScoreThanKoalas){
    console.log('Dolphins wins');
} else{
    console.log("Dolphins don`t win");
}

const minimumScoreKoalas = false;
const hasHigherScoreThanDolphins = false;

if(minimumScoreKoalas && hasHigherScoreThanDolphins){
    console.log('Koalas wins');
} else{
    console.log("Koalas don't win");
}


*/




/*******************************************Coding Challenge #4

const billValue = 275;
const tip = billValue >= 50 && billValue <= 300 ? '0.15' : '0.20';

console.log(tip);

const tipAmount = tip * billValue;
console.log(tipAmount);

const totalAmount= billValue + tipAmount;

console.log(`The bill was ${billValue}, the tip was ${tipAmount} and the total value ${totalAmount}`);

*/






/*PART 2*/
/*******************************************Coding Challenge #2


const billValue = 275;
const tip = billValue >= 50 && billValue <= 300 ? '0.15' : '0.20';

console.log(tip);

const tipAmount = tip * billValue;
console.log(tipAmount);

const totalAmount= billValue + tipAmount;

console.log(`The bill was ${billValue}, the tip was ${tipAmount} and the total value ${totalAmount}`);*/



function callTip(billValue){
    const tip = billValue >= 50 && billValue <= 300 ? '0.15' : '0.20';
    const tipValue = tip * billValue;
    return tipValue;
}

const tip1 = callTip(100);
console.log(tip1);    //15


const bills = [125, 555, 44];
const tips = [callTip(bills[0]), callTip(bills[1]), callTip(bills[2])];
const total = [(bills[0] + tips[0]), (bills[1] + tips[1]), (bills[2] + tips[2])];
console.log(total);               //(3) [143.75, 666, 52.8]








