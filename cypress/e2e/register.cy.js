describe('Registration Process', () => {
  beforeEach(() => {
    // Visit the registration page
    cy.visit('/register'); // Adjust this to the correct URL for your registration page
  });

  it('renders the form elements correctly', () => {
    cy.get('input[placeholder="Name"]').should('be.visible');
    cy.get('input[placeholder="Surname"]').should('be.visible');
    cy.get('input[placeholder="justatest@gmail.com"]').should('be.visible');
    cy.get('input[placeholder="Password"]').should('be.visible');
    cy.get('input[placeholder="Confirm Password"]').should('be.visible');
    cy.get('button').contains('Enter').should('be.visible');

    // Take a screenshot of the registration form
    cy.screenshot('registration-form-visible');

    // Force the checkbox to be checked despite being hidden
    cy.get('input[type="checkbox"]').check({ force: true });
  });

  it('should show password strength messages based on input', () => {
    // Fill in a weak password
    cy.get('input[placeholder="Password"]').type('weak');
    cy.get('.text-red-500').should('contain', '• At least 8 characters'); // Expecting the message for weak password
    
    // Take a screenshot of the weak password validation
    cy.screenshot('weak-password-validation');

    // Update to a strong password
    cy.get('input[placeholder="Password"]').clear().type('StrongPassword!123');
    cy.get('.text-gray-500').should('contain', '• Strong password!'); // Expecting strong password message

    // Take a screenshot of the strong password validation
    cy.screenshot('strong-password-validation');
  });

  it('should show passwords do not match message', () => {
    // Fill in the password
    cy.get('input[placeholder="Password"]').type('StrongPassword!123');
    cy.get('input[placeholder="Confirm Password"]').type('DifferentPassword!456');

    // Check for passwords do not match message
    cy.get('.text-red-500').should('contain', 'Passwords do not match!'); // Expecting passwords do not match message

    // Take a screenshot of the password mismatch validation
    cy.screenshot('passwords-do-not-match');
  });
});
