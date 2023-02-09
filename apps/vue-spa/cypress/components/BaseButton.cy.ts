import BaseButton from "../../src/components/BaseButton.vue";

describe("<BaseButton />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(BaseButton);
  });
});
