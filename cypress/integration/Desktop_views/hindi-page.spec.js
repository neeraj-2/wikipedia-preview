/*eslint-disable */
/// <reference types="Cypress" />

describe('Testing Hindi version', () => {
    
    it('Check URL', () => {
        cy.visit('https://wikimedia.github.io/wikipedia-preview/demo//articles/hindi.html').url().should('include', '/hindi.html') 
    })

    it('Check Header', () => {
        cy.getHeader().should('be.visible').should('have.text', 'Wikipedia Preview demo')
     })

    it('Check Image Rendering', () => {
        cy.getImage().should('be.visible')
    })

    it('Check Close Button',()=>{
        cy.getCloseButton().should('not.be.visible')
    })

    it('Check Title Of the content', () => {
        cy.getTitle()
          .should('be.visible')
          .contains('विस्तार से जानिये कालिंजर दुर्ग के बारे में')
    })

   it('Check Paragraphs rendering of content', () => {
        cy.getParagraphOne().should('be.visible')
        cy.getParagraphTwo().should('be.visible')
        cy.getParagraphThree().should('be.visible')
        cy.getParagraphFour().should('be.visible')
    })

    it('Check Span मन्दिर', () => {
        cy.getSpanOne().should('have.text','मन्दिर').click()
        cy.getPopupCard().should('be.visible')
        cy.getCardImage().should('be.visible')
        cy.getCardTitleHindi().should('be.visible')
        cy.getCardCloseButton().should('be.visible')
        cy.getCardFooter().should('have.text', 'पढ़ना जारी रखें').click()
        cy.getCardImageOne().scrollIntoView().should('be.visible')
        cy.getReadMore().should('be.visible').should('have.text', 'विकिपीडिया पर अधिक पढ़ें').click()  
        cy.getCardCloseButton().click()
        cy.getPopupCard().should('not.be.visible')
    })

    it('Check Span हुमांयू ', () => {
        cy.getSpanTwo().should('have.text','हुमांयू').click()
        cy.getPopupCard().should('be.visible')
        cy.getCardImage().should('be.visible')
        cy.getCardTitleHindi().should('be.visible')
        cy.getCardCloseButton().should('be.visible')
        cy.getCardImageOne().scrollIntoView().should('be.visible')
        cy.getReadMore().should('be.visible').should('have.text', 'विकिपीडिया पर अधिक पढ़ें').click()  
        cy.getCardCloseButton().click()
        cy.getPopupCard().should('not.be.visible')
    })

    it('Check Span अंकगणितीय', () => {
        cy.getSpanFour().should('have.text','अंकगणितीय').click()
        cy.getPopupCard().should('be.visible')
        cy.getCardImage().should('be.visible')
        cy.getCardTitleHindi().should('be.visible')
        cy.getCardCloseButton().should('be.visible')
        cy.getCardFooter().should('have.text', 'पढ़ना जारी रखें').click()
        cy.getCardImageOne().scrollIntoView().should('be.visible')
        cy.getReadMore().should('be.visible').should('have.text', 'विकिपीडिया पर अधिक पढ़ें').click()  
        cy.getCardCloseButton().click()
        cy.getPopupCard().should('not.be.visible')
    })

    it('Check Footer', () => {
        cy.getFooter().should('be.visible')
    })

    it('Check Footer Content',()=>{
        cy.getFooterContent().should('be.visible')
        cy.getArticleInfo().should('be.visible').click()
        cy.getViewSource().should('be.visible').click()
    })

}) 