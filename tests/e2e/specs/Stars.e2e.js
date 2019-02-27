describe('Hava a Followers section', () => {
  it('Render Followers section when click the nav area', () => {
    cy.visit('/')
    cy.get(':nth-child(4) > .tab\\.name').click()
    cy.get('.active > p').contains('Stars')
  })
  it('Has starred repos', () => {
    cy.get('[data-v-46b665c2=""][data-v-79f96b18=""]')
      .children().should('have.length', 2)
  })
  it('Unfollow repo', () => {
    cy.reload()
    cy.get(':nth-child(4) > .tab\\.name').click()
      .get(':nth-child(1) > .col-md-3 > .btn').click()
      .wait(10000)
    cy.reload()
    cy.get(':nth-child(4) > .tab\\.name').click()
      .get('[data-v-46b665c2=""][data-v-79f96b18=""]')
      .children().should('have.length', 1)

  })
})
