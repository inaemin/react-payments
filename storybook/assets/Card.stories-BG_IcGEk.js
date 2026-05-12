import{n as e}from"./chunk-DnJy8xQt.js";import{a as t,i as n,n as r,o as i,r as a}from"./emotion-react-jsx-runtime.browser.esm-Ci9FeOdx.js";var o,s=e((()=>{o=``+new URL(`../visa.png`,import.meta.url).href})),c,l=e((()=>{c=``+new URL(`../mastercard.png`,import.meta.url).href})),u,d=e((()=>{u=``+new URL(`../amex.png`,import.meta.url).href})),f,p=e((()=>{f=``+new URL(`../diners.png`,import.meta.url).href})),m,h=e((()=>{m=``+new URL(`../unionpay.png`,import.meta.url).href}));function g({cardNumber:e,expirationPeriod:t,cardBrand:r,cardCompany:i}){return n(`div`,{css:[y,{background:v[i]??`var(--color-background-card)`}],children:[n(`div`,{css:b,children:[a(`div`,{css:x}),_[r]&&a(`img`,{css:S,src:_[r].src,alt:_[r].alt})]}),n(`div`,{css:C,children:[a(`div`,{css:w,children:e.map((e,t)=>a(`span`,{children:t<2?e:a(`span`,{css:T,children:`∙`.repeat(e.length)})},t))}),n(`div`,{children:[a(`span`,{children:t[0]}),t[1]&&a(`span`,{children:`/`}),a(`span`,{children:t[1]})]})]})]})}var _,v,y,b,x,S,C,w,T,E=e((()=>{i(),s(),l(),d(),p(),h(),r(),_={visa:{src:o,alt:`visa`},mastercard:{src:c,alt:`mastercard`},amex:{src:u,alt:`amex`},diners:{src:f,alt:`diners`},unionpay:{src:m,alt:`unionpay`}},v={bc:`var(--color-brand-bc-card)`,shinhan:`var(--color-brand-shinhan-card)`,kakao:`var(--color-brand-kakaobank)`,hyundai:`var(--color-brand-hyundai-card)`,woori:`var(--color-brand-woori-card)`,lotte:`var(--color-brand-lotte-card)`,hana:`var(--color-brand-hana-card)`,nh:`var(--color-brand-kb-card)`},y=t`
  background: var(--color-background-card);
  width: 212px;
  height: 132px;
  border-radius: 4px;
  box-shadow: 3px 3px 5px 0px var(--color-shadow-card);
  padding: 8px 12px;
`,b=t`
  display: flex;
  justify-content: space-between;
`,x=t`
  width: 36px;
  height: 22px;
  background: var(--color-background-chip);
  border-radius: 3px;
`,S=t`
  width: 36px;
  height: 22px;
  border-radius: 3px;
  border: 1px solid var(--color-border-default);
`,C=t`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 14px 5px;
  color: var(--color-text-card);
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 16%;
`,w=t`
  display: flex;
  gap: 10px;
`,T=t`
  letter-spacing: 0;
`,g.__docgenInfo={description:``,methods:[],displayName:`Card`,props:{cardNumber:{required:!0,tsType:{name:`CardInfo['cardNumbers']`,raw:`CardInfo['cardNumbers']`},description:``},expirationPeriod:{required:!0,tsType:{name:`CardInfo['expirationPeriod']`,raw:`CardInfo['expirationPeriod']`},description:``},cardBrand:{required:!0,tsType:{name:`CardInfo['cardBrand']`,raw:`CardInfo['cardBrand']`},description:``},cardCompany:{required:!0,tsType:{name:`CardInfo['cardCompany']`,raw:`CardInfo['cardCompany']`},description:``}}}})),D,O,k,A;e((()=>{E(),D={title:`ui/Card`,component:g,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{cardBrand:{control:`inline-radio`,options:[`local`,`visa`,`mastercard`,`amex`,`diners`,`unionpay`],description:`카드 브랜드`},cardCompany:{control:`inline-radio`,options:[``,`bc`,`shinhan`,`kakao`,`hyundai`,`woori`,`lotte`,`nh`,`hana`],description:`카드사`},cardNumber:{control:`object`,description:`카드 번호 (4자리씩 4개)`},expirationPeriod:{control:`object`,description:`카드 유효기간 (MM/YY)`}},args:{cardBrand:`local`,cardCompany:``}},O={args:{cardNumber:[`1234`,`1234`,`1234`,`1234`],expirationPeriod:[`05`,`26`],cardCompany:`bc`}},k={args:{cardNumber:[``,``,``,``],expirationPeriod:[``,``],cardCompany:``}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    cardNumber: ['1234', '1234', '1234', '1234'],
    expirationPeriod: ['05', '26'],
    cardCompany: 'bc'
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    cardNumber: ['', '', '', ''],
    expirationPeriod: ['', ''],
    cardCompany: ''
  }
}`,...k.parameters?.docs?.source}}},A=[`Default`,`Empty`]}))();export{O as Default,k as Empty,A as __namedExportsOrder,D as default};