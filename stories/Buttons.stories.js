import Button from '../components/atoms/Buttons.vue'; // Adjust the import path as necessary

export default {
  title: 'Atoms/Button',
  component: Button,
};

const Template = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: '<Button v-bind="args">{{ args.label }}</Button>',
});

export const Default = Template.bind({});
Default.args = {
  type: 'button',
  label: 'Default Button',
};

export const Submit = Template.bind({});
Submit.args = {
  type: 'submit',
  label: 'Submit Form',
};

export const Cancel = Template.bind({});
Cancel.args = {
  type: 'button',
  label: 'Cancel',
};

export const WithCustomSlot = Template.bind({});
WithCustomSlot.args = {
  type: 'button',
  label: 'Custom Slot',
};
WithCustomSlot.story = {
  render: () => ({
    components: { Button },
    template: `<Button type="button"><strong>Click Me!</strong></Button>`,
  }),
};

export const HoverEffect = Template.bind({});
HoverEffect.args = {
  type: 'button',
  label: 'Hover Me!',
};
HoverEffect.story = {
  render: () => ({
    components: { Button },
    template: `<Button type="button">Hover to see effect!</Button>`,
  }),
};
