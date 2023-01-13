import page from './pageSwag';

class SecurePageSwag extends page {
    public get applogo (){
        return $('.app_logo')
    }
}

export default new SecurePageSwag