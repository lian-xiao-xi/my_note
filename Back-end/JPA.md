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

> 版本说明：`spring-boot-starter-data-jpa:2.13.RELEASE`

### 自定义 SQL 语句

使用方法：在 `Repository` 相应方法上添加 `@Query` 注解，如涉及到**删除和修改**，则需要加上`@Modifying`；

### 关于事务

JPA 要求更新、删除和插入操作必须有事务支持，所以，需要在 Dao 层 `Repository` 相应方法上或者Service 层方法上或者在最终业务调用的方法上添加 `@Transactional`；

### 关于删除操作

在执行 `Repository` 中根据xxx条件删除相应实体的方法时（如框架中的根据 id 进行删除的方法 `deleteById(ID id)` 和下面示例代码中的 `deleteByName` 方法），在执行 `delete` SQL 语句前，框架内部会先根据方法名中 by 后面的条件进行查询，如果没有查询到数据，框架内的 `deleteById(ID id)` 方法会产生异常，自己在 `Repository` 中定义的删除方法（如示例代码中的 `deleteByName`）则是执行结束；反之则会接着执行根据主键删除数据的 SQL 语句 `delete from table where primary_key = ?`，如果查询到N多条数据，则会执行N多次上述语句进行逐条删除，而不是执行 `delete from table where primary_key in (?,?,?)` 语句；

在执行 `Repository` 中自定义 SQL 语句的删除方法时（如下面示例代码中的 `deleteByStatus` 方法），会直接执行自定义的 SQL 语句；

示例代码如下：

```java
public interface SMMediaRepository extends BaseJpaRepository<SMMedia, Long> {

  @Transactional
  void deleteByName(String name);

  @Transactional
  @Modifying
  @Query("delete from SMMedia where status = :status")
  void deleteByStatus(@Param("status") Sring status);
  
}
```

所以，开发中进行删除数据操作最好的方法是：删除前先查询，得到要删除的实体对象，然后调用框架中删除实体的方法 `delete(T entity)` 或 `deleteInBatch(Iterable<T> entities)` 。`delete(T entity)` 方法内部通过执行 SQL 语句 `delete from table where primary_key = ?` 删除数据，；批量删除方法 `deleteInBatch(Iterable<T> entities)` 内部是通过 SQL `delete from table where primary_key=? or primary_key=? or ...` 删除数据的；
