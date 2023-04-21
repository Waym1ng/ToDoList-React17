## 模拟服务端

### 安装及运行
- 全局安装库 `npm install -g json-server`
- 准备一个 `db.json` 
> json-server 把 db.json根节点的每一个key ，当作了一个 router我们可以根据这个规则来编写测试数据。
- 启动 `json-server --watch db.json --port 5000`
> --port 5000 选填，默认是3000端口，为了演示不同端口的服务端，所以改成5000
- 看到这个界面就执行成功啦!
```
  \{^_^}/ hi!

  Loading db.json
  Done

  Resources
  http://localhost:5000/posts
  http://localhost:5000/comments
  http://localhost:5000/profile

  Home
  http://localhost:5000

  Type s + enter at any time to create a snapshot of the database
  Watching..
```
### 示例
- db.json如下
```
{
  "posts": [
    { "id": 1, "title": "json-server", "author": "typicode" }
  ],
  "comments": [
    { "id": 1, "body": "some comment", "postId": 1 }
  ],
  "profile": { "name": "typicode" }
}
```
- 默认接口有这些

```
GET    /posts    得到posts中的数据
GET    /posts/1  得到posts中id为1的数据
POST   /posts    传输数据给posts
PUT    /posts/1  增加资源给posts
PATCH  /posts/1  通过query方式传参
DELETE /posts/1  删除数据
```