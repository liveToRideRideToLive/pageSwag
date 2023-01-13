import { ChainablePromiseElement} from 'webdriverio';

import page from './pageSwag';

class SecurePageSwag extends page {
    public get allertMessage (){
        return $('//div//form//h3');
    }
}

export default new SecurePageSwag