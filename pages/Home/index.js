// pages/Home/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    User: {
      login: "solomonxie",
      avatar_url: "https://avatars2.githubusercontent.com/u/14041622?v=4",
      location: "Melbourne, Australia",
      bio: "Jesus follower, Yankees fan, Casual Geek, Otaku, NFS Racer.",
    },
    itemList: [
      {
        name: "1scripts",
        description: "Drafts for single file scripts.",
        language: "HTML",
      },
      {
        name: "algorithms_and_data_structure",
        description: "Collections of notes, practice on Algorithms and Data Structure. ",
        language: "Jupyter Notebook",
      },
      {
        name: "autohotkey",
        description: "Store some useful AutoHotkey scripts that I had written.",
        language: "Python",
      },
      {
        name: "autotools-playground",
        description: "Recording (in commits) how to play with autotools.",
        language: "Shell",
      }
    ]
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
