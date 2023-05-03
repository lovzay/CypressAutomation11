/// <reference types="Cypress" />

import HomePage from "../pageObjects/HomePage"
import ProductPage from "../pageObjects/Products"
describe('My eighth Test Suite', function() 
{
    before(function() {
        //runs once before all tests in the block
        cy.fixture('example').then(function(data) {
            this.data=data
        })
    })

it('My eighth case',function() {
    
const homePage=new HomePage()
const productPage=new ProductPage()
//setting env value for the url
    cy.visit(Cypress.env('url')+"/angularpractice/")
    //frame work coding cypress, commands.js, example.json, homepage.js, products.js
    homePage.getEditBox().type(this.data.name)
    homePage.getGender().select(this.data.gender)
    homePage.getTwoWayDataBinding().should('have.value', this.data.name)
    homePage.getEditBox().should('have.attr', 'minlength', '2')
    homePage.getEntrepreneur().should('be.disabled')
    //cy.pause()
//test paused
Cypress.config('defaultCommandTimeout', 8000)
    homePage.getShopTab().click()
    this.data.productName.forEach
    (function(element) {
        cy.selectProduct(element)
    })
    productPage.checkOutButton().click()
    //initializing sum amount to 0
    var sum=0
    
    //add numbers, converting string to numbers, splitting text and removing currency sign for proper addition steps
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

    //checking out
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
}) 