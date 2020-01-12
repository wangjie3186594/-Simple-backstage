<template>
    <div class="add container">
        <h1 class="page-header">添加用户</h1>
        <form v-on:submit="addCostumers">
            <div class="well">
                <h4>用户信息</h4>
                <div class="form-group">
                    <label> 姓名 </label>
                    <input type="text" class="form-control" placeholder="name" v-model="customer.name">
                </div>
                <div class="form-group">
                    <label> 电话 </label>
                    <input type="text" class="form-control" placeholder="phone" v-model="customer.phone">
                </div>
                <div class="form-group">
                    <label> 邮箱 </label>
                    <input type="text" class="form-control" placeholder="email" v-model="customer.email">
                </div>
                <div class="form-group">
                    <label> 学历 </label>
                    <input type="text" class="form-control" placeholder="eduction" v-model="customer.eduction">
                </div>
                <div class="form-group">
                    <label> 毕业学校 </label>
                    <input type="text" class="form-control" placeholder="guaduationschool" v-model="customer.guaduaticoschool">
                </div>
                <div class="form-group">
                    <label> 职业 </label>
                    <input type="text" class="form-control" placeholder="profession" v-model="customer.profession">
                </div>
                <div class="form-group">
                    <label> 简介 </label>
                    <textarea class="form-control" rows="10" v-model="customer.profile"></textarea>
                </div>

                <button type="submit" class="btn btn-primary">添加</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            customer: []
        }
    },
    methods: {
        addCostumers(e){
            // console.log(1111)
            if (!this.customer.name || !this.customer.phone || !this.customer.email) {
                console.log('出错')
            }else{
                let newCustomer = {
                    name: this.customer.name,
                    phone: this.customer.phone,
                    email: this.customer.email,
                    eduction: this.customer.eduction,
                    graduationschool: this.customer.guaduationschool,
                    profession: this.customer.profession,
                    profile: this.customer.profile
                }
                this.$http.post('http://127.0.0.1:3000/user',newCustomer).then(res => {
                    this.$router.push({path: '/costumers',query: {alert: "用户信息添加成功！"}})
                }).catch(error => {
                    console.log(error)
                })
            }
            e.preventDefault();
            
        }
    },
}
</script>

<style lang="less">
    
</style>