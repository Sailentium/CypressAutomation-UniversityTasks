describe("Movie site is loading", () => {

beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.contains("Filter");
});

it('Page of the first movie loading correctly', () => {
    cy.get("[data-testid='movies-list-movie']").first().then((movie) => {
        const firstMovieUrl = movie.attr("href");
        cy.get("[data-testid='movies-list-movie']").first().click();
        cy.url().should('eq','http://localhost:3000' + firstMovieUrl);
        cy.url().should('include',firstMovieUrl);
    })
});

it('Correct number of movies loaded', () => {
    cy.get("[data-testid='movies-list-movie']").should('have.length', 20);
});

})