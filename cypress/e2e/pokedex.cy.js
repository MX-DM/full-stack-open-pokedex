/* eslint-disable no-undef */
describe('Pokedex', function() {
  beforeEach(function() {
    cy.visit('http://localhost:5000')
  })
  it('front page can be opened', function() {
    cy.contains('force failure')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
  it('pokemon page can be opened by clicking from the front page', function () {
    cy.contains('pikachu').click()
    cy.contains('lightning rod').should('be.visible')
  })
})
