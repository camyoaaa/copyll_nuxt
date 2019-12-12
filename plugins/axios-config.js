export default function ({
  $axios,
  redirect
}) {
  // request interceptor
  $axios.interceptors.request.use(
    config => {
      //请求前加入token头部
      let userToken = localStorage.getItem('Authorization');
      if (userToken) {
        config.headers['Authorization'] = userToken;
      }
      return config;
    },
    error => {
      return Promise.reject(error)
    }
  )
  $axios.onRequest(config => {
    console.log('Making request to ' + config.url)
  })

  // response interceptor
  $axios.interceptors.response.use(
    /**
     * Determine the request status by custom code
     * Here is just an example
     * You can also judge the status by HTTP Status Code
     */
    response => {
      const res = response.data;
      if (response.headers.authorization) { //如果后端返回认证token,则保存
        localStorage.setItem('Authorization', response.headers.authorization);
      }

      if (res.status == '403' && res.code == 0) { //登出操作
        localStorage.removeItem('userInfo');
        localStorage.removeItem('userToken');
      }
      return res;
      if (res.code === 20000) {
        return res
      } else {
        redirect('/404')
        // if the custom code is not 200, it is judged as an error.
      }
      return Promise.reject(new Error(res.msg || 'Error'))
    },
    error => {
      console.log('err' + error) // for debug

      return Promise.reject(error)
    }
  )

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/404')
    } else if (code === 500) {
      redirect('/500')
    }
  })
}
