/*eslint-disable */
/// <reference types="Cypress" />

describe('Testing Spanish version', () => {

    it('Check URL', () => {
        cy.visit('https://wikimedia.github.io/wikipedia-preview/demo//articles/spanish.html').url().should('include', '/spanish.html') 
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
          .contains('Nikola Tesla')
    })

    it('Check Paragraphs rendering of content', () => {
        cy.getParagraphOne().should('be.visible')
        cy.getParagraphTwo().should('be.visible')
        cy.getParagraphThree().should('be.visible')
    })

    it('Check Span motor de corriente alterna', () => {
        cy.getSpanOne().should('have.text','motor de corriente alterna').click({force:true})
        cy.getPopupCard().should('be.visible')
        cy.getCardImage().should('be.visible')
        cy.getCardTitleSpanish().should('be.visible')
        cy.getCardCloseButton().should('be.visible')
        cy.getCardFooter().should('have.text', 'Continuar leyendo').click({force:true})
        cy.getCardImageOne().scrollIntoView().should('be.visible')
        cy.getCardImageTwo().should('be.visible')
        cy.getCardImageThree().should('be.visible')
        cy.getReadMore().should('be.visible').should('have.text', 'Leer más en Wikipedia').click({force:true})  
        cy.getCardCloseButton().click({force:true})
        cy.getPopupCard().should('not.be.visible')
    })

    it('Check Span Edison', () => {
        cy.getSpanTwo().should('have.text','Edison').click({force:true})
        cy.getPopupCard().should('be.visible')
        cy.getCardImage().should('be.visible')
        cy.getCardTitleSpanish().should('be.visible')
        cy.getCardCloseButton().should('be.visible')
        cy.getCardFooter().should('have.text', 'Continuar leyendo').click({force:true})
        cy.getCardImageOne().scrollIntoView().should('be.visible')
        cy.getCardImageTwo().should('be.visible')
        cy.getCardImageThree().should('be.visible')
        cy.getReadMore().should('be.visible').should('have.text', 'Leer más en Wikipedia').click({force:true})  
        cy.getCardCloseButton().click({force:true})
        cy.getPopupCard().should('not.be.visible')
    })

    it('Check Span Smiljan', () => {
        cy.getSpanThree().should('have.text','Smiljan').click({force:true})
        cy.getPopupCard().should('be.visible')
        cy.getCardImage().should('be.visible')
        cy.getCardTitleSpanish().should('be.visible')
        cy.getCardCloseButton().should('be.visible')
        cy.getCardImageOne().scrollIntoView().should('be.visible')
        cy.getCardImageTwo().should('be.visible')
        cy.getReadMore().should('be.visible').should('have.text', 'Leer más en Wikipedia').click({force:true})  
        cy.getCardCloseButton().click({force:true})
        cy.getPopupCard().should('not.be.visible')
    })

    it('Check Footer', () => {
        cy.getFooter().should('be.visible')
    })

    it('Check Footer Content',()=>{
        cy.getFooterContent().should('be.visible')
        cy.getArticleInfo().should('be.visible').click({force:true})
        cy.getViewSource().should('be.visible').click({force:true})
    })

}) 
