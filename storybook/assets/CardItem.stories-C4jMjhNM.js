import{n as e}from"./chunk-DnJy8xQt.js";import{i as t,n,r}from"./emotion-react-jsx-runtime.browser.esm-BFNh2zze.js";import{n as i,t as a}from"./emotion-react.browser.esm-Cp3FG9s0.js";import{n as o,t as s}from"./Button-DK7UXOJd.js";var c,l=e((()=>{c={31:`bc`,41:`shinhan`,15:`kakao`,61:`hyundai`,W1:`woori`,71:`lotte`,21:`hana`,11:`kookmin`},Object.fromEntries(Object.entries(c).map(([e,t])=>[t,e]))}));function u({id:e,company:n,number:i,expirationDate:a,onDeleteCard:o}){return t(`li`,{css:p,children:[r(`div`,{css:m(d[n])}),t(`div`,{css:h,children:[r(`span`,{css:g,children:f[n]}),r(`span`,{css:_,children:i.join(` `)}),t(`span`,{css:v,children:[`유효기간 `,a.join(`/`)]})]}),r(s,{variant:`ghost`,onClick:()=>o(e),children:`✕`})]})}var d,f,p,m,h,g,_,v,y=e((()=>{i(),l(),o(),n(),d={"":`#acacac`,bc:`var(--color-brand-bc-card)`,shinhan:`var(--color-brand-shinhan-card)`,kakao:`var(--color-brand-kakaobank)`,hyundai:`var(--color-brand-hyundai-card)`,woori:`var(--color-brand-woori-card)`,lotte:`var(--color-brand-lotte-card)`,hana:`var(--color-brand-hana-card)`,kookmin:`var(--color-brand-kb-card)`},f={"":``,bc:`BC카드`,shinhan:`신한카드`,kakao:`카카오뱅크`,hyundai:`현대카드`,woori:`우리카드`,lotte:`롯데카드`,hana:`하나카드`,kookmin:`국민카드`},p=a`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
`,m=e=>a`
  width: 64px;
  height: 40px;
  border-radius: 4px;
  background: ${e};
  flex-shrink: 0;
`,h=a`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
`,g=a`
  font-size: 14px;
  font-weight: bold;
  color: #353c49;
`,_=a`
  font-size: 11px;
  color: #8c8c8c;
`,v=a`
  font-size: 9.5px;
  color: #8c8c8c;
`,u.__docgenInfo={description:``,methods:[],displayName:`CardItem`,props:{id:{required:!0,tsType:{name:`string`},description:``},onDeleteCard:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(id: string) => void`,signature:{arguments:[{type:{name:`string`},name:`id`}],return:{name:`void`}}},description:``}},composes:[`Omit`]}})),b,x,S,C,w,T,E;e((()=>{i(),y(),n(),b=a`
  width: 320px;
`,x={title:`ui/CardList/CardItem`,component:u,parameters:{layout:`centered`},decorators:[e=>r(`div`,{css:b,children:r(e,{})})]},S=[{id:`1`,company:`bc`,number:[`5511`,`****`,`****`,`9012`],expirationDate:[`12`,`28`]},{id:`2`,company:`shinhan`,number:[`4111`,`****`,`****`,`1111`],expirationDate:[`06`,`30`]},{id:`3`,company:`kakao`,number:[`5234`,`****`,`****`,`7890`],expirationDate:[`09`,`27`]}],C={args:{...S[0],onDeleteCard:()=>{}}},w={args:{...S[1],onDeleteCard:()=>{}}},T={args:{...S[2],onDeleteCard:()=>{}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    ...mockCards[0],
    onDeleteCard: () => {}
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    ...mockCards[1],
    onDeleteCard: () => {}
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    ...mockCards[2],
    onDeleteCard: () => {}
  }
}`,...T.parameters?.docs?.source}}},E=[`BCCard`,`ShinhanCard`,`KakaoCard`]}))();export{C as BCCard,T as KakaoCard,w as ShinhanCard,E as __namedExportsOrder,x as default};