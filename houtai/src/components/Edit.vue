<template>
    <div class="edit container">
        <Alert v-if="alert" :message="alert"></Alert>
        <h1 class="page-header">编辑用户</h1>
        <form v-on:submit="editCostumers">
            <div class="well">
                <h4>用户信息</h4>
                <div class="form-group">
                    <label> 姓名 </label>
                    <input type="text" class="form-control" placeholder="name" v-model="costumers.name" value="costumers.name">
                </div>
                <div class="form-group">
                    <label> 电话 </label>
                    <input type="text" class="form-control" placeholder="phone" v-model="costumers.phone">
                </div>
                <div class="form-group">
                    <label> 邮箱 </label>
                    <input type="text" class="form-control" placeholder="email" v-model="costumers.email">
                </div>
                <div class="form-group">
                    <label> 学历 </label>
                    <input type="text" class="form-control" placeholder="eduction" v-model="costumers.eduction">
                </div>
                <div class="form-group">
                    <label> 毕业学校 </label>
                    <input type="text" class="form-control" placeholder="guaduationschool" v-model="costumers.guaduaticoschool">
                </div>
                <div class="form-group">
                    <label> 职业 </label>
                    <input type="text" class="form-control" placeholder="profession" v-model="costumers.profession">
                </div>
                <div class="form-group">
                    <label> 简介 </label>
                    <textarea class="form-control" rows="10" v-model="costumers.profile"></textarea>
                </div>

                <button type="submit" class="btn btn-primary">确认</button>
            </div>
        </form>
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
        // console.log(this.$route.params.id)
        this.fetchcostumers(this.$route.params.id)
    },
    methods: {
        fetchcostumers(id){
            this.$http.get('http://127.0.0.1:3000/user/' + id).then(res => {
                // console.log(res)
                this.costumers = res.body
            }).catch(error => {
                console.log(error)
            })
        },
        editCostumers(e){
            if (!this.costumers.name ||!this.costumers.phone || !this.costumers.email) {
                this.alert = '请在对应框内输入响应信息！'
            }else{
                let newCostumers = {
                    name: this.costumers.name,
                    phone: this.costumers.phone,
                    email: this.costumers.email,
                    eduction: this.costumers.eduction,
                    graduationschool: this.costumers.guaduationschool,
                    profession: this.costumers.profession,
                    profile: this.costumers.profile
                }
                this.$http.put('http://127.0.0.1:3000/user/'+this.$route.params.id,newCostumers).then(res => {
                    this.$router.push({path: '/',query: {alert: "用户信息更新成功！"}})
                }).catch(error => {
                    console.log(error)
                })
            }
            e.preventDefault();
        }
    },
    components: {
        Alert
    }
}
</script>

<style lang="less">
    
</style>