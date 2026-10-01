// GLOBAL VARIABLES
let futureValue;
let investment;
let rate;
let years;

// COLLECT VALUES FROM THE USER
investment = parseFloat(prompt('Enter investment amount as xxxx.xx'));
rate = parseFloat(prompt('Enter interest rate as xx.x'));
years = parseInt(prompt('Enter the number of years you want to invest for'));

// VALIDATE ENTRIES
while (isNaN(investment)) {
    investment = parseFloat(prompt('Investment must be a number. Enter investment amount as xxxx.xx'));
}

while(isNaN(rate) || (rate<0 || rate >6))
{
	rate = parseFloat(prompt('The number should be numeric and between 0 and a realistic rate like 6%'));
}

while(isNaN(years) || (years < 1 || years > 30))
{
	years = parseInt(prompt('the number should be numeric and between 1 and 30.'))
}

// CALCULATE FUTURE VALUE
futureValue = investment;
for (let i = 0; i < years; i++) {
    futureValue = futureValue + (futureValue * rate / 100);
}

// DISPLAY RESULT
document.write(`Investment amount: $${investment.toFixed(2)}<br>`);
document.write(`Interest rate: ${rate.toFixed(2)}%<br>`);
document.write(`Years: ${years}<br>`);
document.write(`Future value: $${futureValue.toFixed(2)}`);
