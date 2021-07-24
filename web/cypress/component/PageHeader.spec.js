/// <reference types ="Cypress"/>

import React from 'react'
import	PageHeader from '../../src/components/PageHeader'
import { mount } from 'cypress-react-unit-test'

import { BrowserRouter as Router } from 'react-router-dom';

context('Teste de componente', () => {
  const baseCSS ='/__root/src/assets/styles/global.css'
  const indexCSS ='/__root/src/components/PageHeader/styles/style.css'
    it('O Componente deve renderizar com sucesso', () => { 
      const title = "Que incrível que você quer dar aulas."
      const description = "O primeiro passo é preencher esse formulário de inscrição."
      mount(
      <Router>
      <PageHeader
        title={title}
        description={description}
      />
      </Router>
      ,
      {
        stylesheet: [baseCSS,indexCSS]
      }
      )
      cy.get('strong').as('title')
      cy.get('p').as('description')
      cy.get('.page-header').as('header')

      cy.get('@title').should('have.text', title)
      cy.get('@description').should('have.text', description)

      cy.get('@header').then(($elemento) => {
        expect($elemento.css('background-color')).to.be.equal('rgb(130, 87, 229)')
      })
    });
});

