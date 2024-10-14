import LoginSuccess from '../pages/LoginSuccess.vue'; // Adjust the import path as necessary

export default {
  title: 'Pages/LoginSuccess',
  component: LoginSuccess,
};

const Template = (args) => ({
  components: { LoginSuccess },
  setup() {
    return { args };
  },
  template: '<LoginSuccess v-bind="args" @goToMarketplace="onGoToMarketplace" />',
});

export const Default = Template.bind({});
Default.args = {};

// Story simulating successful login
export const SuccessfulLogin = Template.bind({});
SuccessfulLogin.args = {};

// This is where you can handle the action when the button is clicked
SuccessfulLogin.methods = {
  onGoToMarketplace() {
    console.log('Navigating to marketplace...');
  },
};
