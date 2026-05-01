import{n as e}from"./chunk-DnJy8xQt.js";import{a as t,i as n,n as r,o as i,r as a}from"./emotion-react-jsx-runtime.browser.esm-DFFSHqNi.js";function o({cardNumber:e,expirationPeriod:t,cardBrand:r}){return n(`div`,{css:s,children:[n(`div`,{css:c,children:[a(`div`,{css:l}),r===`visa`&&a(`img`,{css:u,src:`/visa.png`,alt:`visa`}),r===`mastercard`&&a(`img`,{css:u,src:`/mastercard.png`,alt:`mastercard`})]}),n(`div`,{css:d,children:[a(`div`,{css:f,children:e.map((e,t)=>a(`span`,{children:t<2?e:a(`span`,{css:p,children:`∙`.repeat(e.length)})}))}),n(`div`,{children:[a(`span`,{children:t[0]}),t[1]&&a(`span`,{children:`/`}),a(`span`,{children:t[1]})]})]})]})}var s,c,l,u,d,f,p,m=e((()=>{i(),r(),s=t`
  background: var(--color-background-card);
  width: 212px;
  height: 132px;
  border-radius: 4px;
  box-shadow: 3px 3px 5px 0px var(--color-shadow-card);
  padding: 8px 12px;
`,c=t`
  display: flex;
  justify-content: space-between;
`,l=t`
  width: 36px;
  height: 22px;
  background: var(--color-background-chip);
  border-radius: 3px;
`,u=t`
  width: 36px;
  height: 22px;
  border-radius: 3px;
  border: 1px solid var(--color-border-default);
`,d=t`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 14px 5px;
  color: var(--color-text-card);
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 16%;
`,f=t`
  display: flex;
  gap: 10px;
`,p=t`
  letter-spacing: 0;
`,o.__docgenInfo={description:``,methods:[],displayName:`Card`,props:{cardNumber:{required:!0,tsType:{name:`CardInfo['cardNumbers']`,raw:`CardInfo['cardNumbers']`},description:``},expirationPeriod:{required:!0,tsType:{name:`CardInfo['expirationPeriod']`,raw:`CardInfo['expirationPeriod']`},description:``},cardBrand:{required:!0,tsType:{name:`CardInfo['cardBrand']`,raw:`CardInfo['cardBrand']`},description:``}}}})),h,g,_,v;e((()=>{m(),h={title:`ui/Card`,component:o,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{cardBrand:{control:`inline-radio`,options:[`local`,`visa`,`mastercard`],description:`카드 브랜드`},cardNumber:{control:`object`,description:`카드 번호 (4자리씩 4개)`},expirationPeriod:{control:`object`,description:`카드 유효기간 (MM/YY)`}},args:{cardBrand:`local`}},g={args:{cardNumber:[`1234`,`1234`,`1234`,`1234`],expirationPeriod:[`05`,`26`]}},_={args:{cardNumber:[``,``,``,``],expirationPeriod:[``,``]}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    cardNumber: ['1234', '1234', '1234', '1234'],
    expirationPeriod: ['05', '26']
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    cardNumber: ['', '', '', ''],
    expirationPeriod: ['', '']
  }
}`,..._.parameters?.docs?.source}}},v=[`Default`,`Empty`]}))();export{g as Default,_ as Empty,v as __namedExportsOrder,h as default};