# Makefile

> 方便编译、管理工程

1. 命名：Makefile
2. 规则：

~~~shell
app: sub.o add.o mult.o div.o main.o
	gcc sub.o add.o mult.o div.o main.o -o  app

sub.o:sub.c
	gcc -c sub.c -o sub.o

add.o:add.c
	gcc -c add.c -o add.o
	
mult.o:mult.c
	gcc -c mult.c -o mult.o
	
div.o:div.c
	gcc -c div.c -o div.c

main.o:main.c
	gcc -c main.c -o main.o
~~~

3. 运行`Makefile`

```shell
make
```

4. 运行Makefile时，根据第一行规则查找依赖来运行