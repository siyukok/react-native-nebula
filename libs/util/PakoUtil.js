import pako from 'pako';
import {Base64} from 'js-base64';

/**
 * @Author: 空知
 * @Date: 2019-05-28 14:08
 * @Version 1.0
 */

export default class PakoUtil {
    static getPakoCompressBase64Data(data){
        let binaryString = '';
        try {
            binaryString = pako.deflate(JSON.stringify(data), { to: 'string' });
            binaryString = Base64.encode(binaryString);
        }catch (e) {
            console.log(e);
        }
        return binaryString;
    }
}
