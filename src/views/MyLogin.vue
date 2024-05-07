<template>
  <div class="login">
    <div class="login-card">
      <el-form ref="formRef" :model="form" :rules="rules" label-position="left" label-width="auto">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="form.password" type="password" />
        </el-form-item>
        <el-form-item label=" ">
          <el-button type="primary" @click="handleClickSubmit">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'
import { login } from '@/api/login'

const router = useRouter()
const userStore = useUserStore()
const formRef = ref(null)

const form = reactive({
  username: 'admin',
  password: 'admin'
})

const rules = reactive({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { validator: (rule, value, callback) => {
        if (/[a-zA-Z0-9]+/.test(value)) {
          callback()
        } else {
          callback(new Error('用户名格式错误'))
        }
      },
      trigger: 'blur'
    },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { validator: (rule, value, callback) => {
        if (/[a-zA-Z0-9\!\@\#\$\%\^\&\*\(\)\_\+]+/.test(value)) {
          callback()
        } else {
          callback(new Error('密码只能包含数字大小写字母和!@#$%^&*()_+等特殊字符'))
        }
      },
      trigger: 'blur'
    },
  ],
})

const handleClickSubmit = () => {
  formRef.value.validate((valid, field) => {
    if (valid) {
      login().then((res) => {
        userStore.setUserInfo(res.data)
        router.push('/')
      })
    }
  })
}
</script>

<style scoped lang="scss">
.login {
  width: 100vw;
  height: 100vh;
  background-image: url('@/assets/images/login-bg.jpeg');
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  .login-card {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 350px;
    height: 240px;
    padding: 15px;
    border-radius: 8px;
    background: rgba(255 255 255 / 0.8 );
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(190px, -135px);
  }
}
</style>