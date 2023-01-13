import page from './pageSwag';

class secureLogoutSwag extends page {
    public get loginLogo (){
        return $('.login_logo');
    }
}

export default new secureLogoutSwag