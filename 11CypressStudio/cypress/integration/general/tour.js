// Assertions
// docs.cypress.io/guides/references/assertions.html#Common-Assertions
// https://www.chaijs.com/api/bdd/#method_not
// https://docs.cypress.io/api/commands/should.html#Syntax

// before(() => {
//   cy.visit("http://localhost:3000/")
// })

// beforeEach(() => {
//   cy.visit("http://localhost:3000/")
// })

// before - once, before all
// beforeEach - runs before every block
// test
// afterEach - runs after every block
// after - runs once after all

describe("Make sure site loads", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/")
  })

  it("Page Loads", () => {
    cy.contains("Filter")

    cy.get("[data-testid=movies-list-movie]")
      .first()
      .then(($movie) => {
        const movieUrl = $movie.attr("href")
        cy.get("[data-testid=movies-list-movie]").first().click()
        cy.url().should("include", movieUrl)
      })

    expect(true).to.equal(true)
  })

  it("Correct number of movies", () => {
    cy.get("[data-testid=movies-list-movie]").should("have.length", 20)
    cy.get("[data-testid=movies-list-movie]").should("have.length", 20)
  })

  it("Understands chainers", () => {
    cy.get("[data-testid=movies-list-movie]").should("have.length", 20)
    cy.get("[data-testid=movies-list-movie]").should("exist")
    cy.get("[data-testid=movies-loading-movie]").should("not.exist")
    /* ==== Generated with Cypress Studio ==== */
    cy.get('input').click();
    cy.get('input').type('Won{meta+backspace}');
    cy.get(':nth-child(1) > [data-testid=movies-list-movie] > img').click();
    /* ==== End Cypress Studio ==== */
  })
})
