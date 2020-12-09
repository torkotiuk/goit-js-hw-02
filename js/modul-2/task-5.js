const checkForSpam = function(message) {
  const newMessage = message.toLocaleLowerCase();
  // console.log(newMessage.includes('spam') || newMessage.includes('sale'));
  if (true) {
    return newMessage.includes('spam') || newMessage.includes('sale');
  } else {
    return;
  }
}

console.log(checkForSpam('Latest technology news')); // false
console.log(checkForSpam('JavaScript weekly newsletter')); // false
console.log(checkForSpam('Get best sale offers now!')); // true
console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
