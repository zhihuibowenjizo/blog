---
icon: edit
date: 2023-07-03
category:
  - c

---

# C++ 命名空间


C++中的命名空间是一种将变量、函数和类等符号封装起来的机制，用来避免同一个程序中不同部分的代码名称冲突。它可以被看作是一种组织代码的方式，可以将相关的代码放在同一个命名空间下，方便管理和使用。

一个命名空间是由关键字 `namespace` 后跟命名空间名称和花括号扩起来的一系列声明组成的。例如：

```cpp
namespace MyNamespace {
  int myVar;
  void myFunc();
  class MyClass {};
}
```

命名空间中可以包含变量、函数、类、结构体和枚举等，并且可以嵌套使用。例如：

```cpp
namespace MyNamespace {
  namespace InnerNamespace {
    int innerVar;
    void innerFunc();
  }
}
```

在使用命名空间中的代码时，需要使用作用域限定符 `::` 来指定具体要使用的标识符所属的命名空间。例如：

```cpp
MyNamespace::myVar = 100;
MyNamespace::myFunc();
```

还可以使用 `using` 声明或 `using namespace` 声明来访问命名空间中的标识符。例如：

```cpp
using MyNamespace::myVar;
int x = myVar;
```

需要注意的是，命名空间的标识符不能与其他命名空间或全局命名空间中的标识符重名，否则会导致编译错误。同时，为了保证代码的可读性和维护性，应该尽可能的将代码放进合适的命名空间中。

---