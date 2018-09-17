//index.js
const themeMap = {
  '国内':'gn',
  '国际':'gj',
  '财经':'cj',
  '娱乐':'yl',
  '军事':'js',
  '体育':'ty',
  '其他':'other',
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    theme: '国内',
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
      url: 'https://test-miniprogram.com/api/news/list', //允许可选
      data: {
        type: themeMap[this.data.theme]
      },
      success: res => {
        let index = res.data.result
        // console.log(res)
        this.setIndex(index)
        this.setData({
          index: index
        })
      },
      complete: () => {
        // callback && callback()
        typeof callback === 'function' && callback()
      }
    })
  },
  /**
   * setIndex--设置首页信息
   */
  setIndex(index) {
    // console.log(index)
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
  onTapSwitchTheme() {
    // 如何传入标签值？事件和事件对象？
    this.setData({
      theme: themeMap[标签值]
    })
    this.getIndex()
  },
  onTapDetail(event) { //index是否需要重命名？
    console.log(event)
    // let id = index[0].id //如何通过点击得到i位置索引？
    // console.log(id)
    wx.navigateTo({
      url: '/pages/content/content?id=' + this.data.id, //不在这边导入id
    })
    // this.setData({
    //   id: id
    // })
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