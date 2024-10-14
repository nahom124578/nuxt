describe('Index Page', () => {
  beforeEach(() => {
    // Visit the index page before each test
    cy.visit('/'); // Adjust the path as necessary
  });

  it('renders the header and elements correctly', () => {
    // Check that the header and main elements are visible
    cy.get('.fixed.left-0.right-0.top-0').should('be.visible');

    // Take a screenshot of the header
    cy.screenshot('index-header-visible');

    cy.get('.text-6xl.font-bold').should('contain.text', 'E-learning Revolution 2');

    // Take a screenshot of the title text
    cy.screenshot('index-title-visible');

    cy.get('.text-xl').should('contain.text', 'We have worked to digitize our school');

    // Take a screenshot of the subheading text
    cy.screenshot('index-subheading-visible');
  });

  it('checks the search input functionality', () => {
    // Check that the search input is present and working
    cy.get('input[placeholder="Search courses..."]').should('be.visible').type('Math courses');

    // Take a screenshot after typing in the search input
    cy.screenshot('index-search-input-typed');

    // Assert that the typed value is correctly reflected in the input
    cy.get('input[placeholder="Search courses..."]').should('have.value', 'Math courses');

    // Take a screenshot of the search input with value
    cy.screenshot('index-search-input-value');
  });
});
