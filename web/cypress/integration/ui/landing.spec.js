/// <reference types= "cypress" />

const larguras = [1200, 1090]

larguras.forEach(largura => {
  context(`Landing Page - Largura:${largura}`, () => {
    beforeEach(() => {
      cy.visit('/');

      cy.viewport(largura, 900)
      cy.log(`Largura:${largura}`)
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
  
})
