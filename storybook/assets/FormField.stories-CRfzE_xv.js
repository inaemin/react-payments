import{n as e}from"./chunk-DnJy8xQt.js";import{i as t,n,r,t as i}from"./emotion-react-jsx-runtime.browser.esm-COtO9Lfj.js";import{n as a,r as o,t as s}from"./emotion-react.browser.esm-CF_DICXP.js";import{n as c,t as l}from"./Input-DyMJmqxK.js";function u({children:e}){return r(`h3`,{css:d,children:e})}var d,f=e((()=>{a(),n(),d=s`
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
  `},p.__docgenInfo={description:``,methods:[],displayName:`FieldCaption`,props:{variant:{required:!1,tsType:{name:`union`,raw:`'default' | 'error'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'error'`}]},description:``,defaultValue:{value:`'default'`,computed:!1}},children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``}}}}));function _({title:e,caption:n,error:i,errorMessage:a,children:o}){return t(`div`,{css:v,children:[t(`div`,{css:y,children:[r(u,{children:e}),n&&r(p,{children:n})]}),t(`div`,{css:b,children:[o,r(p,{variant:`error`,children:i?a:`\xA0`})]})]})}var v,y,b,x=e((()=>{a(),f(),g(),n(),v=s`
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
`,_.__docgenInfo={description:``,methods:[],displayName:`FormField`,props:{title:{required:!0,tsType:{name:`string`},description:``},caption:{required:!0,tsType:{name:`string`},description:``},error:{required:!0,tsType:{name:`boolean`},description:``},errorMessage:{required:!0,tsType:{name:`string`},description:``},children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``}}}})),S,C,w,T;e((()=>{x(),c(),n(),S={title:`ui/FormField`,component:_,parameters:{layout:`centered`},tags:[`autodocs`],args:{title:`CVC 번호를 입력해 주세요`,caption:`CVC 번호를 입력해 주세요`,errorMessage:`숫자만 입력 가능합니다.`,children:r(i,{})}},C={args:{error:!1},render:e=>t(_,{...e,children:[r(`label`,{children:`CVC`}),r(l,{variant:e.error?`error`:`default`})]})},w={args:{error:!0},render:e=>t(_,{...e,children:[r(`label`,{children:`CVC`}),r(l,{variant:e.error?`error`:`default`})]})},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    error: false
  },
  render: (args: FormFieldStoryArgs) => <FormField {...args}>
      <label>CVC</label>
      <Input variant={args.error ? 'error' : 'default'} />
    </FormField>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    error: true
  },
  render: (args: FormFieldStoryArgs) => <FormField {...args}>
      <label>CVC</label>
      <Input variant={args.error ? 'error' : 'default'} />
    </FormField>
}`,...w.parameters?.docs?.source}}},T=[`Default`,`Error`]}))();export{C as Default,w as Error,T as __namedExportsOrder,S as default};