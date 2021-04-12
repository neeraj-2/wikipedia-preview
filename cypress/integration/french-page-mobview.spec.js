/*eslint-disable */
/// <reference types="Cypress" />

describe('Testing French version for MobileView', () => {

    beforeEach(() => { 
        cy.viewport('iphone-6')
    })

    it('Check URL', () => {
        cy.visit('https://wikimedia.github.io/wikipedia-preview/demo//articles/french.html').url().should('include', '/french.html')  
    })

    it('Check Header', () => {
        cy.getHeader().should('be.visible').should('have.text', 'Wikipedia Preview demo')
     })

     it('Check Image Rendering', () => {
        cy.getImage().should('be.visible')
    })

    it('Check Close Button',()=>{
        cy.getCloseButton().should('be.visible')
    })

    it('Check Title Of the content', () => {
        cy.getTitle()
          .should('be.visible')
          .contains('Conseil de sécurité des Nations unies')
    })

    it('Check Paragraphs rendering of content', () => {
        cy.getParagraphOne().should('be.visible')
        cy.getParagraphTwo().should('be.visible')
        cy.getParagraphThree().should('be.visible')
    })

    it('Check Span résolutions', () => {
        cy.getSpanTwo().should('have.text','résolutions').click()
        cy.getPopupCard().should('be.visible')
        cy.getCardImage().should('be.visible')
        cy.getCardTitleFrench().should('be.visible')
        cy.getCardCloseButton().should('be.visible')
        cy.getCardFooter().should('have.text', 'Continuer à lire').click()
        cy.getCardImageOne().scrollIntoView().should('be.visible')
        cy.getCardImageTwo().should('be.visible')
        cy.getCardImageThree().should('be.visible')
        cy.getReadMore().should('be.visible').should('have.text', 'Lire davantage sur Wikipédia').click()  
        cy.getCardCloseButton().click()
        cy.getPopupCard().should('not.be.visible')
    })

    it('Check Span droit de veto', () => {
        cy.getSpanThree().should('have.text','droit de veto').click()
        cy.getPopupCard().should('be.visible')
        // 
        cy.get('body > div.wp-popup > div > div.wikipediapreview-header > div.wikipediapreview-header-wordmark.wikipediapreview-header-wordmark-fr').should('be.visible')
        cy.getCardCloseButton().should('be.visible')
        cy.getReadMore().should('be.visible').should('have.text', 'Lire davantage sur Wikipédia').click()  
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
