class apiSteps {
  static createTestData() {
    let moviesListUrl =
      "https://api.themoviedb.org/3/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&api_key=06f11504a80ab5304c3b296affa8b777";

    let configUrl =
      "https://api.themoviedb.org/3/configuration?api_key=06f11504a80ab5304c3b296affa8b777";

    cy.request("GET", moviesListUrl).then((response) => {
      cy.writeFile("cypress/fixtures/moviesList.json", response.body);
    });

    cy.request("GET", configUrl).then((response) => {
      cy.writeFile("cypress/fixtures/config.json", response.body);
    });
  }
}

export default apiSteps;