(this["webpackJsonpbertrand-paradox"]=this["webpackJsonpbertrand-paradox"]||[]).push([[0],{20:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(9),i=n.n(a),c=n(5),s=n(2);function d(e){var t=e.ctx,n=e.x1,r=e.x2,o=e.y1,a=e.y2,i=e.color;t.beginPath(),t.lineWidth=1,t.strokeStyle=i,t.moveTo(n+350,o+350),t.lineTo(r+350,a+350),t.stroke()}var h,l,b,u,x,j,f,p=n(3),g=p.a.input(h||(h=Object(s.a)(["\n    height: 40px;\n    width: 330px;\n    padding: 10px 20px;\n    margin: 0.5rem;\n    border: 2px solid #fcc419;\n    background-color: #efefef;\n    border-radius: 15px;\n    font-size: 16px;\n"]))),O=p.a.button(l||(l=Object(s.a)(["\n  position: relative;\n  width: 373px;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n  margin: 0.5rem;\n  background-color:#adb5bd;\n  border: 2px solid #343a40;\n  border-radius: 15px;\n  font-size: 20px;\n  &:active {\n    transform: translateY(2px);\n  }\n  &:hover {\n    background-color: #868e96;\n  }\n"]))),m=n(1),v=p.a.div(b||(b=Object(s.a)(["\n    display: flex;\n    background-color: #efefef;\n    height: 100vh;\n    align-items: center;\n    justify-content: center;\n"]))),M=p.a.div(u||(u=Object(s.a)(["\n    display: flex;\n    flex-direction: column;\n"]))),w=p.a.div(x||(x=Object(s.a)(["\n    font-size: 1.5rem;\n    padding: 0.5rem;\n    "]))),y=p.a.div(j||(j=Object(s.a)(["\n    font-size: 1.5rem;\n    padding: 0.5rem;\n"]))),k=p.a.div(f||(f=Object(s.a)(["\n    font-size: 1rem;\n"]))),S=function(){var e=Object(r.useState)({long:0,whole:0}),t=Object(c.a)(e,2),n=t[0],o=t[1],a=Object(r.useState)("0"),i=Object(c.a)(a,2),s=i[0],h=i[1],l=Object(r.useState)(!1),b=Object(c.a)(l,2),u=b[0],x=b[1],j=Object(r.useRef)();function f(e){isNaN(e)||Number(e)<=0||Number(e)>4e3?x(!0):(p(Number(e)),x(!1))}function p(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if(e){var a=j.current.getContext("2d"),i=600*Math.random()-300,c=Math.sqrt(Math.pow(300,2)-Math.pow(i,2))*(1===Math.floor(2*Math.random())?1:-1),s=600*Math.random()-300,h=Math.sqrt(Math.pow(300,2)-Math.pow(s,2))*(1===Math.floor(2*Math.random())?1:-1),l=Math.sqrt(Math.pow(s-i,2)+Math.pow(h-c,2)),b=l>300*Math.sqrt(3);d({ctx:a,x1:i,x2:s,y1:c,y2:h,color:b?"rgb(255, 0 , 0)":"rgb(0, 0, 255)"}),p(e-1,t+(b?1:0),r+1)}else o({long:n.long+t,whole:n.whole+r})}return Object(r.useEffect)((function(){var e=j.current.getContext("2d");!function(e){e.beginPath(),e.lineWidth=2,e.strokeStyle="rgb(0, 0, 0)",e.arc(350,350,300,0,2*Math.PI),e.stroke()}(e),function(e){e.beginPath(),e.lineWidth=2,e.strokeStyle="rgb(0, 0, 0)",e.moveTo(350,50),e.lineTo(350-150*Math.sqrt(3),500),e.lineTo(350+150*Math.sqrt(3),500),e.closePath(),e.stroke()}(e)})),Object(m.jsxs)(v,{children:[Object(m.jsx)("canvas",{ref:j,width:"700",height:"700"}),Object(m.jsxs)(M,{children:[Object(m.jsxs)(w,{children:[n.long," / ",n.whole]}),Object(m.jsxs)(y,{children:[n.whole?n.long/n.whole*100:0,"%"]}),Object(m.jsx)(g,{error:u,value:s,onChange:function(e){return h(e.target.value)},type:"text"}),Object(m.jsx)(O,{onClick:function(){f(s)},children:"\uc120 \uadf8\ub9ac\uae30"}),u&&Object(m.jsx)(k,{children:"\uc798\ubabb\ub41c \uc785\ub825\uc774\uac70\ub098 \ubc94\uc704(1~4000)\uc744 \ubc97\uc5b4\ub09c \uac12\uc785\ub2c8\ub2e4"})]})]})};i.a.render(Object(m.jsx)(o.a.StrictMode,{children:Object(m.jsx)(S,{})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.45579108.chunk.js.map