describe('Hava a Followers section', () => {
  it('Render Followers section when click the nav area', () => {
    cy.visit('/')
    cy.get(':nth-child(6) > .tab\\.name').click()
    cy.get('.active > p').contains('Following')
  })
  it('Has two following', () => {
    cy.get('[data-v-63ea58f2=""][data-v-79f96b18=""]')
      .children().should('have.length', 2)
  })
})
