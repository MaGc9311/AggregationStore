// pages/category/category.js
let app = getApp();
let {
  requestApi
} = require("../../utils/request.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    categoryLeftData: "",
    activeIndex: 0,
    getCategoryContent: "",
    contentData: "",
    height: "",
    navH: ""
  },
  //获取左侧导航数据
  async getCategoryNav() {
    let result = await requestApi(app.globalData.base_url + "/catalog/list")
    // console.log(result)
    this.setData({
      categoryLeftData: result.data.data
    })
    // console.log(this.data.categoryLeftData);
    //获取分类ID
    // let categoryID = []
    // for (let i = 0; i < result.data.data.length; i++) {
    //   categoryID.push(result.data.data[i].cat_id)
    // }
    // console.log(categoryID)
  },
  //获取右侧细类数据

  async getCategoryContent() {
    let result858 = await requestApi(app.globalData.base_url + "/catalog/list/858")
    let result6 = await requestApi(app.globalData.base_url + "/catalog/list/6")
    let result8 = await requestApi(app.globalData.base_url + "/catalog/list/8")
    let result3 = await requestApi(app.globalData.base_url + "/catalog/list/3")
    let result4 = await requestApi(app.globalData.base_url + "/catalog/list/4")
    let result5 = await requestApi(app.globalData.base_url + "/catalog/list/5")
    let result860 = await requestApi(app.globalData.base_url + "/catalog/list/860")
    let arrResult = []
    arrResult.push(result858.data.data)
    arrResult.push(result6.data.data)
    arrResult.push(result8.data.data)
    arrResult.push(result3.data.data)
    arrResult.push(result4.data.data)
    arrResult.push(result5.data.data)
    arrResult.push(result860.data.data)
    this.setData({
      getCategoryContent: arrResult
    })
    this.setData({
      contentData: this.data.getCategoryContent[0]
    })
    // console.log(this.data.getCategoryContent)
  },
  //点击切换要显示的内容
  selectNav(e) {
    // console.log(e)
    let selectData = this.data.getCategoryContent[e.target.dataset.index]
    this.setData({
      //被选中时的样式
      activeIndex: e.target.dataset.index,
      contentData: selectData
    })
    // console.log(this.data.contentData)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getCategoryNav()
    this.getCategoryContent()
    wx.getSystemInfo({
      success: (result) => {
        this.setData({
          height: result.windowHeight * (750 / result.windowWidth) - 88
        })
      },
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})