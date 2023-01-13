import page from './pageSwag';

class SecureInventorySwag extends page {
    public get btnRemove (){
        return $('#remove-sauce-labs-backpack');
    }

    public get shoppingCartIcon () {
        return $('.shopping_cart_badge');
    }
    public get checkThePrice () {
        return $$('.inventory_item_price');
    }
}

export default new SecureInventorySwag