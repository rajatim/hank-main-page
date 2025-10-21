<template>
	<div class="right-bar">
		<!-- <TitleTemp v-bind:titles="titles2"></TitleTemp> -->
		<div class="hank-infor">
			<!-- <div class="left-box"></div> -->
			<div class="right-box">
				<!-- 新的 -->
				<div class="news-infor">
					<div class="en_name">
						<div class="name_wrap_news">
							<div class="hero">
								<img class="hero__photo" src="/static/images/IMG_4976.JPG" />
								<div class="text_name_wrap">
									<h1>Hank Kuo</h1>
                  <div class="span-wrap">
                    <span class="mb-40">UI/UX Designer</span>
                    <span> Phone numbe : +886986952005</span>
                    <span> Email : mini998839@gmail.com</span>
                  </div>
								</div>
							</div>
						</div>
						<div class="skill-wrap">
							<div class="title-news">
								<div class="left-wrap">
									<h2 class="mb-40">Background</h2>
									<section class="resume-section">
										<p class="highlight">
                        具備深厚顧問思維與實戰經驗的資深 UI/UX 設計師，
                        專精於前瞻技術應用、數據驅動設計與大型數位產品創新。
                        主導過 Google、全家便利商店、友達光電等頂尖企業的體驗轉型專案，
                        橫跨金融、零售與科技製造業，致力於打造兼具商業影響力與極致使用者體驗的數位服務。
                      </p>
										<h3 class="section-title mt-40">代表性成就包括：</h3>
										<ul class="achievement-list" style="padding-top:0px;">
											<li>
												<span class="yellow">主導前瞻技術導入：</span>
                          協助 Google x 南山人壽 定義「AI 智能保單流程」；
                          並為友達光電、群創光電等科技巨擘擘劃「生成式 AI 導入員工工作流程」的應用藍圖，
                          將抽象概念轉化為具體的商業策略。
                        
											
											</li>
											<li>
												<span class="yellow">驅動零售業績成長：</span>
                          主導規劃全家便利商店 App 核心功能，
                          透過設計優化成功將電子發票載具綁定率提升 25%、新用戶註冊率成長 10%。
                        
											
											</li>
											<li>
												<span class="yellow">領導多元產業的指標性專案：</span>
                          成功為麥當勞、Studio A、美廉社等知名品牌打造全新數位產品與網站體驗，
                          顯著提升品牌數位形象與市場競爭力。
                        
											
											</li>
											<li>
												<span class="yellow">提升產品核心體驗與團隊效率：</span>
                          在多項關鍵專案中，透過質化訪談與數據分析，
                          將核心功能使用率提升超過 20%，並成功將團隊設計交付時程平均縮短 15%。
                        
											
											</li>
										</ul>
									</section>
									<h2>Skills</h2>
									<div class="skills-radar-container">
										<SkillsRadar
											:skills="skillsData"
											color="#FAD54D"
											gridColor="rgba(255,255,255,0.12)"
											textColor="#d9d9d9"
										/>
									</div>
									<h3 class="skills-detail-title">詳細技能</h3>
									<div class="skills-tags">
										<span v-for="(s, i) in skills" :key="i" class="skill-tag">
											{{ s.name }}
										</span>
									</div>
									<h2>Project Experiences</h2>
									<ul class="ullinkstyle">
										<li v-for="p in projects" :key="p.title">
											<span>{{ p.title }}</span>
											<!-- 內部路由 -->
											<router-link
                        v-if="p.to"
                        :to="p.to"
                        class="margin-left-10"
                      >
                        查看作品 ></router-link>
										</li>
									</ul>
								</div>
							</div>
							<div class="title-news">
								<div class="left-wrap">
									<h2>Experience</h2>
									<div class="experience-list-wrap">
										<div
                      class="list-exp"
                      v-for="(expenlist, index) in expenlists"
                    >
											<!-- <div class="num">{{expenlist.num}}</div> -->
											<div class="companey-wrap">
												<span class="coname">{{ expenlist.name }}</span>
												<span class="time">{{ expenlist.name2 }}</span>
											</div>
											<!-- <div class="company-title">{{expenlist.title}}</div> -->
											<div class="company-infor">
												<!-- 新版：若有 achievements/responsibilities 就用新版版型 -->
												<template
                          v-if="
                            expenlist.achievements && expenlist.responsibilities
                          "
                        >
													<ul class="bullets pb-0 pt-10">
														<h4 class="section-title ">核心成就</h4>
														<li
                              v-for="(a, i) in expenlist.achievements"
                              :key="'a' + i"
                            >
															<strong>{{ a.label }}：</strong>{{ a.text }}
                            
														
														</li>
													</ul>
													<ul class="bullets pt-0 pb-0"" >
														<h4 class="section-title ">主要職責</h4>
														<li
                              v-for="(r, i) in expenlist.responsibilities"
                              :key="'r' + i"
                            >
															<strong>{{ r.label }}：</strong>{{ r.text }}
                            
														
														</li>
													</ul>
												</template>
												<!-- 舊版相容：沒有新欄位就用原本 infor/infor2 -->
												<template v-else>
													<p v-html="expenlist.infor"></p>
													<span>{{ expenlist.infor2 }}</span>
												</template>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script src="https://unpkg.com/swiper/js/swiper.js"></script>
