<template>
  <div>
    <p>{{ currentNumber }}</p>
  </div>
</template>

<script>
export default {
  props: {
    max: {
      type: Number,
      required: true
    },
    speed: {
      type: Number,
      default: 50 // Temps en millisecondes entre chaque incrémentation
    }
  },
  data() {
    return {
      currentNumber: 0
    };
  },
  mounted() {
    this.startCounting();
  },
  methods: {
    startCounting() {
      const step = Math.ceil(this.max / 100); // Ajuste la progression
      const interval = setInterval(() => {
        if (this.currentNumber < this.max) {
          this.currentNumber += step;
          if (this.currentNumber > this.max) {
            this.currentNumber = this.max;
          }
        } else {
          clearInterval(interval);
        }
      }, this.speed);
    }
  }
};
</script>
