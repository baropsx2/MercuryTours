const SideBar = require('../page-objects/side-bar-menu-page');
const TopBar = require('../page-objects/top-menu-page');
const RegisterUserPage = require('../page-objects/users/register-user-page');
var EC = protractor.ExpectedConditions;

describe('Protractor Demo App', function() {

    it('should have a history', function() {
        browser.waitForAngularEnabled(false);
        browser.get('http://newtours.demoaut.com/mercuryregister.php');
        RegisterUserPage.getFirstNameInputElement().sendKeys('David');
        RegisterUserPage.getFirstNameInputElement().clear();
        const swe = {
            name: "Javier",
            lastName: "Barocio",
            phone: "764523",
            email: "user@test.com",
            address1: "Test address 1",
            address2: "Test address 2",
            city: "Test city",
            state: "Test state",
            postalcode: 75896,
            country: "ANGUILLA",
            username: "Test",
            password: "Admin123",
            confPassword: "Admin123",
        };
        RegisterUserPage.registerUser(swe);
        browser.wait(EC.urlContains('http://newtours.demoaut.com/create_account_success.php'), 10000);
        expect(browser.getCurrentUrl()).toContain('create_account_success');

    });
  });