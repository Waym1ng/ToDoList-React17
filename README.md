# TodoList示例(react 17.0.2版本)
## 运行项目
### `npm install`
### `npm start`

## 相关知识点
- 拆分组件，实现静态组件。注意：className,style的写法
- 动态初始化列表，怎么确定将数据放在哪个组件的state中呢？
    - 某个组件使用：放在其自身的state中
    - 某些组件使用：放在它们共同的父组件state中，也称为状态提升
- 父子组件通信：
    - 父组件 -> 子组件 （通过props传递）
    - 子组件 -> 父组件 （通过props传递，要求父组件提前传递一个函数给子组件）
- 注意defaultChecked和checked的区别，类似的还有defaultValue和value
- 状态在哪里，操作状态的方法就在哪里
