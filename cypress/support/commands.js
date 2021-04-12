/*eslint-disable*/ 
Cypress.Commands.add('getHeader',()=>{
    return cy.get('.header')
})

Cypress.Commands.add('getImage',()=>{
    return cy.get('.cover')
})

Cypress.Commands.add('getCloseButton',()=>{
    return cy.get('.close-btn')
})

Cypress.Commands.add('getTitle',()=>{
    return cy.get('.title')
})

Cypress.Commands.add('getParagraphOne',()=>{
    return cy.get('body > div.container > div.content > p:nth-child(1)')
})

Cypress.Commands.add('getParagraphTwo',()=>{
    return cy.get('body > div.container > div.content > p:nth-child(2)')
})

Cypress.Commands.add('getParagraphThree',()=>{
    return cy.get('body > div.container > div.content > p:nth-child(3)')
})

Cypress.Commands.add('getParagraphFour',()=>{
    return cy.get('body > div.container > div.content > p:nth-child(4)')
})

Cypress.Commands.add('getSpanOne',()=>{
    return cy.get('body > div.container > div.content > p:nth-child(1) > span')
})

Cypress.Commands.add('getSpanTwo',()=>{
    return cy.get('body > div.container > div.content > p:nth-child(2) > span')
})

Cypress.Commands.add('getSpanThree',()=>{
    return cy.get('body > div.container > div.content > p:nth-child(3) > span')
})

Cypress.Commands.add('getSpanFour',()=>{
    return cy.get('body > div.container > div.content > p:nth-child(4) > span')
})

Cypress.Commands.add('getPopupCard',()=>{
    return cy.get('.wp-popup')
})

Cypress.Commands.add('getCardImage',()=>{
    return cy.get('.wikipediapreview-header-image')
})

Cypress.Commands.add('getCardTitleEnglish',()=>{
    return cy.get('body > div.wp-popup > div > div.wikipediapreview-header > div.wikipediapreview-header-wordmark.wikipediapreview-header-wordmark-with-image.wikipediapreview-header-wordmark-en')
})

Cypress.Commands.add('getCardTitleHindi',()=>{
    return cy.get('body > div.wp-popup > div > div.wikipediapreview-header > div.wikipediapreview-header-wordmark.wikipediapreview-header-wordmark-with-image.wikipediapreview-header-wordmark-hi')
})

Cypress.Commands.add('getCardTitleArabic',()=>{
    return cy.get('body > div.wp-popup > div > div.wikipediapreview-header > div.wikipediapreview-header-wordmark.wikipediapreview-header-wordmark-with-image.wikipediapreview-header-wordmark-ar')
})

Cypress.Commands.add('getCardTitleSpanish',()=>{
    return cy.get('body > div.wp-popup > div > div.wikipediapreview-header > div.wikipediapreview-header-wordmark.wikipediapreview-header-wordmark-with-image.wikipediapreview-header-wordmark-es')
})

Cypress.Commands.add('getCardTitleFrench',()=>{
    return cy.get('body > div.wp-popup > div > div.wikipediapreview-header > div.wikipediapreview-header-wordmark.wikipediapreview-header-wordmark-with-image.wikipediapreview-header-wordmark-fr')
})

Cypress.Commands.add('getCardTitleThai',()=>{
    return cy.get('body > div.wp-popup > div > div.wikipediapreview-header > div.wikipediapreview-header-wordmark.wikipediapreview-header-wordmark-with-image.wikipediapreview-header-wordmark-th')
})

Cypress.Commands.add('getCardTitleBahasaIndonessia',()=>{
    return cy.get('body > div.wp-popup > div > div.wikipediapreview-header > div.wikipediapreview-header-wordmark.wikipediapreview-header-wordmark-with-image.wikipediapreview-header-wordmark-id')
})

Cypress.Commands.add('getCardCloseButton',()=>{
    return cy.get('.wikipediapreview-header-closebtn')
})

Cypress.Commands.add('getCardFooter',()=>{
    return cy.get('body > div.wp-popup > div > div.wikipediapreview-footer > span')
})

Cypress.Commands.add('getCardImageOne',()=>{
    return cy.get('body > div.wp-popup > div > div.wikipediapreview-body > div > div > div:nth-child(1)')
})

Cypress.Commands.add('getCardImageTwo',()=>{
    return cy.get('body > div.wp-popup > div > div.wikipediapreview-body > div > div > div:nth-child(2)')
})

Cypress.Commands.add('getCardImageThree',()=>{
    return cy.get('body > div.wp-popup > div > div.wikipediapreview-body > div > div > div:nth-child(3)')
})

Cypress.Commands.add('getReadMore',()=>{
    return cy.get('body > div.wp-popup > div > div.wikipediapreview-footer > a')
})

Cypress.Commands.add('getFooter',()=>{
    return cy.get('.footer')
})

Cypress.Commands.add('getFooterContent',()=>{
    return cy.get('body > div.footer > p')
})

Cypress.Commands.add('getArticleInfo',()=>{
    return cy.get('body > div.footer > p > a:nth-child(1)')
})

Cypress.Commands.add('getViewSource',()=>{
    return cy.get('body > div.footer > p > a:nth-child(5)')
})
