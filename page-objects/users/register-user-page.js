const RegisterUserPage = {

    //Contact Information

    getFirstNameInputElement: function(){
        return element(by.xpath('//input[@name="firstName"]'));
    },

    getLastNameInputElement: function(){
        return element(by.xpath('//input[@name="lastName"]'));
    },

    getPhoneInputElement: function(){
        return element(by.xpath('//input[@name="phone"]'));
    },

    getEmailInputElement: function(){
        return element(by.xpath('//input[@name="userName"]'));
    },

    //Mailing Information

    getAddressOneInputElement: function(){
        return element(by.xpath('//input[@name="address1"]'));
    },

    getAddressTwoInputElement: function(){
        return element(by.xpath('//input[@name="address2"]'));
    },

    getCityInputElement: function(){
        return element(by.xpath('//input[@name="city"]'));
    },

    getStateProvinceInputElement: function(){
        return element(by.xpath('//input[@name="state"]'));
    },

    getPostalCodeInputElement: function(){
        return element(by.xpath('//input[@name="postalCode"]'));
    },

    getCountryInputElement: function(){
        return element(by.xpath('//select[@name="country"]'));
    },

    setCountryElementByValue: function(countryValue){
        this.getCountryInputElement().click();
        element(by.xpath('//select[@name="country"]//option[@value="'+countryValue+'"]')).click();
    },

    setCountryElementByName: function(country){
        this.getCountryInputElement().click();
        element(by.xpath('//select[@name="country"]//option[contains(text(),"'+country+'")]')).click();
    },


    //User Information

    getUserNameInputElement: function(){
        return element(by.xpath('//input[@name="email"]'));
    },

    getRegPasswordInputElement: function(){
        return element(by.xpath('//input[@name="password"]'));
    },

    getConfirmPasswordInputElement: function(){
        return element(by.xpath('//input[@name="confirmPassword"]'));
    },

    //Register User Function

    registerUser: function(user){
        this.getFirstNameInputElement().sendKeys(user.name);
        this.getLastNameInputElement().sendKeys(user.lastName);
        this.getPhoneInputElement().sendKeys(user.phone);
        this.getEmailInputElement().sendKeys(user.email);
        this.getAddressOneInputElement().sendKeys(user.address1);
        this.getAddressTwoInputElement().sendKeys(user.address2);
        this.getCityInputElement().sendKeys(user.city);
        this.getStateProvinceInputElement().sendKeys(user.state);
        this.getPostalCodeInputElement().sendKeys(user.postalcode);
        this.setCountryElementByName(user.country);
        this.getUserNameInputElement().sendKeys(user.username);
        this.getRegPasswordInputElement().sendKeys(user.password);
        this.getConfirmPasswordInputElement().sendKeys(user.confpassword);
        element(by.xpath('//input[@name="register"]')).click();
    },

}
module.exports = RegisterUserPage;
