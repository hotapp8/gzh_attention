// pages/components/attention/attention.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    attention_name: {
      type: String,
      value: "芝麻小客服"
    },
    attention_content: {
      type: String,
      value: "芝麻小事网络旗下产品1.芝麻小客服，小程序和公众..."
    },
    attention_logo: {
      type: String,
      value: "../../../images/ykf_log.png"
    },
    attention_img: {
      type: String,
      value: ""
    },
    attention_btn: {
      type: String,
      value: "关注"
    },
    attention_type: {
      type: String,
      value: "1"
    },
    dialog_type: {
      type: String,
      value: "2"
    },
    scenes_value: {
      type: String,
      value: ""
    }
  },
  externalClasses: ["gzclass"],
  /**
   * 组件的初始数据
   */
  data: {
    scenes: ["1011", "1047", "1089", "1038"],
    is_effictive: "",
    is_config: "1",
  },
  ready: function (e) {

    this.setData({
      is_effictive: this.data.scenes.indexOf(this.data.scenes_value)
    })
    this.authodialog1 = this.selectComponent("#authodialog1");
    this.authodialog2 = this.selectComponent("#authodialog2");
    this.authodialog3 = this.selectComponent("#authodialog3");
  },
  /**
   * 组件的方法列表
   */
  methods: {
    showtype1: function () {
      this.authodialog1.show();
    },
    showtype2: function () {
      this.authodialog2.show();
    },
    showtype3: function () {
      this.authodialog3.show();
    },
    confirm1: function (e) {
      console.log(e.detail);
      var authodialog1 = this.authodialog1;
      wx.getImageInfo({
        src: e.detail,
        success: function (ret) {
          console.log(ret);
          var path = ret.path;
          wx.saveImageToPhotosAlbum({
            filePath: path,
            success: function (result) {
              console.log(result);
              wx.showToast({
                title: "保存成功"
              })
              authodialog1.hidden();
            },
            fail: function (res) {
              console.log(res);
            }

          })
        },
        fail: function (res) {
          console.log(res);
        }
      })
    },
    confirm2: function (e) {
      console.log(e.detail);
      this.authodialog2.hidden();
    },
    confirm3: function (e) {
      var authodialog3 = this.authodialog3;
      wx.setClipboardData({
        data: e.detail,
        success: function (res) {
          wx.getClipboardData({
            success: function (res) {
              authodialog3.hidden();
            }
          })
        }
      })

    },
    getgzsucesseresult: function (e) {
      console.log(e);
    },
    getgzerroresult: function (e) {
      this.setData({
        is_config: "0"
      })
      console.log(e);
    }
  }
})
