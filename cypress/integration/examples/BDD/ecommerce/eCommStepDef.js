import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
const homePage=new HomePage()
const productPage=new ProductPage()

Given ('I open Ecommerce page', () => {

    cy.visit(Cypress.env('url')+"/angularpractice/")
})

When ('I add items to cart', ()=> {

    homePage.getShopTab().click()
    this.data.productName.forEach
    (function(element) {
        cy.selectProduct(element)
    })
    productPage.checkOutButton().click()
})

And ('Validate the total prices', ()=>{

    cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {
        const amount=$el.text()
        var res=amount.split(" ")
        res=res[1].trim()
        sum = Number(sum)+Number(res)

    }).then(function () {//making cy.log to occur after the block, javascript runs asynchronous so without .then(function()) it will immediately print 0 because of line 35
        cy.log(sum)
    })

    //assertion of sum
    cy.get('td h3 strong').then(function(element)
    {
        const amount=element.text()
        var res=amount.split(" ")
        var total=res[1].trim()
        expect(Number(total)).to.equal(sum)
    })

})

Then ('select the country submit and verify Thank you', ()=> {

    cy.get(':nth-child(4) > :nth-child(5) > .btn').click()
    cy.get('#country').type('India')
    cy.get('.suggestions > ul > li > a').click()
    cy.get('#checkbox2').click({force:true})
    cy.get('input[type="submit"]').click()
    //cy.get('.alert').should('have.text', 'Success! Thank you! Your order will be delivered in next few weeks :-).')
    cy.get('.alert').then(function(element) {
        const actualText=element.text()
        expect(actualText.includes("Success")).to.be.true
    })
})