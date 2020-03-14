const ages = [12, 14, 13, 17, 16];
const ages2 = [11, 19, 18, 13];
const ages3 = [24, 36, 35, 29];
const allAges = ages.concat(ages2).concat([5]).concat(ages3);
// spread operator er sohoj opay.
const allAges2 = [...ages, ...ages2, 5, ...ages3];
//console.log(allAges2);

const business = 650;
const minister = 550;
const sochib = 450;
const takaPoisa = [650, 550, 450, 850];
const maximum = Math.max(...takaPoisa);
//const maximum = Math.max(business, minister, sochib);
console.log(maximum);