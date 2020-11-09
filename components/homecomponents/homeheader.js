// components/homecomponents/homeheader.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    swiperData: Array,
    headerBGC: Array,
  },

  /**
   * 组件的初始数据
   */
  data: {
    current: 0,
    BGC: "",
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getColor(e) {
      // console.log(e.detail.current)
      this.setData({
        BGC: this.data.headerBGC[e.detail.current]
      })
    },
  },
  attached: function () {
    // console.log(this)
  },

})