/// <reference types= "cypress" />

  context('Landing Page', () => {
    beforeEach(() => {
      cy.visit('/')
    });
    it('Navegar para o cadastro de aulas', () => {
      cy.get('.give-classes').click()
  
      cy.url().should('contain','give-classes')
    });
  
    it('Navegar para pesquisa de professores', () => {
  
      cy.get('.study').click()
      cy.url().should('contain','study')
      
    });
  });
  
