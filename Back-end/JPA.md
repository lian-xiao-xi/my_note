# JPA

## JPA 中的联合主键 @IdClass vs @EmbeddedId

> 详见：[Composite Primary Keys in JPA - baeldung](https://www.baeldung.com/jpa-composite-primary-keys)

复合主键类需要遵循一下规则：

- 类访问修饰符必须是 `public`
- 必须有一个无参构造函数
- 定义了 `equals` 和 `hashCode` 方法
- 实现了 `Serializable` 接口
- 最好没有 `setter` 方法
