import VerificationPage from '../pages/VerificationPage.vue'

export default {
  title: 'Pages/VerificationPage',
  component: VerificationPage,
};

const Template = (args) => ({
  components: { VerificationPage },
  setup() {
    return { args };
  },
  template: '<VerificationPage v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  fullName: 'John Doe', // Default full name
};

// Story simulating the scenario when the user fills the code
export const CodeEntered = Template.bind({});
CodeEntered.args = {
  fullName: 'Jane Smith', // Another user's full name
};

CodeEntered.methods = {
  handleSubmit() {
    alert('Verification code submitted: 123456'); // Placeholder functionality
  },
};

// Story simulating the scenario when the user submits without filling code
export const EmptyCode = Template.bind({});
EmptyCode.args = {
  fullName: 'Empty Code Test', // Placeholder name for this case
};

EmptyCode.methods = {
  handleSubmit() {
    alert('Please fill in all code fields.'); // Placeholder for empty submission
  },
};
