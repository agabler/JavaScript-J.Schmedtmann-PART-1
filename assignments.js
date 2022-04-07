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












/*************************Coding Challenge #1 */

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

/*************************Coding Challenge #2 */

if(bmiMark > bmiJohn){
    console.log('Marks BMI is higher than Johns');
} else{
    const bmiDifference = bmiMark - bmiJohn;
    console.log('Marks BMI is not higher than Johns, because there is the difference of ${bmiDifference}');

}
















