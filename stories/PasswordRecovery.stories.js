import PasswordRecovery from '../pages/passwordRecovery.vue'; // Adjust the import path as necessary

export default {
  title: 'Pages/PasswordRecovery',
  component: PasswordRecovery,
};

const Template = (args) => ({
  components: { PasswordRecovery },
  setup() {
    return { args };
  },
  template: '<PasswordRecovery v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  email: '', // Default state with an empty email
};

// Story simulating the form submission
export const RecoveryEmailSubmitted = Template.bind({});
RecoveryEmailSubmitted.args = {
  email: 'user@example.com', // Simulating a filled email field
};

RecoveryEmailSubmitted.methods = {
  onSubmit() {
    alert('Recovery link has been sent to user@example.com!'); // Placeholder functionality
  },
};

export const InvalidEmailFormat = Template.bind({});
InvalidEmailFormat.args = {
  email: 'invalid-email', // Simulating an invalid email format
};

InvalidEmailFormat.methods = {
  onSubmit() {
    alert('Please enter a valid email address.'); // Placeholder functionality
  },
};
