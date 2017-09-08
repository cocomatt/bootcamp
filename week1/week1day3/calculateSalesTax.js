var companySalesData = [
    {
      name: "Telus",
      province: "BC",
      sales: [ 100, 200, 400 ],
    },
    {
      name: "Bombardier",
      province: "AB",
      sales: [ 80, 20, 10, 100, 90, 500 ],
    },
    {
      name: "Telus",
      province: "SK",
      sales: [ 500, 100 ],
    }
  ];

var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

function sum(input) {

var total = 0;
  for (var i = 0; i < input.length; i++) {
    if(isNaN(input[i])) {
      continue;
    }
    total += Number(input[i]);
  }
  return total;
}

function calculateSalesTax(salesData, taxRates) {

  var object = {};
  for (i in salesData) {
    var companyName = companySalesData[i].name;
    var companySales = sum(companySalesData[i].sales);
    var companyTax = sum(companySalesData[i].sales) * salesTaxRates[companySalesData[i].province];

  if (object[companyName]) {
    object[companyName].totalSales += companySales;
    object[companyName].totalTaxes += companyTax;
  } else {
    object[companyName] = {totalSales : companySales, totalTaxes: companyTax};
  }
}
return object;
}

var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);
