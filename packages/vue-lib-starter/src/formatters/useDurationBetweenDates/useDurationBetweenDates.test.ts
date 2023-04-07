import { useDurationBetweenDates } from ".";
import { ref } from "vue";
import { mount } from "@vue/test-utils";

import { describe, it, expect } from "vitest";

describe("useDurationBetweenDates", () => {
  it("formats a duration", () => {
    const { duration } = useDurationBetweenDates(
      "2021-01-01T00:00:00Z",
      "2021-01-01T00:00:30Z"
    );
    expect(duration.value).toBe("00:00:30");
  });
  it('the duration is "00:00:00" if the leave date is before the arrive date', () => {
    const { duration } = useDurationBetweenDates(
      "2021-01-01T00:00:00Z",
      "2020-01-01T00:00:00Z"
    );
    expect(duration.value).toBe("00:00:00");
  });
  it("the duration is '00:00:00' if the leave date is the same as the arrive date", () => {
    const { duration } = useDurationBetweenDates(
      "2021-01-01T00:00:00Z",
      "2021-01-01T00:00:00Z"
    );
    expect(duration.value).toBe("00:00:00");
  });
  it("the duration is '00:00:00' if the leave date is null", () => {
    const { duration } = useDurationBetweenDates("2021-01-01T00:00:00Z", null);
    expect(duration.value).toBe("00:00:00");
  });
  it("the duration is '00:00:00' if the arrive date is null", () => {
    const { duration } = useDurationBetweenDates(null, "2021-01-01T00:00:00Z");
    expect(duration.value).toBe("00:00:00");
  });
  it("the duration is '00:00:00' if the leave date is undefined", () => {
    const { duration } = useDurationBetweenDates(
      "2021-01-01T00:00:00Z",
      undefined
    );
    expect(duration.value).toBe("00:00:00");
  });
  it("the duration is '00:00:00' if the arrive date is undefined", () => {
    const { duration } = useDurationBetweenDates(
      undefined,
      "2021-01-01T00:00:00Z"
    );
    expect(duration.value).toBe("00:00:00");
  });
  it("works with durations longer than one day", () => {
    const { duration } = useDurationBetweenDates(
      "2021-01-01T00:00:00Z",
      "2021-01-02T03:45:15Z"
    );
    expect(duration.value).toBe("27:45:15");
  });
  it("useDurationBetweenDates returns the correct duration between dates and is reactive", async () => {
    const arrive = ref("2022-01-01T00:00:00Z");
    const leave = ref("2022-01-02T03:45:15Z");
    const wrapper = mount({
      template: "<div>{{ duration }}</div>",
      setup() {
        const { duration } = useDurationBetweenDates(arrive, leave);
        return { duration };
      },
    });
    await wrapper.vm.$nextTick();

    expect(wrapper.text()).toBe("27:45:15");

    // Update input dates
    arrive.value = "2022-01-03T00:00:00Z";
    leave.value = "2022-01-05T06:30:45Z";

    await wrapper.vm.$nextTick();

    expect(wrapper.text()).toBe("54:30:45");
  });
});
