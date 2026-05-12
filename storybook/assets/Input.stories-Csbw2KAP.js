import{n as e}from"./chunk-DnJy8xQt.js";import{n as t,r as n}from"./emotion-react-jsx-runtime.browser.esm-COtO9Lfj.js";import{n as r,t as i}from"./Input-DyMJmqxK.js";var a,o,s,c,l,u;e((()=>{r(),t(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`ui/Input`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],args:{placeholder:`1234`,type:`text`,onChange:a()}},s={args:{value:`1234`,variant:`default`},render:e=>n(i,{...e})},c={args:{value:``,variant:`error`},render:e=>n(i,{...e})},l={args:{value:``,variant:`default`},render:e=>n(i,{...e,autoFocus:!0})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    value: '1234',
    variant: 'default'
  },
  render: (args: InputStoryArgs) => <Input {...args} />
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    value: '',
    variant: 'error'
  },
  render: (args: InputStoryArgs) => <Input {...args} />
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    value: '',
    variant: 'default'
  },
  render: (args: InputStoryArgs) => <Input {...args} autoFocus />
}`,...l.parameters?.docs?.source}}},u=[`Default`,`Error`,`Focus`]}))();export{s as Default,c as Error,l as Focus,u as __namedExportsOrder,o as default};