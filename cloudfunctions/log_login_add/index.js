//新增log_login记录
//https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-client-api/database/collection.add.html
const cloud = require('wx-server-sdk')

cloud.init({})
const db = cloud.database()

exports.main = async (event, context) => {
    let d = new Date();
    try {
        await db.collection('log_login').add({
            data: {
                openid: event.userInfo.openId,
                time: d.getTime()
            }
        })
    } catch (e) {
        console.error(e)
        return false
    }
    return true
}

/*
    //小程序端调用：
    log_login_add(){
        wx.cloud.callFunction({
            name: 'log_login_add',
            data: {},
            success: res => {
                console.log('[云函数] [log_login_add] : ', res)
                if (res.errMsg)
                    wx.showToast({
                        title: 'ok_login_add',
                    })
                else
                    wx.showToast({
                        title: 'fali_login_add',
                    })
            },
            fail: err => {
                console.error('[云函数] [log_login_add] 调用失败', err)
                wx.navigateTo({
                    url: '../deployFunctions/deployFunctions',
                })
            }
        })
    }
*/