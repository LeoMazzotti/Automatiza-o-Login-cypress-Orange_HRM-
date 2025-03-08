describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://leonardomazzotti.netlify.app/recepcao/')
    cy.get("#inPaciente").type("Léo")
    cy.get('[onclick="adicionar()"]').click()
    cy.get("#inPaciente").type("Cláudio")
    cy.get('[onclick="adicionar()"]').click()
    cy.get('[onclick="atender()"]').click()
    cy.get("#inPaciente").type("Márcia")
    cy.get('[onclick="urgencia()"]').click()
    cy.get('[onclick="atender()"]').click()
    
  })
})