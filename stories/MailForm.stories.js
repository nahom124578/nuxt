import MailForm from '../pages/MailForm.vue'; // Adjust the import path as necessary

export default {
  title: 'Pages/MailForm',
  component: MailForm,
};

const Template = (args) => ({
  components: { MailForm },
  setup() {
    return { args };
  },
  template: '<MailForm v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {};

// Story simulating email input submission
export const EmailRegistered = Template.bind({});
EmailRegistered.args = {
  email: 'registered@example.com',
};

export const EmailNotRegistered = Template.bind({});
EmailNotRegistered.args = {
  email: 'notregistered@example.com',
};

// This is where you can handle the actions or methods
EmailRegistered.methods = {
  handleSubmit() {
    console.log('Email is registered, navigating to LoginField...');
  },
};

EmailNotRegistered.methods = {
  handleSubmit() {
    console.log('Email not registered, navigating to register page...');
  },
};
