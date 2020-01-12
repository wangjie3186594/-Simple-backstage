<template>
    <div class="detail container">
        <router-link to="/costumers" class="btn btn-default">返回</router-link>
        <h1 class="page-header"> {{costumers.name}}
            <span class="pull-right">
                <router-link :to="'/edit/'+costumers.id " class="btn btn-primary">编辑</router-link>
                <span class="btn btn-default" v-on:click.stop="DeleteCostumers(costumers.id)">删除</span>
                <!-- <button class="btn btn-default">删除</button> -->
            </span>
        </h1>
        <ul class="list-group">
            <li class="list-group-item"> <span class="glyphicon glyphicon-phone-alt"></span> {{costumers.phone}} </li>
            <li class="list-group-item"> <span class="glyphicon glyphicon-envelope"></span> {{costumers.email}} </li>
            <li class="list-group-item"> <span class="glyphicon glyphicon-tag"></span> {{costumers.eduction}} </li>
            <li class="list-group-item"> <span class="glyphicon glyphicon-tags"></span> {{costumers.guaduationschool}} </li>
            <li class="list-group-item"> <span class="glyphicon glyphicon-pencil"></span> {{costumers.profession}} </li>
            <li class="list-group-item"> <span class="glyphicon glyphicon-th-large"></span> {{costumers.profile}} </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            costumers: []
        }
    },
    created() {
        // console.log(this.$route.params.id)
        this.fetchCosTumers(this.$route.params.id)
    },
    methods: {
        fetchCosTumers(id){
            this.$http.get('http://127.0.0.1:3000/user/' + id).then(res => {
                // console.log(res)
                this.costumers = res.body
            }).catch(error => {
                console.log(error)
            })
        },
        DeleteCostumers(id){
            // console.log(id)
            this.$http.delete('http://127.0.0.1:3000/user/' + id).then(res => {
                this.$router.push({path: '/costumers',query: {alert:'用户信息删除成功！'}})
            })
        }
    },
}
</script>

<style lang="less">
    
</style>