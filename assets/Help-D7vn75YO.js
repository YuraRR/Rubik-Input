import{j as t}from"./jsx-runtime-CkxqCPlQ.js";import{c as l}from"./index-i5X67GZP.js";const y="_input_12oyi_5",v="_inputWraper_12oyi_25",A="_focus_12oyi_55",k="_error_12oyi_65",g="_disabled_12oyi_89",I="_quiet_12oyi_175",q="_fill_12oyi_183",x="_outline_12oyi_189",w="_iconBefore_12oyi_197",S="_iconAfter_12oyi_209",j="_iconAfterAndShortkey_12oyi_233",C="_hasIconBefore_12oyi_251",z="_hasIconAfter_12oyi_257",N="_hasShortkey_12oyi_263",T="_hasIconAfterAndShortkey_12oyi_269",B="_alignmentRight_12oyi_275",b="_shortkey_12oyi_281",e={"dark-mode":"_dark-mode_12oyi_1",input:y,inputWraper:v,focus:A,error:k,"error-focus":"_error-focus_12oyi_79",disabled:g,"size-24":"_size-24_12oyi_111","size-32":"_size-32_12oyi_121","size-36":"_size-36_12oyi_131","size-40":"_size-40_12oyi_141","size-44":"_size-44_12oyi_153","size-48":"_size-48_12oyi_165",quiet:I,fill:q,outline:x,iconBefore:w,iconAfter:S,iconAfterAndShortkey:j,hasIconBefore:C,hasIconAfter:z,hasShortkey:N,hasIconAfterAndShortkey:T,alignmentRight:B,shortkey:b};function u(){return t.jsx("span",{children:"⌘K"})}u.__docgenInfo={description:"",methods:[],displayName:"Shortkey"};const R=({inputId:V,inputSize:d=36,state:s="default",quiet:a=!1,variants:r="fill",iconBefore:n,iconAfter:i,shortkey:o,placeholder:c="Input...",alignment:p="left",necessity:_,...f})=>{const m=l(e.input,e[`size-${d}`],{[e.quiet]:a,[e.fill]:r=="fill",[e.outline]:r=="outline",[e.hasIconBefore]:n,[e.hasIconAfter]:i,[e.hasShortkey]:o,[e.hasIconAfterAndShortkey]:i&&o,[e.alignmentRight]:p=="right"}),h=l(e.inputWraper,e[s],{[e.quiet]:a});return t.jsxs("div",{className:h,children:[n&&t.jsx("span",{className:e.iconBefore,children:n}),t.jsx("input",{type:"text",placeholder:c,className:m,disabled:s=="disabled",required:_=="required",...f}),t.jsxs("div",{className:e.iconAfterAndShortkey,children:[i&&t.jsx("span",{className:e.iconAfter,children:i}),o&&t.jsx("span",{className:e.shortkey,children:t.jsx(u,{})})]})]})};R.__docgenInfo={description:"",methods:[],displayName:"InputField",props:{inputId:{required:!0,tsType:{name:"string"},description:""},inputSize:{required:!1,tsType:{name:"union",raw:"24 | 32 | 36 | 40 | 44 | 48",elements:[{name:"literal",value:"24"},{name:"literal",value:"32"},{name:"literal",value:"36"},{name:"literal",value:"40"},{name:"literal",value:"44"},{name:"literal",value:"48"}]},description:"",defaultValue:{value:"36",computed:!1}},state:{required:!1,tsType:{name:"union",raw:'"default" | "focus" | "error" | "error-focus" | "disabled"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"focus"'},{name:"literal",value:'"error"'},{name:"literal",value:'"error-focus"'},{name:"literal",value:'"disabled"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},quiet:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},variants:{required:!1,tsType:{name:"union",raw:'"fill" | "outline"',elements:[{name:"literal",value:'"fill"'},{name:"literal",value:'"outline"'}]},description:"",defaultValue:{value:'"fill"',computed:!1}},iconBefore:{required:!1,tsType:{name:"ReactNode"},description:""},iconAfter:{required:!1,tsType:{name:"ReactNode"},description:""},shortkey:{required:!1,tsType:{name:"ReactNode"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Input..."',computed:!1}},alignment:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"left"',computed:!1}},necessity:{required:!1,tsType:{name:"union",raw:'"required" | "optional" | "none"',elements:[{name:"literal",value:'"required"'},{name:"literal",value:'"optional"'},{name:"literal",value:'"none"'}]},description:""}},composes:["InputHTMLAttributes"]};function L(){return t.jsx("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M13 13L10.6667 10.6667M12.3333 6.66667C12.3333 9.79628 9.79628 12.3333 6.66667 12.3333C3.53705 12.3333 1 9.79628 1 6.66667C1 3.53705 3.53705 1 6.66667 1C9.79628 1 12.3333 3.53705 12.3333 6.66667Z",stroke:"#A0A0AB",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}L.__docgenInfo={description:"",methods:[],displayName:"Search"};function M(){return t.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M6.05998 5.99998C6.21672 5.55442 6.52608 5.17872 6.93328 4.9394C7.34048 4.70009 7.81924 4.61261 8.28476 4.69245C8.75028 4.7723 9.17252 5.01433 9.4767 5.37567C9.78087 5.737 9.94735 6.19433 9.94665 6.66665C9.94665 7.99998 7.94665 8.66665 7.94665 8.66665M7.99998 11.3333H8.00665M14.6666 7.99998C14.6666 11.6819 11.6819 14.6666 7.99998 14.6666C4.31808 14.6666 1.33331 11.6819 1.33331 7.99998C1.33331 4.31808 4.31808 1.33331 7.99998 1.33331C11.6819 1.33331 14.6666 4.31808 14.6666 7.99998Z",stroke:"#A0A0AB",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})}M.__docgenInfo={description:"",methods:[],displayName:"Help"};export{M as H,R as I,L as S,u as a};