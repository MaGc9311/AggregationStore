// components/homecomponents/homenews.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {},

  /**
   * 组件的初始数据
   */
  data: {
    hostList: ""
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  attached: function () {

    //商城热点新闻
    wx.request({
      url: 'https://x.dscmall.cn/api/visual/article',
      method: "POST",
      data: {
        cat_id: 20,
        num: 10
      },
      success: (res) => {
        // console.log(res)
        let hotNews = res.data.data
        // console.log(hotNews[0].title)
        let hostList = []
        for (let i = 0; i < hotNews.length; i++) {
          hostList.push(hotNews[i].title)
        }
        // console.log(hostList)
        this.setData({
          hostList: hostList
        })
      }
    })
  }
})