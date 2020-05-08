# spring boot 使用过程中踩的坑和获得的经验

## spring boot 2.2.x 版本中测试类发生的变化

spring boot 2.2.x 版本中的 spring-boot-starter-test 不再使用 Junit4 改用 Junit5，所以找不到 `@RunWith` 注解。`@SpringBootTest` 注解已经包含 `@RunWith(SpringRunner.class)` 的功能。

> 相关链接：
[https://www.cnblogs.com/suhaha/p/12050040.html](https://www.cnblogs.com/suhaha/p/12050040.html)
[https://docs.spring.io/spring-boot/docs/2.2.x/reference/html/spring-boot-features.html#boot-features-testing](https://docs.spring.io/spring-boot/docs/2.2.x/reference/html/spring-boot-features.html#boot-features-testing)

[https://blog.csdn.net/qq_19671173/article/details/79423951](https://blog.csdn.net/qq_19671173/article/details/79423951)

[https://www.javaguides.net/2018/09/spring-boot-2-with-junit-5-testing.html](https://www.javaguides.net/2018/09/spring-boot-2-with-junit-5-testing.html)
