describe('adding two numbers', function(){
 it('should add 3 and 2',function(){
 browser.get('http://juliemr.github.io/protractor-demo/');
 element(by.model('first')).sendKeys('3');
 element(by.model('second')).sendKeys('2');
 element(by.id('gobutton')).click();
 expect(element(by.binding('latest')).getText()).toEqual('5');
});
});
