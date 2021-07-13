const priceOfBigMacInTheUS  = 5.66;
const priceOfBigMacInTheUK = 2.29;

const impliedPurchasingPower = priceOfBigMacInTheUS / priceOfBigMacInTheUK;

//Annual exchange rate of USD to Pound sterling = $1.56 to £1

console.log (impliedPurchasingPower);

const actualExchangeRate = 2.0;

const ukBigMacPriceIndex = (actualExchangeRate - impliedPurchasingPower) / impliedPurchasingPower;

console.log (ukBigMacPriceIndex);

const bigMacPriceIndex = (ukBigMacPriceIndex *100).toFixed();

console.log (typeof bigMacPriceIndex);
console.log (bigMacPriceIndex + "%");

// Germany - bigMacPriceIndex

// const priceOfBigMacInTheUS  = 5.66;
const priceOfBigMacInGermany = 2.99;

const impliedPurchasingPowerGermany = priceOfBigMacInTheUS / priceOfBigMacInGermany;

//Annual exchange rate of USD to Euros = $1.89 to 1EUROS

console.log (impliedPurchasingPowerGermany);

const actualExchangeRateGerman = 2.0;

const germanyBigMacPriceIndex = (actualExchangeRateGerman - impliedPurchasingPowerGermany) / impliedPurchasingPowerGermany;

console.log (germanyBigMacPriceIndex);

const bigMacPriceIndexGerman = (germanyBigMacPriceIndex *100).toFixed();

console.log (typeof bigMacPriceIndexGerman);
console.log (bigMacPriceIndexGerman + "%");


// SWEDEN - bigmacPriceIndex

// const priceOfBigMacInTheUS  = 5.66;
const priceOfBigMacInSweden = 6.5;

const impliedPurchasingPowerSweden = priceOfBigMacInTheUS / priceOfBigMacInSweden;

// Annual exchange rate of USD to USD = $1 to 0.92CHF

console.log (impliedPurchasingPowerSweden);

const actualExchangeRateSweden = 1;

const swedishBigmacPriceIndex =  (actualExchangeRateSweden - impliedPurchasingPowerSweden) / impliedPurchasingPowerSweden;

console.log(swedishBigmacPriceIndex);

const bigmacPriceIndexSwedish = (swedishBigmacPriceIndex * 100).toFixed();

console.log(typeof bigmacPriceIndexSwedish);
console.log(bigmacPriceIndexSwedish + "%");

// NORWAY - bigmacPriceIndex

// const priceOfBigMacInTheUS  = 5.66;
const priceOfBigMacInNorway = 52.00;

const impliedPurchasingPowerNorway = priceOfBigMacInTheUS / priceOfBigMacInNorway;

// Annual exchange rate of NOK to USD = 52NOk at the time of this evaluation.

console.log (impliedPurchasingPowerNorway);

const actualExchangeRateNorwegian = 1;

const norwagianBigmacPriceIndex =  (actualExchangeRateNorwegian - impliedPurchasingPowerNorway) / impliedPurchasingPowerNorway;

console.log(norwagianBigmacPriceIndex);

const bigmacPriceIndexNorway = (norwagianBigmacPriceIndex * 100).toFixed();

console.log(typeof bigmacPriceIndexNorway);
console.log(bigmacPriceIndexNorway + "%");


// Isreal - bigmacPriceIndex

// const priceOfBigMacInTheUS  = 5.66;
const priceOfBigMacInIsreal = 17.00;

const impliedPurchasingPowerIsreal = priceOfBigMacInTheUS / priceOfBigMacInIsreal;

// Annual exchange rate of ILS to USD = 3.2ILS at the time of this evaluation.

console.log (impliedPurchasingPowerIsreal);

const actualExchangeRateIsreal = 1;

const isrealBigmacPriceIndex =  (actualExchangeRateIsreal - impliedPurchasingPowerIsreal) / impliedPurchasingPowerIsreal;

console.log(isrealBigmacPriceIndex);

const bigmacPriceIndexIsreal = (isrealBigmacPriceIndex * 100).toFixed();

console.log(typeof bigmacPriceIndexIsreal);
console.log(bigmacPriceIndexIsreal + "%");


// Canada - bigmacPriceIndex

// const priceOfBigMacInTheUS  = 5.66;
const priceOfBigMacInCanada = 52.00;

const impliedPurchasingPowerCanada = priceOfBigMacInTheUS / priceOfBigMacInCanada;

// Annual exchange rate of CAD to USD = 1.25CAD" at the time of this evaluation.

console.log (impliedPurchasingPowerCanada);

const actualExchangeRateCanadian = 1;

const canadaBigmacPriceIndex =  (actualExchangeRateCanadian - impliedPurchasingPowerCanada) / impliedPurchasingPowerCanada;

console.log(canadaBigmacPriceIndex);

const bigmacPriceIndexCanada = (canadaBigmacPriceIndex * 100).toFixed();

console.log(typeof bigmacPriceIndexCanada);
console.log(bigmacPriceIndexCanada + "%");


