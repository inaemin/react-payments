import{n as e}from"./chunk-DnJy8xQt.js";import{n as t,r as n}from"./emotion-react-jsx-runtime.browser.esm-BFNh2zze.js";var r=e((()=>{}));function i({options:e,variant:t=`default`,ref:r,...i}){return n(`select`,{ref:r,className:`select select--${t}`,...i,children:e.map(e=>n(`option`,{value:e.value,children:e.label},e.value))})}var a=e((()=>{r(),t(),i.__docgenInfo={description:``,methods:[],displayName:`Select`,props:{options:{required:!0,tsType:{name:`unknown`},description:``},variant:{required:!1,tsType:{name:`union`,raw:`'default' | 'error'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'error'`}]},description:``,defaultValue:{value:`'default'`,computed:!1}},ref:{required:!1,tsType:{name:`ReactRef`,raw:`React.Ref<HTMLSelectElement>`,elements:[{name:`HTMLSelectElement`}]},description:``}}}})),o,s,c,l,u,d;e((()=>{a(),t(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`ui/Select`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`inline-radio`,options:[`default`,`error`],description:`Select variant`}},args:{options:[{label:`카드사를 선택해 주세요`,value:``},{label:`BC카드`,value:`bc`},{label:`신한카드`,value:`shinhan`},{label:`카카오뱅크`,value:`kakao`}],onChange:o()}},c={args:{variant:`default`,value:``},render:e=>n(i,{...e})},l={args:{variant:`default`,value:`bc`},render:e=>n(i,{...e})},u={args:{variant:`error`,value:``},render:e=>n(i,{...e})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    value: ''
  },
  render: (args: SelectStoryArgs) => <Select {...args} />
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    value: 'bc'
  },
  render: (args: SelectStoryArgs) => <Select {...args} />
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'error',
    value: ''
  },
  render: (args: SelectStoryArgs) => <Select {...args} />
}`,...u.parameters?.docs?.source}}},d=[`Default`,`Selected`,`Error`]}))();export{c as Default,u as Error,l as Selected,d as __namedExportsOrder,s as default};