const calculateEngravingPrice = function(message, pricePerWord) {
  const words = message.split(' ');
  pricePerWord = words.length * pricePerWord;
  return pricePerWord;
};

console.log('Sentence price :>> ', calculateEngravingPrice('One, two, three...', 20));