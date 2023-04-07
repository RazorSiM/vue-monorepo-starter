import RadioInput from "./index.vue";
import type { RadioInputProps } from "./index.vue";
const defaultProps: RadioInputProps = {
  modelValue: "test",
  name: "test",
  value: "test",
};
const slots = {
  default: "test",
};
describe("RadioInput", () => {
  it("renders correctly", () => {
    //@ts-expect-error wait for cypress to update vue sfc types
    cy.mount(RadioInput, {
      props: {
        ...defaultProps,
      },
      slots,
    });
    cy.get("input").should("exist");
    cy.get("label").should("exist").contains("test");
  });
  it("should be not checked when modelValue is not equal to value", () => {
    //@ts-expect-error wait for cypress to update vue sfc types
    cy.mount(RadioInput, {
      props: {
        modelValue: "",
        name: "test",
        value: "test",
      },
      slots,
    });
    cy.get("input").should("not.be.checked");
  });
  it("should be checked when modelValue is equal to value", () => {
    //@ts-expect-error wait for cypress to update vue sfc types
    cy.mount(RadioInput, {
      props: {
        modelValue: "test",
        name: "test",
        value: "test",
      },
      slots,
    });
    cy.get("input").should("be.checked");
  });
  it("should emit an event when clicked and then be checked", () => {
    const radioClickSpy = cy.spy().as("radioClickSpy");
    //@ts-expect-error wait for cypress to update vue sfc types
    cy.mount(RadioInput, {
      props: {
        modelValue: "",
        name: "test",
        value: "test",
        onInput: radioClickSpy,
      },
      slots,
    });
    cy.get("input").should("exist");
    cy.get("input").should("be.not.checked");
    cy.get("input").check();
    cy.get("@radioClickSpy").should("have.been.called");
    cy.get("input").should("be.checked");
  });
});
