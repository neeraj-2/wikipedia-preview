/*eslint-disable */
/// <reference types="Cypress" />

describe('Testing English version for Mobileview', () => {

    beforeEach(() => { 
        cy.viewport('iphone-6')
    })
    it('Check URL', () => {
        cy.visit('https://wikimedia.github.io/wikipedia-preview/demo//articles/english.html').url().should('include', '/english.html')  
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
          .contains('Wildlife of the Central African Republic')
    })

    it('Check Paragraphs rendering of content', () => {
        cy.getParagraphOne().should('be.visible')
        cy.getParagraphTwo().should('be.visible')
        cy.getParagraphThree().should('be.visible')
    })

    it('Check Span Ivory', () => {
        cy.getSpanOne().should('have.text','ivory').click()
        cy.getPopupCard().should('be.visible')
        cy.getCardImage().should('be.visible')
        cy.getCardTitleEnglish().should('be.visible')
        cy.getCardCloseButton().should('be.visible')
        cy.getCardFooter().should('have.text', 'Continue Reading').click()
        cy.getCardImageOne().scrollIntoView().should('be.visible')
        cy.getCardImageTwo().should('be.visible')
        cy.getCardImageThree().should('be.visible')
        cy.getReadMore().should('be.visible').should('have.text', 'Read more on Wikipedia').click()  
        cy.getCardCloseButton().click()
        cy.getPopupCard().should('not.be.visible')
    })

    it('Check Span Bamingui-Bangoran National ', () => {
        cy.getSpanTwo().should('have.text',' Bamingui-Bangoran National').click()
        cy.getPopupCard().should('be.visible')
        cy.getCardImage().should('be.visible')
        cy.getCardTitleEnglish().should('be.visible')
        cy.getCardCloseButton().should('be.visible')
        cy.getCardFooter().should('have.text', 'Continue Reading').click()
        cy.getCardImageOne().scrollIntoView().should('be.visible')
        cy.getCardImageTwo().should('be.visible')
        cy.getReadMore().should('be.visible').should('have.text', 'Read more on Wikipedia').click()  
        cy.getCardCloseButton().click()
        cy.getPopupCard().should('not.be.visible')
    })

    it('Check Span Chinko Project', () => { 
        cy.getSpanThree().should('have.text','Chinko Project').click({force:true})
        cy.getPopupCard().should('be.visible')
        cy.getCardImage().should('be.visible')
        cy.getCardTitleEnglish().should('be.visible')
        cy.getCardCloseButton().should('be.visible')
        cy.getCardFooter().should('have.text', 'Continue Reading').click()
        cy.getCardImageOne().scrollIntoView().should('be.visible')
        cy.getCardImageTwo().should('be.visible')
        cy.getReadMore().should('be.visible').should('have.text', 'Read more on Wikipedia').click()  
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
