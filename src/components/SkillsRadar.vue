<template>
  <div class="skills-radar">
    <canvas ref="canvas" aria-label="Skills Radar" role="img"></canvas>
  </div>
</template>

<script>
// v2 直接匯入 UMD
import Chart from 'chart.js';

export default {
  name: 'SkillsRadar',
  props: {
    // 例如：{ Sketch:90, Figma:95, 'Adobe XD':70, 'Axure RP':65, ... }
    skills: { type: Object, required: true },
    color: { type: String, default: '#FAD54D' },
    gridColor: { type: String, default: 'rgba(255,255,255,0.12)' },
    textColor: { type: String, default: '#d9d9d9' }
  },
  data: function(){ return { chart: null }; },
  computed: {
    // 聚合成 6 軸（平均），畫出六角形雷達
    categories: function(){
      var s = this.skills;
      function avg(keys){
        var vals = keys.map(function(k){
          var v = s[k];
          return (typeof v === 'number' && !isNaN(v)) ? v : 0;
        });
        var sum = vals.reduce(function(a,b){ return a + b; }, 0);
        return Math.round(sum / (vals.length || 1));
      }
      return [
        { label: '設計系統 / 介面設計', value: avg(['Figma','Sketch','Adobe XD']) },
        { label: '互動原型 / 流程驗證', value: avg(['Axure RP','Figma']) },
        { label: '視覺敘事 / 品牌表現', value: avg(['Photoshop','Illustrator']) },
        { label: 'HTML（語意化 / 結構）', value: avg(['HTML']) },
        { label: 'CSS（樣式 / 動效）', value: avg(['CSS3']) },
        { label: '前端框架 / 工具',     value: avg(['Vue.js','Jquery']) }
      ];
    },
    labels: function(){ return this.categories.map(function(c){ return c.label; }); },
    dataValues: function(){ return this.categories.map(function(c){ return c.value; }); }
  },
  mounted: function(){ this.draw(); },
  beforeDestroy: function(){ if (this.chart) { this.chart.destroy(); this.chart = null; } },
  methods: {
    draw: function(){
      var ctx = this.$refs.canvas.getContext('2d');
      if (this.chart) { this.chart.destroy(); }

      this.chart = new Chart(ctx, {
        type: 'radar',
        data: {
          labels: this.labels,
          datasets: [{
            label: 'Skill Level',
            data: this.dataValues,
            backgroundColor: this.hexToRgba(this.color, 0.18),
            borderColor: this.color,
            pointBackgroundColor: this.color,
            pointBorderColor: this.color,
            borderWidth: 2,
            pointRadius: 3
          }]
        },
<template>
  <div class="skills-radar">
    <canvas ref="canvas" aria-label="Skills Radar" role="img"></canvas>
  </div>
</template>

<script>
// v2 直接匯入 UMD
import Chart from 'chart.js';

export default {
  name: 'SkillsRadar',
  props: {
    // 例如：{ Sketch:90, Figma:95, 'Adobe XD':70, 'Axure RP':65, ... }
    skills: { type: Object, required: true },
    color: { type: String, default: '#FAD54D' },
    gridColor: { type: String, default: 'rgba(255,255,255,0.12)' },
    textColor: { type: String, default: '#d9d9d9' }
  },
  data: function(){ return { chart: null }; },
  computed: {
    // 聚合成 6 軸（平均），畫出六角形雷達
    categories: function(){
      var s = this.skills;
      function avg(keys){
        var vals = keys.map(function(k){
          var v = s[k];
          return (typeof v === 'number' && !isNaN(v)) ? v : 0;
        });
        var sum = vals.reduce(function(a,b){ return a + b; }, 0);
        return Math.round(sum / (vals.length || 1));
      }
      return [
        { label: '設計系統 / 介面設計', value: avg(['Figma','Sketch','Adobe XD']) },
        { label: '互動原型 / 流程驗證', value: avg(['Axure RP','Figma']) },
        { label: '視覺敘事 / 品牌表現', value: avg(['Photoshop','Illustrator']) },
        { label: 'HTML（語意化 / 結構）', value: avg(['HTML']) },
        { label: 'CSS（樣式 / 動效）', value: avg(['CSS3']) },
        { label: '前端框架 / 工具',     value: avg(['Vue.js','Jquery']) }
      ];
    },
    labels: function(){ return this.categories.map(function(c){ return c.label; }); },
    dataValues: function(){ return this.categories.map(function(c){ return c.value; }); }
  },
  mounted: function(){ this.draw(); },
  beforeDestroy: function(){ if (this.chart) { this.chart.destroy(); this.chart = null; } },
  methods: {
    draw: function(){
      var ctx = this.$refs.canvas.getContext('2d');
      if (this.chart) { this.chart.destroy(); }

      this.chart = new Chart(ctx, {
        type: 'radar',
        data: {
          labels: this.labels,
          datasets: [{
            label: 'Skill Level',
            data: this.dataValues,
            backgroundColor: this.hexToRgba(this.color, 0.18),
            borderColor: this.color,
            pointBackgroundColor: this.color,
            pointBorderColor: this.color,
            borderWidth: 2,
            pointRadius: 3
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          legend: { display: false },
          tooltips: {
            callbacks: {
              label: function(tooltipItem, data){
                var label = data.labels[tooltipItem.index];
                var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                return label + ': ' + value + '%';
              }
            }
          },
          // v2 的雷達用 scale（不是 r）
          scale: {
            ticks: {
              beginAtZero: true,
              min: 0,
              max: 100,
              stepSize: 20,
              fontColor: this.gridColor,
              backdropColor: 'rgba(0,0,0,0)'
            },
            pointLabels: {
              f
