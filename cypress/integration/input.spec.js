/// <reference types="cypress"/>

describe("Input form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("finds an input", () => {
    cy.focused().should("have.class", "search-input");
  });

  it("Accepts input", () => {
    const typeText = "cars";
    cy.get(".search-input")
      .type(typeText)
      .should("have.value", typeText);
  });

  it("Accepts input and submit search", () => {
    const typeText = "cars";
    cy.get(".search-input")
      .type(typeText)
      .should("have.value", typeText);

    cy.get("[data-cy=search-submit]").click();

    cy.get(".search-input").should("have.value", "");

    cy.get(".image-list .image-card")
  });

  it("show no results", () => {
    const randomSearch = '65564564dg'
    cy.get(".search-input")
      .type(randomSearch)
      .should("have.value", randomSearch);

    cy.get("[data-cy=search-submit]").click();

    cy.get(".search-input").should("have.value", "");

    cy.get(".image-list .image-card").should("not.exist")

    cy.get(".result-not-found").should("exist");

  });


});
