const SideBarMenuPage = {

    clickHomeButton: function(){
        element(by.linkText('Home')).click();
    },

    clickFlightsButton: function(){
        element(by.linkText('Flights')).click();
    },

    clickHotelsButton: function(){
        element(by.linkText('Hotels')).click();
    },

    clickCarRentalsButton: function(){
        element(by.linkText('Car Rentals')).click();
    },

    clickCruisesButton: function(){
        element(by.linkText('Cruises')).click();
    },

    clickDestinationsButton: function(){
        element(by.linkText('Destinations')).click();
    },

    clickVacationsButton: function(){
        element(by.linkText('Vacations')).click();
    },

}
module.exports = SideBarMenuPage;