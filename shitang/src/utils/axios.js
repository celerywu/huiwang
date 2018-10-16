import axios from 'axios';
import qs from 'qs'
// import {
//   Indicator,
//   // Toast
// } from 'mint-ui';
import router from '@/router';
import { Toast,Loading } from 'vant';
import {
	setSessionStorage,
	getSessionStorage,
	removeSessionStorage
} from '@/utils/mixin';
// import Toast from '../components/common/toast'
// 需要使用代理来解决跨域问题
// axios.defaults.baseURL = 'http://api.zhuishushenqi.com';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.timeout = 20000;

// Add a request interceptor
axios.interceptors.request.use((config) => {
  if (config.method === 'post') {
    config.data = qs.stringify(config.data);
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use((response) => {
  if (!response.status === 200) {
    return Promise.reject(response);
  }
  return response;
}, (error) => {
  return Promise.reject(error);
});
class Http {
  require(options) {
    if (!options.api) throw new Error('api 不能为空');
    if (!options.param) { options.param = {} };
    if (!options.methods) { options.methods = 'POST' }; //不传递方法默认为POST
    if (!options.loadingVisble) { options.loadingVisble = true }; // 不传递默认开启loading
    if (!options.loadingText) { //options.loadingText = '加载中...' ;
      // Toast.loading({
      //   mask: false,
      // //   // message: '加载中...'
      // });
      // Indicator.open({
      //   text: 'Loading...',
      //   spinnerType: 'fading-circle'
      // });
    };
    if(options.loadingVisble){
        // Indicator.open({
        //     text: options.loadingText,
        //     spinnerType: 'snake'
        // })
    };
    options.param.MemberToken = options.param.MemberToken ? options.param.MemberToken : getSessionStorage('MemberToken');
    return new Promise((resolve,reject) => {
        return axios({
            method: options.methods,
            url: options.api,
            // baseURL: this.Domain,
            // `withCredentials` indicates whether or not cross-site Access-Control requests
            // should be made using credentials
            // withCredentials: true, // default
            // headers: {
            //     'Content-Type':'text/plain'
            // },
            data: options.param
        }).then(response => {
            // Indicator.close();
          Toast.clear()
          var returnCode = response.data.returnCode
            if(returnCode === '000000'){ //请求成功
                return resolve(response.data)
            }else if(returnCode === '999999'){
              Toast.fail('系统错误');
            }else if(returnCode === '000001'){
              Toast.fail('参数为空异常');
            }else if(returnCode === '000002'){
              Toast.fail('获取验证码失败');
            }else if(returnCode === '000003'){
              Toast.fail('短信通道发送失败');
            }else if(returnCode === '000004'){
              Toast.fail('验证码错误');
            }else if(returnCode === '000005'){
              Toast.fail('验证码超时');
            }else if(returnCode === '000006'){
              Toast.fail('数据库错');
            } else if(returnCode === '000007'){
              Toast.fail('用户已存在');
            }else if(returnCode === '000008'){
              Toast.fail('加密出错');
            }else if(returnCode === '000009'){
              Toast.fail('获取验证码时间间隔太短');
            }else if(returnCode === '000010'){
              Toast.fail('用户不存在');
            }else if(returnCode === '000011'){
              Toast.fail('密码长度错误');
            }else if(returnCode === '000012'){
              Toast.fail('不可重复报名');
            }else if(returnCode === '000013'){
              Toast.fail('未设置支付密码');
            }else if(returnCode === '000014'){
              Toast.fail('密码错');
            }else if(returnCode === '000015'){
              Toast.fail('二维码验证失败');
            }else if(returnCode === '000016'){
              Toast.fail('金额错误');
            }else if(returnCode === '000017'){
              Toast.fail('余额不足');
            }else if(returnCode === '000018'){
              Toast.fail('数据未找到');
            }else if(returnCode === '000019'){
              Toast.fail('奖品数量不足');
            }else if(returnCode === '000020'){
              Toast.fail('登录密码错');
            }else if(returnCode === '000021'){
              Toast.fail('错误的手机号');
            }else if(returnCode === '000022'){
              Toast.fail('商品不存在');
            }else if(returnCode === '000023'){
              Toast.fail('没有找到账户信息');
            }else if(returnCode === '000024'){
              Toast.fail('积分错误');
            }else if(returnCode === '000025'){
              Toast.fail('库存不足');
            }else if(returnCode === '000026'){
              Toast.fail('用户地址为空');
            }else if(returnCode === '000027'){
              Toast.fail('同一订单不允许有两种类型商品');
            }else if(returnCode === '000028'){
              Toast.fail('订单不存在');
            }else if(returnCode === '000029'){
              Toast.fail('只能取消未支付订单');
            }else if(returnCode === '000030'){
              Toast.fail('用户手机号为空');
            } else if(returnCode === '000031'){
              Toast.fail('非食堂用户');
            } else if(returnCode === '000032'){
              Toast.fail('非窗口用户');
            }else if(returnCode === '000033'){
              Toast.fail('不可退款');
            }else if(returnCode === '000034'){
              Toast.fail('超出可退款时限');
            }else if(returnCode === '000035'){
              Toast.fail('密码不全是数字');
            }else if(returnCode === '000036'){
              Toast.fail('活动不存在');
            }
            else if(response.data.returnCode === '555555'){
              Toast.fail('token失效');
              setTimeout(()=>{
                window.location.href = 'huiwang://login'
              },1000)

                  // router.push('/Login')
                // return reject(response.data)
            }
        },error => {
            Toast.fail('出错啦');
            Toast.clear()
            return reject()
        })
    })
  }
}

export default Http;
