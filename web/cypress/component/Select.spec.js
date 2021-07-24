import React from 'react'
import Select from '../../src/components/Select';
import { mount } from 'cypress-react-unit-test'
import Teacherlist from '../.././src/pages/TeacherList/index'

import { BrowserRouter as Router } from 'react-router-dom';

context('Teste de componente', () => {
  const baseCSS = '/__root/src/assets/styles/global.css'
  const indexCSS = '/__root/src/components/Select/styles/style.css'
  it('O Componente Select deve renderizar com sucesso', () => {
    
    mount(
      <Router>
        <Select
          name="week_day"
          label="Dia da Semana"
          value={Teacherlist.weekDay}
          onChange={e => { setWeekDay(e.target.value) }}
          options={[
            { value: '0', label: 'Domingo' },
            { value: '1', label: 'Segunda-feira' },
            { value: '2', label: 'Terça-feira' },
            { value: '3', label: 'Quarta-feira' },
            { value: '4', label: 'Quinta-feira' },
            { value: '5', label: 'Sexta-feira' },
            { value: '6', label: 'Sábado' },
          ]}
        />
      </Router>
      ,
      {
        stylesheet: [baseCSS, indexCSS]
      }
    )
    cy.get('#week_day').as('weekDay')

    cy.get('@weekDay').then(($elemento) => {
      cy.get($elemento).find('option').should('have.length', '8')
    })
  
  });
});






