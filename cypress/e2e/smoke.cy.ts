import { faker } from "@faker-js/faker";

describe("smoke tests", () => {
  afterEach(() => {
  });

  it("should render a post", () => {
    cy.visitAndCheck("/");

    cy.findByRole("link", { name: /what do you do/i }).click();
    cy.findByRole("heading", { name: /what do you do/i }).should('be.visible');
  });

});
