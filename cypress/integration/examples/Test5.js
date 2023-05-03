/// <reference types="Cypress" />
 
describe('My Fifth Test Suite', function() 
{
 
it('My Fifth case',function() {
 
cy.visit("http://qaclickacademy.com/practice.php")

//selecting a cell in a table
cy.get('tr td:nth-child(2)').each(($el, index, $list) => {

    const text= $el.text()
    if (text.includes('Python')) {
        //moving to the next sibling
        cy.get('tr td:nth-child(2)').eq(index).next().then(function(price){
            const priceText = price.text()
            expect(priceText).to.equal('25')
        })
    }
})

})
})