// components/homecomponents/seckill.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    hour: "00",
    minute: "00",
    second: "00",
    imgurl: "https://x.dscmall.cn/storage/data/gallery_album/177/original_img/177_P_1597978468241.png",
    time_title: ""
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  attached: function () {
    wx.request({
      url: 'https://x.dscmall.cn/api/visual/visual_seckill',
      methods: "get",
      success: (res) => {
        // console.log(res)
        // console.log(res.data.data.time_list)
        const timetitle = res.data.data.time_list
        this.setData({
          time_title: timetitle
        })
      }
    })
  }
})