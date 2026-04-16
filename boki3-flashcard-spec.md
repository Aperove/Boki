# 簿記3級 勘定科目 Flashcard App — 实现规格

## 概述
单文件 HTML 网页应用，用于记忆日本簿記3級的72个勘定科目分类。使用 SM-2 间隔重复算法 + 闪卡翻转交互，localStorage 持久化学习进度。

## 技术方案
- 单文件 `index.html`（HTML + 内联 CSS + 内联 JS）
- 无依赖、无构建工具，浏览器直接打开即可
- localStorage 保存学习进度
- 暗色主题 + 移动端适配

## 科目数据（72张卡片）

### 資産 (Assets) — 绿色 #4CAF50（22个）
現金, 当座預金, 普通預金, 定期預金, 受取手形, 売掛金, クレジット売掛金, 電子記録債権, 商品, 貯蔵品, 前払金, 前払費用, 未収入金, 未収収益, 仮払金, 立替金, 繰越商品, 建物, 備品, 車両運搬具, 土地, 差入保証金

### 負債 (Liabilities) — 红色 #F44336（11个）
支払手形, 買掛金, 電子記録債務, 借入金, 未払金, 未払費用, 前受金, 前受収益, 預り金, 仮受金, 当座借越

### 純資産 (Net Assets) — 紫色 #9C27B0（2个）
資本金, 繰越利益剰余金

### 収益 (Revenue) — 蓝色 #2196F3（8个）
売上, 受取利息, 受取配当金, 受取手数料, 受取家賃, 雑益, 固定資産売却益, 貸倒引当金戻入

### 費用 (Expenses) — 橙色 #FF9800（19个）
仕入, 給料, 法定福利費, 広告宣伝費, 旅費交通費, 通信費, 消耗品費, 水道光熱費, 支払家賃, 保険料, 租税公課, 修繕費, 雑費, 支払利息, 貸倒引当金繰入, 貸倒損失, 減価償却費, 固定資産売却損, 雑損

## UI 设计

### 三个视图
1. **Dashboard** — 统计面板：到期/新卡/已掌握/总数 + 分类进度条 + 开始复习按钮
2. **Review** — 闪卡翻转：正面显示科目名 → 点击翻转 → 背面显示分类（带颜色）→ 4个评分按钮
3. **Browse** — 按分类折叠显示全部科目及学习状态

### 卡片交互流程
1. 显示科目名（正面，大字）→ 点击翻转（CSS 3D rotateY）
2. 背面显示分类名 + 颜色标识 + 科目名（小字）
3. 翻转后出现4个评分按钮 → 点击评分 → 淡入下一张

### 评分按钮
| 按钮 | 日文 | SM-2 quality |
|------|------|-------------|
| 忘了 | 忘れた | 0 |
| 难 | 難しい | 3 |
| 好 | 良い | 4 |
| 易 | 簡単 | 5 |

### 暗色主题
```css
--bg-primary:   #121212;
--bg-secondary: #1E1E1E;
--bg-card:      #2A2A2A;
--text-primary: #ECECEC;
--text-secondary: #A0A0A0;
--accent:       #BB86FC;
```
卡片背面用分类颜色 15% 透明度做底色。科目字体: `clamp(2rem, 8vw, 3.5rem)`。

## SM-2 算法

```
function sm2(cardState, quality):
  if quality < 3:
    repetitions = 0, interval = 0
  else:
    if reps == 0: interval = 1
    else if reps == 1: interval = 6
    else: interval = round(interval * EF)
    repetitions += 1

  EF += 0.1 - (5 - q) * (0.08 + (5 - q) * 0.02)
  EF = max(1.3, EF)
  nextReview = today + interval days
```

## localStorage 结构
```json
Key: "boki3-flashcards"
Value: {
  "version": 1,
  "cards": {
    "1": { "ef": 2.5, "interval": 0, "reps": 0, "next": null, "last": null }
  },
  "stats": { "totalReviews": 0, "streak": 0, "lastStudy": null }
}
```

## 复习队列
1. 到期卡（next <= today），按日期升序
2. 新卡（next === null），每次最多10张
3. 全部完成 → "お疲れ様！"

## 移动端适配
- 卡片 280px 高，全宽
- 评分按钮 48px 最小高度
- `touch-action: manipulation` + `user-select: none`

## 实现步骤
1. 创建 `index.html`，写入 HTML 结构（3个 section 视图）
2. 嵌入72张卡片数据 + 5个分类定义
3. CSS：暗色主题变量、卡片3D翻转动画、响应式布局、分类颜色
4. JS：SM-2 算法函数
5. JS：localStorage 存储管理（load/save/reset/init）
6. JS：复习会话（队列构建、翻转、评分、推进、淡入淡出）
7. JS：Dashboard 统计 + 分类进度条渲染
8. JS：Browse 视图（分类折叠列表）
9. 测试：翻转动画、评分推进、刷新保留进度、重置、移动端
