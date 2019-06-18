const TopBarMenuPage = {

    clickSignOnButton: function(){
        element(by.linkText('SIGN-ON')).click();
    },

    clickRegisterButton: function(){
        element(by.linkText('REGISTER')).click();
    },

    clickSupportButton: function(){
        element(by.linkText('SUPPORT')).click();
    },

    clickContactButton: function(){
        element(by.linkText('CONTACT')).click();
    },

}
module.exports = TopBarMenuPage;