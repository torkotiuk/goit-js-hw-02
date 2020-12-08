const formatString = function(string) {

  if (string.length < 41) {
   console.log('string :>> ', string);
  } else {
    const symbols = string.split(''); //['T', 'h', 'e', etc.]
    
    const deletedFrom40 = symbols;
    deletedFrom40.splice(40);
    
    const enoughToJoin = deletedFrom40;
    
    const newSentence = enoughToJoin.join('') + ('...');
    console.log('newSentence :>> ', newSentence);
  }
};

formatString('Curabitur ligula sapien, tincidunt non.');
formatString('Vestibulum facilisis, purus nec pulvinar iaculis.');
formatString('Curabitur ligula sapien.');
formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  );