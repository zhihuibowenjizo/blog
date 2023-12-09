---
icon: edit
date: 2022-12-19
category:
  - spring
---
# ssm 数据库查询数据 在 浏览器上乱码问题

```java
@RequestMapping(value = "/", produces = "application/json; charset=utf-8")
```
加上produces即可



# spring集成mybatis-plus 报错
引入Mybatis-Plus之后请不要再次引入MyBatis以及MyBatis-Spring，
不然有可能因版本差异而导致报错。



# mysql 表格id 自增起始值设置
```mysql
ALTER TABLE TABLE_NAME AUTO_INCREMENT = 0;
```
