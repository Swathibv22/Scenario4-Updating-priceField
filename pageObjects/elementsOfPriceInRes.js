/**
 * Created by swathi on 29/6/17.
 */
var reservationPage = function(){
    this.overridePriceButton = element(by.buttonText('Override Prices'));
    this.setNewPriceButton = element(by.buttonText('Set New Prices'));
    this.saveButton = element(by.buttonText('Save'));
    this.saveReservationButton = element(by.buttonText('Save Reservation'));
    this.priceTextBox = element(by.model('reservation.roomReservationsSellingPrice.totalValue'));
    this.netValueTextbox = element(by.css('input[ng-model="reservation.roomReservationsSellingPrice.netValue"]'));
}
module.exports = reservationPage;