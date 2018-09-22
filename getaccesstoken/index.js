//获取 公众平台的 API 调用所需的 access_token
//https://developers.weixin.qq.com/miniprogram/dev/api/token.html
//https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=APPID&secret=APPSECRET
// 注意原请求返回JSON的字符串，本云函数已Prase为JSON后返回
var rp = require('request-promise')

exports.main = async (event, context) => {
    //console.log(event)
    //console.log('context', context)
    let jsonstr = await rp('https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=' + event.APPID + '&secret=' + event.APPSECRET)
    return JSON.parse(jsonstr)
}