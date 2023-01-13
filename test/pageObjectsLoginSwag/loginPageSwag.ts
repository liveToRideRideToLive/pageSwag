import page from "./pageSwag";
 class LoginPageSwag extends page {
    public get inputUsername (){
        return $('#user-name');
    }

    public get inputPassword (){
        return $('#password');
    }
    public get btnClick (){
        return $('#login-button');
   
    }

    public async login (username:string, password:string) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnClick.click();
    }

    public open() {
        return super.open('login');
    }
 }
 export default new LoginPageSwag