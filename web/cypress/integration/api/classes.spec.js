/// <reference types= "cypress" />
/// <reference types= "@bahmutov/cy-api" />

context('Calsses endpoint', () => {
  it('POST deve cadastrar um novo Professor', () => {

    cy.api({
      method: 'POST',
      url: `${Cypress.config().apiUrl}classes`,
      body: {
        "name": "luke",
        "avatar": "jedi",
        "whatsapp": "21999999",
        "bio": "Lorem Ipsum ",
        "subject": "Matemática",
        "cost": 1000,
        "schedule": [
          {
            "week_day": 0,
            "from": "08:00",
            "to": "10:00"
          }
        ]
      }
    }).then((response) => {
      expect(response.status).to.be.equal(201)
      expect(response.body[0]).to.have.property('class_id').to.not.be.null
      cy.wrap(response).its('body').its('0')
        .should('have.a.property', 'week_day')
        .and('not.be.null', 'week_day')


    })
  })

});
