const checkForSpam = function(message) {
  const newMessage = message.toLocaleLowerCase();
  if (newMessage.includes('spam') || newMessage.includes('sale')) {
    console.log('newMessage :>> ', newMessage);
  };
}


checkForSpam('Latest technology news');
checkForSpam('JavaScript weekly newsletter');
checkForSpam('Get best sale offers now!');
checkForSpam('[SPAM] How to earn fast money?');