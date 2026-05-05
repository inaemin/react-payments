import{n as e}from"./chunk-DnJy8xQt.js";import{a as t,i as n,n as r,o as i,r as a}from"./emotion-react-jsx-runtime.browser.esm-DesSZ6OH.js";var o=e((()=>{``+new URL(`../visa.png`,import.meta.url).href})),s=e((()=>{``+new URL(`../mastercard.png`,import.meta.url).href}));function c({cardNumber:e,expirationPeriod:t,cardBrand:r}){return n(`div`,{css:l,children:[n(`div`,{css:u,children:[a(`div`,{css:d}),r===`visa`&&a(`img`,{css:f,src:``+new URL(`../visa.png`,import.meta.url).href,alt:`visa`}),r===`mastercard`&&a(`img`,{css:f,src:``+new URL(`../mastercard.png`,import.meta.url).href,alt:`mastercard`})]}),n(`div`,{css:p,children:[a(`div`,{css:m,children:e.map((e,t)=>a(`span`,{children:t<2?e:a(`span`,{css:h,children:`∙`.repeat(e.length)})},t))}),n(`div`,{children:[a(`span`,{children:t[0]}),t[1]&&a(`span`,{children:`/`}),a(`span`,{children:t[1]})]})]})]})}var l,u,d,f,p,m,h,g=e((()=>{i(),o(),s(),r(),l=t`
  background: var(--color-background-card);
  width: 212px;
  height: 132px;
  border-radius: 4px;
  box-shadow: 3px 3px 5px 0px var(--color-shadow-card);
  padding: 8px 12px;
`,u=t`
  display: flex;
  justify-content: space-between;
`,d=t`
  width: 36px;
  height: 22px;
  background: var(--color-background-chip);
  border-radius: 3px;
`,f=t`
  width: 36px;
  height: 22px;
  border-radius: 3px;
  border: 1px solid var(--color-border-default);
`,p=t`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 14px 5px;
  color: var(--color-text-card);
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 16%;
`,m=t`
  display: flex;
  gap: 10px;
`,h=t`
  letter-spacing: 0;
`,c.__docgenInfo={description:``,methods:[],displayName:`Card`,props:{cardNumber:{required:!0,tsType:{name:`CardInfo['cardNumbers']`,raw:`CardInfo['cardNumbers']`},description:``},expirationPeriod:{required:!0,tsType:{name:`CardInfo['expirationPeriod']`,raw:`CardInfo['expirationPeriod']`},description:``},cardBrand:{required:!0,tsType:{name:`CardInfo['cardBrand']`,raw:`CardInfo['cardBrand']`},description:``}}}})),_,v,y,b;e((()=>{g(),_={title:`ui/Card`,component:c,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{cardBrand:{control:`inline-radio`,options:[`local`,`visa`,`mastercard`],description:`카드 브랜드`},cardNumber:{control:`object`,description:`카드 번호 (4자리씩 4개)`},expirationPeriod:{control:`object`,description:`카드 유효기간 (MM/YY)`}},args:{cardBrand:`local`}},v={args:{cardNumber:[`1234`,`1234`,`1234`,`1234`],expirationPeriod:[`05`,`26`]}},y={args:{cardNumber:[``,``,``,``],expirationPeriod:[``,``]}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    cardNumber: ['1234', '1234', '1234', '1234'],
    expirationPeriod: ['05', '26']
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    cardNumber: ['', '', '', ''],
    expirationPeriod: ['', '']
  }
}`,...y.parameters?.docs?.source}}},b=[`Default`,`Empty`]}))();export{v as Default,y as Empty,b as __namedExportsOrder,_ as default};