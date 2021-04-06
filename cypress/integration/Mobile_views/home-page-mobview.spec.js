/*eslint-disable */
// / <reference types="Cypress" />

describe( 'Testing HomePage for Mobileview', () => {

	beforeEach( () => {
		cy.viewport( 'iphone-6' )
	} )

	it( 'Check URL', () => {
		cy.visit( 'http://localhost:8080/index.html' ).url().should( 'include', '/index.html' )
	} )

	it( 'Check Header', () => {
		cy.get( 'body > div.header' ).should( 'be.visible' ).should( 'have.text', 'Wikipedia Preview demo' )
	} )

	it( 'Check Image Gallery', () => {
		cy.get( 'body > div.container > div > div:nth-child(1) > a > div.image > div' ).should( 'be.visible' )
		cy.get( 'body > div.container > div > div:nth-child(2) > a > div.image > div' ).should( 'be.visible' )
		cy.get( 'body > div.container > div > div:nth-child(3) > a > div.image > div' ).should( 'be.visible' )
		cy.get( 'body > div.container > div > div:nth-child(4) > a > div.image > div' ).should( 'be.visible' )
		cy.get( 'body > div.container > div > div:nth-child(5) > a > div.image > div' ).should( 'be.visible' )
		cy.get( 'body > div.container > div > div:nth-child(6) > a > div.image > div' ).should( 'be.visible' )
		cy.get( 'body > div.container > div > div:nth-child(7) > a > div.image > div' ).should( 'be.visible' )
	} )

	it( 'Check English Content ', () => {
		cy.get( 'body > div.container > div > div:nth-child(1)' ).should( 'be.visible' )
		cy.get( 'body > div.container > div > div:nth-child(1) > a > div.subtitle' ).should( 'have.text', '\n                            Language · English\n                        ' )
		cy.get( 'body > div.container > div > div:nth-child(1) > a > div.title' ).should( 'have.css', 'font-size', '16px' )
	} )

	it( 'Check Bahasa Indonesia Content ', () => {
		cy.get( 'body > div.container > div > div:nth-child(2)' ).should( 'be.visible' )
		cy.get( 'body > div.container > div > div:nth-child(2) > a > div.subtitle' ).should( 'have.text', '\n                            Language · Bahasa Indonesia\n                        ' )
		cy.get( 'body > div.container > div > div:nth-child(2) > a > div.title' ).should( 'have.css', 'font-size', '16px' )
	} )

	it( 'Check Hindi Content ', () => {
		cy.get( 'body > div.container > div > div:nth-child(3)' ).should( 'be.visible' )
		cy.get( 'body > div.container > div > div:nth-child(3) > a > div.subtitle' ).should( 'have.text', '\n                            Language · Hindi\n                        ' )
		cy.get( 'body > div.container > div > div:nth-child(3) > a > div.title' ).should( 'have.css', 'font-size', '16px' )
	} )

	it( 'Check Thai Content ', () => {
		cy.get( 'body > div.container > div > div:nth-child(4)' ).should( 'be.visible' )
		cy.get( 'body > div.container > div > div:nth-child(4) > a > div.subtitle' ).should( 'have.text', '\n                            Language · Thai\n                        ' )
		cy.get( 'body > div.container > div > div:nth-child(4) > a > div.title' ).should( 'have.css', 'font-size', '16px' )
	} )

	it( 'Check Spanish Content ', () => {
		cy.get( 'body > div.container > div > div:nth-child(5)' ).should( 'be.visible' )
		cy.get( 'body > div.container > div > div:nth-child(5) > a > div.subtitle' ).should( 'have.text', '\n                            Language · Spanish\n                        ' )
		cy.get( 'body > div.container > div > div:nth-child(5) > a > div.title' ).should( 'have.css', 'font-size', '16px' )

	} )
	it( 'Check French Content ', () => {
		cy.get( 'body > div.container > div > div:nth-child(6)' ).should( 'be.visible' )
		cy.get( 'body > div.container > div > div:nth-child(6) > a > div.subtitle' ).should( 'have.text', '\n                            Language · French\n                        ' )
		cy.get( 'body > div.container > div > div:nth-child(6) > a > div.title' ).should( 'have.css', 'font-size', '16px' )
	} )

	it( 'Check Arabic Content ', () => {
		cy.get( 'body > div.container > div > div:nth-child(7)' ).should( 'be.visible' )
		cy.get( 'body > div.container > div > div:nth-child(7) > a > div.subtitle' ).should( 'have.text', '\n                            Language · Arabic\n                        ' )
	} )

	it( 'Check Footer', () => {
		cy.getFooter().should( 'be.visible' )
	} )

	it( 'Check Footer Content', () => {
		cy.getFooterContent().should( 'be.visible' )
	} )

} )
