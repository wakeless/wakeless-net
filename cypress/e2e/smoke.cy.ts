import { faker } from "@faker-js/faker";

describe("smoke tests", () => {
  afterEach(() => {
  });

  it("should render a post", () => {
    cy.visitAndCheck("/");

    cy.findByRole("link", { name: /my first post/i }).click();
    cy.findByRole("heading", { name: /my first post/i }).should('be.visible');
  });

});
