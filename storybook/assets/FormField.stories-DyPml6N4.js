import{n as e}from"./chunk-DnJy8xQt.js";import{i as t,n,r,t as i}from"./emotion-react-jsx-runtime.browser.esm-BSX4Y-IX.js";import{n as a,r as o,t as s}from"./emotion-react.browser.esm-BYlh3xhb.js";import{n as c,t as l}from"./Input-C4YVD9zH.js";function u({children:e}){return r(`h3`,{css:d,children:e})}var d,f=e((()=>{a(),n(),d=s`
  font-weight: bold;
  font-size: 18px;
  line-height: 100%;
  padding: 2px 0;
  color: var(--color-text-title);
`,u.__docgenInfo={description:``,methods:[],displayName:`FieldTitle`,props:{children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``}}}}));function p({variant:e=`default`,children:t}){return r(`span`,{css:[m,h[e]],children:t})}var m,h,g=e((()=>{a(),n(),m=s`
  font-size: 9.5px;
  line-height: 100%;
  padding: 2px 0 1px 0;
`,h={default:s`
    color: var(--color-text-caption);
  `,error:s`
    color: var(--color-text-error);
  `},p.__docgenInfo={description:``,methods:[],displayName:`FieldCaption`,props:{variant:{required:!1,tsType:{name:`union`,raw:`'default' | 'error'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'error'`}]},description:``,defaultValue:{value:`'default'`,computed:!1}},children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``}}}}));function _({title:e,caption:n,errorMessage:i,children:a}){return t(`div`,{css:v,children:[t(`div`,{css:y,children:[r(u,{children:e}),n&&r(p,{children:n})]}),t(`div`,{css:b,children:[a,r(p,{variant:`error`,children:i||`\xA0`})]})]})}var v,y,b,x=e((()=>{a(),f(),g(),n(),v=s`
  display: flex;
  flex-direction: column;
  gap: 16px;
  animation: ${o`
  from {
    opacity: 0;
    transform: translateY(-12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`} 0.5s ease;
`,y=s`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,b=s`
  display: flex;
  flex-direction: column;
  gap: 8px;

  legend,
  label {
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: var(--color-text-label);
  }
`,_.__docgenInfo={description:``,methods:[],displayName:`FormField`,props:{title:{required:!0,tsType:{name:`string`},description:``},caption:{required:!0,tsType:{name:`string`},description:``},errorMessage:{required:!0,tsType:{name:`string`},description:``},children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``}}}})),S,C,w,T;e((()=>{x(),c(),n(),S={title:`ui/FormField`,component:_,parameters:{layout:`centered`},tags:[`autodocs`],args:{title:`CVC 번호를 입력해 주세요`,caption:`CVC 번호를 입력해 주세요`,errorMessage:``,children:r(i,{})}},C={args:{errorMessage:``},render:e=>t(_,{...e,children:[r(`label`,{children:`CVC`}),r(l,{variant:`default`})]})},w={args:{errorMessage:`숫자만 입력 가능합니다.`},render:e=>t(_,{...e,children:[r(`label`,{children:`CVC`}),r(l,{variant:`error`})]})},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    errorMessage: ''
  },
  render: (args: FormFieldStoryArgs) => <FormField {...args}>
      <label>CVC</label>
      <Input variant="default" />
    </FormField>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    errorMessage: '숫자만 입력 가능합니다.'
  },
  render: (args: FormFieldStoryArgs) => <FormField {...args}>
      <label>CVC</label>
      <Input variant="error" />
    </FormField>
}`,...w.parameters?.docs?.source}}},T=[`Default`,`Error`]}))();export{C as Default,w as Error,T as __namedExportsOrder,S as default};