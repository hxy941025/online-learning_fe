# 时频培训系统

### 技术栈
- Vue全家桶 + ElementUI + axios 

### 实现功能
- 使用Layout组件作为公共样式，上侧标题栏，左侧路由导航栏，中间部分展示信息
- 首页：dashboard，记录 时频知识、值班规则、故障处理 三方面考试分数以及展示系统通知，系统新闻等
- 用户中心：实现个人信息查询、修改密码（待做）
- 考试中心：系统测试及自我测评（待做）
- 知识中心：长图文进行知识点展示
- 权限管理：管理员权限页，可进行知识数据的管理，其他待做

### 优化
- 路由鉴权系列踩坑优化
- Vuex管理全局样式设定
- 图片懒加载


## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your tests

```
npm run test
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### 技术点

已有

- 请求接口封装
- layout 公共样式
- jwt 登录
- 路由鉴权
- Vuex 存用户状态、全局样式配置
- 输入校验
- 全局路由守卫 白名单
- MockJS 实现后端数据模拟

优化

- 图片懒加载 lazyload
- 长列表虚拟滚动
- el-UI 表单优化

### bug

请求到 mock-server.js 一直 404

- mock.server.js 匹配的 URL 以 env 的 baseURL 来拼接，由于没写 env，则匹配不上

路由鉴权

- 退出后切换用户，依旧有权限
  退出时未清空用户 token

vueRouter 只能动态添加路由，但是无法删除，上一个登陆完后拼接的路由仍存在 vuex 中，需要手动刷新才能清空，解决办法：手动刷一次，或者新生成一个路由实例，让新生成的路由实例替换当前的路由实例
