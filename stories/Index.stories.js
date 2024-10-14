import Index from '../pages/index.vue'; // Adjust the path as necessary
import { ref } from 'vue';

export default {
  title: 'Pages/Index', // Category and name for the Storybook
  component: Index,
};

const Template = (args) => ({
  components: { Index },
  setup() {
    const isLoginVisible = ref(args.isLoginVisible);
    const email = ref(args.email);

    return { isLoginVisible, email };
  },
  template: '<Index :isLoginVisible="isLoginVisible" :email="email" />',
});

// Default story
export const Default = Template.bind({});
Default.args = {
  isLoginVisible: false,
  email: '',
};

// Story when the login alert is visible
export const LoginVisible = Template.bind({});
LoginVisible.args = {
  isLoginVisible: true,
  email: '',
};

// Story with a pre-filled email
export const WithPreFilledEmail = Template.bind({});
WithPreFilledEmail.args = {
  isLoginVisible: false,
  email: 'test@example.com',
};

// Story when navigating to MailForm
export const NavigateToMailForm = Template.bind({});
NavigateToMailForm.args = {
  isLoginVisible: false,
  email: '',
};

// Additional configurations can be added as needed
