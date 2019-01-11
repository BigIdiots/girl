import Vue from 'vue'
import axios from 'axios'


//axios 配置
axios.defaults.timeout = 5000;// 在超时前，所有请求都会等待 5 秒
axios.defaults.baseURL = 'http://10.8.155.63:8080/beauty/';// 配置接口地址

//http request 拦截器

axios.interceptors.request.use(
	config=>{
//		const token = getCookie('session');
		config.data = JSON.stringify(config.data)
		config.headers = {
			'Content-Type':'application/x-www-form-urlencoded'
		}
		/*if(token){
			config.params={'token':token}
		}*/
		return config;
	},
	err=>{
		return Promise.reject(err);
	}
);

//post 请求方法

export function post(url,data){
	return new Promise((resolve,reject)=>{
		axios.post(url,data)
		.then(response=>{
			resolve(response.data);
		},err=>{
			reject(err);
		})
	})
}
