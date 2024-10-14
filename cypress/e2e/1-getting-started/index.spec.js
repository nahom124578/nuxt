// cypress/e2e/index.spec.js

describe('Index Page', () => {
    beforeEach(() => {
      // Visit the index page before each test
      cy.visit('/'); // Adjust the path as necessary
    });
  
    it('should display the title', () => {
      cy.contains('Your Page Title'); // Replace with the actual title
    });
  
    it('should navigate to another page when a link is clicked', () => {
      cy.get('a').first().click(); // Adjust the selector to match your navigation link
      cy.url().should('include', '/expected-path'); // Change '/expected-path' to the expected URL
    });
  });
  