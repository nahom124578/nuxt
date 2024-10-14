import PasswordField from '../components/atoms/PasswordField.vue';
import { ref } from 'vue';

export default {
  title: 'Atoms/PasswordField',
  component: PasswordField,
};

const Template = (args) => ({
  components: { PasswordField },
  setup() {
    const password = ref('');
    return { args, password };
  },
  template: '<PasswordField v-bind="args" v-model:password="password" />',
});

export const Default = Template.bind({});
Default.args = {
  password: '',
};

export const WithValue = Template.bind({});
WithValue.args = {
  password: 'mySecretPassword',
};

export const ShowPassword = Template.bind({});
ShowPassword.args = {
  password: 'mySecretPassword',
};
