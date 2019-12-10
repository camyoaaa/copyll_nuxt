<template>
  <div class="ll-modal" v-show="visible">
    <a-modal
      :closable="false"
      width="500px"
      :visible="visible"
      :footer="null"
      @cancel="close"
      :mask-style="{ background: 'rgba(0, 0, 0, 0.3)' }"
    >
      <div
        class="modal-login"
        style="margin:-25px;margin-bottom:40px;border-radius:0px"
      >
        <div class="modal-heading clearfix">
          <img
            alt="猎流-网店推广系统"
            src="//img.alicdn.com/imgextra/i2/TB1IknuPVXXXXcjXpXXXXXXXXXX.jpg"
          />
          <a class="close-btn cursor-pointer" @click="visible = false"></a>
        </div>
      </div>
      <div class="modal-body mrl mll" style="margin:0 20px">
        <div class="form-group">
          <div class="input-icon right">
            <i class="fa fa-user"></i>
            <input
              type="tel"
              placeholder="手机号码"
              v-model.trim="phone"
              class="form-control ng-valid ng-animate ng-valid-maxlength-add ng-valid-maxlength ng-valid-maxlength-add-active valid ng-dirty ng-valid-parse ng-touched"
              maxlength="11"
            />
            <label class="error" v-show="validating && phoneerr">{{
              phoneerr
            }}</label>
          </div>
        </div>
        <div class="form-group clearfix mbl">
          <div class="col-xs-6">
            <div class="row">
              <input
                type="tel"
                v-model="validCode"
                maxlength="6"
                class="form-control ng-pristine ng-untouched ng-valid ng-valid-maxlength"
                placeholder="验证码"
              />
              <label class="error" v-show="validating && valifail">{{
                valifail
              }}</label>
            </div>
          </div>
          <div class="col-xs-6">
            <div class="row">
              <a
                class="btn btn-default btn-block ng-binding cursor-pointer"
                style="margin-left: -1px;"
                @click="getCode"
                >{{ validateLabel }}</a
              >
            </div>
          </div>
          <input
            type="text"
            name="code"
            ng-model="code"
            class="input-valid ng-pristine ng-untouched ng-valid"
          />
        </div>
        <div></div>
        <div class="form-group">
          <div class="input-icon right">
            <i class="fa fa-key"></i>
            <input
              type="password"
              v-model="password"
              placeholder="登录密码（6-16位，区分大小写）"
              class="form-control ng-valid ng-animate ng-valid-maxlength-add ng-valid-maxlength ng-valid-maxlength-add-active valid ng-dirty ng-valid-parse ng-touched"
              maxlength="16"
            />
            <label class="error" v-show="validating && passnone">{{
              passnone
            }}</label>
          </div>
        </div>
        <div class="form-group">
          <div class="input-icon right">
            <i class="fa fa-key"></i>
            <input
              type="password"
              v-model="repassword"
              placeholder="确认密码"
              class="form-control ng-pristine ng-untouched ng-valid ng-valid-maxlength"
              maxlength="16"
            />
          </div>
          <label class="error" v-show="validating && passdiff">{{
            passdiff
          }}</label>
        </div>
        <div class="form-group">
          <button class="btn btn-block btn-lg btn-warning" @click="regist">
            注册
          </button>
        </div>
        <div class="forget-password">
          <p class="text-center">
            已有账号？<a class="cursor-pointer" @click="gotoLogin">点此登录</a>
          </p>
        </div>
      </div>
    </a-modal>
  </div>
</template>
<style>
.ant-modal-header {
  background: #ff5010;
}
.ant-modal-title {
  font-size: 14px;
  color: white;
}
.ant-modal-close,
.ant-modal-close:focus,
.ant-modal-close:hover {
  color: white;
  text-decoration: none;
}
.modal-tips {
  background: #e8e8e8;
  border-top: 1px #ddd solid;
  text-align: center;
  margin: 10px -16px -10px -16px;
  height: 30px;
  line-height: 30px;
  color: #777;
}
.close-btn {
  font-family: "lion" !important;
  float: right;
  font-size: 1.3em;
  line-height: 100%;
  margin: -15px;
  padding: 15px;
  height: 48px;
  width: 48px;
  color: #ffffff;
}
</style>
<script>
import logo from "./logo.png";
import { mapActions } from "vuex";
import { CryptoMd5 } from "@/assets/commFunc.js";
export default {
  data() {
    return {
      visible: false,
      phone: "",
      validCode: "",
      password: "",
      repassword: "",
      logo,
      passdiff: "",
      passnone: "",
      phoneerr: "",
      valifail: "",
      validating: false,
      resavingValidateCode: false, //正在接收验证码
      countdown: 90 //验证码倒计时
    };
  },
  watch: {
    resavingValidateCode(resaving) {
      if (resaving) {
        let timer = setInterval(() => {
          this.countdown--;
          if (this.countdown == 0) {
            this.resavingValidateCode = false;
            this.countdown = 90;
            clearInterval(timer);
          }
        }, 1000);
      }
    }
  },
  computed: {
    validateLabel() {
      if (!this.resavingValidateCode) {
        return "发送验证码";
      } else {
        return `${this.countdown}后重新获取`;
      }
    }
  },
  methods: {
    ...mapActions(["userRegistAction"]),
    open() {
      this.visible = true;
    },
    close() {
      this.visible = false;
    },
    gotoLogin() {},
    async regist() {
      this.validating = true;
      this.passdiff = "";
      this.passnone = "";
      this.phoneerr = "";
      this.valifail = "";

      let phoneReg = /^1[3456789]\d{9}$/;
      if (!this.phone || !phoneReg.test(this.phone)) {
        this.phoneerr = "请输入11位标准的手机号码";
        return;
      }

      if (!this.validCode || !/\d{6}/.test(this.validCode)) {
        this.valifail = "请输入6位验证码数字";
        return;
      }
      if (!this.password) {
        this.passnone = "请输入密码";
        return;
      }
      if (this.repassword != this.password) {
        this.passdiff = "两次密码输入不一致";
        return;
      }
      try {
        let res = await this.$axios.post(
          "http://192.168.3.94:9527/users/regist",
          {
            phone: this.phone,
            validCode: this.validCode,
            password: CryptoMd5(this.password)
          }
        );
        if (res.status == 200) {
          this.$message.success("注册成功", 0);
          this.close();
        } else {
          this.phoneerr = res.msg;
        }
      } catch (error) {
        console.log(error);
      }
    },
    forgetPass() {},
    async getCode() {
      this.validating = true;

      let phoneReg = /^1[3456789]\d{9}$/;
      if (!this.phone || !phoneReg.test(this.phone)) {
        this.phoneerr = "请输入11位标准的手机号码";
        return;
      }

      let { isRegist } = await this.$axios.post(
        "http://192.168.3.94:9527/users/isRegist",
        {
          phone: this.phone
        }
      );
      if (isRegist) {
        this.phoneerr = "该手机号码已经被注册了";
        return;
      }

      let { status } = this.$axios.post(
        "http://192.168.3.94:9527/users/validcode",
        {
          phone: this.phone
        }
      );
      if (status == 200) {
        this.resavingValidateCode = true;
      }
    }
  }
};
</script>
