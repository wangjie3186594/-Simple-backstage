<template>
    <div class="costumers container">
        <Alert v-if="alert" :message="alert"></Alert>
        <h1 class="page-header">用户后台管理系统</h1>
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
                <tr v-for="(costumers, index) in costumers" :key="index">
                    <td> {{costumers.name}} </td>
                    <td> {{costumers.phone}} </td>
                    <td> {{costumers.email}} </td>
                    <td> <router-link :to="'Customerdetails/'+ costumers.id" class="btn btn-default">详情</router-link> </td>
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
            costumers: [],
            alert: ''
        }
    },
    created() {
        // console.log(this.$route)
        // 判断当前用户是否添加用户信息 成功弹出信息 失败
        if(this.$route.query.alert){
            this.alert = this.$route.query.alert
        }
        this.fetchCosTumers()
    },
    methods: {
        fetchCosTumers(){
            this.$http.get('http://127.0.0.1:3000/user').then(res => {
                this.costumers = res.body
            }).catch(error => {
                console.log(error)
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