const fromAmountEl = document.querySelector('.amount');
const convertedAmountEl = document.querySelector('.convertedAmount');
const fromCurrencyEl = document.querySelector('.fromCurrency');
const toCurrencyEl = document.querySelector('.toCurrency');
const resultEl = document.querySelector('.result');

// Array to populate the select tags with these countries
const countries = [
    {code: 'USD', name: 'United States Dollar'},
    {code: 'INR' , name: 'Indian'},
];

// Showing countries from array to select tag
countries.forEach ( (country)=>{
    const option1 = document.createElement('option');
    const option2 = document.createElement('option')

    option1.value = option2.value = country.code;
    option1.textContent = option2.textContent = `${country.code} (${country.name})`;
    fromCurrencyEl.appendChild(option1);
    toCurrencyEl.appendChild(option2);

    // Setting default values of select
    fromCurrencyEl.value = 'USD';
    toCurrencyEl.value = 'INR';

    // const option2 = document.createElement('option');
    // option2.value = country.code;
    // option2.textContent = `${country.code} (${country.name})`;
    // toCurrencyEl.appendChild(option2);
})

// Function to get exchange rate using API
const getExchangeRate = async () => {
    const amount = parseFloat(fromAmountEl.value);
    const fromCurrency = fromCurrencyEl.value;
    const toCurrency = toCurrencyEl.value;

    // Fetch data from API
    const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);

    const data = await response.json();
    // console.log(data);

    const conversionRate = data.rates[toCurrency];
    const convertedAmount = (amount * conversionRate);

    convertedAmountEl.value = convertedAmount;

}

fromAmountEl.addEventListener('input',getExchangeRate);