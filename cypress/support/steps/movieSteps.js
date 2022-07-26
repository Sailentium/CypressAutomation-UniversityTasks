import { moviePage } from "../pages/moviePage"

class movieSteps {
  static checkTitleOfMovie(movieTitle) {
    cy.contains(moviePage.movieTitleLocator, movieTitle);
  }
}

export default movieSteps;