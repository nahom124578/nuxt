import InputField from '../components/atoms/InputField.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
  title: 'Components/InputField',
  component: InputField,
  decorators: [
    () => ({
      template: '<div style="padding: 3rem;"><story /></div>',
    }),
  ],
  argTypes: {
    modelValue: {
      control: 'text',
      description: 'The value of the input field.',
    },
    type: {
      control: 'select',
      options: ['text', 'password', 'email'],
      description: 'The type of the input field.',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the input field.',
    },
    icon: {
      control: 'object',
      description: 'Font Awesome icon for the input field.',
    },
    toggleIcon: {
      control: 'object',
      description: 'Font Awesome icon for toggle functionality.',
    },
  },
};

const Template = (args) => ({
  components: { InputField, FontAwesomeIcon },
  setup() {
    return { args };
  },
  template: `
    <InputField
      v-bind="args"
      @update:modelValue="args.modelValue = $event"
    />
  `,
});

// Default story
export const Default = Template.bind({});
Default.args = {
  modelValue: '',
  type: 'text',
  placeholder: 'Enter text',
  icon: ['fas', 'pen'], // Example icon
};

// Password Input with Toggle
export const PasswordInput = Template.bind({});
PasswordInput.args = {
  modelValue: '',
  type: 'password',
  placeholder: 'Enter your password',
  icon: ['fas', 'lock'],
  toggleIcon: ['fas', 'eye'],
};

// Email Input
export const EmailInput = Template.bind({});
EmailInput.args = {
  modelValue: '',
  type: 'email',
  placeholder: 'Enter your email',
  icon: ['fas', 'envelope'],
};

// Click Handling
export const ClickableInput = Template.bind({});
ClickableInput.args = {
  modelValue: '',
  type: 'text',
  placeholder: 'Click me!',
  icon: ['fas', 'hand-pointer'],
};

// Disabled State
export const DisabledInput = Template.bind({});
DisabledInput.args = {
  modelValue: 'You cannot edit this',
  type: 'text',
  placeholder: 'Disabled input',
  icon: ['fas', 'ban'],
};
