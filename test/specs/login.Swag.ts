import loginPageSwag from "../pageObjectsLoginSwag/loginPageSwag";
import securePageSwag from "../pageObjectsLoginSwag/securePageSwag";

describe('Login Page Swag', () => {
    it('should login with valid credentials', async () => {
    await loginPageSwag.open();

    await loginPageSwag.login('standard_user', 'secret_sauce');
    await expect(securePageSwag.applogo).toBeExisting();

    });
});
