<template>
  <div>
    <canvas :id="canvasId" :width="width" :height="height"></canvas>
  </div>
</template>

<script>
  import sChart from 'schart.js';

  export default {
    data() {
      return {};
    },
    props: {
      canvasId: {
        type: String,
        default: '',
      },
      width: {
        type: [String, Number],
        default: 500,
      },
      height: {
        type: [String, Number],
        default: 400,
      },
      type: {
        type: String,
        default: 'bar',
      },
      data: {
        type: Array,
        default: [],
      },
      options: {
        type: Object,
        required: false,
      },
    },
    mounted() {
      this.$nextTick(() => {
        this.renderChart();
      });
    },
    methods: {
      renderChart() {
        new sChart(this.canvasId, this.type, this.data, this.options);
      },
    },
    watch: {
      data() {
        this.renderChart();
      },
      options() {
        this.renderChart();
      },
      type() {
        this.renderChart();
      },
      width() {
        this.$nextTick(() => {
          this.renderChart();
        });
      },
      height() {
        this.$nextTick(() => {
          this.renderChart();
        });
      },
    },
  };
</script>
