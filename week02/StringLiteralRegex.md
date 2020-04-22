
#### String Literal RegExpression

##### DoubleStringCharacter
```
let doubleStringReg = "(?:[^"\\\r\n\u2028\u2029]| \\['"\\bfnrtv]|\\[^'"\\bfnrtv0-9xu\r\u\2028\2029]]|\\x[0-9A-Fa-f]{2}|\\u[0-9A-Fa-f]{4})|\r\n)*"
```
##### SingleStringCharacter
```
let singleStringReg = '(?:[^'\\\r\n\u2028\u2029]| \\['"\\bfnrtv]|\\[^'"\\bfnrtv0-9xu\r\u\2028\2029]]|\\x[0-9A-Fa-f]{2}|\\u[0-9A-Fa-f]{4})|\r\n)*'
```
解析：
见String Literal.xmind 文件

