// pages/components/dialog/Authorizationdialog.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    app_name: {
      type: String,
      value: "芝麻小客服"
    },
    app_logo: {
      type: String,
      value: "../../../../images/ykf_log.png"
    },
    app_img: {
      type: String,
      value: ""
    },
    btn_name:{
      type: String,
      value: "同意"
    },
    dialog_type:{
      type: String,
      value: ""
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    is_author: true,
    userinfo: null
  },

  /**
   * 组件的方法列表
   */
  methods: {
    show: function(e) {
      this.setData({
        is_author: false
      })
    },
    hidden: function(e) {
      this.setData({
        is_author: true
      })
    },
    hide:function(e){
      if (e.target.id == "author") {
        this.setData({
          is_author: true
        })
      }
    },
    _confirm:function(e){
      //if (this.dialog_type)
      if (this.data.dialog_type=="2"){
        this.triggerEvent("confirm", "2");
      } else if (this.data.dialog_type == "1"){
        this.triggerEvent("confirm", this.data.app_img.substring(3));
      } else if (this.data.dialog_type == "3") {
        this.triggerEvent("confirm", this.data.app_name);
      }
       
    }

  }
})