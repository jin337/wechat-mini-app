// components/tabBar/index.js
const app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    selected: {
      type: String | Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    marBotton: 0,
    barList: [
      {
        title: "Home",
        path: "/pages/Home/index",
        selectIcon: 'https://github-1253149949.cos.ap-shanghai.myqcloud.com/wechat_icon/home.png',
        icon: 'https://github-1253149949.cos.ap-shanghai.myqcloud.com/wechat_icon/home%202.png',
      },
      {
        title: "Repositories",
        path: "/pages/Repositories/index",
        selectIcon: 'https://github-1253149949.cos.ap-shanghai.myqcloud.com/wechat_icon/display-code.png',
        icon: 'https://github-1253149949.cos.ap-shanghai.myqcloud.com/wechat_icon/display-code%202.png',
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {},

  /**
   * 生命周期
   */
  lifetimes: {
    attached () {
      let _this = this
      // 高度
      if (app.globalData.iphoneX) {
        _this.setData({
          marBotton: 24
        })
      }
      // 当前tab
      let barList = _this.data.barList
      let selected = _this.data.selected
      for (let i = 0; i < barList.length; i++) {
        const element = barList[i];
        delete element.active
      }
      let index = Number(selected)
      barList[index].active = "bar-active"
      _this.setData({
        barList
      })
    }
  }
})
