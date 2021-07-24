/// <reference types= "cypress" />
/// <reference types= "@bahmutov/cy-api" />


context('Connections endpoint', () => {
  
  it('', () => {

    cy.api({
      method: 'GET',
      url: `${Cypress.config().apiUrl}connections`
    }).then((response) => {
      cy.log(response)
      expect(response.status).to.be.equal(200)
      expect(response.duration).lessThan(40)
      expect(response.duration).lt(40)

      expect(response.body)
      .to.have.property('total')
      .to.be.a('number')
      .greaterThan(5)

      expect(response.body.total)
      .an('number')
      .satisfy((totalValue) =>{return totalValue >= 5})

      // Content-Type: application/json; charset=utf-8

      expect(response.headers)
      .to.have.property('content-type')
      .an('string')
      .equal('application/json; charset=utf-8')

    })

  })

  })
