<template>
    <a-modal :closable="false" width="500px" :visible="visible" :footer="null" @cancel="handleCancel" :mask-style="{ background: 'rgba(0, 0, 0, 0.3)' }">
        <div class="modal-login" style="margin:-25px;margin-bottom:40px;border-radius:0px">
            <div class="modal-heading clearfix">
                <img alt="猎流-网店推广系统" src="//img.alicdn.com/imgextra/i2/TB1IknuPVXXXXcjXpXXXXXXXXXX.jpg" />
                <a class="close-btn cursor-pointer" @click="visible = false"></a>
            </div>
        </div>
        <a-form :form="form" @submit="handleSubmit">
            <a-form-item v-bind="formItemLayout">
                <a-input v-decorator="[
          'phone',
          {
            rules: [
              {
                required: true,
                message: '请输入手机号码',
              },
              {
                validator: phoneValid,
              },
            ],
          },
        ]">
                    <i slot="suffix" class="fa fa-user"></i>
                </a-input>
            </a-form-item>
            <a-form-item v-bind="formItemLayout">
                <a-input v-decorator="[
          'password',
          {
            rules: [
              {
                required: true,
                message: 'Please input your password!',
              },
              {
                validator: validateToNextPassword,
              },
            ],
          },
        ]" type="password">
                    <i slot="suffix" class="fa fa-key"></i>
                </a-input>
            </a-form-item>
            <a-form-item v-bind="formItemLayout">
                <a-input v-decorator="[
          'confirm',
          {
            rules: [
              {
                required: true,
                message: '请再次输入密码',
              },
              {
                validator: passdiffValid,
              },
            ],
          },
        ]" type="password" @blur="handleConfirmBlur">
                    <i slot="suffix" class="fa fa-key"></i>
                </a-input>
            </a-form-item>

            <a-form-item v-bind="formItemLayout" extra="">
                <a-row :gutter="8">
                    <a-col :span="12">
                        <a-input v-decorator="[
              'captcha',
              { rules: [{ required: true, message: 'Please input the captcha you got!' }] },
            ]" />
                    </a-col>
                    <a-col :span="12">
                        <a-button>获取验证码</a-button>
                    </a-col>
                </a-row>
            </a-form-item>
            <a-form-item v-bind="tailFormItemLayout">
                <a-checkbox v-decorator="['agreement', { valuePropName: 'checked' }]">
                    I have read the
                    <a href="">
                        agreement
                    </a>
                </a-checkbox>
            </a-form-item>
            <a-form-item v-bind="tailFormItemLayout">
                <a-button type="primary" html-type="submit">
                    Register
                </a-button>
            </a-form-item>
        </a-form>
    </a-modal>
</template>

<script>
const residences = [
    {
        value: "zhejiang",
        label: "Zhejiang",
        children: [
            {
                value: "hangzhou",
                label: "Hangzhou",
                children: [
                    {
                        value: "xihu",
                        label: "West Lake"
                    }
                ]
            }
        ]
    },
    {
        value: "jiangsu",
        label: "Jiangsu",
        children: [
            {
                value: "nanjing",
                label: "Nanjing",
                children: [
                    {
                        value: "zhonghuamen",
                        label: "Zhong Hua Men"
                    }
                ]
            }
        ]
    }
];

export default {
    data() {
        return {
            visible: false,
            confirmDirty: false,
            residences,
            autoCompleteResult: [],
            formItemLayout: {
                labelCol: {
                    xs: { span: 24 },
                    sm: { span: 8 }
                },
                wrapperCol: {
                    xs: { span: 24 },
                    sm: { span: 16 }
                }
            },
            tailFormItemLayout: {
                wrapperCol: {
                    xs: {
                        span: 24,
                        offset: 0
                    },
                    sm: {
                        span: 16,
                        offset: 8
                    }
                }
            }
        };
    },
    beforeCreate() {
        this.form = this.$form.createForm(this, { name: "register" });
    },
    methods: {
        open() {
            this.visible = true;
        },
        handleSubmit(e) {
            e.preventDefault();
            this.form.validateFieldsAndScroll((err, values) => {
                if (!err) {
                    console.log("Received values of form: ", values);
                }
            });
        },
        handleConfirmBlur(e) {
            const value = e.target.value;
            this.confirmDirty = this.confirmDirty || !!value;
        },
        compareToFirstPassword(rule, value, callback) {
            const form = this.form;
            if (value && value !== form.getFieldValue("password")) {
                callback("Two passwords that you enter is inconsistent!");
            } else {
                callback();
            }
        },
        validateToNextPassword(rule, value, callback) {
            const form = this.form;
            if (value && this.confirmDirty) {
                form.validateFields(["confirm"], { force: true });
            }
            callback();
        },
        handleWebsiteChange(value) {
            let autoCompleteResult;
            if (!value) {
                autoCompleteResult = [];
            } else {
                autoCompleteResult = [".com", ".org", ".net"].map(
                    domain => `${value}${domain}`
                );
            }
            this.autoCompleteResult = autoCompleteResult;
        }
    }
};
</script>