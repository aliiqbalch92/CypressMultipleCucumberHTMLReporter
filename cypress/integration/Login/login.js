/// <reference types = "cypress"/>

/ <reference types = "chai"/>

Given ('User has navigated to login url', ()=>{
    cy.viewport(1280,720)
    cy.visit('https://codedamn.com/')
    cy.get('.px-5').click()
});

When ('User provides credentials', (datatable)=>{
    datatable.hashes().forEach(element => {
       
      cy.get('[data-testid=username]').type(element.username)
      cy.get('[data-testid=password]').type(element.password)
    })
    });

When ('User clicks login', ()=>{
    cy.get('[data-testid=login]').click()
});

Then ('User is logged in', ()=>{
    cy.wait(3000)
    cy.url().should('include', '/dashboards')
});