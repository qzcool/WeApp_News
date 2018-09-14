//index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    theme: [],
    indexNews: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getIndex()
  },
  /**
   * getIndex--获得首页信息
   */
  getIndex(callback) {
    wx.request({
      url: 'https://test-miniprogram.com/api/news/list?type=gn',
      success: res => {
        let index = res.data.result
        console.log(index)
        this.setIndex(index)
      },
      complete: () => {
        callback && callback()
      }
    })
  },
  /**
   * setIndex--设置首页信息
   */
  setIndex(index) {
    //console.log(index)
    let indexNews = [] //开头的data部分还用初始化吗？
    for (let i = 0; i < index.length; i += 1) {
      indexNews.push({
        title: index[i].title,
        firstImage: index[i].firstImage,
        source: index[i].source,
        time: index[i].time
      })
      //console.log(indexNews)
    }
    this.setData({
      indexNews: indexNews
    })
  },
  onTapDetail() {
    wx.navigateTo({
      url: 'pages/content/content', //不在这边导入id
    })
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
    this.getNow(() => {
      wx.stopPullDownRefresh()
    })
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