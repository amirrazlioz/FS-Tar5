const exchangeRates = {
	USD: 3.9,
	EUR: 4.2,
	GBP: 5.0
};

function convertCurrency() {
	const amountInput = document.getElementById("amount").value;
	const currency = document.getElementById("currency").value;

	if (!amountInput || isNaN(amountInput) || amountInput <= 0) {
		alert("נא להזין כמות שקלים תקינה.");
		return;
	}

	if (!exchangeRates[currency]) {
		alert("סוג מטבע אינו תקין.");
		return;
	}

	const amount = parseFloat(amountInput);
	const result = (amount / exchangeRates[currency]).toFixed(2);

	alert(`כמות השקלים שהוזנה: ${amount}\nהמטבע הנבחר: ${currency}\nהתוצאה: ${result}`);
}


