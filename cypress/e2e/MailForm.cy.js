describe('MailForm Component', () => {
  beforeEach(() => {
    // Visit the MailForm page before each test
    cy.visit('/mailform');
  });

  it('should display the welcome component and email input', () => {
    // Check if the Welcome component is visible
    cy.get('div').contains('Enter your email').should('be.visible');

    // Take a screenshot of the welcome component
    cy.screenshot('mailform-welcome-component');

    // Check if the email input field is visible
    cy.get('input[placeholder="Email Address"]').should('be.visible');

    // Take a screenshot of the email input field
    cy.screenshot('mailform-email-input-visible');
  });

  it('should enable the submit button for a valid email', () => {
    // Enter a valid email
    cy.get('input[placeholder="Email Address"]').type('test@example.com');

    // Take a screenshot after entering the email
    cy.screenshot('mailform-valid-email-entered');

    // Check if the submit button is enabled
    cy.get('button[type="submit"]').should('not.be.disabled');

    // Take a screenshot of the enabled submit button
    cy.screenshot('mailform-submit-button-enabled');
  });

  it('should trigger Google login when the button is clicked', () => {
    // Click the Google login button
    cy.get('button').contains('Continue with Google').click();

    // Take a screenshot after clicking the Google login button
    cy.screenshot('mailform-google-login-clicked');

    // Add further assertions here based on your Google login logic
  });

  it('should trigger Facebook login when the button is clicked', () => {
    // Click the Facebook login button
    cy.get('button').contains('Continue with Facebook').click();

    // Take a screenshot after clicking the Facebook login button
    cy.screenshot('mailform-facebook-login-clicked');

    // Add further assertions here based on your Facebook login logic
  });

  it('should trigger Apple login when the button is clicked', () => {
    // Click the Apple login button
    cy.get('button').contains('Continue with Apple').click();

    // Take a screenshot after clicking the Apple login button
    cy.screenshot('mailform-apple-login-clicked');

    // Add further assertions here based on your Apple login logic
  });
});