<script src="./src/router/js/swiper.animate1.0.3.min.js"></script>
<script>
import TitleTemp from "./card/TitleTemp.vue";
import ModalTemp from "./card/ModalTemp.vue";
import SkillsRadar from "./SkillsRadar.vue";
import $ from "jquery";
export default {
  name: "images",
  data() {
    return {
        skillsData: {
      'Sketch': 95,
      'Figma': 95,
      'Adobe XD': 80,
      'Axure RP': 80,
      'Photoshop': 85,
      'Illustrator': 85,
      'CSS3': 95,
      'HTML': 95,
      'Jquery': 78,
      'Vue.js': 70
    },
    skills: [
      { name: 'Sketch',      barClass: 'nightfive' },
      { name: 'Figma',       barClass: 'nightfive' },
      { name: 'Adobe XD',    barClass: 'eight' },
      { name: 'Axure RP',    barClass: 'eight' },
      { name: 'Photoshop',   barClass: 'eightfive' },
      { name: 'Illustrator', barClass: 'eightfive' },
      { name: 'CSS3',        barClass: 'nightfive' },
      { name: 'HTML',        barClass: 'nightfive' },
      { name: 'Jquery',      barClass: 'seveneight' },
      { name: 'Vue.js',      barClass: 'seven' }
    ],
    projects: [
      { title: '全家APP 遊戲中心 UI/UX Design',  },
      { title: '八方雲集 Website UI/UX Design', to: '/po0015' },
      { title: '美廉社 App UI/UX Design', to: '/po0023' },
      { title: '零售品牌補貨 APP UI/UX Design', to: '/po0024' },
      { title: '超商品牌 APP 任務牆 UI/UX Design', to: '/po0025' },
      { title: '超商品牌 APP 酷碰券 UI/UX Design' },
      { title: '超商品牌 APP 記帳本 UI/UX Design' },
      { title: '超商品牌 Web/App 雲端列印 UI/UX Design' },
      { title: '超商品牌 app 過年遊戲 UI/UX Design' },
      { title: 'Smart Travaller App UI/UX Design', to: '/po0020' },
      { title: 'Three.3G澳門 Website UI/UX Design', to: '/po0016' },
      { title: '環貫綠佳利 App 2021 design', to: '/po0018' },
      { title: '環貫綠佳利 App 2024 Redesign', to: '/po0018' },
      { title: '聖保羅烘焙花園 Website UI/UX Design', to: '/po0014' },
      { title: 'Vendor Portal Design', to: '/po0019' },
      { title: 'Studio A 官網 UI/UX Design' },
      { title: 'Studio A App UI/UX Design', to: '/po0027' },
      { title: '法商巴黎人壽/產險/理財 UI/UX Design' }
    ],
      expenlists: [
        {
          num: "1",
          name: "UI/UX Designer - EY安永諮詢服務股份有限公司",
          name2: "2020/04~在職",
          // 新增兩個欄位：role + points（取代原本超長的 infor）
          achievements: [
            {
              label: "推動前瞻技術導入與策略",
              text:
                "主導並執行策略設計工作坊，成功協助 Google x 南山人壽 定義「AI 智能保單流程」；並為友達光電、群創光電擘劃「生成式 AI 導入員工工作流程」的應用藍圖，將抽象概念轉化為具體可行的方案。"
            },
            {
              label: "驅動商業成長",
              text:
                "主導規劃「My Famiport App」、「全家 App 記帳本功能」等功能上線，成功提升電子發票載具的綁定率 25%、新用戶註冊率 10%。"
            },
            {
              label: "優化使用者體驗",
              text:
                "於 3 個主要專案中，透過質化訪談、A/B 測試與數據分析，精準洞察並解決使用者核心痛點，使關鍵功能使用率提升超過 20%。"
            },
            {
              label: "提升團隊效率",
              text:
                "主導並優化端到端 (End-to-end) 設計流程，包含 User Flow、Wireframe 至 Prototype 交付，成功將設計交付時程平均縮短 15%。"
            },
            {
              label: "確保專案成功",
              text:
                "在一項大型零售 App 專案中，成功協調 5 人跨職能團隊，確保專案準時交付，並獲得超過 90% 的客戶滿意度。"
            }
          ],
          responsibilities: [
            {
              label: "設計執行與交付",
              text:
                "負責使用者旅程地圖、資訊架構規劃、原型設計與驗證，並產出高品質的設計規格交付工程團隊。"
            },
            {
              label: "使用者研究",
              text:
                "執行可用性測試、使用者訪談等研究方法，將洞察轉化為具體可行的設計方案。"
            },
            {
              label: "跨職能溝通",
              text:
                "擔任產品經理、前後端工程師與客戶之間的溝通橋樑，確保設計理念與最終實作成果高度一致。"
            },
            {
              label: "設計系統治理",
              text:
                "參與維護與管理設計系統 (Design System)，確保跨平台產品的視覺與體驗一致性。"
            }
          ],

          // （可留可刪）保留原本軟體清單
          infor2:
            "任職所需使用軟體：Sketch、Photoshop、Illustrator、Figma、Invision"
        },
        {
          num: "2",
          name: "網頁設計-振作國際股份有限公司",
          name2: "2018/11~2020/04",
  // 新版：核心成就
  achievements: [
    {
      label: "主導知名品牌網站建置，提升數位形象",
      text: "在職期間獨立完成 8 個大型網站專案，成功為吉美建設、振宇五金、新美齊集團、GMC 捷美運通等跨產業知名企業打造全新官方網站與線上商城，顯著提升其品牌數位形象與使用者體驗。"
    },
    {
      label: "提供端到端設計方案，獲取客戶高度肯定",
      text: "負責從初期設計提案、客製化視覺設計，到最終前端切版的完整專案執行。設計成品在美感與操作流暢度上獲得客戶一致好評，並確保所有專案準時交付。"
    },
    {
      label: "精通多樣化技術，實現複雜設計需求",
      text: "熟練運用 WordPress 進行從無到有的客製化網站建置，並精通響應式網頁設計 (RWD)，能針對不同產業客戶的獨特需求，提供高品質且跨裝置體驗一致的網站解決方案。"
    }
  ],

  // 新版：主要職責
  responsibilities: [
    {
      label: "網站視覺與版型設計",
      text: "負責客戶網站的視覺風格提案、客製化版型規劃與 UI 設計，使用 Photoshop、Illustrator、Sketch 等工具產出高品質設計稿。"
    },
    {
      label: "前端切版與響應式設計 (RWD)",
      text: "具備 HTML/CSS 切版能力，確保設計稿能精準呈現在各種尺寸的設備上，提供完整的 RWD 解決方案。"
    },
    {
      label: "WordPress 網站建置與管理",
      text: "負責從零到一使用 WordPress 為客戶建置完整網站，包含主題客製化、外掛應用與後台操作。"
    },
    {
      label: "客戶溝通與需求分析",
      text: "直接與客戶對接，深入理解其商業需求與品牌目標，並將其轉化為具體的網頁設計策略與方案。"
    }
  ],

  // 可留可刪：工具清單
  infor2: "工具：Photoshop、Illustrator、Sketch、HTML、CSS、WordPress"
        },
        {
          num: "3",
          name: "網頁設計-鴻緯科技股份有限公司",
          name2: "2017/04~2018/04",
  // 新版：核心成就
  achievements: [
    {
      label: "主導區塊鏈技術整合專案，實現平台代幣成功上市",
      text: "作為「MOT 魔寶商城」創新部門核心設計成員，從零到一負責整體 UI/UX 架構；專案順利上線，並完成平台區塊鏈代幣於交易所上市的里程碑。"
    },
    {
      label: "攻克數位資產轉換的設計難題，打造無縫的使用體驗",
      text: "獨立設計「商城點數 ↔ 區塊鏈代幣」雙向兌換機制；以簡化流程與清晰視覺引導降低鏈上操作門檻，讓使用者能在點數消費與鏈上資產間順暢轉換。"
    },
    {
      label: "建構完整的電商與遊戲化使用者旅程",
      text: "負責端到端（End-to-end）使用者流程，涵蓋會員系統、購物流程與遊戲化互動介面，將複雜代幣經濟邏輯轉化為直觀、易用且具吸引力的產品體驗。"
    }
  ],    


  // 新版：主要職責
  responsibilities: [
    {
      label: "商城整體 UI/UX 規劃",
      text: "自使用者流程（UI Flow）、線框（Wireframe）到視覺（Visual UI）之完整設計，確保旅程連貫與易用性。"
    },
    {
      label: "核心功能模組設計",
      text: "主導會員註冊登入、商品瀏覽、購物車結帳、遊戲化互動介面等核心模組設計與迭代。"
    },
    {
      label: "複雜金流介面設計",
      text: "專注於點數與區塊鏈代幣雙向金流介面的資訊架構與互動設計，平衡安全性與易用性。"
    },
    {
      label: "跨職能協作",
      text: "與 PM、區塊鏈工程師、前後端工程師緊密協作，確保設計方案可行並高品質落地。"
    }
  ],

  // （可留可刪）工具清單
  infor2: "工具：Sketch、Photoshop、Illustrator、HTML5、CSS3、jQuery"
        },
       
      ],
      titles2: {
        name: "A Digital",
        name_2: "Creative Agency",
        p: "Hello, my name is hank, this is my web project portfolio.",
        contect: "Contect me",
        big_title: "個人履歷"
      }
    };
  },
  mounted() {
    // STEP 2：在 mounted 時初始化 tooltip
    $(function() {});
  },
  components: {
    TitleTemp: TitleTemp,
    ModalTemp: ModalTemp,
    SkillsRadar: SkillsRadar
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../css/experience.css";
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.role-title{
  font-size: 18px;
  font-weight: 800;
  margin: 0 0 4px;
  color: #fff;
}
.role-period{
  color: rgb(143,143,143);
  margin-bottom: 12px;
}

.section-title{
  font-size: 15px;
  font-weight: 400;
  margin: 12px 0 8px;
  color: rgb(143, 143, 143);
  margin-bottom:12px;
}
.mt-24{ margin-top: 24px; }

.bullets{
  list-style: none;
  padding: 0;
  margin: 0 0 12px;
}
.bullets li{
  line-height: 1.9;
  margin-bottom: 6px;
  white-space: normal;
  word-break: break-word;
}
.bullets li strong{
  color: #FAD54D; /* 你的重點黃 */
  font-weight: 700;
}

.role {
  font-size: 18px;
  font-weight: 800;
  margin: 8px 0 6px;
  color: #fff; /* 依你主題色可調 */
}

.exp-points {
  list-style: none;
  padding: 0;
  margin: 6px 0 12px;
}
.exp-points li {
  line-height: 1.9;
  margin-bottom: 6px;
}
.exp-points li strong {
  color: #fad54d; /* 你頁面上用的重點黃 */
  font-weight: 700;
}
.name-wrap {
  margin-bottom: 30px;
}
.dott-style {
  border: 1px dotted #fff;
  margin-top: -30px;
  opacity: 0.2;
  margin-bottom: 50px;
}
@media screen and (max-width: 680px) {
  .dott-style {
    margin-top: 30px;
    width: 50%;
  }
}
.hank-infor {
  width: 100%;
  display: flex;
  flex-direction: row;
  width: 100%;
  box-sizing: border-box;
  animation: fadeIn 2s both;
  animation-delay: 1.2s;
}
@media screen and (max-width: 800px) {
  .hank-infor {
    padding-left: 20px;
    padding-right: 20px;
  }
}
@media screen and (max-width: 500px) {
  .hank-infor {
    padding-left: 10px;
    padding-right: 10px;
  }
}
.left-box {
  background-image: url(http://www.hank.url.tw/img/hank-img.jpg);
  width: 360px;
  background-position: center center;
  filter: grayscale(0.6);
  background-size: cover;
  background-repeat: no-repeat;
}
@media screen and (max-width: 1300px) {
  .left-box {
    width: 0%;
    display: none;
  }
}
.right-box {
  width: 100%;
  text-align: left;
  padding: 15px;
  box-sizing: border-box;
  color: #fff;
  padding-right: 80px;
}
@media screen and (max-width: 1300px) {
  .right-box {
    width: 100%;
  }
}
@media screen and (max-width: 1024px) {
  .right-box {
    width: 100%;
    padding-right: 15px;
  }
}
@media screen and (max-width: 600px) {
  .right-box {
    width: 100%;
    padding: 0px;
  }

}
.right-box .name-wrap {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
}
.right-box .name {
  font-size: 20px;
  font-weight: 900;
  margin-right: 10px;
  display: flex;
  flex-wrap: wrap;
}
.right-box .name li {
  text-decoration: none;
  text-decoration: none;
  list-style: none;
  line-height: 40px;
  /* border: 1px solid red; */
  margin-bottom: 15px;
  padding: 0px 15px 0px 15px;
  background-color: #fff;
  color: #000;
  margin-right: 10px;
  border-radius: 48px;
  font-size: 15px;
}
@media screen and (max-width: 600px) {
  .right-box .name {
    font-size: 20px;
    font-weight: 900;
    margin-right: 10px;
  }
}
.right-box .ch-name {
  font-size: 16px;
  margin-bottom: 10px;
  color: #bdbdbd;
}
.detail-infor {
  list-style: none;
  padding: 0px;
}
.detail-infor > li {
  font-size: 18px;
  line-height: 30px;
}
.detail-infor > li:nth-child(1) {
  font-size: 20px;
  font-weight: 900;
  margin-top: 10px;
}
.detail-infor ul {
  list-style: none;
  padding: 0px;
  display: flex;
  line-height: 30px;
  margin-top: 40px;
}
.detail-infor ul > li {
  display: block;
  margin-right: 10px;
  font-size: 18px;
  border-radius: 50px;
  padding-right: 10px;
  padding-left: 10px;
}
.experience-list1-wrap {
  padding-left: 15px;
  padding-right: 15px;
  box-sizing: border-box;
  padding-bottom: 80px;
  font-size: 18px;
}
@media screen and (max-width: 600px) {
  .experience-list-wrap {
    padding-left: 0px;
    padding-right: 0px;
  }
}
.list-exp {
  display: flex;
  color: #fff;
  padding: 10px;
  border-bottom: 1px dotted #fff;
  width: 100%;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: start;
  text-align: left;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  flex-wrap: wrap;
  padding-left: 0px;
  padding-top:30px;
}

h2.title-style {
  font-size: 36px;
  color: #fff;
  text-align: left;
  color: #fad54d;
}
.company-infor p {
  margin-top: 0px;
  margin-bottom: 20px;
  line-height: 32px;
}
@media screen and (max-width: 1024px) {
  .list-exp {
    flex-direction: column;
  }
  h2.title-style {
    text-align: center;
    color: #fad54d;
  }
}
@media screen and (max-width: 600px) {
  .list-exp {
    flex-direction: column;
    padding: 0px;
    padding-top: 30px;
    padding-bottom: 30px;
  }
}
.list-exp .num {
  width: 10%;
  font-size: 40px;
  font-weight: 900;
}
@media screen and (max-width: 1024px) {
  .list-exp .num {
    width: 100%;
    font-size: 40px;
    font-weight: 900;
    text-align: left;
  }
}
.companey-wrap {
  width: 90%;
  text-align: center;
  padding-right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  padding-right: 40px;
}

@media screen and (max-width: 600px) {
  .companey-wrap .coname {
    margin-bottom: 0px;
  }
}

@media screen and (max-width: 1024px) {
  .companey-wrap {
    width: 100%;
    justify-content: flex-start;
    align-items: flex-start;
    border: none;
    margin-bottom: 30px;
    padding-right: 0px;
    text-align: left;
  }
}
@media screen and (max-width: 600px) {
  .companey-wrap {
    margin-bottom:10px;
  }
}
.companey-wrap span:nth-child(2) {
  color: rgb(143, 143, 143);
}
.company-title {
  width: 15%;
  text-align: center;
  padding-right: 10px;
  border-right: 1px solid #fff;
  font-size: 17px;
  font-weight: 900;
  color: #fad54d;
  line-height: 50px;
}
@media screen and (max-width: 1024px) {
  .company-title {
    width: 100%;
    border: none;
  }
  .company-title {
    padding-right: 0px;
  }
}
.company-infor {
  width: 100%;
}
@media screen and (max-width: 1024px) {
  .company-infor {
    width: 100%;
    padding-left: 0px;
    text-align: left;
  }
}
.company-infor span {
  font-size: 16px;
  display: block;
}
@media screen and (max-width: 1024px) {
  .company-infor span {
    font-size: 16px;
    margin-top: 10px;
    display: block;
  }
}
ul.skill-style-wrap {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
ul.skill-style-wrap li {
  margin-bottom: 20px;
  margin-left: 5px;
  margin-right: 5px;
}
@media screen and (max-width: 768px) {
  ul.skill-style-wrap {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    text-align: center;
    width: 100%;
  }
  ul.skill-style-wrap li {
    margin-bottom: 10px;
    margin-top: 10px;
  }
}
.infor_span_style a {
  text-decoration-color: rgb(143, 143, 143);
}
.infor_span_style li {
  margin-bottom: 2px !important;
  margin-top: 10px !important;
  text-decoration: none;
}
.ullinkstyle {
  list-style-type: decimal;
}
.ullinkstyle li {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  border-bottom: 1px solid rgb(143, 143, 143);
  list-style-type: decimal;
  padding-bottom: 10px;
}
.ullinkstyle li a {
  text-decoration: underline;
  color: rgb(143, 143, 143);
  font-size: 14px;
}
.margin-left-10 {
  margin-left: 10px;
}
@media screen and (max-width: 550px) {
  .ullinkstyle li {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: flex-start;
    border-bottom: 1px solid rgb(143, 143, 143);
    list-style-type: decimal;
    padding-bottom: 10px;
  }
  .ullinkstyle li a {
    margin-left: 0px;
  }
}
.pt-0{
  padding-top:0px!important;
}
.pb-0{
  padding-bottom:0px!important;
}
body {
  background-color: #0d0d0d;
  color: #e0e0e0;
  font-family: "Noto Sans TC", "PingFang TC", "Microsoft JhengHei", sans-serif;
  line-height: 1.8;
  letter-spacing: 0.5px;
  padding: 40px;
}

h2 {
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 1px;
  margin-bottom: 40px;
  color: #fff;
}

h3 {
  font-size: 20px;
  font-weight: 600;
  color: #FAD54D;
}

.resume-section {
  max-width: 1024px;
  margin: auto;
}

.section-title {
  color: #a0a0a0;
  font-size: 15px;
  font-weight: 400;
  margin-bottom: 16px;
  letter-spacing: 1px;
}

.highlight {
  color: #ffffff;
  font-size:16px;
  margin-bottom: 24px;
}

.sub-title {
  color: #f0c000;
  font-weight: 600;
  margin-bottom: 16px;
  font-size:16px;
}

.achievement-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.achievement-list li {
  margin-bottom: 18px;
  font-size: 16px;
  color: #d9d9d9;
  line-height: 1.8;
}

.achievement-list li .yellow {
  color: #FAD54D;
  font-weight: 900;
}
.mt-60{
  margin-top:60px;
}

/* --- Hero（照片 + 名稱） --- */
.hero {
  display: flex;
  align-items: center;
  gap: 24px;
  margin: 8px 0 28px; /* 與下方內容留白 */
}

.hero__photo {
  width: clamp(96px, 10vw, 160px);   /* 依螢幕調整尺寸 */
  aspect-ratio: 1 / 1;               /* 保持正方形 */
  object-fit: cover;
  border-radius: 32px;                /* 想要圓形就改成 50% */
  filter: grayscale(0.1);            /* 低飽和，符合你的主題感 */
  border: 1px solid rgba(255,255,255,0.08);
  box-shadow: 0 6px 24px rgba(0,0,0,0.35);
  object-position: center top;
}

.hero__text h1 {
  font-size: 48px;
  line-height: 1.2;
  margin: 0;
  font-weight: 900;
  color: #fff;
  letter-spacing: -0.5px;
}

.hero__text .mb-40 {
  display: block;
  margin-top: 8px;
  color: #a6a6a6;
  font-size: clamp(14px, 1.8vw, 18px);
}

/* 窄螢幕堆疊顯示 */
@media (max-width: 720px) {
  .hero {
    flex-direction: column;
    align-items: flex-start; /* 或 center，看你喜好 */
    gap: 12px;
  }
  .hero__photo {
    width: 112px; /* 行動裝置固定大小，避免過大 */
  }
}

@media screen and (max-width: 600px) {

  .skill-wrap{
    margin-top:0px;
  }
.text_name_wrap span.mb-40{
  margin-bottom:10px;
}
}

.bullets li strong {
  display: block;           /* ← 關鍵：變區塊就會自動換行 */
  color: #FAD54D;
  font-weight: 900;
  margin-bottom: 4px;        /* 標籤與描述之間的間距 */
  line-height: 1.4;
  font-size:15px;
}

/* 列表本體的行高與間距可以微調更好讀 */
.bullets li {
  line-height: 1.9;
  margin-bottom: 12px;
  font-size:16px;
  color:#d9d9d9;
}
.pt-10{
  padding-top:10px!important;
}
.span-wrap{
  display:flex;
}

/* Skills Radar Chart */
.skills-radar-container {
  width: 100%;
  max-width: 500px;
  height: 400px;
  margin: 30px auto 40px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 12px;
  border: 1px solid rgba(250, 213, 77, 0.1);
}

@media screen and (max-width: 768px) {
  .skills-radar-container {
    height: 350px;
    max-width: 100%;
    padding: 15px;
  }
}

@media screen and (max-width: 500px) {
  .skills-radar-container {
    height: 300px;
    padding: 10px;
  }
}

/* Skills Detail Title */
.skills-detail-title {
  font-size: 18px;
  color: #FAD54D;
  font-weight: 700;
  margin: 30px 0 20px;
  text-align: left;
}

/* Skills Tags */
.skills-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 60px;
}

.skill-tag {
  display: inline-block;
  padding: 10px 20px;
  background: rgba(250, 213, 77, 0.1);
  border: 1px solid rgba(250, 213, 77, 0.3);
  border-radius: 6px;
  color: #d9d9d9;
  font-size: 15px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.skill-tag:hover {
  background: rgba(250, 213, 77, 0.2);
  border-color: #FAD54D;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(250, 213, 77, 0.2);
}

@media screen and (max-width: 600px) {
  .skills-tags {
    gap: 8px;
  }

  .skill-tag {
    padding: 8px 16px;
    font-size: 14px;
  }
}
</style>
