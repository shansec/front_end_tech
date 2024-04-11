// ES6 模块的加载路径必须给出脚本的完整路径，不能省略脚本的后缀名。
// ES6 模块之中，顶层的this指向undefined；CommonJS 模块的顶层this指向当前模块，这是两者的一个重大差异
// CommonJS模块的循环加载
// CommonJS 模块的重要特性是加载时执行，即脚本代码在require的时候，就会全部执行。一旦出现某个模块被"循环加载"，就只输出已经执行的部分，还未执行的部分不会输出
