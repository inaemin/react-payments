import{n as e}from"./chunk-DnJy8xQt.js";import{a as t,i as n,n as r,o as i,r as a,t as o}from"./emotion-react-jsx-runtime.browser.esm-DesSZ6OH.js";import{n as s,t as c}from"./Input-T2H5sEgz.js";function l({children:e}){return a(`h3`,{css:u,children:e})}var u,d=e((()=>{i(),r(),u=t`
  font-weight: bold;
  font-size: 18px;
  line-height: 100%;
  padding: 2px 0;
  color: var(--color-text-title);
`,l.__docgenInfo={description:``,methods:[],displayName:`FieldTitle`,props:{children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``}}}}));function f({variant:e=`default`,children:t}){return a(`span`,{css:[p,m[e]],children:t})}var p,m,h=e((()=>{i(),r(),p=t`
  font-size: 9.5px;
  line-height: 100%;
  padding: 2px 0 1px 0;
`,m={default:t`
    color: var(--color-text-caption);
  `,error:t`
    color: var(--color-text-error);
  `},f.__docgenInfo={description:``,methods:[],displayName:`FieldCaption`,props:{variant:{required:!1,tsType:{name:`union`,raw:`'default' | 'error'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'error'`}]},description:``,defaultValue:{value:`'default'`,computed:!1}},children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``}}}}));function g({title:e,caption:t,error:r,errorMessage:i,children:o}){return n(`div`,{css:_,children:[n(`div`,{css:v,children:[a(l,{children:e}),t&&a(f,{children:t})]}),n(`div`,{css:y,children:[o,a(f,{variant:`error`,children:r?i:`\xA0`})]})]})}var _,v,y,b=e((()=>{i(),d(),h(),r(),_=t`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,v=t`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,y=t`
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
`,g.__docgenInfo={description:``,methods:[],displayName:`FormField`,props:{title:{required:!0,tsType:{name:`string`},description:``},caption:{required:!0,tsType:{name:`string`},description:``},error:{required:!0,tsType:{name:`boolean`},description:``},errorMessage:{required:!0,tsType:{name:`string`},description:``},children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``}}}})),x,S,C,w;e((()=>{b(),s(),r(),x={title:`ui/FormField`,component:g,parameters:{layout:`centered`},tags:[`autodocs`],args:{title:`CVC 번호를 입력해 주세요`,caption:`CVC 번호를 입력해 주세요`,errorMessage:`숫자만 입력 가능합니다.`,children:a(o,{})}},S={args:{error:!1},render:e=>n(g,{...e,children:[a(`label`,{children:`CVC`}),a(c,{variant:e.error?`error`:`default`})]})},C={args:{error:!0},render:e=>n(g,{...e,children:[a(`label`,{children:`CVC`}),a(c,{variant:e.error?`error`:`default`})]})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    error: false
  },
  render: args => <FormField {...args}>
      <label>CVC</label>
      <Input variant={args.error ? 'error' : 'default'} />
    </FormField>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    error: true
  },
  render: args => <FormField {...args}>
      <label>CVC</label>
      <Input variant={args.error ? 'error' : 'default'} />
    </FormField>
}`,...C.parameters?.docs?.source}}},w=[`Default`,`Error`]}))();export{S as Default,C as Error,w as __namedExportsOrder,x as default};