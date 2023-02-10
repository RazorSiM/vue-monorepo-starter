<script setup> import Demo from "./demo.vue" </script>

# useNumberFormatter

> A Vue composition function that formats numbers using the [Intl.NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) API.

## Usage

```js{11}
const language = ref(preferredLanguages.value[0]);
const number = ref(123456789.123456789);
const options = ref({
  style: "currency",
  currency: "USD",
  currencyDisplay: "symbol",
  maximumFractionDigits: 2,
  minimumFractionDigits: 2,
});

const { formattedNumber } = useNumberFormatter(number, language, options);
```

## Demo

<Demo />
