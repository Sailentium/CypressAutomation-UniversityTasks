import moviesList from "../fixtures/moviesList.json";
import { createTestData } from "../support/steps/apiSteps";

describe("Movie site testing", () => {
  before(() => {
    createTestData();
  });

  beforeEach(() => {
    cy.visit(Cypress.config('baseUrl'));
    cy.contains("Filter");
  });

  it("Page of the first movie loading correctly", () => {
    const firstMovieTitle = moviesList.results[0].title;
    cy.get("[data-testid='movies-list-movie']")
      .first()
      .then((movie) => {
        const firstMovieUrl = movie.attr("href");
        cy.get("[data-testid='movies-list-movie']").first().click();
        cy.url().should("eq", Cypress.config('baseUrl') + firstMovieUrl);
        cy.url().should("include", firstMovieUrl);
      });
    cy.contains("h1", firstMovieTitle);
  });

  it("Check that Filter exists and working", () => {
    const thirdMovieTitle = moviesList.results[2].title;
    cy.get("input").should("exist");
    cy.get("input").type("Testing");
    cy.get("[data-testid='movies-list-movie']").should("not.exist");
    cy.get("input").clear().type(`${thirdMovieTitle}`);
    cy.get("[data-testid='movies-list-movie']").should("exist");
    cy.get("[data-testid='movies-list-movie']").should("have.length", 1);
    cy.get("[data-testid='movies-list-movie']").click();
    cy.contains("h1", thirdMovieTitle);
  });

  it("Correct number of movies loaded", () => {
    cy.get("[data-testid='movies-list-movie']").should("have.length", 20);
    cy.get("[data-testid='movies-list-movie']").should("exist");
    cy.get("[data-testid='movies-full-movie']").should("not.exist");
  });
});
