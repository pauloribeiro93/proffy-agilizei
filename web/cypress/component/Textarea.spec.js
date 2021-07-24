import React from 'react'
import Textarea from '../../src/components/Textarea';
import { mount } from 'cypress-react-unit-test'

import { BrowserRouter as Router } from 'react-router-dom';

context('Teste de componente', () => {
  const baseCSS = '/__root/src/assets/styles/global.css'
  const indexCSS = '/__root/src/components/Textarea/styles/style.css'
  it('O Componente de TextArea deve renderizar', () => {
    const name = "bio"
    const label = "Biografia"
    const bio = "teste"
    mount(
      <Router>
        <Textarea
          name={name}
          label={label}
          value={bio}
          onChange={(e) => { setBio(e.target.value) }}
        />
      </Router>
      ,
      {
        stylesheet: [baseCSS, indexCSS]
      }
    )
    cy.get('#bio').as('textarea')
    cy.get('label').as('label')
    cy.get('body').as('body')

    cy.get('@textarea').should('have.text', bio)

    cy.get('@label').then(($elemento) => {
      expect($elemento.css('color')).to.be.equal('rgb(106, 97, 128)')
    })
  });
});



