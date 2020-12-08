const staff = ['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'];
const numbers = [1, 2, 3];

const addSymbols = function(allData) {
 for (let i = 0; i < allData.length; i++) {
    console.log(`${i+1} -`, allData[i]);
  }
}

addSymbols(staff);
addSymbols(numbers);