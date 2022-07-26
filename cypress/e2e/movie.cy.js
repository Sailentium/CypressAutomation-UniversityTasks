import moviesList from "../fixtures/moviesList.json";
import { moviesListPage } from "../support/pages/moviesListPage";
import apiSteps from "../support/steps/apiSteps";
import moviesListSteps from "../support/steps/moviesListSteps";
import movieSteps from "../support/steps/movieSteps";

describe("Movies site testing", () => {
  before(() => {
    apiSteps.createTestData();
  });

  beforeEach(() => {
    cy.visit(Cypress.config("baseUrl"));
    cy.contains(moviesListPage.filterFieldLabelLocator);
  });

  it("Page of the first movie loading correctly", () => {
    const firstMovieTitle = moviesList.results[0].title;
    cy.get(moviesListPage.moviesListLocator)
      .first()
      .then((movie) => {
        const firstMovieUrl = movie.attr("href");
        cy.get(moviesListPage.moviesListLocator).first().click();
        cy.url().should("eq", Cypress.config("baseUrl") + firstMovieUrl);
        cy.url().should("include", firstMovieUrl);
      });
    movieSteps.checkTitleOfMovie(firstMovieTitle);
  });

  it("Able to see, type and find a movie with filter", () => {
    const lastMovieTitle = moviesList.results[19].title;
    moviesListSteps.fillTheFilterWithValue("Testing");
    cy.get(moviesListPage.moviesListLocator).should("not.exist");
    moviesListSteps.fillTheFilterWithValue(lastMovieTitle);
    moviesListSteps.moviesListHaveLength(1);
    cy.get(moviesListPage.moviesListLocator).click();
    movieSteps.checkTitleOfMovie(lastMovieTitle);
  });

  it("Correct number of movies loaded", () => {
    moviesListSteps.moviesListHaveLength(20);
    cy.get(moviesListPage.notExistingLocator).should("not.exist");
  });
});
