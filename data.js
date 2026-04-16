// 簿記 勘定科目データ + 中国語対照
// 3級 + 2級（商業簿記 + 工業簿記）
// ─────────────────────────────────────

const CATEGORIES = [
  { id: 'asset',     name: '資産',   nameEn: 'Assets',      nameCn: '资产',             color: '#4CAF50' },
  { id: 'liability', name: '負債',   nameEn: 'Liabilities', nameCn: '负债',             color: '#F44336' },
  { id: 'net_asset', name: '純資産', nameEn: 'Net Assets',  nameCn: '净资产（所有者权益）', color: '#9C27B0' },
  { id: 'revenue',   name: '収益',   nameEn: 'Revenue',     nameCn: '收益',             color: '#2196F3' },
  { id: 'expense',   name: '費用',   nameEn: 'Expenses',    nameCn: '费用',             color: '#FF9800' },
];

// level: 3 = 3級, 2 = 2級商業簿記, '2k' = 2級工業簿記
const CARDS = [

  // ╔═══════════════════════════════════╗
  // ║       資産 / 资产                  ║
  // ╚═══════════════════════════════════╝

  // ─── 3級 資産 (22) ───
  { id:1,  term:'現金',             cat:'asset', level:3, cn:'现金',             note:'纸币、硬币等通货', noteJa:'紙幣や硬貨などの通貨' },
  { id:2,  term:'当座預金',         cat:'asset', level:3, cn:'活期支票存款',     note:'可签发支票的银行账户', noteJa:'小切手が振り出せる銀行口座' },
  { id:3,  term:'普通預金',         cat:'asset', level:3, cn:'普通存款',         note:'普通银行储蓄账户', noteJa:'一般的な銀行の預金口座' },
  { id:4,  term:'定期預金',         cat:'asset', level:3, cn:'定期存款',         note:'有固定期限的存款', noteJa:'一定期間預け入れる預金' },
  { id:5,  term:'受取手形',         cat:'asset', level:3, cn:'应收票据',         note:'别人开给我方的票据', noteJa:'代金を受け取れる手形債権' },
  { id:6,  term:'売掛金',           cat:'asset', level:3, cn:'应收账款',         note:'赊销商品产生的债权', noteJa:'掛け売りによる未回収の代金' },
  { id:7,  term:'クレジット売掛金', cat:'asset', level:3, cn:'信用卡应收款',     note:'客户刷卡消费的应收款', noteJa:'カード払いによる未回収の代金' },
  { id:8,  term:'電子記録債権',     cat:'asset', level:3, cn:'电子记录债权',     note:'电子化管理的应收债权', noteJa:'電子的に管理される売上債権' },
  { id:9,  term:'商品',             cat:'asset', level:3, cn:'商品（库存）',     note:'购入待售的商品', noteJa:'販売目的で仕入れた在庫品' },
  { id:10, term:'貯蔵品',           cat:'asset', level:3, cn:'储备物资',         note:'邮票、印花税票等储备品', noteJa:'切手や収入印紙などの貯蔵物' },
  { id:11, term:'前払金',           cat:'asset', level:3, cn:'预付款',           note:'提前支付的货款定金', noteJa:'商品受取前に支払った手付金' },
  { id:12, term:'前払費用',         cat:'asset', level:3, cn:'预付费用',         note:'提前支付的租金、保险等', noteJa:'前もって支払った家賃や保険料' },
  { id:13, term:'未収入金',         cat:'asset', level:3, cn:'其他应收款',       note:'非主营业务的应收款项', noteJa:'営業外の未回収の代金' },
  { id:14, term:'未収収益',         cat:'asset', level:3, cn:'应计收入',         note:'已发生但尚未收到的收益', noteJa:'発生済みで未受取の収益' },
  { id:15, term:'仮払金',           cat:'asset', level:3, cn:'暂付款',           note:'用途尚未确定的支出', noteJa:'用途が未確定の支払い' },
  { id:16, term:'立替金',           cat:'asset', level:3, cn:'代垫款',           note:'为他人代为垫付的款项', noteJa:'他人のために一時的に立替えた金額' },
  { id:17, term:'繰越商品',         cat:'asset', level:3, cn:'结转商品',         note:'期末结转至下期的库存商品', noteJa:'期末に次期へ繰り越す在庫商品' },
  { id:18, term:'建物',             cat:'asset', level:3, cn:'建筑物',           note:'办公楼、仓库等', noteJa:'事務所や倉庫などの建築物' },
  { id:19, term:'備品',             cat:'asset', level:3, cn:'办公设备',         note:'电脑、办公桌椅等', noteJa:'パソコンや机などの事務用品' },
  { id:20, term:'車両運搬具',       cat:'asset', level:3, cn:'车辆运输工具',     note:'汽车、货车等运输工具', noteJa:'自動車やトラックなどの車両' },
  { id:21, term:'土地',             cat:'asset', level:3, cn:'土地',             note:'拥有的土地', noteJa:'所有している土地' },
  { id:22, term:'差入保証金',       cat:'asset', level:3, cn:'存入保证金',       note:'租房时缴纳的押金等', noteJa:'賃借時に差し入れる敷金等' },

  // ─── 2級 資産・商業簿記 ───
  { id:63,  term:'契約資産',             cat:'asset', level:2, cn:'合同资产',           note:'已履行义务但尚未获得无条件收款权', noteJa:'履行済みだが未請求の対価の権利' },
  { id:64,  term:'短期貸付金',           cat:'asset', level:2, cn:'短期贷款',           note:'一年内到期的贷出款项', noteJa:'1年以内に回収予定の貸付金' },
  { id:65,  term:'未収還付法人税等',     cat:'asset', level:2, cn:'应收退还法人税',     note:'多缴法人税的应退款', noteJa:'納め過ぎた法人税の還付請求権' },
  { id:66,  term:'売買目的有価証券',     cat:'asset', level:2, cn:'交易性金融资产',     note:'以短期买卖为目的的有价证券', noteJa:'短期売買目的で保有する有価証券' },
  { id:67,  term:'不渡手形',             cat:'asset', level:2, cn:'拒付票据',           note:'到期未能兑付的票据', noteJa:'支払期日に決済されなかった手形' },
  { id:68,  term:'別段預金',             cat:'asset', level:2, cn:'特别存款',           note:'股款缴纳等特殊用途的存款', noteJa:'株式払込など特別目的の預金' },
  { id:69,  term:'営業外受取手形',       cat:'asset', level:2, cn:'非营业应收票据',     note:'非主营业务收到的票据', noteJa:'営業外取引で受け取った手形' },
  { id:70,  term:'営業外電子記録債権',   cat:'asset', level:2, cn:'非营业电子记录债权', note:'非主营业务的电子债权', noteJa:'営業外取引の電子記録債権' },
  { id:71,  term:'繰延税金資産',         cat:'asset', level:2, cn:'递延所得税资产',     note:'未来可抵扣的税金资产', noteJa:'将来の税金を減らせる資産' },
  { id:72,  term:'リース資産',           cat:'asset', level:2, cn:'租赁资产',           note:'融资租赁取得的资产', noteJa:'ファイナンスリースで取得した資産' },
  { id:73,  term:'建設仮勘定',           cat:'asset', level:2, cn:'在建工程',           note:'建造中尚未完工的资产', noteJa:'建設中でまだ完成していない資産' },
  { id:74,  term:'のれん',               cat:'asset', level:2, cn:'商誉',               note:'企业并购中超额支付的部分', noteJa:'企業買収時の超過支払額' },
  { id:75,  term:'特許権',               cat:'asset', level:2, cn:'专利权',             note:'发明创造的专有权利', noteJa:'発明に対する独占的な権利' },
  { id:76,  term:'商標権',               cat:'asset', level:2, cn:'商标权',             note:'商标的专有使用权', noteJa:'商標を独占使用できる権利' },
  { id:77,  term:'借地権',               cat:'asset', level:2, cn:'土地使用权',         note:'租借土地的使用权利', noteJa:'他人の土地を借りて使用する権利' },
  { id:78,  term:'ソフトウェア',         cat:'asset', level:2, cn:'软件资产',           note:'自用软件等无形资产', noteJa:'自社利用のソフトウェア資産' },
  { id:79,  term:'ソフトウェア仮勘定',   cat:'asset', level:2, cn:'在建软件',           note:'开发中尚未完成的软件', noteJa:'開発中で未完成のソフトウェア' },
  { id:80,  term:'満期保有目的債券',     cat:'asset', level:2, cn:'持有至到期债券',     note:'打算持有到期的债券投资', noteJa:'満期まで保有する目的の債券' },
  { id:81,  term:'子会社株式',           cat:'asset', level:2, cn:'子公司股份',         note:'持有的子公司股票', noteJa:'子会社の支配目的で保有する株式' },
  { id:82,  term:'関連会社株式',         cat:'asset', level:2, cn:'联营公司股份',       note:'持有的联营公司股票', noteJa:'関連会社に対する出資持分' },
  { id:83,  term:'その他有価証券',       cat:'asset', level:2, cn:'其他有价证券',       note:'不属于以上分类的有价证券', noteJa:'他の区分に属さない有価証券' },
  { id:84,  term:'長期前払費用',         cat:'asset', level:2, cn:'长期预付费用',       note:'超过一年的预付费用', noteJa:'1年超の期間に対応する前払費用' },
  { id:85,  term:'長期貸付金',           cat:'asset', level:2, cn:'长期贷款',           note:'超过一年的贷出款项', noteJa:'返済期限が1年超の貸付金' },

  // ─── 2級 資産・工業簿記 ───
  { id:86,  term:'材料',           cat:'asset', level:'2k', cn:'原材料',           note:'生产用的原材料', noteJa:'製品製造に使う原材料' },
  { id:87,  term:'仕掛品',         cat:'asset', level:'2k', cn:'在制品',           note:'正在生产中的半成品', noteJa:'製造途中でまだ未完成の製品' },
  { id:88,  term:'製品',           cat:'asset', level:'2k', cn:'产成品',           note:'已完工的制成品', noteJa:'製造が完了した完成品' },
  { id:89,  term:'半製品',         cat:'asset', level:'2k', cn:'半成品',           note:'可单独出售的中间产品', noteJa:'そのまま販売可能な中間製品' },
  { id:90,  term:'副産物',         cat:'asset', level:'2k', cn:'副产品',           note:'主要产品生产中附带产出的产品', noteJa:'主製品の製造過程で生じる副次的産物' },

  // ╔═══════════════════════════════════╗
  // ║       負債 / 负债                  ║
  // ╚═══════════════════════════════════╝

  // ─── 3級 負債 (11) ───
  { id:23, term:'支払手形',         cat:'liability', level:3, cn:'应付票据',       note:'我方开出的支付票据', noteJa:'代金支払いのために振り出した手形' },
  { id:24, term:'買掛金',           cat:'liability', level:3, cn:'应付账款',       note:'赊购商品产生的债务', noteJa:'掛け買いによる未払いの代金' },
  { id:25, term:'電子記録債務',     cat:'liability', level:3, cn:'电子记录债务',   note:'电子化管理的应付债务', noteJa:'電子的に管理される仕入債務' },
  { id:26, term:'借入金',           cat:'liability', level:3, cn:'借入款',         note:'从银行等处的借款', noteJa:'銀行などからの借り入れ' },
  { id:27, term:'未払金',           cat:'liability', level:3, cn:'其他应付款',     note:'非主营业务的应付款项', noteJa:'営業外の未払いの代金' },
  { id:28, term:'未払費用',         cat:'liability', level:3, cn:'应计费用',       note:'已发生但尚未支付的费用', noteJa:'発生済みで未払いの費用' },
  { id:29, term:'前受金',           cat:'liability', level:3, cn:'预收款',         note:'提前收到的货款定金', noteJa:'商品引渡前に受け取った手付金' },
  { id:30, term:'前受収益',         cat:'liability', level:3, cn:'预收收益',       note:'提前收到的租金、利息等', noteJa:'前もって受け取った家賃や利息' },
  { id:31, term:'預り金',           cat:'liability', level:3, cn:'代收款/暂收款',  note:'代扣的税金、社保等', noteJa:'源泉税や社会保険料の一時預かり' },
  { id:32, term:'仮受金',           cat:'liability', level:3, cn:'暂收款',         note:'来源尚未确定的收入', noteJa:'内容が未確定の受取金' },
  { id:33, term:'当座借越',         cat:'liability', level:3, cn:'活期透支',       note:'支票账户的透支额', noteJa:'当座預金の残高を超えた借越額' },

  // ─── 2級 負債・商業簿記 ───
  { id:91,  term:'返金負債',             cat:'liability', level:2, cn:'退款负债',         note:'预计需退还客户的金额', noteJa:'将来返金が見込まれる負債' },
  { id:92,  term:'営業外支払手形',       cat:'liability', level:2, cn:'非营业应付票据',   note:'非主营业务开出的票据', noteJa:'営業外取引で振り出した手形' },
  { id:93,  term:'営業外電子記録債務',   cat:'liability', level:2, cn:'非营业电子记录债务', note:'非主营业务的电子债务', noteJa:'営業外取引の電子記録債務' },
  { id:94,  term:'短期借入金',           cat:'liability', level:2, cn:'短期借款',         note:'一年内到期的借款', noteJa:'返済期限が1年以内の借入金' },
  { id:95,  term:'契約負債',             cat:'liability', level:2, cn:'合同负债',         note:'收到款项但尚未履行义务', noteJa:'対価受領済みだが未履行の義務' },
  { id:96,  term:'商品保証引当金',       cat:'liability', level:2, cn:'产品质保准备金',   note:'预计的售后质保费用', noteJa:'将来のアフターサービス費用の引当' },
  { id:97,  term:'役員賞与引当金',       cat:'liability', level:2, cn:'高管奖金准备金',   note:'预计支付的高管奖金', noteJa:'役員に支払う賞与の引当額' },
  { id:98,  term:'修繕引当金',           cat:'liability', level:2, cn:'修缮准备金',       note:'预计的大修费用', noteJa:'将来の大規模修繕に備える引当金' },
  { id:99,  term:'繰延税金負債',         cat:'liability', level:2, cn:'递延所得税负债',   note:'未来需缴纳的递延税金', noteJa:'将来支払うべき税金の負債' },
  { id:100, term:'リース債務',           cat:'liability', level:2, cn:'租赁负债',         note:'融资租赁产生的应付款', noteJa:'リース契約による未払いの債務' },
  { id:101, term:'退職給付引当金',       cat:'liability', level:2, cn:'退休福利准备金',   note:'预计的员工退休金费用', noteJa:'従業員の退職金に備える引当金' },
  { id:102, term:'長期借入金',           cat:'liability', level:2, cn:'长期借款',         note:'超过一年的借款', noteJa:'返済期限が1年超の借入金' },
  { id:103, term:'社債',                 cat:'liability', level:2, cn:'公司债券',         note:'发行的公司债券', noteJa:'会社が発行した債券による負債' },

  // ╔═══════════════════════════════════╗
  // ║       純資産 / 净资产               ║
  // ╚═══════════════════════════════════╝

  // ─── 3級 純資産 (2) ───
  { id:34, term:'資本金',           cat:'net_asset', level:3, cn:'资本金',         note:'股东投入的资本', noteJa:'株主が出資した元手の金額' },
  { id:35, term:'繰越利益剰余金',   cat:'net_asset', level:3, cn:'结转利润盈余',   note:'历年累积的未分配利润', noteJa:'過年度から繰り越された未処分利益' },

  // ─── 2級 純資産・商業簿記 ───
  { id:104, term:'株式申込証拠金',         cat:'net_asset', level:2, cn:'股份认购保证金', note:'新股认购时缴纳的保证金', noteJa:'新株申込時に払い込まれた証拠金' },
  { id:105, term:'資本準備金',             cat:'net_asset', level:2, cn:'资本公积',       note:'超过面值部分的股本溢价', noteJa:'株式発行時の払込超過額' },
  { id:106, term:'その他資本剰余金',       cat:'net_asset', level:2, cn:'其他资本公积',   note:'除资本准备金外的资本公积', noteJa:'資本準備金以外の資本剰余金' },
  { id:107, term:'利益準備金',             cat:'net_asset', level:2, cn:'盈余公积',       note:'法定提取的利润准备金', noteJa:'法律で積立が義務づけられた準備金' },
  { id:108, term:'別途積立金',             cat:'net_asset', level:2, cn:'专项储备金',     note:'经股东会决议提取的储备金', noteJa:'株主総会の決議で積み立てた金額' },
  { id:109, term:'新築積立金',             cat:'net_asset', level:2, cn:'新建积立金',     note:'为新建建筑物提取的储备金', noteJa:'建物の新築に備えた積立金' },
  { id:110, term:'修繕積立金',             cat:'net_asset', level:2, cn:'修缮积立金',     note:'为设备修缮提取的储备金', noteJa:'修繕費用に備えた積立金' },
  { id:111, term:'その他有価証券評価差額金', cat:'net_asset', level:2, cn:'其他有价证券评价差额', note:'其他有价证券的公允价值变动', noteJa:'その他有価証券の時価変動額' },
  { id:112, term:'非支配株主持分',         cat:'net_asset', level:2, cn:'少数股东权益',   note:'非控股股东在子公司中的权益份额', noteJa:'子会社の少数株主に帰属する持分' },

  // ╔═══════════════════════════════════╗
  // ║       収益 / 收益                  ║
  // ╚═══════════════════════════════════╝

  // ─── 3級 収益 (8) ───
  { id:36, term:'売上',             cat:'revenue', level:3, cn:'销售收入',         note:'主营业务销售收入', noteJa:'商品を販売して得た収益' },
  { id:37, term:'受取利息',         cat:'revenue', level:3, cn:'利息收入',         note:'存款、贷款的利息收入', noteJa:'預金や貸付金から受け取る利息' },
  { id:38, term:'受取配当金',       cat:'revenue', level:3, cn:'股利收入',         note:'持有股票获得的分红', noteJa:'株式保有により受け取る配当金' },
  { id:39, term:'受取手数料',       cat:'revenue', level:3, cn:'手续费收入',       note:'提供服务收取的手续费', noteJa:'サービス提供で受け取る手数料' },
  { id:40, term:'受取家賃',         cat:'revenue', level:3, cn:'租金收入',         note:'出租房屋收取的租金', noteJa:'建物を貸して受け取る家賃' },
  { id:41, term:'雑益',             cat:'revenue', level:3, cn:'杂项收益',         note:'不属于主要科目的其他收益', noteJa:'他の科目に属さない少額の収益' },
  { id:42, term:'固定資産売却益',   cat:'revenue', level:3, cn:'固定资产处置收益', note:'出售固定资产获得的利润', noteJa:'固定資産を売却して得た利益' },
  { id:43, term:'貸倒引当金戻入',   cat:'revenue', level:3, cn:'坏账准备冲回',     note:'多提的坏账准备转回收益', noteJa:'過大に計上した貸倒引当金の戻し入れ' },

  // ─── 2級 収益・商業簿記 ───
  { id:113, term:'有価証券売却益',   cat:'revenue', level:2, cn:'有价证券出售收益', note:'出售有价证券获得的利润', noteJa:'有価証券を売却して得た利益' },
  { id:114, term:'有価証券評価益',   cat:'revenue', level:2, cn:'有价证券评价收益', note:'有价证券公允价值上升的收益', noteJa:'有価証券の時価上昇による評価益' },
  { id:115, term:'有価証券利息',     cat:'revenue', level:2, cn:'有价证券利息',     note:'持有债券获得的利息收入', noteJa:'債券の保有により受け取る利息' },
  { id:116, term:'固定資産圧縮益',   cat:'revenue', level:2, cn:'固定资产压缩收益', note:'国库补助相关的压缩收益', noteJa:'国庫補助金による圧縮記帳の益' },
  { id:117, term:'負ののれん発生益', cat:'revenue', level:2, cn:'负商誉收益',       note:'收购价低于净资产公允价值的差额', noteJa:'取得原価が純資産を下回る差額益' },
  { id:118, term:'非支配株主に帰属する当期純利益', cat:'revenue', level:2, cn:'归属少数股东的净利润', note:'合并报表中少数股东应享利润', noteJa:'少数株主に帰属する当期の純利益' },

  // ╔═══════════════════════════════════╗
  // ║       費用 / 费用                  ║
  // ╚═══════════════════════════════════╝

  // ─── 3級 費用 (19) ───
  { id:44, term:'仕入',             cat:'expense', level:3, cn:'采购成本/进货',   note:'购入商品的成本', noteJa:'販売目的で商品を購入すること' },
  { id:45, term:'給料',             cat:'expense', level:3, cn:'工资薪金',         note:'支付给员工的工资', noteJa:'従業員に支払う給与' },
  { id:46, term:'法定福利費',       cat:'expense', level:3, cn:'法定福利费',       note:'社保、公积金等法定福利', noteJa:'社会保険料など法定の福利費用' },
  { id:47, term:'広告宣伝費',       cat:'expense', level:3, cn:'广告宣传费',       note:'广告、宣传的支出', noteJa:'広告や宣伝にかかる費用' },
  { id:48, term:'旅費交通費',       cat:'expense', level:3, cn:'差旅交通费',       note:'出差、交通的费用', noteJa:'出張や通勤にかかる交通費' },
  { id:49, term:'通信費',           cat:'expense', level:3, cn:'通信费',           note:'电话、邮寄等通信费用', noteJa:'電話代や郵便代などの通信費' },
  { id:50, term:'消耗品費',         cat:'expense', level:3, cn:'消耗品费',         note:'文具、打印纸等消耗品', noteJa:'文房具やコピー用紙などの消耗品' },
  { id:51, term:'水道光熱費',       cat:'expense', level:3, cn:'水电燃气费',       note:'水费、电费、燃气费', noteJa:'水道・電気・ガスの使用料金' },
  { id:52, term:'支払家賃',         cat:'expense', level:3, cn:'租金支出',         note:'租赁办公室等支付的租金', noteJa:'事務所等の賃借料の支払い' },
  { id:53, term:'保険料',           cat:'expense', level:3, cn:'保险费',           note:'火灾保险等各种保险费', noteJa:'火災保険などの保険料支払い' },
  { id:54, term:'租税公課',         cat:'expense', level:3, cn:'税费及附加',       note:'印花税、固定资产税等', noteJa:'印紙税や固定資産税などの税金' },
  { id:55, term:'修繕費',           cat:'expense', level:3, cn:'修缮费',           note:'建筑物、设备的修理费', noteJa:'建物や備品の修理にかかる費用' },
  { id:56, term:'雑費',             cat:'expense', level:3, cn:'杂费',             note:'不属于其他科目的杂项费用', noteJa:'他の科目に属さない少額の費用' },
  { id:57, term:'支払利息',         cat:'expense', level:3, cn:'利息支出',         note:'借款产生的利息费用', noteJa:'借入金に対して支払う利息' },
  { id:58, term:'貸倒引当金繰入',   cat:'expense', level:3, cn:'坏账准备计提',     note:'计提坏账准备的费用', noteJa:'貸倒れに備えて計上する費用' },
  { id:59, term:'貸倒損失',         cat:'expense', level:3, cn:'坏账损失',         note:'应收款确认无法收回的损失', noteJa:'回収不能となった債権の損失' },
  { id:60, term:'減価償却費',       cat:'expense', level:3, cn:'折旧费',           note:'固定资产逐年摊销的费用', noteJa:'固定資産の価値減少を費用化したもの' },
  { id:61, term:'固定資産売却損',   cat:'expense', level:3, cn:'固定资产处置损失', note:'出售固定资产产生的亏损', noteJa:'固定資産を売却して生じた損失' },
  { id:62, term:'雑損',             cat:'expense', level:3, cn:'杂项损失',         note:'不属于主要科目的其他损失', noteJa:'他の科目に属さない少額の損失' },

  // ─── 2級 費用・商業簿記 ───
  { id:119, term:'棚卸減耗損',       cat:'expense', level:2, cn:'存货损耗',         note:'盘点时发现的库存数量短缺', noteJa:'棚卸で判明した数量不足の損失' },
  { id:120, term:'商品評価損',       cat:'expense', level:2, cn:'商品减值损失',     note:'商品价值下降产生的损失', noteJa:'商品の時価下落による評価損' },
  { id:121, term:'役員賞与',         cat:'expense', level:2, cn:'高管奖金',         note:'支付给董事等高管的奖金', noteJa:'取締役等の役員に支払う賞与' },
  { id:122, term:'退職給付費用',     cat:'expense', level:2, cn:'退休福利费用',     note:'当期计提的退休金费用', noteJa:'当期に計上する退職給付の費用' },
  { id:123, term:'研究開発費',       cat:'expense', level:2, cn:'研发费用',         note:'研究开发活动的支出', noteJa:'研究や開発活動にかかる費用' },
  { id:124, term:'のれん償却',       cat:'expense', level:2, cn:'商誉摊销',         note:'商誉的逐年摊销费用', noteJa:'のれんを定期的に費用化する償却' },
  { id:125, term:'手形売却損',       cat:'expense', level:2, cn:'票据贴现损失',     note:'票据贴现时的利息损失', noteJa:'手形を割引いた時の割引料' },
  { id:126, term:'有価証券売却損',   cat:'expense', level:2, cn:'有价证券出售损失', note:'出售有价证券产生的亏损', noteJa:'有価証券を売却して生じた損失' },
  { id:127, term:'有価証券評価損',   cat:'expense', level:2, cn:'有价证券评价损失', note:'有价证券公允价值下降的损失', noteJa:'有価証券の時価下落による評価損' },
  { id:128, term:'固定資産除却損',   cat:'expense', level:2, cn:'固定资产报废损失', note:'报废固定资产产生的损失', noteJa:'固定資産を廃棄した時の損失' },
  { id:129, term:'固定資産圧縮損',   cat:'expense', level:2, cn:'固定资产压缩损失', note:'国库补助相关的资产压缩', noteJa:'国庫補助金による圧縮記帳の損' },
  { id:130, term:'社債利息',         cat:'expense', level:2, cn:'公司债券利息',     note:'发行债券支付的利息', noteJa:'発行した社債に対して支払う利息' },
  { id:131, term:'社債発行費償却',   cat:'expense', level:2, cn:'债券发行费摊销',   note:'债券发行费用的逐年摊销', noteJa:'社債発行費を期間配分する償却費' },
  { id:132, term:'法人税等',         cat:'expense', level:2, cn:'法人税等',         note:'法人税、住民税及事业税', noteJa:'法人税・住民税・事業税の総称' },

  // ─── 2級 費用・工業簿記 ───
  { id:133, term:'材料費',           cat:'expense', level:'2k', cn:'材料费',         note:'生产消耗的材料成本', noteJa:'製造に消費した材料の原価' },
  { id:134, term:'労務費',           cat:'expense', level:'2k', cn:'人工费',         note:'生产工人的工资等人工成本', noteJa:'工場労働者の賃金などの人件費' },
  { id:135, term:'経費',             cat:'expense', level:'2k', cn:'制造经费',       note:'材料费、人工费以外的制造成本', noteJa:'材料費・労務費以外の製造原価' },
  { id:136, term:'製造間接費',       cat:'expense', level:'2k', cn:'制造间接费用',   note:'无法直接归属到产品的制造成本', noteJa:'製品に直接紐づかない製造原価' },
  { id:137, term:'賃金・給料',       cat:'expense', level:'2k', cn:'工资薪金（工业）', note:'工厂工人的工资', noteJa:'工場で働く従業員への賃金' },
  { id:138, term:'原価差異',         cat:'expense', level:'2k', cn:'成本差异',       note:'标准成本与实际成本的差额', noteJa:'標準原価と実際原価の差額' },
  { id:139, term:'仕損費',           cat:'expense', level:'2k', cn:'废品损失',       note:'生产中产生不合格品的损失', noteJa:'製造中に生じた不良品の損失' },
];
