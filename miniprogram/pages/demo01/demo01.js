// pages/demo01/demo01.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inp: 0
  },
  /**
   * 节流
   */

  throttle(fn, times, immediate) { 
    let timer = null;
    return function () {
      let context = this
      let args = arguments
      if (immediate) {
        fn.apply(context, args)
      } else {
        if (!timer) {
          timer = setTimeout(() => {
            fn.apply(context, args);
            timer = null;
          }, times);
        }
      }
    }
  },
  /**
   * 防抖
   */
  debounce(fn, times, immediate) {
    let timer = null;
    return function () {
      let context = this;
      let args = arguments;
      if (immediate) {
        fn.apply(context, args);
      } else {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
          fn.apply(context, args)
        }, times);
      }
    }
  },
  /**
   * input输入时修改数据inp
   */
  handleInput(e) {
    // no ok
    // this.data.inp = e.target.value
    // this.inp = e.target.value
    //检测是否为数字
    if (isNaN(e.detail.value)) {
      return console.error('只能是数字🥶🥶🥶');
    }
    this.setData({
      inp: e.detail.value
    })
  },
  /**
   * 处理事件——增加或者减少数值inp
   */
  handleTap(e) {
    this.setData({
      inp: this.data.inp + e.currentTarget.dataset.operation
    })
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