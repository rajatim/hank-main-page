<template>
  <div class="skills-radar">
    <canvas ref="canvas" aria-label="技能雷達圖" role="img"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";

const RADAR_GROUPS = [
  { label: "設計系統 / 介面設計", keys: ["Figma", "Sketch", "Adobe XD"] },
  { label: "互動原型 / 流程驗證", keys: ["Axure RP", "Figma"] },
  { label: "視覺敘事 / 品牌表現", keys: ["Photoshop", "Illustrator"] },
  { label: "HTML（語意化 / 結構）", keys: ["HTML"] },
  { label: "CSS（樣式 / 動效）", keys: ["CSS3"] },
  { label: "前端框架 / 工具", keys: ["Vue.js", "Jquery"] }
];

export default {
  name: "SkillsRadar",
  props: {
    skills: {
      type: Array,
      required: true
    },
    color: {
      type: String,
      default: "#FAD54D"
    },
    gridColor: {
      type: String,
      default: "rgba(255,255,255,0.12)"
    },
    textColor: {
      type: String,
      default: "#d9d9d9"
    }
  },
  data() {
    return {
      chart: null
    };
  },
  computed: {
    skillMap() {
      return this.skills.reduce((acc, cur) => {
        acc[cur.name] = Number(cur.value) || 0;
        return acc;
      }, {});
    },
    categories() {
      return RADAR_GROUPS.map((group) => {
        const values = group.keys.map((key) => this.skillMap[key] || 0);
        if (!values.length) {
          return { label: group.label, value: 0 };
        }
        const sum = values.reduce((a, b) => a + b, 0);
        return { label: group.label, value: Math.round(sum / values.length) };
      });
    },
    labels() {
      return this.categories.map((c) => c.label);
    },
    values() {
      return this.categories.map((c) => c.value);
    }
  },
  mounted() {
    this.renderChart();
  },
  beforeDestroy() {
    this.destroyChart();
  },
  watch: {
    skills: {
      deep: true,
      handler() {
        this.renderChart();
      }
    },
    color() {
      this.renderChart();
    }
  },
  methods: {
    destroyChart() {
      if (this.chart) {
        this.chart.destroy();
        this.chart = null;
      }
    },
    renderChart() {
      const ctx = this.$refs.canvas.getContext("2d");
      this.destroyChart();

      this.chart = new Chart(ctx, {
        type: "radar",
        data: {
          labels: this.labels,
          datasets: [
            {
              label: "技能熟練度",
              data: this.values,
              backgroundColor: this.hexToRgba(this.color, 0.2),
              borderColor: this.color,
              pointBackgroundColor: this.color,
              pointBorderColor: this.color,
              borderWidth: 2,
              pointRadius: 3
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          legend: { display: false },
          tooltips: {
            callbacks: {
              label: (tooltipItem, data) => {
                const label = data.labels[tooltipItem.index] || "";
                const value =
                  data.datasets[tooltipItem.datasetIndex].data[
                    tooltipItem.index
                  ];
                return `${label}: ${value}%`;
              }
            }
          },
          scale: {
            ticks: {
              beginAtZero: true,
              min: 0,
              max: 100,
              stepSize: 20,
              display: true,
              showLabelBackdrop: false,
              fontColor: this.textColor,
              callback: (value) => `${value}%`
            },
            angleLines: {
              color: this.gridColor
            },
            gridLines: {
              color: this.gridColor,
              circular: false
            },
            pointLabels: {
              fontColor: this.textColor,
              fontSize: 12,
              callback: (label) => label
            }
          }
        }
      });
    },
    hexToRgba(hex, alpha) {
      let c = hex.replace("#", "");
      if (c.length === 3) {
        c = c
          .split("")
          .map((char) => char + char)
          .join("");
      }
      const bigint = parseInt(c, 16);
      const r = (bigint >> 16) & 255;
      const g = (bigint >> 8) & 255;
      const b = bigint & 255;
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }
  }
};
</script>

<style scoped>
.skills-radar {
  position: relative;
  width: 100%;
  max-width: 520px;
  min-height: 360px;
}

canvas {
  width: 100%;
  height: 100%;
}
</style>
