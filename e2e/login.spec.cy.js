describe('Orango HRM Testes', () => {
  
  const selectorsList = {
    usernameField: "[name='username']",
    passwordField:"[name='password']",
    loginButton:"[type='submit']",
    sectionTitleTopBar: '.oxd-topbar-header-breadcrumb > .oxd-text',
    wrongCredentialAlert: "[role='alert']"
    }
  
  
  it('Login - Success', () => { //podemos colocar o ".skip" depois do it para pular esse teste => it.slip(...)
    cy.visit(
      'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
    )
    cy.get(selectorsList.usernameField).type('Admin')
    cy.get(selectorsList.passwordField).type('admin123')
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index') // para verificar se a rota está correta
    cy.get(selectorsList.sectionTitleTopBar).contains('Dashboard') // para verificar sem contem uma palavra específica
  })
    it('Login - Fail', () => {
      cy.visit(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
      )
      cy.get(selectorsList.usernameField).type('Admina')
      cy.get(selectorsList.passwordField).type('admin123456')
      cy.get(selectorsList.loginButton).click()
      cy.get(selectorsList.wrongCredentialAlert)
      
      

  })
})
