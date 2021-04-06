/*eslint-disable */
/// <reference types="Cypress" />

describe('Testing Thai version', () => {

    it('Check URL', () => {
        cy.visit('https://wikimedia.github.io/wikipedia-preview/demo//articles/thai.html').url().should('include', '/thai.html')  
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
    
    it('Check Title', () => {
        cy.getTitle()
        .should('be.visible')
        .contains('เฉลิมชัย โฆษิตพิพัฒน์')
    })

    it('Check Paragraphs rendering of content', () => {
        cy.getParagraphOne().should('be.visible')
        cy.getParagraphTwo().should('be.visible')
    })

    it('Check Span พระมหาชนก', () => {
        cy.get('body > div.container > div.content > p:nth-child(1) > span:nth-child(1)').should('have.text', 'พระมหาชนก').click({force:true})
        cy.getPopupCard().should('be.visible')
        cy.getCardImage().should('be.visible')
        cy.getCardTitleThai().should('be.visible')
        cy.getCardCloseButton().should('be.visible')
        cy.getCardFooter().should('have.text', 'อ่านต่อ').click()
        cy.getCardImageOne().scrollIntoView().should('be.visible')
        cy.getCardImageTwo().should('be.visible')
        cy.getReadMore().should('be.visible').should('have.text', 'อ่านเพิ่มเติมบนวิกิพีเดีย').click()  
        cy.getCardCloseButton().click()
        cy.getPopupCard().should('not.be.visible')
    })

    it('Check Span วัดร่องขุ่น', () => {
        cy.get('body > div.container > div.content > p:nth-child(1) > span:nth-child(2)').should('have.text', 'วัดร่องขุ่น').click({force:true})
        cy.getPopupCard().should('be.visible')
        cy.getCardImage().should('be.visible')
        cy.getCardTitleThai().should('be.visible')
        cy.getCardCloseButton().should('be.visible')
        cy.getCardImageOne().scrollIntoView().should('be.visible')
        cy.getReadMore().should('be.visible').should('have.text', 'อ่านเพิ่มเติมบนวิกิพีเดีย').click()  
        cy.getCardCloseButton().click()
        cy.getPopupCard().should('not.be.visible')
    })

    it('Check Span จังหวัดเชียงราย', () => {
        cy.get('body > div.container > div.content > p:nth-child(2) > span').should('have.text', 'จังหวัดเชียงราย').click({ force: true })
        cy.getPopupCard().should('be.visible')
        cy.getCardImage().should('be.visible')
        cy.getCardTitleThai().should('be.visible')
        cy.getCardCloseButton().should('be.visible')
        cy.getReadMore().should('have.text', 'อ่านเพิ่มเติมบนวิกิพีเดีย').click({force:true})  
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