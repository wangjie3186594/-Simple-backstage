<template>
    <div class="costumers container">
        <Alert v-if="alert" :message="alert"></Alert>
        <h1 class="page-header">用户后台管理系统</h1>

        <!-- 搜索框 -->
        <input type="text" class="form-control" placeholder="搜索" v-model="searchInput">

        <table class="table table-striped">
            <thead>
                <tr>
                    <th>姓名</th>
                    <th>电话</th>
                    <th>邮箱</th>
                    <th></th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="(costumer, index) in filterSearh(dates, searchInput)" :key="index">
                    <td> {{costumer.name}} </td>
                    <td> {{costumer.phone}} </td>
                    <td> {{costumer.email}} </td>
                    <!-- 点击将当前对应的id传给跳转的详情页面 -->
                    <td> <router-link :to="'Customerdetails/'+ costumer.id" class="btn btn-default">详情</router-link> </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import Alert from './Alert'
export default {
    data() {
        return {
            dates: [],                  // 获取user中所有用户信息
            alert: '',                  // 弹出框中显示信息
            searchInput: ''             // 搜索框中的信息
        }
    },
    created() {
        // 判断当前用户是否添加用户信息 成功弹出信息 失败
        if(this.$route.query.alert){
            this.alert = this.$route.query.alert
        }
        this.fetchCosTumers()
    },
    methods: {
        fetchCosTumers(){
            this.$http.get('http://127.0.0.1:3000/user').then(res => {
                this.dates = res.body
            }).catch(error => {
                console.log(error)
            })
        },
        filterSearh(dates, value){
            return dates.filter(res => {
                return res.name.match(value)
            })
        }
    },
    components: {
        Alert
    }
}
</script>

<style lang="less">
    
</style>