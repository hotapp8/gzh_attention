//app.js
App({
  onLaunch: function () {
    wx.getSetting({
      success(res) {
        if (!res.authSetting['scope.writePhotosAlbum']) {
          wx.authorize({
            scope: 'scope.writePhotosAlbum',
            success() {
              
            }
          })
        }
      }
    })
  },

  onShow: function (options){
    let option = JSON.stringify(options);
    this.globalData.scene=options.scene;
    console.log('app.js option-----' + option)
    console.log('app.js--------------------' + options.scene);
  },
  globalData: {
    userInfo: null,
    scene:""
  }
})