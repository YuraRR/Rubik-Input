import{j as r}from"./jsx-runtime-CkxqCPlQ.js";import{I as m}from"./InputContainer-BRJjoOen.js";import{S as J,H as K,a as U}from"./Help-CtvImHZF.js";import{I as X}from"./Info-CllIsxsu.js";import"./index-DJO9vBfz.js";import"./InputHelperText-DXYxJiLj.js";import"./index-i5X67GZP.js";const ae={component:m,tags:["autodocs"],argTypes:{iconBefore:{control:"boolean"},iconAfter:{control:"boolean"},infoIcon:{control:"boolean"},shortkey:{control:"boolean"}},render:e=>r.jsx(m,{...e,iconBefore:e.iconBefore&&r.jsx(J,{}),iconAfter:e.iconAfter&&r.jsx(K,{}),infoIcon:e.infoIcon&&r.jsx(X,{}),shortkey:e.shortkey&&r.jsx(U,{})})},o={args:{placeholder:"Enter your name",labelText:"Name"}},t={args:{state:"error",placeholder:"Enter your password",labelText:"Password",errorMessage:"Password is wrong",iconAfter:!0,necessity:"required",asterisk:!0}},a={args:{state:"disabled",placeholder:"Input is disabled",labelText:"Disabled Input",quiet:!0}},s={args:{state:"focus",placeholder:"Focus on me",labelText:"Focused Input",variants:"outline",infoIcon:!0,tooltipText:"This input focused"}},n={args:{placeholder:"Dark mode input",labelText:"Dark Mode Input",darkMode:!0,labelSize:36,state:"default"}},l={args:{state:"error-focus",placeholder:"Enter a value",labelText:"Input with Error",errorMessage:"Value is incorrect",tooltipText:"This input is mandatory",asterisk:!0,infoIcon:!0}},c={args:{placeholder:"Search here",labelText:"Search",iconBefore:!0,iconAfter:!0,shortkey:!0}},i={args:{inputSize:48,placeholder:"Enter your address",labelText:"Address",state:"default"}},u={args:{placeholder:"Label on the left",labelText:"I'm on the left",labelPosition:"left",infoIcon:!0,tooltipText:"The label is actually on the left"}},p={args:{placeholder:"Enter your phone number",labelText:"Phone Number",helperText:"Format: +123-456-7890"}},d={args:{placeholder:"Enter text quietly",labelText:"Minimal Input",quiet:!0}};var h,f,b;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    placeholder: "Enter your name",
    labelText: "Name"
  }
}`,...(b=(f=o.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var x,g,T;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    state: "error",
    placeholder: "Enter your password",
    labelText: "Password",
    errorMessage: "Password is wrong",
    iconAfter: true,
    necessity: "required",
    asterisk: true
  }
}`,...(T=(g=t.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};var I,y,S;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    state: "disabled",
    placeholder: "Input is disabled",
    labelText: "Disabled Input",
    quiet: true
  }
}`,...(S=(y=a.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var E,k,M;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    state: "focus",
    placeholder: "Focus on me",
    labelText: "Focused Input",
    variants: "outline",
    infoIcon: true,
    tooltipText: "This input focused"
  }
}`,...(M=(k=s.parameters)==null?void 0:k.docs)==null?void 0:M.source}}};var D,w,F;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    placeholder: "Dark mode input",
    labelText: "Dark Mode Input",
    darkMode: true,
    labelSize: 36,
    state: "default"
  }
}`,...(F=(w=n.parameters)==null?void 0:w.docs)==null?void 0:F.source}}};var P,A,q;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    state: "error-focus",
    placeholder: "Enter a value",
    labelText: "Input with Error",
    errorMessage: "Value is incorrect",
    tooltipText: "This input is mandatory",
    asterisk: true,
    infoIcon: true
  }
}`,...(q=(A=l.parameters)==null?void 0:A.docs)==null?void 0:q.source}}};var L,j,W;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    placeholder: "Search here",
    labelText: "Search",
    iconBefore: true,
    iconAfter: true,
    shortkey: true
  }
}`,...(W=(j=c.parameters)==null?void 0:j.docs)==null?void 0:W.source}}};var B,v,z;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    inputSize: 48,
    placeholder: "Enter your address",
    labelText: "Address",
    state: "default"
  }
}`,...(z=(v=i.parameters)==null?void 0:v.docs)==null?void 0:z.source}}};var H,N,Q;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    placeholder: "Label on the left",
    labelText: "I'm on the left",
    labelPosition: "left",
    infoIcon: true,
    tooltipText: "The label is actually on the left"
  }
}`,...(Q=(N=u.parameters)==null?void 0:N.docs)==null?void 0:Q.source}}};var V,_,C;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    placeholder: "Enter your phone number",
    labelText: "Phone Number",
    helperText: "Format: +123-456-7890"
  }
}`,...(C=(_=p.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};var O,R,G;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    placeholder: "Enter text quietly",
    labelText: "Minimal Input",
    quiet: true
  }
}`,...(G=(R=d.parameters)==null?void 0:R.docs)==null?void 0:G.source}}};const se=["Default","WithError","Disabled","Focused","DarkMode","ErrorFocus","WithIcons","LargeInput","LeftLabelPosition","WithHelperText","QuietMode"];export{n as DarkMode,o as Default,a as Disabled,l as ErrorFocus,s as Focused,i as LargeInput,u as LeftLabelPosition,d as QuietMode,t as WithError,p as WithHelperText,c as WithIcons,se as __namedExportsOrder,ae as default};
