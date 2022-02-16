//Massive issues with testing, was done with app at 11:30, but have had a lot of issues cypress
//I can't get some elements to render during the tests so failed because of that 
//Obviously I need a lot of work with cypress haha
//only tested for elements rendering on the page here


describe('Reservations input data flow', () => {
  
  it('should update value of form input when data is put in form', () => {
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

    cy.visit('http://localhost:3000/')
      .get('input[name="date"]')
        .type('12/24')
        .should('have.value', '12/24')
      .get('input[name="time"]')
        .type('6:00')
        .should('have.value', '6:00')
      .get('input[name="number"]')
        .type('12')
        .should('have.value', '12')   
  });
})
 