import{j as o}from"./jsx-runtime-CkxqCPlQ.js";import{I as i}from"./InputContainer-BRJjoOen.js";import{S as c,H as d,a as p}from"./Help-CtvImHZF.js";import{I as u}from"./Info-CllIsxsu.js";import"./index-DJO9vBfz.js";import"./InputHelperText-DXYxJiLj.js";import"./index-i5X67GZP.js";const f="_playground_ods3z_5",h="_playgroundDark_ods3z_7",t={"dark-mode":"_dark-mode_ods3z_1",playground:f,playgroundDark:h},m=e=>o.jsxs("div",{children:[o.jsx("div",{className:t.playground,children:o.jsx(e,{})}),o.jsx("div",{className:t.playgroundDark,children:o.jsx(e,{darkMode:!0})})]}),_={component:i,tags:["autodocs"],decorators:[m],argTypes:{iconBefore:{control:"boolean"},iconAfter:{control:"boolean"},infoIcon:{control:"boolean"},shortkey:{control:"boolean"}}},r={args:{labelText:"Email",iconBefore:!0,iconAfter:!0,shortkey:!0,infoIcon:!0,helperText:"This is a hint text to help user.",tooltipText:"This is a hint text to help user.",required:!1,disabled:!1,inputSize:36,labelPosition:"top"},render:(e,{darkMode:l})=>o.jsx(i,{...e,iconBefore:e.iconBefore&&o.jsx(c,{}),iconAfter:e.iconAfter&&o.jsx(d,{}),infoIcon:e.infoIcon&&o.jsx(u,{}),shortkey:e.shortkey&&o.jsx(p,{}),darkMode:l})};var n,s,a;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    labelText: "Email",
    iconBefore: true,
    iconAfter: true,
    shortkey: true,
    infoIcon: true,
    helperText: "This is a hint text to help user.",
    tooltipText: "This is a hint text to help user.",
    required: false,
    disabled: false,
    inputSize: 36,
    labelPosition: "top"
  },
  render: (args, {
    darkMode
  }) => <InputContainer {...args} iconBefore={args.iconBefore && <Search />} iconAfter={args.iconAfter && <Help />} infoIcon={args.infoIcon && <Info />} shortkey={args.shortkey && <Shortkey />} darkMode={darkMode} />
}`,...(a=(s=r.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const b=["Default"];export{r as Default,b as __namedExportsOrder,_ as default};
