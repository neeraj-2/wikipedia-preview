/*eslint-disable */
/// <reference types="Cypress" />

describe('Testing Arabic version for MobileView', () => {

    beforeEach(() => { 
        cy.viewport('iphone-6')
    })

    it('Check URL', () => {
        cy.visit('https://wikimedia.github.io/wikipedia-preview/demo//articles/arabic.html').url().should('include', '/arabic.html') 
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
          .contains('أم كلثوم (مطربة)')
    })

    it('Check Paragraphs rendering of content', () => {
        cy.getParagraphOne().should('be.visible')
        cy.getParagraphTwo().should('be.visible')
    })

    // it('Check Span القاهرة', () => {
    //     cy.get('body > div.container > div.content > p:nth-child(1) > span:nth-child(1)', {timeout:15000}).should('have.text', 'القاهرة').click({ force: true })
    //     cy.getPopupCard().should('be.visible')
    //     cy.get('body > div.wp-popup > div > div.wikipediapreview-header > div.wikipediapreview-header-image').should('be.visible')
    //     cy.getCardTitleArabic().should('be.visible')
    //     cy.getCardCloseButton().should('be.visible')
    //     cy.getCardFooter().should('have.text', 'مواصلة القراءة').click({force:true})
    //     cy.getCardImageOne().scrollIntoView().should('be.visible')
    //     cy.getCardImageTwo().should('be.visible')
    //     cy.getCardImageThree().should('be.visible')
    //     cy.getReadMore().should('be.visible').should('have.text', 'اقرأ المزيد عن ويكيبيديا').click()  
    //     cy.getCardCloseButton().click()
    //     cy.getPopupCard().should('not.be.visible')
    // })

    it('Check Span مصر', () => {
        cy.get('body > div.container > div.content > p:nth-child(1) > span:nth-child(2)').should('have.text', 'مصر').click({ force: true })
        cy.getPopupCard().should('be.visible')
        cy.getCardImage().should('be.visible')
        cy.getCardTitleArabic().should('be.visible')
        cy.getCardCloseButton().should('be.visible')
        cy.getCardFooter().should('have.text', 'مواصلة القراءة').click({force:true})
        cy.getCardImageOne().scrollIntoView().should('be.visible')
        cy.getCardImageTwo().should('be.visible')
        cy.getCardImageThree().should('be.visible')
        cy.getReadMore().should('be.visible').should('have.text', 'اقرأ المزيد عن ويكيبيديا').click()  
        cy.getCardCloseButton().click()
        cy.getPopupCard().should('not.be.visible')  
    })

    it('Check Span محمد_عبد_الوهاب ', () => {
        cy.get('body > div.container > div.content > p:nth-child(2) > span').should('have.text', 'محمد_عبد_الوهاب').click({ force: true })
        cy.getPopupCard().should('be.visible')
        cy.get('body > div.wp-popup > div > div.wikipediapreview-header > div.wikipediapreview-header-image').should('be.visible')
        cy.getCardTitleArabic().should('be.visible')
        cy.getCardCloseButton().should('be.visible')
        cy.getCardFooter().should('have.text', 'مواصلة القراءة').click({force:true})
        cy.getCardImageOne().scrollIntoView().should('be.visible')
        cy.getCardImageTwo().should('be.visible')
        cy.getCardImageThree().should('be.visible')
        cy.getReadMore().should('be.visible').should('have.text', 'اقرأ المزيد عن ويكيبيديا').click()  
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