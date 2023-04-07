<script setup> import Demo from "./demo.vue" </script>

# useDurationBetweenDates

> A Vue that returns the duration between two dates in the format HH:mm:ss using Dayjs

## Usage

```js{3}
const arrive = ref("2021-08-01T00:00:00");
const leave = ref("2021-08-02T00:00:00");
const { duration } = useDurationBetweenDates(arrive, leave);
```

## Demo

<Demo />
