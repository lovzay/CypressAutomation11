/// <reference types="Cypress" />

 
describe('My Seventh Test Suite', function() 
{
 
it('My Seventh case',function() {
 
    cy.visit("http://qaclickacademy.com/practice.php")
//operate on a different domain

cy.get('#opentab').then(function(el){
    const url = el.prop('href')
    cy.visit(url)//qaclickacademy.com
    cy.origin(url, () => {
        cy.get("div.sub-menu-bar a[href*='about']").click()
        //if operating on a different domain, you can only write code about it in this block
    })
    
})


})
})