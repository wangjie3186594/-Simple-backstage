// 获取所有用户信息
http://127.0.0.1:3000/user

// 获取id为1的用户信息
http://127.0.0.1:3000/user/1

// 获取components中的所有信息
http://127.0.0.1:3000/components

// 获取components中的单个信息
http://127.0.0.1:3000/components/1

// 获取components中的id为3的用户信息
http://127.0.0.1:3000/components/3/user

// 获取components中name为HuaWei的信息
http://127.0.0.1:3000/components?name=HuaWei

// 获取多个components中name为HuaWei和Apple的信息
http://127.0.0.1:3000/components?name=HuaWei&name=Apple

// 获取components中页数为1且只展示两个数据信息
http://127.0.0.1:3000/components?_page=1&_limit=2

// 升序排序components中name的排序  降序为desc
http://127.0.0.1:3000/components?_sort=name&_order=asc

// 获取user中年龄大于等于30的用户信息
http://127.0.0.1:3000/user?age_gte=30

// 获取user中年龄在30与40之间的用户信息
http://127.0.0.1:3000/user?age_gte=32&age_lte=40

// 搜索用户信息
http://127.0.0.1:3000/user?q=WangJ

// 搜索所有包含J的用户信息
http://127.0.0.1:3000/user?q=J