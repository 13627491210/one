// pages/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    shrink:true,
    dateShrink:true,
    tabArray: [{
      title: "视",
      content: []
    }, {
      title: "乐",
      content: []
      }, {
        title: "文",
        content: []
      }, {
        title: "句",
        content: []
      }],
    classifys: [{
      name: '全部',
      checked: true
    }, {
      name: 'HTML',
      checked: false
    }, {
      name: 'JavaScript',
      checked: false
    }, {
      name: 'CSS',
      checked: false
    }],
    content: [{
        name: 'hileix',
        title: 'HTML语义化的理解',
        viewPerson: 100,
        like: 10,
        id: 1
      },
      {
        name: 'hileix',
        title: 'HTML语义化的理解',
        viewPerson: 100,
        like: 10,
        id: 2
      },
      {
        name: 'hileix',
        title: 'HTML语义化的理解',
        viewPerson: 100,
        like: 10,
        id: 3
      }
    ]
  },
  onGotoDetail: function(e) {
    console.log("e", e)
    wx.navigateTo({
      url: '../detail/detail?id=' + e.currentTarget.dataset.id,
    })
  },
  onChangeClassify: function(e) {
    console.log("e", e)
    let data = []
    this.data.classifys.map((item) => {
      if (item.checked) {
        item.checked = false;
      }
      if (item.name === e.currentTarget.dataset.id) {
        item.checked = true;
      }
      data.push(item)
    })
    this.setData({
      classifys: data
    })
  },
  onOpenMine:function(e){
    this.setData({
      shrink: !this.data.shrink
    })
  },
  onOpenDate: function (e) {
    this.setData({
      dateShrink: !this.data.dateShrink
    })
  },
  
  bindChange: function(e) {
    var that = this;
    that.setData({
      currentTab: e.detail.current
    });

  },
  swichNav: function(e) {
    var that = this;
    this.setData({
      currentTab: e.target.dataset.current
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },


  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },


  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})