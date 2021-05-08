function Button({children}) {
  return (
    <div>{children}</div>
  )
}

const Story = (props) => <Button {...props} />

// Here we export a variant of the default template passing props
export const ButtonStory = Story.bind({})
ButtonStory.args = {
  title: 'Test',
};

// Here we export a variant of the default template passing props
export const EmptyButtonStory = Story.bind({})
EmptyButtonStory.args = {
  title: null,
};

// Here we export the default component that
// will be used by Storybook to show it inside the sidebar
export default {
  title: 'Components/Button',
  component: Button,
};
