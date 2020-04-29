[toc]
### Objects in EMCA
#### Essential Internal Methods
多态；不同对象可以有不同的实现算法；运行时访问对象不支持的内部方法，会抛出TypeError
-	[[GetPrototypeOf]]
-	 [[SetPrototypeOf]]
-	 [[IsExtensible]]
-	 [[PreventExtensions]]
-	 [[GetOwnProperty]]
-	 [[DefineOwnProperty]]	
-	 [[HasProperty]]
-	 [[Get]]
-	 [[Set]]
-	 [[Delete]]
-	 [[OwnPropertyKeys]]
-	 [[Call]] (essential for functions)
-	 [[Construct]] (essential for functions)

#### Internal Slots
内部状态；不可继承；默认为undefined；不可直接访问

#### 分类
#### Ordinary Objects
##### Internal Slots
- [[Prototype]]
- [[Extensible]]

##### Internal methods
- [[GetPrototypeOf]]
```
返回 [[Prototype]]
```
- [[SetPrototypeOf]]
```
1. 找到当前对象的 [[Prototype]]，判断是否与新传入的相同，如果是，则返回
2. 判断 [[Extensible]] 是否为false，是则返回，不可设置
3. 如果当前对象与新传入的对象或新传入的对象的原型链上的对象相同，则返回，不可设置（不能形成环）
4. 设置当前对象的原型对新传入的对象
```
- [[IsExtensible]]
```
返回 [[Extensible]]
```
- [[PreventExtensions]]
```
设置[[Extensible]] 为false
```
- [[GetOwnProperty]]
```
判断对象是否有传入的属性，如果无，则返回undefined
如果有，则判断为dataProperty或accessorProperty，读取对应的属性
```
- [[DefineOwnProperty]]	
```
如果对象[[Extensible]]为false，则不可设置
判断对象是否已有设置的属性，如果无，则为对象设置属性；
如果对象已经有该属性，判断该属性的[[Configurable]]是否为false，如果是，则返回；如果是，则设置

```
- [[HasProperty]]
```
调用[[GetOwnProperty]]判断该对象是否有该属性，如果无，则继续查找该对象的原型是否有该属性，直到找到该属性，或找到原型链终点null
```
- [[Get]]
```
参数p，receiver
判断对象是否有p属性，如果无则返回undefined
如果有，则返回值
```
- [[Set]]
```
判断是否有设置的属性，如果无，则沿着原型链寻找是否有该属性，如果有，则赋值
```
- [[Delete]]
```
判断该对象是否有该属性，如果无，则返回；如果有，判断[[Configurable]]，为true则删除，为false则不能删除
```
- [OwnPropertyKeys]]
```
对对象的所有属性key值，如果是数字，则进行key值升序排列，如果key为String或Symbol，则按添加顺序排列返回
```
- [[Call]] (essential for functions)
- [[Construct]] (essential for functions)

##### ECMAScript  Function Objects
ECMAScript Function Objects 是普通，与普通对象拥有相同的internal methods和internal slots. 还拥有自己独特的internal methods和internal slots. 

###### Internal Methods  
所有ECMAScript 函数对象都有[[Call]] 内部方法，如果是构造函数，还拥有[[Construct]]方法。
-   [[Call]]
```
	
```
-   [[Construct]] (if applicable)


###### Internal Slot (Additional)
-	[[Environment]]
-	[[FormalParameters]]
-	[[ECMAScriptCode]]
-	[[ConstructorKind]]
-	[[Realm]]
-	[[ScriptOrModule]]
-	[[ThisMode]]
-	[[Strict]]
-	[[HomeObject]]
-	[[SourceText]]
-	[[IsClassConstructor]] （该值为true时，调用[[Call]]会抛出TypeError)

##### The Global Object
执行前即已创建，无[[Construct]]和[[Call]] 方法

###### Value Properties of the Global Object
-	globalThis (提供了一个标准的方式来获取不同环境下的全局 this  对象)
-	Infinity
-	NaN
-	undefined

###### Function Properties of the Global Object 
- eval  (固有对象)
- isFinite
- isNaN
- parseFloat
- parseInt
- URI Handling Functions

