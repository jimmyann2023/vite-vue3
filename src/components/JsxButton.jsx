import { defineComponent } from 'vue';

export default defineComponent({
  name: 'JSXButton',
  setup() {
    return () => <Button>Jsx Button</Button>;
  },
});
