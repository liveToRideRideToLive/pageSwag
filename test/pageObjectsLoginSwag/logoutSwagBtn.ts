import page from "./pageSwag";
 class logoutSwagBtn extends page {
    public get logoutLink (){
        return $('#logout_sidebar_link');
        
    }
 
    public async logout () {

        await this.logoutLink.onClick();
    }

    public open() {
        return super.open('login');
    }
 }
 export default new logoutSwagBtn