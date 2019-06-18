const SideBar = require('../page-objects/side-bar-menu-page');
const TopBar = require('../page-objects/top-menu-page');
const RegisterUserPage = require('../page-objects/users/register-user-page');

describe('Protractor Demo App', function() {

    it('should have a history', function() {
        browser.waitForAngularEnabled(false);
        browser.get('http://newtours.demoaut.com/mercuryregister.php');
        RegisterUserPage.getFirstNameInputElement().sendKeys('David');
        browser.sleep(3000);
        RegisterUserPage.getFirstNameInputElement().clear();
        browser.sleep(3000);
        const swe = {
            name: "Erik",
            lastName: "1234",
            phone: "764523",
            email: "user@test.com",
            address1: "Test address 1",
            address2: "Test address 2",
            city: "Test city",
            state: "Test state",
            postalcode: "75896",
            country: "ANGUILLA",
            username: "Test",
            password: "Admin123",
            confPassword: "Admin123",
        };
        RegisterUserPage.registerUser(swe);

    });
  });