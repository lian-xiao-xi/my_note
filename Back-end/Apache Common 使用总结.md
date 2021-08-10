# Apache Commons

> [官方文档](https://commons.apache.org/)

## commons-collections4:4.4

### CollectionUtils

- `static boolean isEmpty(Collection<?> coll)`；
- `static boolean isNotEmpty(Collection<?> coll)`；
- `static <T> boolean addIgnoreNull(Collection<T> collection, T object)` 将元素object添加到集合collection中，除非该元素为null；
- `static boolean containsAll(Collection<?> coll1, Collection<?> coll2)` 如果coll2中所有元素也包含在coll1中则返回true；
- `static boolean containsAny(Collection<?> coll1, T... coll2)`；
- `static boolean containsAny(Collection<?> coll1, Collection<?> coll2)` 如果两个集合coll1和coll2中包含至少一个相同元素，则返回true；
- `static <O> Collection<O> disjunction(Iterable<? extends O> a, Iterable<? extends O> b)` 返回集合a和b的差集；
- `static <O> Map<O, Integer> getCardinalityMap(Iterable<? extends O> coll)` 返回一个Map，将给定集合coll中的元素映射到一个整数，表示该元素在集合coll中的出现次数；
- `static <O> Collection<O> intersection(Iterable<? extends O> a, Iterable<? extends O> b)` 返回集合a和b的交集；
- `static boolean isEqualCollection(Collection<?> a, Collection<?> b)` 判断集合a和b是否具有完全相同基数的完全相同的元素；

### IterableUtils

- `static <E> E find(Iterable<E> iterable, Predicate<? super E> predicate)` 在集合iterable中查找与给定条件predicate匹配的第一个元素；
