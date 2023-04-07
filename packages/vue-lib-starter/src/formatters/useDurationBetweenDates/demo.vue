<script lang="ts" setup>
import { useDurationBetweenDates } from ".";
import { ref } from "vue";
const arrive = ref("2021-08-01T00:00:00");
const leave = ref("2021-08-02T00:00:00");
const { duration } = useDurationBetweenDates(arrive, leave);
</script>
<template>
  <div>
    <label>
      <p>Arrive:</p>
      <input v-model="arrive" type="datetime-local" />
    </label>
    <label>
      <p>Leave:</p>
      <input v-model="leave" type="datetime-local" />
    </label>
    <p>Duration: {{ duration }}</p>
  </div>
</template>
