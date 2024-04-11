// co模块
// co模块用于Generator函数的自动执行
// Generator 就是一个异步操作的容器。它的自动执行需要一种机制，当异步操作有了结果，能够自动交回执行权
// 做到这一点有两种方法：
//  1.将异步操作包装成Thunk函数，在回调函数中交回执行权
//  2.将异步操作包装成Promise对象，用then方法交回执行权
// co模块就是将两种自动执行器包装成一个模块，使用co模块的前提是Generator函数的yield命令后面只能是Thunk函数或者Promise对象
