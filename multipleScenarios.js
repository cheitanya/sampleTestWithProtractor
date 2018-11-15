describe('multiple secnarios', function(){
   
   var firstNumber = element(by.model('first'));
   var secondNumber = element(by.model('second'));
   var goButton = element(by.id('gobutton'));
   var latestResult = element(by.binding('latest'));

 beforeEach(function(){
  browser.get('http://juliemr.github.io/protractor-demo/');
});

it('adding 0 and 5', function(){
   firstNumber.sendKeys('0');
   secondNumber.sendKeys('5');
   goButton.click();
   expect(latestResult.getText()).toEqual('5');
});

it('Should have title off the page', function(){
    expect(browser.getTitle()).toEqual('Super Calculator');
});

it('adding -ve numbers', function(){
   firstNumber.sendKeys('-3');
   secondNumber.sendKeys('-7');
   goButton.click();
   expect(latestResult.getText()).toEqual('-10');
});
});

