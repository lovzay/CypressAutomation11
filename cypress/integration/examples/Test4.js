/// <reference types="Cypress" />
 
describe('My Fourth Test Suite', function() 
{
 
it('My Fourth case',function() {

cy.visit("http://qaclickacademy.com/practice.php")
cy.get('#alertbtn').click()
cy.get('[value="Confirm"]').click()
//window:alert
cy.on('window:alert',(str)=>
{
    //Mocha
    expect(str).to.equal('Hello , share this practice page and share your knowledge')
})
 
cy.on('window:confirm',(str)=>
{
    //Mocha
    expect(str).to.equal('Hello , Are you sure you want to confirm?')
})
 //working on a different url, workaround method using jQuery
cy.get('#opentab').invoke('removeAttr','target').click()
 //asserting url
cy.url().should('include','qaclickacademy')
//going back to previous page
cy.go('back')

})
})