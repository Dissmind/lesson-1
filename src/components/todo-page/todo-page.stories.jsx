import React from "react";
import { TodoPage } from "./todo-page";

export default {
  title: "TodoPage",
  component: TodoPage,
};

const Template = (args) => <TodoPage {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  title: "Hello world",
};
