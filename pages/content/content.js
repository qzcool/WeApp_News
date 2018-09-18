// pages/content.js
Page({
  data: {
    title: '',
    source: '',
    firstImage: '',
    date: '',
    readCount: '',
    content: []
  },

  onLoad: function (options) {
    this.getDetail(options.id)
  },
  getDetail(id) {
    wx.request({
      url: 'https://test-miniprogram.com/api/news/detail',
      data: { id },
      success: res => {
        const result = res.data.result
        let { title, source, firstImage, date, readCount, content } = result
        date = date.substring(0,10)
        this.setData({ title, source, firstImage, date, readCount, content })
        // console.log(result.readCount)
      }
    })
  }
})