import userData from '../fixtures/users/user-data.json'

describe('Orango HRM Testes', () => {
  
  const selectorsList = {
    usernameField: "[name='username']",
    passwordField:"[name='password']",
    loginButton:"[type='submit']",
    dashBoardGrid: ".oranghrm-dashboard-grid",
    wrongCredentialAlert: "[role='alert']"
    }
    
  it('Login - Success', () => { //podemos colocar o ".skip" depois do it para pular esse teste => it.slip(...)
    cy.visit(
      'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
    )
    cy.get(selectorsList.usernameField).type()
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index') // para verificar se a rota está correta
    cy.get(selectorsList.dashBoardGrid) // para verificar sem contem uma palavra específica
  })
    it('Login - Fail', () => {
      cy.visit(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
      )
      cy.get(selectorsList.usernameField).type(userData.userFail.userName)
      cy.get(selectorsList.passwordField).type(userData.userFail.password)
      cy.get(selectorsList.loginButton).click()
      cy.get(selectorsList.wrongCredentialAlert)
      
      

  })
})
