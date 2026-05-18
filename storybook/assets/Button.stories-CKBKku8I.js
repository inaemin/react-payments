import{n as e}from"./chunk-DnJy8xQt.js";import{n as t,r as n}from"./emotion-react-jsx-runtime.browser.esm-BSX4Y-IX.js";import{n as r,t as i}from"./Button-DzmNXQQ2.js";var a,o,s,c,l;e((()=>{r(),t(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`ui/Button`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`inline-radio`,options:[`primary`],description:`버튼 variant`}},args:{onClick:a(),children:`확인`}},s={args:{variant:`primary`},render:e=>n(i,{...e})},c={args:{variant:`primary`,disabled:!0},render:e=>n(i,{...e})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary'
  },
  render: (args: ButtonStoryArgs) => <Button {...args} />
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    disabled: true
  },
  render: (args: ButtonStoryArgs) => <Button {...args} />
}`,...c.parameters?.docs?.source}}},l=[`Primary`,`Disabled`]}))();export{c as Disabled,s as Primary,l as __namedExportsOrder,o as default};