// pages/getUserInfo/getUserInfo.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    entry: [
      {
        name: "记录消息",
        iconPath: "../../icon/operation/edit.png",
        url: "./edit/index",
      },
      {
        name: "消息列表",
        iconPath: "../../icon/operation/list.png",
        url: "./list/index",
      },
      {
        name: "娱乐",
        iconPath: "../../icon/operation//play.png",
        url: "",
      },
      {
        name: "模块设置",
        iconPath: "../../icon/operation/setting.png",
        url: "./setting/index",
      },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},

  //进入模块
  interModules(e) {
    if (e.currentTarget.dataset.url) {
      wx.navigateTo({
        url: e.currentTarget.dataset.url,
      });
    }
  },
});
