// pages/content.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getDetail() ///异步调用，如何读取并激活id？
  },
  
  /**
   * getDetail--获得详情信息:传入ID，传出
   */
  getDetail() {
    wx.request({
      url: 'https://test-miniprogram.com/api/news/detail?id=' + 1523074607650, ///id这边如何导入？
      success: res => {
        let detail = res.data.result
        let content = res.data.result.content
        // console.log(detail, content)
        this.setDetail(detail)
      },
    }
    )
  },

  /**
   * setDetail--设置详情信息
   */
  setDetail(detail) {
    // console.log(detail)
    let detailNews_content = []
    for (let i = 1; i < detail.content.length; i += 1) {
      detailNews_content.push ({
        p_text: detail.content[i].text
      })
    } //是否需要把第一张图片用来做任何事情？
    this.setData({
      detailNews_title: detail.title,
      detailNews_source: detail.source,
      detailNews_time: detail.date,//`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} 今天`,
      detailNews_readCount: detail.readCount,
      detailNews_firstImage: detail.firstImage,
      detailNews_content: detailNews_content
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