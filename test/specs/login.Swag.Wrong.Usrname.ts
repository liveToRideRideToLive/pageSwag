import loginPageSwag from "../pageObjectsLoginSwag/loginPageSwag";
import secureLoginPageWrongUsername from "../pageObjectsLoginSwag/secureLoginPageWrongUsername";

describe('Login Page With Wrong Credentials', () => {
    it('should leave flash allert for wrong credentials', async () => {
    await loginPageSwag.open();

    await loginPageSwag.login('standard_userr', 'secret_sauce');
    await expect(secureLoginPageWrongUsername.allertMessage).toBeExisting();
    await expect(secureLoginPageWrongUsername.allertMessage).toHaveText('Epic sadface: Username and password do not match any user in this service');
});
});