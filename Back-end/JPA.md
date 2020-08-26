# JPA

## JPA 中的联合主键 @IdClass vs @EmbeddedId

> 详见：[Composite Primary Keys in JPA - baeldung](https://www.baeldung.com/jpa-composite-primary-keys)

复合主键类需要遵循一下规则：

- 类访问修饰符必须是 `public`
- 必须有一个无参构造函数
- 定义了 `equals` 和 `hashCode` 方法
- 实现了 `Serializable` 接口
- 最好没有 `setter` 方法

## Spring Data JPA 使用总结

### 自定义 SQL 语句

使用方法：在 `Repository` 相应方法上添加 `@Query` 注解，如涉及到**删除和修改**，则需要加上`@Modifying`；

JPA 要求更新、删除和插入操作必须有事务支持，所以，需要在 Dao 层 `Repository` 相应方法上或者Service 层方法上或者在最终业务调用的方法上添加 `@Transactional`；

### 关于删除操作

在执行 `Repository` 中根据xxx条件删除相应实体的方法时（如框架中的根据 id 进行删除的方法 `deleteById(ID id)` 和下面示例代码中的 `deleteByUuid` 方法），在执行 `delete` SQL 语句前，框架内部会先根据方法名中 by 后面的条件进行查询，然后会执行根据主键进行删除的 SQL 语句；

在执行 `Repository` 中自定义 SQL 语句的删除方法时（如下面示例代码中的 `deleteByName` 方法），会直接执行自定义的 SQL 语句；

所以，业务中删除操作的最佳实践是：删除前先查询，得到要删除的实体对象，然后调用框架中删除实体的方法 `delete(T entity)` 进行删除。示例代码如下：

```java
public interface SMMediaRepository extends BaseJpaRepository<SMMedia, Long> {

  @Transactional
  void deleteByUuid(String uuid);

  @Transactional
  @Modifying
  @Query("delete from SMMedia where name = ?1")
  void deleteByName(String name);
  
}
```
