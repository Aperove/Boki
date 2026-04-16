# TODO

## 滑动手势操作
- [ ] 复习时支持左右滑动手势评分
  - 左滑 = 忘れた（quality 0）
  - 右滑 = 簡単（quality 5）
  - 上滑 = 良い（quality 4）
  - 可用 touchstart/touchmove/touchend 实现
  - 滑动时卡片跟随手指偏移 + 颜色提示
  - 松手后根据偏移方向和距离判定评分

## 进度导出/导入
- [ ] 设置页面加导出按钮，将 localStorage 数据导出为 JSON 文件
- [ ] 导入按钮，读取 JSON 文件恢复进度
- [ ] 防止同学换手机或清缓存丢失进度
