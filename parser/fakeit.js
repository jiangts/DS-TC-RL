const faker = require('faker');

const fields = {
  'address': [
    'zipCode'
    ,'city'
    ,'cityPrefix'
    ,'citySuffix'
    ,'streetName'
    ,'streetAddress'
    ,'streetSuffix'
    ,'streetPrefix'
    ,'secondaryAddress'
    ,'county'
    ,'country'
    ,'countryCode'
    ,'state'
    ,'stateAbbr'
    ,'latitude'
    ,'longitude'
  ],
  'commerce': [
    'color'
    ,'department'
    ,'productName'
    ,'price'
    ,'productAdjective'
    ,'productMaterial'
    ,'product'
  ],
  'company': [
    'suffixes'
    ,'companyName'
    ,'companySuffix'
    ,'catchPhrase'
    ,'bs'
    ,'catchPhraseAdjective'
    ,'catchPhraseDescriptor'
    ,'catchPhraseNoun'
    ,'bsAdjective'
    ,'bsBuzz'
    ,'bsNoun'
  ],
  'database': [
    'column'
    ,'type'
    ,'collation'
    ,'engine'
  ],
  'date': [
    'past'
    ,'future'
    ,'between'
    ,'recent'
    ,'month'
    ,'weekday'
  ],
  'fake': [],
  'finance': [
    'account'
    ,'accountName'
    ,'mask'
    ,'amount'
    ,'transactionType'
    ,'currencyCode'
    ,'currencyName'
    ,'currencySymbol'
    ,'bitcoinAddress'
    ,'iban'
    ,'bic'
  ],
  'hacker': [
    'abbreviation'
    ,'adjective'
    ,'noun'
    ,'verb'
    ,'ingverb'
    ,'phrase'
    ,'helpers'
    ,'randomize'
    ,'slugify'
    ,'replaceSymbolWithNumber'
    ,'replaceSymbols'
    ,'shuffle'
    ,'mustache'
    ,'createCard'
    ,'contextualCard'
    ,'userCard'
    ,'createTransaction'
  ],
  'image': [
    'image'
    ,'avatar'
    ,'imageUrl'
    ,'abstract'
    ,'animals'
    ,'business'
    ,'cats'
    ,'city'
    ,'food'
    ,'nightlife'
    ,'fashion'
    ,'people'
    ,'nature'
    ,'sports'
    ,'technics'
    ,'transport'
    ,'dataUri'
  ],
  'internet': [
    'avatar'
    ,'email'
    ,'exampleEmail'
    ,'userName'
    ,'protocol'
    ,'url'
    ,'domainName'
    ,'domainSuffix'
    ,'domainWord'
    ,'ip'
    ,'ipv6'
    ,'userAgent'
    ,'color'
    ,'mac'
    ,'password'
  ],
  'lorem': [
    'word'
    ,'words'
    ,'sentence'
    ,'slug'
    ,'sentences'
    ,'paragraph'
    ,'paragraphs'
    ,'text'
    ,'lines'
  ],
  'name': [
    'firstName'
    ,'lastName'
    ,'findName'
    ,'jobTitle'
    ,'prefix'
    ,'suffix'
    ,'title'
    ,'jobDescriptor'
    ,'jobArea'
    ,'jobType'
  ],
  'phone': [
    'phoneNumber'
    ,'phoneNumberFormat'
    ,'phoneFormats'
  ],
  'random': [
    'number'
    ,'arrayElement'
    ,'objectElement'
    ,'uuid'
    ,'boolean'
    ,'word'
    ,'words'
    ,'image'
    ,'locale'
    ,'alphaNumeric'
  ],
  'system': [
    'fileName'
    ,'commonFileName'
    ,'mimeType'
    ,'commonFileType'
    ,'commonFileExt'
    ,'fileType'
    ,'fileExt'
    ,'directoryPath'
    ,'filePath'
    ,'semver'
  ]
};

module.exports = function(field) {
  for(var name in fields) {
    var category = fields[name];
    for(var i = 0; i < category.length; i++) {
      var f = category[i];
      if(f.toUpperCase() === field.toUpperCase()) {
        // console.log(name, f);
        const faked = faker[name][f]()
        // console.log(faked);
        return faked;
      }
    }
  }
  console.warn(`No generator found for "${field}"`);
  return 'UNK';
}

