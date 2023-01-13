import page from "./pageSwag";
 class LogoutSwag extends page {
    public get logoutBtn (){
        return $('#react-burger-menu-btn');
 
    }

    public async logout () {

        await this.logoutBtn.click();
    }

    public open() {
        return super.open('logout');
    }
 }
 export default new LogoutSwag