###### Constructor Properties of the Global Object
-	Array
-	ArrayBuffer
-	BigInt
-	BigInt64Array
-	BigUint64Array
-	Boolean
-	DataView
-	Date
-	Error
-	EvalError
-	Float32Array
-	Float64Array
-	Function
-	Int8Array
-	Int16Array
-	Int32Array
-	Map
-	Number
-	Object
-	Promise
-	Proxy
-	RangeError
-	ReferenceError
-	RegExp
-	Set
-	SharedArrayBuffer
-	String
-	Symbol
-	SyntaxError
-	TypeError
-	Uint8Array
-	Uint8ClampedArray
-	Uint16Array
-	Uint32Array
-	URIError
-	WeakMap
-	WeakSet

###### Other Properties of the Global Object
- Atomics
- JSON
- Math
- Reflect

#### Exotic Objects
Object that does not have the default behavior for one or more of the essential internal methods. (Any object that is not an ordinary object is an exotic object). 

##### Bound Function Exotic Objects
Calling a bound function exotic object generally results in a call of its wrapped function.

###### Internal Methods  (Implementation differs from ordinary objects)
-   [[Call]]    
-   [[Construct]] (if applicable)

###### Internal Slot (Additional)
-   [[Prototype]]
-   [[Extensible]]
-   [[BoundTargetFunction]]
-   [[BoundThis]]
-   [[BoundArguments]]

##### Array Exotic Objects
每个数组对象都有一个不可配置的 “length” 属性。

###### Internal Methods  (Implementation differs from ordinary objects)
-   [[DefineOwnProperty]]   

##### String Exotic Objects
字符串对象都有length属性，用来表示代码单元的个数。length不可写，切不可配置。

###### Internal Methods  (Implementation differs from ordinary objects)
-   [[GetOwnProperty]]
-   [[DefineOwnProperty]]
-   [[OwnPropertyKeys]] 

###### Internal Slot (Additional)
-	[[StringData]]

##### Arguments Exotic Objects
An arguments exotic object is an exotic object whose array index properties map to the formal parameters bindings of an invocation of its associated ECMAScript function.

###### Internal Methods  (Implementation differs from ordinary objects)
-   [[GetOwnProperty]]
-   [[DefineOwnProperty]]
-   [[GET]] 
-  [[SET]] 
-  [[Delete]]

###### Internal Slot (Additional)
-	[[ParameterMap]]

##### Integer-Indexed Exotic Objects
An Integer-Indexed exotic object is an exotic object that performs special handling of integer index property keys.

###### Internal Methods (Implementation differs from ordinary objects)
-	 [[GetOwnProperty]]
-	 [[HasProperty]]
-	 [[DefineOwnProperty]]
-	  [[Get]]
-	 [[Set]]
-	 [[OwnPropertyKeys]] 

###### Internal Slot (Additional)
-	[[ViewedArrayBuffer]]
-	[[ArrayLength]]
-	[[ByteOffset]]
-	[[ContentType]]
-	[[TypedArrayName]]

##### Module Namespace Exotic Objects
A module namespace exotic object is an exotic object that exposes the bindings exported from an ECMAScript Module.

###### Internal Methods (Implementation differs from ordinary objects)
-	 [[SetPrototypeOf]]
-	 [[IsExtensible]]
-	 [[PreventExtensions]]
-	 [[GetOwnProperty]]
-	 [[DefineOwnProperty]]
-	 [[HasProperty]]
-	 [[Get]]
-	 [[Set]]
-	 [[Delete]]
-	 [[OwnPropertyKeys]]

###### Internal Slot (Additional)
-	[[Module]]
-	[[Exports]]
-	[[Prototype]]

##### Immutable Prototype Exotic Objects
An immutable prototype exotic object is an exotic object that has a [[Prototype]] internal slot that will not change once it is initialized.

###### Internal Methods (Implementation differs from ordinary objects)
-	 [[SetPrototypeOf]]
-	Other essential internal methods may use any implementation

##### Proxy Objects
A proxy object is an exotic object whose essential internal methods are partially implemented using ECMAScript code.

###### Internal Methods (Implementation differs from ordinary objects)
-	 [[GetPrototypeOf]]
-	 [[SetPrototypeOf]]
-	 [[IsExtensible]]
-	 [[PreventExtensions]]
-	 [[GetOwnProperty]]
-	 [[DefineOwnProperty]]
-	 [[HasProperty]]
-	 [[Get]]
-	 [[Set]]
-	 [[Delete]]
-	 [[OwnPropertyKeys]]
-	 [[Call]]
-	 [[Construct]]

###### Internal Slot (Additional)
-	[[ProxyHandler]]
-	[[ProxyTarget]]
