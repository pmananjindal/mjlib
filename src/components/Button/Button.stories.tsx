import React from "react";
import MyButton from "./Button"; // Import your Button component

export default {
  title: "Button", // The title of your story, which appears in the Storybook UI
  component: MyButton, // The component that this story file is for
};

export const Default = () => <MyButton />;
