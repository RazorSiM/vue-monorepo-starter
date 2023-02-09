import UiButton from "./UiButton.vue";
// test suite with cypress
describe("UiButton", () => {
  const slots = {
    default: "Default Slot",
  };
  it("renders a button", () => {
    cy.mount(UiButton, {
      slots: slots,
    });
    cy.get("button").contains("Default Slot");
  });
  it("apply the correct color classes", () => {
    cy.mount(UiButton, {
      props: {
        color: "primary",
      },
      slots: slots,
    });
    cy.get("button").should(
      "have.class",
      "bg-blue-500 hover:bg-blue-700 text-white"
    );

    cy.mount(UiButton, {
      props: {
        color: "secondary",
      },
      slots: slots,
    });
    cy.get("button").should(
      "have.class",
      "bg-gray-500 hover:bg-gray-700 text-white"
    );

    cy.mount(UiButton, {
      props: {
        color: "danger",
      },
      slots: slots,
    });
    cy.get("button").should(
      "have.class",
      "bg-red-500 hover:bg-red-700 text-white"
    );

    cy.mount(UiButton, {
      props: {
        color: "success",
      },
      slots: slots,
    });
    cy.get("button").should(
      "have.class",
      "bg-green-500 hover:bg-green-700 text-white"
    );

    cy.mount(UiButton, {
      props: {
        color: "warning",
      },
      slots: slots,
    });
    cy.get("button").should(
      "have.class",
      "bg-yellow-500 hover:bg-yellow-700 text-white"
    );
  });
  it("apply the correct size classes", () => {
    cy.mount(UiButton, {
      props: {
        size: "sm",
      },
      slots: slots,
    });
    cy.get("button").should("have.class", "px-2 py-1 text-sm");

    cy.mount(UiButton, {
      props: {
        size: "md",
      },
      slots: slots,
    });
    cy.get("button").should("have.class", "px-3 py-2 text-base");

    cy.mount(UiButton, {
      props: {
        size: "lg",
      },
      slots: slots,
    });
    cy.get("button").should("have.class", "px-4 py-3 text-lg");
  });
});
