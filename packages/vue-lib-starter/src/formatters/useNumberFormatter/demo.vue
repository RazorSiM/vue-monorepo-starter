<script lang="ts" setup>
import { useNumberFormatter } from "./index";
import { ref } from "vue";

// const preferredLanguages = usePreferredLanguages();
const preferredLanguages = ref(["en-US", "en-GB", "en-AU", "en-CA", "en-NZ"]);
const language = ref(preferredLanguages.value[0]);
const number = ref(123456789);
const options = ref({
  style: "currency",
  currency: "USD",
  currencyDisplay: "symbol",
  maximumFractionDigits: 2,
  minimumFractionDigits: 2,
});
const { formattedNumber } = useNumberFormatter(number, language, options);
</script>
<template>
  <div>
    <label>
      <p>Language:</p>
      <select v-model="language">
        <option v-for="lang in preferredLanguages" :key="lang">
          {{ lang }}
        </option>
      </select>
    </label>
    <label>
      <p>Number:</p>
      <input v-model.number="number" type="number" />
    </label>
    <p>Formatted Number: {{ formattedNumber }}</p>
  </div>
</template>
