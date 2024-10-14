import BackToLogin from '../components/atoms/BackToLogin.vue'; 
export default {
  title: 'Molecules/BackToLogin',
  component: BackToLogin,
};

const Template = (args) => ({
  components: { BackToLogin },
  setup() {
    return { args };
  },
  template: '<BackToLogin v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {};
