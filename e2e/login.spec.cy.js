describe('Orango HRM Testes', () => {
  it('Login - Success', () => { //podemos colocar o ".skip" depois do it para pular esse teste => it.slip(...)
    cy.visit(
      'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
    )
    cy.get('[name="username"]').type('Admin')
    cy.get('[name="password"]').type('admin123')
    cy.get('[type="submit"]').click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index') // para verificar se a rota está correta
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').contains('Dashboard') // para verificar sem contem uma palavra específica
  })
    it('Login - Fail', () => {
      cy.visit(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
      )
      cy.get('[name="username"]').type('Admina')
      cy.get('[name="password"]').type('admin123456')
      cy.get('[type="submit"]').click()
      cy.get('[role="alert"]')
      
      

  })
})
