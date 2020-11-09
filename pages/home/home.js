// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperData: "",
    headerBGC: "",
    navgroup: "",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {


  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.request({
      url: 'https://x.dscmall.cn/api/visual/view',
      method: "POST",
      data: {
        id: 3,
        type: "index",
        device: "h5"
      },
      success: (res) => {
        const condata = JSON.parse(res.data.data.data)
        // console.log(condata)
        //轮播图数据
        const swiperImg = condata[2].data.list
        // console.log(swiperImg);
        this.setData({
          swiperData: swiperImg
        })
        //获取颜色
        let bgc = []
        for (let i = 0; i < swiperImg.length; i++) {
          let bgC = swiperImg[i].bgColor
          bgc.push(bgC)
        }
        // console.log(bgc);
        this.setData({
          headerBGC: bgc
        })
        //30个nav
        const navlists = condata[3].data.list
        // console.log(navlists)
        // const navgroup1 = navlists.splice(0, 10)
        // const navgroup2 = navlists.splice(0, 10)
        // const navgroup3 = navlists.splice(0, 10)
        //分组
        let navgroup = []
        for (let i = 0; i < 3; i++) {
          navgroup.push(navlists.splice(0, 10))
        }
        // console.log(navgroup)
        this.setData({
          navgroup: navgroup
        })
        //秒杀
        //product
      }
    })
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

  },
})