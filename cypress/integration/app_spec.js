describe('Site Navigation', function () {
  it('Visits the Kitchen Sink', function () {
    cy.visit('/')
    cy.wait(1000 * 3)
    cy.contains('A Nerd').click()

    cy.wait(5000 * 3)
    cy.visit('/')
    cy.contains('A Wanderer').click()

    cy.wait(5000 * 3)
    cy.visit('/')
    cy.contains('A Creative').click()
  })
})
