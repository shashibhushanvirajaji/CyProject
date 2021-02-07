/// <reference types="cypress" />
describe('testing automation practic website ',()=>{

    beforeEach(()=>{
        cy.visit('http://testautomationpractice.blogspot.com/')
    })

    it('testing title',()=>{
        cy.title().should('eq', 'Automation Testing Practice')
    })

    it('checking the url',()=>{
        cy.url().should('include', 'http://testautomationpractice.blogspot.com/')
        //cy.url().should('eq', 'http://localhost:8000/users/1/edit')
    })

    it('checking landing page ',()=>{
        cy.get('.titlewrapper > .title').then($element=>{
            const texxt = $element.text()
            expect(texxt).to.be.eq('\nAutomation Testing Practice\n')
            //.includes('Automation Testing Practice')
        })
    })
})