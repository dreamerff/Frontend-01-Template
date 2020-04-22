
InputElementDiv 
  WhiteSpace (```<TAB>, <NBSP>,<FF>,<SP>,<ZWNBSP>,<UT>```)
  LineTerminator  
  Comment 
  Token 
  DivPunctuator

- whitespace
![Alt text](./1587211344372.png)
- line terminator
![Alt text](./1587211422608.png)


- Token
	- Punctuator
	- IdentifierName
		- keywords
		- Identifier
		- Future reserve word: enum
	- Literal
		- Number
		- String
		- Regular Expression 

#### Types
-	Number
	-	DecimalLiteral
	-	BinaryIntegerLiteral
	-	OctalIntegerLiteral
	-	HexIntegerLiteral
	```	Math.abs(0.1 + 0.2 -0.3) <= Number.EPSILON```
-	String
	-	Character
	-	Code Point
	-	Encoding
		-	ASCII（128个）
		-	Unicode(UTF8, UTF16)
	- grammar
			- "a" 
			- 'a'
			- `a`
-	Boolean
-	Object
-	Null
	-	null值，关键字
-	Undefined
	-	未定义
	-	undefined为变量，不是关键字, 可被赋值
	-	建议使用void 0 获取undefined值
-	Symbol

