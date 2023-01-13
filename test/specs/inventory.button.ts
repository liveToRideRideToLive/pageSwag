import loginPageSwag from "../pageObjectsLoginSwag/loginPageSwag";
import secureInventoryBtn from "../pageObjectsLoginSwag/secureInventoryBtn";
import inventoryPageSwag from "../pageObjectsLoginSwag/inventoryPageSwag";


describe('Click On Inventory Button', () => {
    it('should show small inventory button', async () => {
    await loginPageSwag.open();

    await loginPageSwag.login('standard_user', 'secret_sauce');
    await (inventoryPageSwag.addToCartBtn).click();
    await expect (secureInventoryBtn.btnRemove).toBeExisting();
    await expect (secureInventoryBtn.shoppingCartIcon).toHaveText('1');
    await expect (secureInventoryBtn.checkThePrice).toHaveTextContaining('$');

    });
});