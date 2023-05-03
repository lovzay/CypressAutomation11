/// <reference types="Cypress" />

 
describe('My Sixth Test Suite', function() 
{
 
it('My Sixth case',function() {
 
cy.visit("http://qaclickacademy.com/practice.php")
//testing mouse hover content
//cy.get('.mouse-hover-content').invoke('show')

//implementing force on non-visibile elements
cy.contains('Top').click({force: true})
cy.url().should('include', 'top')

})
})