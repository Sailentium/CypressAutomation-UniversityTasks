describe("Movie site testing", () => {
  beforeEach(() => {
    const moviesListUrl =
      "https://api.themoviedb.org/3/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&api_key=";

    const configUrl =
      "https://api.themoviedb.org/3/configuration?api_key=06f11504a80ab5304c3b296affa8b777";

    cy.intercept(moviesListUrl, {
      fixture: "moviesList",
    });
    cy.intercept(configUrl, {
      fixture: "config",
    });
    cy.visit("http://localhost:3000/");
    cy.contains("Filter");
  });

  it("Page of the first movie loading correctly", () => {
    cy.get("[data-testid='movies-list-movie']")
      .first()
      .then((movie) => {
        const firstMovieUrl = movie.attr("href");
        cy.get("[data-testid='movies-list-movie']").first().click();
        cy.url().should("eq", "http://localhost:3000" + firstMovieUrl);
        cy.url().should("include", firstMovieUrl);
      });
  });

  it("Check that Filter exists and working", () => {
    cy.get("input").should("exist");
    cy.get("input").type("Testing");
    cy.get("[data-testid='movies-list-movie']").should("not.exist");
    cy.get("input").clear().type("Sonic");
    cy.get("[data-testid='movies-list-movie']").should("exist");
    cy.get("[data-testid='movies-list-movie']").should("have.length", 1);
  });

  it("Correct number of movies loaded", () => {
    cy.get("[data-testid='movies-list-movie']").should("have.length", 20);
    cy.get("[data-testid='movies-list-movie']").should("exist");
    cy.get("[data-testid='movies-full-movie']").should("not.exist");
  });

  it("Testing the second movie attributies with fixture", () => {
    cy.fixture("moviesList").then((jsonData) => {
      expect(jsonData.results[1].title).to.eq("Jurassic World Dominion");
      expect(jsonData.results[1].original_language).to.eq("en");
      expect(jsonData.results[1].id).to.eq(507086);
    });
  });
});
