import{n as e}from"./chunk-DnJy8xQt.js";import{i as t,n,r}from"./emotion-react-jsx-runtime.browser.esm-ChvUQrg8.js";import{n as i,t as a}from"./emotion-react.browser.esm-BUCWsLCa.js";var o,s=e((()=>{o=``+new URL(`../visa.png`,import.meta.url).href})),c,l=e((()=>{c=``+new URL(`../mastercard.png`,import.meta.url).href})),u,d=e((()=>{u=``+new URL(`../amex.png`,import.meta.url).href})),f,p=e((()=>{f=``+new URL(`../diners.png`,import.meta.url).href})),m,h=e((()=>{m=``+new URL(`../unionpay.png`,import.meta.url).href}));function g({cardNumber:e,expirationPeriod:n,cardBrand:i,cardCompany:a}){return t(`div`,{css:[y,{background:v[a]??`var(--color-background-card)`}],children:[t(`div`,{css:b,children:[r(`div`,{css:x}),_[i]&&r(`img`,{css:S,src:_[i].src,alt:_[i].alt})]}),t(`div`,{css:C,children:[r(`div`,{css:w,children:e.map((e,t)=>r(`span`,{children:t<2?e:r(`span`,{css:T,children:`∙`.repeat(e.length)})},t))}),t(`div`,{children:[r(`span`,{children:n[0]}),n[1]&&r(`span`,{children:`/`}),r(`span`,{children:n[1]})]})]})]})}var _,v,y,b,x,S,C,w,T,E=e((()=>{i(),s(),l(),d(),p(),h(),n(),_={visa:{src:o,alt:`visa`},mastercard:{src:c,alt:`mastercard`},amex:{src:u,alt:`amex`},diners:{src:f,alt:`diners`},unionpay:{src:m,alt:`unionpay`}},v={bc:`var(--color-brand-bc-card)`,shinhan:`var(--color-brand-shinhan-card)`,kakao:`var(--color-brand-kakaobank)`,hyundai:`var(--color-brand-hyundai-card)`,woori:`var(--color-brand-woori-card)`,lotte:`var(--color-brand-lotte-card)`,hana:`var(--color-brand-hana-card)`,nh:`var(--color-brand-kb-card)`},y=a`
  background: var(--color-background-card);
  width: 212px;
  height: 132px;
  border-radius: 4px;
  box-shadow: 3px 3px 5px 0px var(--color-shadow-card);
  padding: 8px 12px;
`,b=a`
  display: flex;
  justify-content: space-between;
`,x=a`
  width: 36px;
  height: 22px;
  background: var(--color-background-chip);
  border-radius: 3px;
`,S=a`
  width: 36px;
  height: 22px;
  border-radius: 3px;
  border: 1px solid var(--color-border-default);
`,C=a`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 14px 5px;
  color: var(--color-text-card);
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 16%;
`,w=a`
  display: flex;
  gap: 10px;
`,T=a`
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