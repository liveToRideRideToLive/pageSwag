import loginPageSwag from "../pageObjectsLoginSwag/loginPageSwag";
import logoutSwag from "../pageObjectsLoginSwag/logoutSwag";
import logoutSwagBtn from "../pageObjectsLoginSwag/logoutSwagBtn";
import secureLogoutSwag from "../pageObjectsLoginSwag/secureLogoutSwag";




describe('Click On Side Bar Menu ', () => {
    it('should show logout text and should click on it', async () => {
    await loginPageSwag.open();

    await loginPageSwag.login('standard_user', 'secret_sauce');
    await logoutSwag.logout();
    await logoutSwagBtn.logout();
    await expect (secureLogoutSwag.loginLogo).toHaveText('login_logo');
  
    });
});