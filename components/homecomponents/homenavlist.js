// components/homecomponents/homenavlist.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    navgroup: Array
  },

  /**
   * 组件的初始数据
   */
  data: {
    dotmove: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    dot(e) {
      // console.log(e)
      this.setData({
        dotmove: 40 * e.detail.current
      })
      // console.log(this.data.dotmove)
    }
  },
  attached: function () {}
})