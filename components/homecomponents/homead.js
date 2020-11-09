// components/homecomponents/homead.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {},

  /**
   * 组件的初始数据
   */
  data: {
    headerBGC: ["#f34646", "#3C81FF", "#028379", "#E43124", "#4091FF"],
    current: 0,
    BGC: ""
  },
  /**
   * 组件的方法列表
   */
  methods: {
    getColor(e) {
      // console.log(e.detail.current)
      //this.triggerEvent('myEvent',e.detail.value)这里的myEvent是自己自定义的事件名字，需要父组件中通过他来接受，
      // this.triggerEvent('getCurrent', e.detail.current)
      this.setData({
        BGC: this.data.headerBGC[e.detail.current]
      })
    }
  },
  //在组件完全初始化完毕、进入页面节点树后， attached 生命周期被触发。
  // attached: function () {
  //   // this.getSwiperList()
  //   console.log(1)
  // },
  // getSwiperList() {
  //   wx.request({
  //     url: 'https://x.dscmall.cn/api/visual/view',
  //     methods: "POST",
  //     data: {
  //       id: 3,
  //       type: index,
  //       device: h5
  //     },
  //     header: {
  //       'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
  //     },
  //     success: (res) => {
  //       console.log(JSON.parse(res.data))
  //     }
  //   })
  // }
})