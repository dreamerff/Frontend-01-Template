
/* 
0x0000 - 0x007F   一个字节
0x0080 - 0x07FF   两个字节
0x0800 - 0xFFFF   三个字节 (其中 U+D800–U+DFFF为保留字符)
0x10000 - 0x10FFFF 四个字节
 */


function encodeUTF8(str){
  let bytesArray = new Uint8Array(str.length * 4);
  let byteSize = 0;
  for(let i = 0; i < str.length; i++){
    let code = str.codePointAt(i);
    if(code < 0x007F){ // 一个字节
      bytesArray[byteSize++] = code;
    }else if(code >= 0x0080 && code <= 0x07FF){ // 二个字节
      bytesArray[byteSize++] = (0xC0 | 0x1F & code >> 6 ) // 第一个字节前面补三位110,后面五位取code右移6位
      bytesArray[byteSize++] = (0x80 | 0x3F & code) // 第二个字节补两位10,后面六位取code
    }else if((code >= 0x0800 && code < 0xD800) || (code > 0xDFFF && code <= 0xFFFF ) ){ // 三个字节
      bytesArray[byteSize++] = (0xE0 | 0x0F & code >> 12) // 第一个字符补前面4位1110，后面四位取右移12位
      bytesArray[byteSize++] = (0x80 | 0x3F & code >> 6) // 第二个字符补前面2位10，后面六位取右移6位
      bytesArray[byteSize++] = (0x80 | 0x3F & code ) // 第三个字符补前面2位10，后面六位取code
    }else if((code >= 0x10000 && code <= 0x10FFFF)){
      bytesArray[byteSize++] = (0xF0 | 0x07 & code >> 18) // 第一个字符补前面4位1110，后面四位取右移18位
      bytesArray[byteSize++] = (0x80 | 0x3F & code >> 12) // 第二个字符补前面2位10，后面六位取右移12位
      bytesArray[byteSize++] = (0x80 | 0x3F & code >> 6) // 第三个字符补前面2位10，后面六位取右移6位
      bytesArray[byteSize++] = (0x80 | 0x3F & code ) // 第四个字符补前面2位10，后面六位取code
    }
  }
  return bytesArray.subarray(0, byteSize)
}

