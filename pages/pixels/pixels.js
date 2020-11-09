// pages/demo6/demo6.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    winH: 0,
    listDatas: [],
    page: 1,
    flag: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //页面加载的时候执行getListDataFn的方法来获取数据
    this.getListDataFn()
    wx.getSystemInfo({
      success: (result) => {
        this.setData({
          winH: result.windowHeight
        })
      },
    })
  },
  getListDataFn() {
    wx.showLoading({
      title: '加载中',
    })
    wx.request({
      url: 'https://x.dscmall.cn/api/goods/type_list',
      data: {
        page: this.data.page,
        size: 10,
        type: "is_best"
      },
      success: (res) => {
        // console.log(res)
        if (res.statusCode == 200) {
          wx.hideLoading()
          if (res.data.data.length == 0) {
            this.setData({
              flag: false
            })
          }
          let list = this.data.listDatas.concat(res.data.data)
          let page = ++this.data.page
          this.setData({
            listDatas: list,
            flag: true,
            page: page
          })
        }
      }
    })
  },
  loadMore() {
    //bindscrolltolower在滑动到页面最底部时执行loadMore方法再次获取数据
    if (this.data.flag) {
      this.getListDataFn()
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    if (this.data.flag) {
      this.data.getListDataFn()
    }
  },

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