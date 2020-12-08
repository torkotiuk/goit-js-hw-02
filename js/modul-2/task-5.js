const checkForSpam = function(message) {
  const newMessage = message.toLocaleLowerCase();
  console.log(newMessage.includes('spam') || newMessage.includes('sale'));
}

checkForSpam('Latest technology news'); // false
checkForSpam('JavaScript weekly newsletter'); // false
checkForSpam('Get best sale offers now!'); // true
checkForSpam('[SPAM] How to earn fast money?'); // true