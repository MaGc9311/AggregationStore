// pages/goodsdetail/goodsdetail.js
let app = getApp()
let {
  requestApi
} = require("../../utils/request.js")
let wxParse = require("../../wxParse/wxParse.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    height: "",
    goodsDetailData: {},
    swiperData: [],
    goodsDetailTJData: [],
    goodsPJData: [],
    showMask: false,
    dis: true,
    buyNum: 1,
    gid: 0
  },
  goBackFn() {
    wx.navigateBack()
  },
  //请求商品信息
  async getGoodsDetail(goods_id) {
    let goodsDetail = await requestApi(app.globalData.base_url + "/goods/show", {
      goods_id: goods_id,
      warehouse_id: 0,
      area_id: 0,
      is_delete: 0,
      is_on_sale: 1,
      is_alone_sale: 1

    }, "post")
    // console.log(goodsDetail);
    this.setData({
      goodsDetailData: goodsDetail.data.data,
      swiperData: goodsDetail.data.data.gallery_list
    })
    console.log(this.data.goodsDetailData);
    wxParse.wxParse('content', 'html', goodsDetail.data.data.goods_desc, this, 5)

  },
  //商品推荐
  async getGoodsTJ(goods_id) {
    let goodsDetail = await requestApi(app.globalData.base_url + "/goods/goodsguess", {
      page: 1,
      size: 10
    }, "post")
    // console.log(goodsDetail);
    this.setData({
      goodsDetailTJData: goodsDetail.data.data
    })
    // this.infoScrollFn()
  },
  //商品评价
  async getGoodsPJ(goods_id) {
    let goodsPJ = await requestApi(app.globalData.base_url + "/comment/goods", {
      goods_id: goods_id,
      rank: "all",
      page: 1,
      size: 10
    }, "post")
    // console.log(goodsPJ.data.data);
    this.setData({
      goodsPJData: goodsPJ.data.data
    })
  },
  //显示蒙板
  showMask() {
    this.setData({
      showMask: true
    })
  },
  //修改蒙板中物品的数量
  changeNumRedu(e) {
    this.setData({
      buyNum: this.data.buyNum - 1,
    })
    if (this.data.buyNum <= 1) {
      this.setData({
        dis: true,
        buyNum: 1
      })
    }
    // console.log(e);
  },
  changeNumAdd(e) {
    this.setData({
      buyNum: this.data.buyNum + 1,
      dis: false
    })
    console.log(this.data.buyNum);
  },
  //输入框失去焦点时
  getNum(e) {
    console.log(e);
    this.setData({
        buyNum: Number(e.detail.value),
        // 这里设置dis:false是为了在直接输入的情况下可以使用减小的办法
        dis: false
      }),
      console.log(this.data.buyNum);
    if (e.detail.value <= 1) {
      this.setData({
        buyNum: 1
      })
    }
  },
  //加入购物车
  addCart() {
    var goods = this.data.goodsDetailData
    goods.isSelect = true
    goods.buyNum = this.data.buyNum
    // console.log(goods);
    // console.log(this.data.gid);
    var gid = this.data.gid
    var cartDatas = wx.getStorageSync('carts') || []
    console.log(cartDatas);
    if (cartDatas.length > 0) {
      for (var key in cartDatas) {
        //如果购物车中存在当前数据
        if (cartDatas[key].goods_id == gid) {
          cartDatas[key].buyNum = cartDatas[key].buyNum + this.data.buyNum
          try {
            wx.setStorageSync('carts', cartDatas)
            wx.showToast({
              title: '添加成功',
              icon: 'success',
              duration: 2000
            })
            this.closeMask()
          } catch (err) {
            console.log(err);
            wx.showToast({
              title: '添加失败',
              icon: 'error',
              duration: 2000
            })
          }
          return;
        }
        //购物车中没有当前数据，并且购物车中已经存在数据
      }
      cartDatas.unshift(goods)
    } else {
      cartDatas.unshift(goods)
      this.closeMask()
    }
    wx.setStorageSync('carts', cartDatas)
  },
  //关闭蒙板
  closeMask() {
    this.setData({
      showMask: false
    })
  },
  toCart() {
    wx.switchTab({
      url: '/pages/cart/cart',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSystemInfo({
      success: (result) => {
        this.setData({
          height: result.windowHeight * (750 / result.windowWidth) - 100
        })
      },
    })
    this.getGoodsDetail(options.goods_id)
    this.getGoodsTJ(options.goods_id)
    this.getGoodsPJ(options.goods_id)
    this.setData({
      gid: options.goods_id
    })
    console.log(cartDatas);

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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