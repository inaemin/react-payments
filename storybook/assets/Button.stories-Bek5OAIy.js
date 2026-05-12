import{n as e}from"./chunk-DnJy8xQt.js";import{n as t,r as n}from"./emotion-react-jsx-runtime.browser.esm-COtO9Lfj.js";import{n as r,t as i}from"./emotion-react.browser.esm-CF_DICXP.js";function a({variant:e=`primary`,children:t,...r}){return n(`button`,{css:[o,e===`primary`?s:void 0],...r,children:t})}var o,s,c=e((()=>{r(),t(),o=i`
  width: 100%;
  height: 44px;
  font-size: 15px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    opacity: 0.85;
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`,s=i`
  background: var(--color-button-primary-background);
  color: var(--color-button-primary-text);
`,a.__docgenInfo={description:``,methods:[],displayName:`Button`,props:{variant:{required:!1,tsType:{name:`literal`,value:`'primary'`},description:``,defaultValue:{value:`'primary'`,computed:!1}},children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``}}}})),l,u,d,f,p;e((()=>{c(),t(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`ui/Button`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`inline-radio`,options:[`primary`],description:`버튼 variant`}},args:{onClick:l(),children:`확인`}},d={args:{variant:`primary`},render:e=>n(a,{...e})},f={args:{variant:`primary`,disabled:!0},render:e=>n(a,{...e})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary'
  },
  render: (args: ButtonStoryArgs) => <Button {...args} />
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    disabled: true
  },
  render: (args: ButtonStoryArgs) => <Button {...args} />
}`,...f.parameters?.docs?.source}}},p=[`Primary`,`Disabled`]}))();export{f as Disabled,d as Primary,p as __namedExportsOrder,u as default};