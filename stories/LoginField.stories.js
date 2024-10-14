import LoginField from '../pages/LoginField.vue'; // Adjust the import path as necessary

export default {
  title: 'Pages/LoginField',
  component: LoginField,
};

const Template = (args) => ({
  components: { LoginField },
  setup() {
    return { args };
  },
  template: '<LoginField v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  password: '', // Initial password state
};

export const WithPassword = Template.bind({});
WithPassword.args = {
  password: 'MyPassword123', // Pre-filled password for demonstration
};
