import{n as e}from"./chunk-DnJy8xQt.js";import{i as t,n,r,t as i}from"./emotion-react-jsx-runtime.browser.esm-ChvUQrg8.js";import{n as a,t as o}from"./emotion-react.browser.esm-BUCWsLCa.js";import{n as s,t as c}from"./Input-CBg4ybS-.js";function l({children:e}){return r(`h3`,{css:u,children:e})}var u,d=e((()=>{a(),n(),u=o`
  font-weight: bold;
  font-size: 18px;
  line-height: 100%;
  padding: 2px 0;
  color: var(--color-text-title);
`,l.__docgenInfo={description:``,methods:[],displayName:`FieldTitle`,props:{children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``}}}}));function f({variant:e=`default`,children:t}){return r(`span`,{css:[p,m[e]],children:t})}var p,m,h=e((()=>{a(),n(),p=o`
  font-size: 9.5px;
  line-height: 100%;
  padding: 2px 0 1px 0;
`,m={default:o`
    color: var(--color-text-caption);
  `,error:o`
    color: var(--color-text-error);
  `},f.__docgenInfo={description:``,methods:[],displayName:`FieldCaption`,props:{variant:{required:!1,tsType:{name:`union`,raw:`'default' | 'error'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'error'`}]},description:``,defaultValue:{value:`'default'`,computed:!1}},children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``}}}}));function g({title:e,caption:n,error:i,errorMessage:a,children:o}){return t(`div`,{css:_,children:[t(`div`,{css:v,children:[r(l,{children:e}),n&&r(f,{children:n})]}),t(`div`,{css:y,children:[o,r(f,{variant:`error`,children:i?a:`\xA0`})]})]})}var _,v,y,b=e((()=>{a(),d(),h(),n(),_=o`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,v=o`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,y=o`
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
`,g.__docgenInfo={description:``,methods:[],displayName:`FormField`,props:{title:{required:!0,tsType:{name:`string`},description:``},caption:{required:!0,tsType:{name:`string`},description:``},error:{required:!0,tsType:{name:`boolean`},description:``},errorMessage:{required:!0,tsType:{name:`string`},description:``},children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``}}}})),x,S,C,w;e((()=>{b(),s(),n(),x={title:`ui/FormField`,component:g,parameters:{layout:`centered`},tags:[`autodocs`],args:{title:`CVC 번호를 입력해 주세요`,caption:`CVC 번호를 입력해 주세요`,errorMessage:`숫자만 입력 가능합니다.`,children:r(i,{})}},S={args:{error:!1},render:e=>t(g,{...e,children:[r(`label`,{children:`CVC`}),r(c,{variant:e.error?`error`:`default`})]})},C={args:{error:!0},render:e=>t(g,{...e,children:[r(`label`,{children:`CVC`}),r(c,{variant:e.error?`error`:`default`})]})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    error: false
  },
  render: (args: FormFieldStoryArgs) => <FormField {...args}>
      <label>CVC</label>
      <Input variant={args.error ? 'error' : 'default'} />
    </FormField>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    error: true
  },
  render: (args: FormFieldStoryArgs) => <FormField {...args}>
      <label>CVC</label>
      <Input variant={args.error ? 'error' : 'default'} />
    </FormField>
}`,...C.parameters?.docs?.source}}},w=[`Default`,`Error`]}))();export{S as Default,C as Error,w as __namedExportsOrder,x as default};