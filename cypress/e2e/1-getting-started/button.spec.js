// cypress/e2e/button.spec.js
import 'cypress-plugin-snapshots/commands'

describe('Button Component', () => {
    beforeEach(() => {
      // Assuming you have a way to mount your button component
      cy.visit('/'); // Adjust the path to include your button component if it's rendered there
    });
  
    it('should render the button with the correct label', () => {
      cy.get('button').contains('Your Button Label'); // Replace with the actual button label
    });
  
    it('should emit click event when the button is clicked', () => {
      const clickSpy = cy.spy();
      cy.on('click', clickSpy); // Listen for click events
  
      cy.get('button').click(); // Click the button
      cy.wrap(clickSpy).should('have.been.called'); // Assert that the click event was emitted
    });
  });
  