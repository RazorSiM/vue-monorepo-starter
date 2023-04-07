import BaseInput from "./index.vue";
import { errorClasses, successClasses } from "./index.vue";
import { string } from "zod";
const schema = string().min(3).max(5);
const defaultProps = {
  fieldSchema: schema,
  disabled: false,
  readonly: false,
  autofocus: false,
  maxlength: 524288,
  minlength: 0,
  max: 524288,
  min: 0,
  step: 1,
};
describe("UiBaseInput", () => {
  const slots = {
    label: "test",
  };

  it("renders an input", () => {
    //@ts-expect-error wait for cypress to update vue sfc types
    cy.mount(BaseInput, {
      props: {
        modelValue: "",
        name: "test",
        placeholder: "input something",
        type: "text",
        ...defaultProps,
      },
      slots,
    });
    cy.get("input").should("exist");
    cy.get("label").should("exist").contains("test");
  });
  it("should display the right background color when the input is wrong", () => {
    //@ts-expect-error wait for cypress to update vue sfc types
    cy.mount(BaseInput, {
      props: {
        modelValue: "",
        name: "test",
        placeholder: "input something",
        type: "text",
        ...defaultProps,
      },
      slots,
    });
    cy.get("input").type("12");
    cy.get("input").should("have.class", errorClasses);
  });
  it("should display a message when the input is wrong", () => {
    //@ts-expect-error wait for cypress to update vue sfc types
    cy.mount(BaseInput, {
      props: {
        modelValue: "",
        name: "test",
        placeholder: "input something",
        type: "text",
        ...defaultProps,
      },
      slots,
    });
    cy.get("input").type("12");
    cy.get("p")
      .should("be.visible")
      .should("contain.text", "String must contain at least 3 character(s)");
  });
  it("should display the right css classes when the input is correct", () => {
    //@ts-expect-error wait for cypress to update vue sfc types
    cy.mount(BaseInput, {
      props: {
        modelValue: "",
        name: "test",
        placeholder: "input something",
        type: "text",
        ...defaultProps,
      },
      slots,
    });
    cy.get("input").type("123");
    cy.get("input").should("have.class", successClasses);
  });
  it("should display the right background color when the input is wrong", () => {
    //@ts-expect-error wait for cypress to update vue sfc types
    cy.mount(BaseInput, {
      props: {
        modelValue: "",
        name: "test",
        placeholder: "input something",
        type: "text",
        ...defaultProps,
      },
      slots,
    });
    cy.get("input").type("12");
    cy.get("input").should("have.class", errorClasses);
  });
  it("should display a message when the input is wrong", () => {
    //@ts-expect-error wait for cypress to update vue sfc types
    cy.mount(BaseInput, {
      props: {
        modelValue: "",
        name: "test",
        fieldSchema: schema,
        placeholder: "input something",
        type: "text",
      },
      slots,
    });
    cy.get("input").type("12");
    cy.get("p")
      .should("be.visible")
      .should("contain.text", "String must contain at least 3 character(s)");
  });
  it("should display the right css classes when the input is correct", () => {
    //@ts-expect-error wait for cypress to update vue sfc types
    cy.mount(BaseInput, {
      props: {
        modelValue: "",
        name: "test",
        fieldSchema: schema,
        placeholder: "input something",
        type: "text",
      },
      slots,
    });
    cy.get("input").type("123");
    cy.get("input").should("have.class", successClasses);
  });
});
