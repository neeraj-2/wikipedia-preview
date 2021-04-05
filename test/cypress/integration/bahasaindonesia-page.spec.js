/*eslint-disable */
/// <reference types="Cypress" />

describe('Testing Bahasa Indonesia version', () => {
    it('Check URL', () => {
        cy.visit('http://localhost:8080/articles/bahasaIndonesia.html').url().should('include', '/bahasaIndonesia.html')
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
          .contains('Gili Trawangan')
    })

    it('Check Paragraphs rendering of content', () => {
        cy.getParagraphOne().should('be.visible')
        cy.getParagraphTwo().should('be.visible')
    })

  
    ///Bug in 1st span//

    it('Check Span Gili Meno ', () => {
        cy.getSpanTwo().should('have.text','Gili Meno').click()
        cy.getPopupCard().should('be.visible')
        cy.getCardImage().should('be.visible')
        cy.getCardTitleBahasaIndonessia().should('be.visible')
        cy.getCardCloseButton().should('be.visible')
        cy.getCardFooter().should('have.text', 'Lanjutkan Membaca').click()
        cy.getCardImageOne().scrollIntoView().should('be.visible')
        cy.getCardImageTwo().should('be.visible')
        cy.getReadMore().should('be.visible').should('have.text', 'Baca lebih lanjut tentang Wikipedia').click()  
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