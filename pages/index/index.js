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
    allTheme: ['国内', '国际', '财经', '娱乐', '军事', '体育', '其他'],
    theme: '国内',
    indexNews: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getIndex()
    // console.log(theme)
  },
  
  /**
   * getIndex--获得首页信息
   */
  getIndex(callback) {
    wx.request({
      url: 'https://test-miniprogram.com/api/news/list',
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
    // 判断firstImage是否含有图片链接，如果无则使用默认图片Lighthouse.jpg
    let indexNews = [] // local variable
    for (let i = 0; i < index.length; i += 1) {
      let firstImage_url = ''
      firstImage_url = index[i].firstImage.length != 0 ? index[i].firstImage : '/images/Lighthouse.jpg'
      // 传入indexNews列表
      indexNews.push({
        title: index[i].title,
        firstImage: firstImage_url,
        source: index[i].source,
        time: index[i].date.substring(0,10), // .toLocalStringDate方法可以用来处理Date格式，但此处为String格式；https://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date
        id: index[i].id,
      })
    }
    this.setData({
      indexNews: indexNews
    })
  },
  onTapSwitchTheme(event) {
    // 问题：如何传入标签值？事件和事件对象？
    this.setData({
      theme: event.currentTarget.dataset.theme // 注意：这里不需要设置themeMap
    })
    this.getIndex()
  },
  onTapDetail(event) {
    wx.navigateTo({
        url: '/pages/content/content?id=' + event.currentTarget.dataset.id,
    })
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  // 问题：行号旁边的红色右箭头是什么意思？有Bug？
  onPullDownRefresh: function () {
    this.getIndex(() => {
      wx.stopPullDownRefresh()
    })
  },
})