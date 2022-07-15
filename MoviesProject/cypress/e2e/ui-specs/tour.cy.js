describe("Movie site is loading", () => {

it('Page loading correctly', () => {
    expect(true).to.equal(true);
    cy.visit("http://localhost:3000/");
    cy.contains("Filter");
    cy.contains("Bilter");
});


})