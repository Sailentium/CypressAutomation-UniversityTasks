import { moviesListPage } from "../pages/moviesListPage";

class moviesListSteps {
  static fillTheFilterWithValue(movieName) {
    cy.get(moviesListPage.filterInputFieldLocator).should("exist");
    cy.get(moviesListPage.filterInputFieldLocator).clear().type(`${movieName}`);
  }

  static moviesListHaveLength(length) {
    cy.get(moviesListPage.moviesListLocator).should("exist");
    cy.get(moviesListPage.moviesListLocator).should("have.length", length);
  }
}

export default moviesListSteps;
