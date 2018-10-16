//index.js
//获取应用实例
const app = getApp()

Page({
  data:{
    displays: "block",
    videoSrc: "",
    videoDisplay: "none",
    datalist: '',
  },
  onLoad: function(){
    var data = {};
    data.u_id = 25;
    data.token = '9fa0d1cd6dfcabc9606acb8d3d784d92';
    var url = 'http://182.92.224.182:8904/api/loginapi/select_user';
    this.commonAjaxRequest(url, "POST", data, "datalist");
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  loginRequest: function(){
    wx.login({
      success: function(res) {
        console.log(res)
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  getPhoneNumber(e){},
  getUserInfo(e){
    console.log(e)
  },
  getAjaxRequest: function(){
    var data = {};
    data.u_id = 25;
    data.token = '9fa0d1cd6dfcabc9606acb8d3d784d92';
    wx.request({
      url: 'http://182.92.224.182:8904/api/loginapi/select_user',
      method: "POST",
      data: { u_id: 25, token: '9fa0d1cd6dfcabc9606acb8d3d784d92'},
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      success: function(msg){
        console.log(msg)
      }
    })
  },
  clickEvent: function(event){
    var datas = event.currentTarget.dataset;
    wx.showModal({
      title: '系统提示',
      content: datas.nickname+',确定隐藏吗？',
      success: res=>{
        if(res.confirm){
          this.setData({
            displays: 'none'
          });
        }
      }
    })
  },
  playVideo: function(){
    this.setData({
      videoSrc: 'https://mp4.vjshi.com/2018-10-08/8d8870c7e12fa43198fd248af1f05c86.mp4',
      videoDisplay: 'block',
    });
  },
  clickAddNumber: function(e){
    var dataset = e.currentTarget.dataset;
    var oldvalue = this.data.datalist;
    oldvalue[dataset.idx] = dataset.values+1;
    this.setData({
      "datalist": oldvalue
    });
  },
  commonAjaxRequest: function(url, methods, param, datakey){
    wx.request({
      url: url,
      method: methods,
      data: param,
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      success: res=>{
        this.setData({
          [datakey]: res.data,
        });
      }
    })
  }
})
