import page from "./pageSwag";
 class InventoryPageSwag extends page {
    public get addToCartBtn (){
        return $('#add-to-cart-sauce-labs-backpack');
        
    }

    public async login () {

        await this.addToCartBtn.click();
    }

    public open() {
        return super.open('login');
    }
 }
 export default new InventoryPageSwag