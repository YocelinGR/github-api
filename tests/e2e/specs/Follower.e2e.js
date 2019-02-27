describe('Hava a Followers section', () => {
  it('Render Followers section when click the nav area', () => {
    cy.visit('/')
    cy.get(':nth-child(5) > .tab\\.name').click()
    cy.get('.active > p').contains('Followers')
  })
  it('Has followers', () => {
    cy.get('[data-v-6be1b6d1=""][data-v-79f96b18=""]')
      .children().should('have.length', 19)
  })
})
