import LoginForm from '../pages/LoginForm.vue'; // Adjust the import path as necessary

export default {
  title: 'Pages/LoginForm',
  component: LoginForm,
};

const Template = (args) => ({
  components: { LoginForm },
  setup() {
    return { args };
  },
  template: '<LoginForm v-bind="args" @loginSuccess="onLoginSuccess" />',
});

export const Default = Template.bind({});
Default.args = {
  password: '', // Initial password state
};

// Story to simulate correct password input
export const SuccessfulLogin = Template.bind({});
SuccessfulLogin.args = {
  password: 'correctpassword', // Simulating correct password input
};

// Story to simulate incorrect password input
export const UnsuccessfulLogin = Template.bind({});
UnsuccessfulLogin.args = {
  password: 'wrongpassword', // Simulating incorrect password input
};

