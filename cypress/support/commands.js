// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
// ***********************************************

// Custom login command that can be reused in tests
Cypress.Commands.add('login', (email, password) => {
    cy.visit('/login'); // Visit login page
    cy.get('input[name="email"]').type(email); // Type email
    cy.get('input[name="password"]').type(password); // Type password
    cy.get('button[type="submit"]').click(); // Submit the form
  });
  
  // Example of dragging an element (child command)
  Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => {
    // Your drag implementation here
  });
  
  // Example of dismissing an element (dual command)
  Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => {
    // Your dismiss implementation here
  });
  
  // Overwriting an existing 'visit' command
  Cypress.Commands.overwrite('visit', (originalFn, url, options) => {
    // Custom logic before visiting a URL
    originalFn(url, options);
  });
  