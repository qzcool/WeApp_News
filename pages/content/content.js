// pages/content.js

// Page({
//   /**
//    * 页面的初始数据
//    */
//   data: {
    
//   },
//   /**
//    * 生命周期函数--监听页面加载
//    */
//   onLoad: function (options) {
//     // console.log(options)
//     this.setData({
//       id: options.id
//     })
//     // console.log(this.data.id)
//     this.getDetail()
//   },
//   /**
//    * getDetail--获得详情信息:传入ID，传出
//    */
//   getDetail() { //可以设置下拉刷新
//     wx.request({
//       url: 'https://test-miniprogram.com/api/news/detail?id=' + this.data.id,
//       success: res => {
//         let detail = res.data.result
//         let content = res.data.result.content
//         // console.log(detail, content)
//         this.setDetail(detail)
//       },
//     })
//   },
//   /**
//    * setDetail--设置详情信息
//    */
//   setDetail(detail) {
//     // console.log(detail)
//     let detailNews_content = []
//     for (let i = 1; i < detail.content.length; i += 1) {
//       detailNews_content.push ({
//         p_text: detail.content[i].text
//       })
//     } //是否需要把第一张图片用来做任何事情？
//     this.setData({
//       detailNews_title: detail.title,
//       detailNews_source: detail.source,
//       detailNews_time: detail.date.substring(0,10), //`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} 今天`, 因为date格式不为Date而是string
//       detailNews_readCount: detail.readCount,
//       detailNews_firstImage: detail.firstImage,
//       // 问题：“此页面不需要 firstImage 图片数据，而是请求的新闻详情数据中的各种类型的数据，如 image, p, strong 等等。”，这句批注如何理解？
//       detailNews_content: detailNews_content
//     })
//   },
// })

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