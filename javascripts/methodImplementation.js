/**
 * Created by swathi on 29/6/17.
 */
/**
 * Created by swathi on 29/6/17.
 */
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;
var loginPageObj = require('/home/swathi/Protractor/protractor/Scenario4/pageObjects/elementsOfLoginPage.js');
var loginPage = new loginPageObj();
var pricedataObj = require('/home/swathi/Protractor/protractor/Scenario4/pageObjects/elementsOfPriceInRes.js');
var proppage = new pricedataObj();

var EC = protractor.ExpectedConditions;

var login = function(logindetails){
    loginPage.userid.clear().sendKeys(logindetails.userid);
    loginPage.password.clear().sendKeys(logindetails.password);
    loginPage.loginButton.click();
};


var editpriceDetails = function(dataOfPriceToOverride){
    var jsonObjectLength = Object.keys(dataOfPriceToOverride).length;
    for(i=0;i<jsonObjectLength;i++)
    {
        var setPrices = function(k){
            var price = dataOfPriceToOverride[k].price;
            var url = dataOfPriceToOverride[k].url;
            return function() {
               // console.log(url + ',' + price);
               // proppage.priceTextBox.clear().sendKeys(price);
                proppage.netValueTextbox.clear().sendKeys(price);
                proppage.setNewPriceButton.click().then(function () {
                    proppage.saveButton.click().then(function () {
                        proppage.saveReservationButton.click();
                        browser.waitForAngular();
                    });
                });
            };
        };
        var priceOverride = function(j){
            return function(){
                proppage.overridePriceButton.click().then(setPrices(j)());
            }
        };

        browser.get(dataOfPriceToOverride[i].url).then(priceOverride(i)());

    }
};

module.exports = {};
module.exports.login = login;
module.exports.editpriceDetails = editpriceDetails;
