### 芝麻小客服公众号关注组件用法：

### 1.引入组件目录component内所有文件

![image](https://raw.githubusercontent.com/hotapp8/gzh_attention/master/01.png)

### 2.在要使用改组件的页面文件的配置文件中引入
```
  "usingComponents": {
    "attention": "../components/attention/attention"
  },
```
### 3.在想引入公众号关注组件的地方加入如下调用代码
```
<attention 
  attention_type="zhima"   <!-- 这里如果调用芝麻小客服关注组件attention 填 zhima   如果调用微信官方组件 weichat -->
  dialog_type="1"   <!--芝麻预定义的三种弹框处理样式 1 2 3 -->
  scenes_value="1011"  <!-- 用户扫码打开小程序时，开发者可在小程序内配置(官方提供)公众号关注组件所支持的场景值 -->
  attention_btn="关注" <!-- 关注组件按钮上的文字 -->
  attention_img="../../../images/ewm.jpg"  <!-- 芝麻预定义弹框样式1执行保存的公众号二维码图片目录，预定义样式2 3可省略该字段 -->
  attention_logo="../../../images/testewm.jpg" <!-- 要显示的公众号logo目录 -->
  attention_content="芝麻小事网络旗下产品1.芝麻小客服，小程序和公众..." <!--  要显示的公众号内容 -->
  attention_name="芝麻服务助手" <!--  要显示的公众号标题 -->
  gzclass="gzclassw"    <!-- 关注组件自定义样式类控制最外层样式 -->
>
</attention>
```
### 4.演示效果
![image](https://raw.githubusercontent.com/hotapp8/gzh_attention/master/02.png)
