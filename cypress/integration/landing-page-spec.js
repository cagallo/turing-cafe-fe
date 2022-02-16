describe('Reservations landing page flow', () => {
  
  it('should display a reservation on page load', () => {
    cy.intercept('http://localhost:3001/api/v1/reservations',
      [
        {
          "id": 1,
          "name": "Christie",
          "date": "12/29",
          "time": "7:00",
          "number": 12
        },
      ]
    );

    cy.visit('http://localhost:3000/');
    cy.location().should((loc) => {
      expect(loc.href).to.eq('http://localhost:3000/')
    })
      .get('.app-title')
      .get('.resy-form')
      .get('.resy-container')
      .get('.resy-card')
      .get('h2')
        .contains('Christie')
      .get('p')
        .contains('12/29')
      .get('p')
        .contains('7:00')
      .get('p')
        .contains('Number of Guests: 12')
   });
})