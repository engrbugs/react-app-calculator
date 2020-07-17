(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],[,function(e,t,a){"use strict";t.a=function(e){switch(e){case"0":return"zero";case"1":return"one";case"2":return"two";case"3":return"three";case"4":return"four";case"5":return"five";case"6":return"six";case"7":return"seven";case"8":return"eight";case"9":return"nine";case"\xf7":return"divide";case"\xd7":return"multiply";case"\u2014":return"subtract";case"+":return"add";case"=":return"equals";case".":return"decimal";case"AC":return"clear";default:return"Nan"}}},,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_bugs_Documents_BUGS_Github_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_App_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(12),_App_css__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_2__),_Converter__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(1),SVG=function(e){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg",{width:"50px",height:"50px",id:e.id,stroke:e.stroke,fill:e.fill,viewBox:"0 0 150 150",xmlns:"http://www.w3.org/2000/svg"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path",{id:e.id,d:"M 0, 75 C 0, 18.75 18.75, 0 75, 0 S 150, 18.75 150, 75 131.25, 150 75, 150 0, 131.25 0, 75"}))};function Numbers(e){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"button-center",id:Object(_Converter__WEBPACK_IMPORTED_MODULE_3__.a)(e.id),onClick:e.numbers},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SVG,{fill:"#dfe4ea",id:e.id}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a",null,e.id))}function Special(e){var t=("Backspace"===e.keyCode?"button-special-backspace ":"button-special ")+("Nan"===e.id&&"nan");return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:t,id:Object(_Converter__WEBPACK_IMPORTED_MODULE_3__.a)(e.id),onClick:e.skills},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SVG,{stroke:"Backspace"===e.id?"":"#fab1a0",fill:"Backspace"===e.id?"#dfe4ea":"#d63031",id:e.keyCode}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a",null,"Backspace"===e.keyCode?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i",{class:"fas fa-backspace"}):e.id))}function MathButton(e){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"="===e.id?"button-math-equals":"button-math",id:Object(_Converter__WEBPACK_IMPORTED_MODULE_3__.a)(e.id),onClick:e.function},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SVG,{stroke:"="===e.id?"#c8d6e5":"",fill:"="===e.id?"#4185f4":"#dfe4ea",id:e.id}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a",null,e.id))}function App(){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)("0"),_useState2=Object(C_Users_bugs_Documents_BUGS_Github_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),currentDisplay=_useState2[0],setCurrentDisplay=_useState2[1],_useState3=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(String.fromCharCode(160)),_useState4=Object(C_Users_bugs_Documents_BUGS_Github_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState3,2),displayFormulaGS=_useState4[0],setDisplayFormulaGS=_useState4[1],formulaGS={get get(){return displayFormulaGS},set toDisplay(e){setDisplayFormulaGS(e)},append:function(e){var t,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=28,_=displayFormulaGS;switch(_===String.fromCharCode(160)&&(_=""),e){case"/":this.isInMathOperation()||(_+="/");break;case"x":this.isInMathOperation()||(_+="*");break;case"\u2014":this.isInMathOperation()||(_+="-");break;case"+":this.isInMathOperation()||(_+="+");break;case"-":case"0.":break;default:var s="-"===e.substr(0,1)&&!0;_+="".concat(s?"(":"").concat(e).concat(s?")":"")}return _.length>r&&(t="..."+_.substr(_.length-r)),setDisplayFormulaGS((t||_)+(a?"=":"")),_},undo:function(){setDisplayFormulaGS(displayFormulaGS.substr(0,displayFormulaGS.length-1))},clear:function(){setDisplayFormulaGS(String.fromCharCode(160))},hasEquals:function(){return"="===displayFormulaGS.substr(displayFormulaGS.length-1)},putEquals:function(){setDisplayFormulaGS(displayFormulaGS+"=")},isEmpty:displayFormulaGS===String.fromCharCode(160),isInMathOperation:function(){return/\+|\*|\/|-/.test(displayFormulaGS.substr(displayFormulaGS.length-1))}},resetAll=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;try{e.preventDefault()}catch(r){}setCurrentDisplay(t),a?formulaGS.toDisplay=a:formulaGS.clear()}),[formulaGS]),handleNumbers=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,a=!1;formulaGS.hasEquals()&&(a=!0,resetAll(e));var r=t||e.target.innerText||e.target.id;switch(currentDisplay){case"0":setCurrentDisplay(r);break;case"/":case"x":case"\u2014":case"+":formulaGS.append(currentDisplay),setCurrentDisplay(r);break;default:setCurrentDisplay(a?r:currentDisplay+r)}currentDisplay.length>9&&maxLimitError()}),[currentDisplay,resetAll,formulaGS]),mathematicsOperations=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((function(e){var t,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,r=formulaGS.hasEquals();try{t="-"===currentDisplay.substr(0,1)&&!0}catch(s){t=!1}if(!/LIMIT ERROR/.test(currentDisplay)){var _=a||e.target.innerText||e.target.id;switch(_){case"\xf7":if(r)return void resetAll(e,"/",currentDisplay);formulaGS.append(currentDisplay),setCurrentDisplay("/");break;case"\xd7":if(r)return void resetAll(e,"x",currentDisplay);formulaGS.append(currentDisplay),setCurrentDisplay("x");break;case"+":if(r)return void resetAll(e,"+",currentDisplay);/\+|x|\/|\u2014/.test(currentDisplay)||(formulaGS.isInMathOperation&&/\+|x|\/|-/.test(currentDisplay)?formulaGS.undo():formulaGS.append(currentDisplay)),setCurrentDisplay("+");break;case"\u2014":if(r)return void resetAll(e,"\u2014",currentDisplay);/\+|x|\/|\u2014/.test(currentDisplay)?(formulaGS.isInMathOperation&&formulaGS.append(currentDisplay),setCurrentDisplay("-")):t?setCurrentDisplay("-"===currentDisplay?"0":currentDisplay.substr(1,currentDisplay.length)):(formulaGS.append(currentDisplay),setCurrentDisplay("\u2014"))}}}),[currentDisplay,resetAll,formulaGS]);function maxLimitError(){setCurrentDisplay("LIMIT ERROR")}var backSpace=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((function(e){currentDisplay.length>1?setCurrentDisplay(currentDisplay.substr(0,currentDisplay.length-1)):setCurrentDisplay("0")}),[currentDisplay]),inputDot=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((function(e){e.preventDefault(),formulaGS.hasEquals()?resetAll(e):/\.|LIMIT ERROR/.test(currentDisplay)||setCurrentDisplay(currentDisplay+".")}),[formulaGS,currentDisplay,resetAll]),evaluate=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((function(e){var MAXCHAR=9;if(e.preventDefault(),!formulaGS.hasEquals()&&!/LIMIT ERROR/.test(currentDisplay))try{var answer=eval(formulaGS.append(currentDisplay,!0));if(answer>999999999)return void maxLimitError();setCurrentDisplay((""+answer).length>MAXCHAR?(""+answer).substr(0,MAXCHAR):""+answer)}catch(err){return void maxLimitError()}}),[formulaGS,currentDisplay]),handleKeyPress=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((function(e){var t;switch(console.log(e.key),e.key){case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":(t=document.getElementById(e.key)).classList.toggle("button-center-active"),handleNumbers("",e.key),setTimeout((function(){return t.classList.toggle("button-center-active")}),280);break;case"/":case"\\":(t=document.getElementById("\xf7")).classList.toggle("button-center-active"),mathematicsOperations("","\xf7"),setTimeout((function(){return t.classList.toggle("button-center-active")}),280);break;case"x":case"*":(t=document.getElementById("\xd7")).classList.toggle("button-center-active"),mathematicsOperations("","\xd7"),setTimeout((function(){return t.classList.toggle("button-center-active")}),280);break;case"-":(t=document.getElementById("\u2014")).classList.toggle("button-center-active"),mathematicsOperations("","\u2014"),setTimeout((function(){return t.classList.toggle("button-center-active")}),280);break;case"+":case"=":(t=document.getElementById("+")).classList.toggle("button-center-active"),mathematicsOperations("","+"),setTimeout((function(){return t.classList.toggle("button-center-active")}),280);break;case"Enter":(t=document.getElementById("=")).classList.toggle("button-center-active"),evaluate(e),setTimeout((function(){return t.classList.toggle("button-center-active")}),280);break;case",":case".":(t=document.getElementById(e.key)).classList.toggle("button-center-active"),inputDot(e),setTimeout((function(){return t.classList.toggle("button-center-active")}),280);break;case"Escape":(t=document.getElementById(e.key)).classList.toggle("button-center-active"),resetAll(e),setTimeout((function(){return t.classList.toggle("button-center-active")}),280);break;case"Backspace":(t=document.getElementById(e.key)).classList.toggle("button-center-active"),backSpace(),setTimeout((function(){return t.classList.toggle("button-center-active")}),280)}}),[handleNumbers,mathematicsOperations,evaluate,inputDot,resetAll,backSpace]);return Object(react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){return document.addEventListener("keydown",handleKeyPress),function(){document.removeEventListener("keydown",handleKeyPress)}}),[handleKeyPress]),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"calculator"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{id:"equation",className:"equation"},displayFormulaGS),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{id:"display",className:"display"},currentDisplay),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"divider-2"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",null)," "),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Special,{id:"AC",skills:resetAll,keyCode:"Escape"}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Special,{id:"Nan"}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Special,{id:"Backspace",skills:backSpace,keyCode:"Backspace"}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MathButton,{id:"\xf7",function:mathematicsOperations,keyCode:"\xf7"}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Numbers,{id:"7",numbers:handleNumbers}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Numbers,{id:"8",numbers:handleNumbers}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Numbers,{id:"9",numbers:handleNumbers}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MathButton,{id:"\xd7",function:mathematicsOperations,keyCode:"\xd7"}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Numbers,{id:"4",numbers:handleNumbers}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Numbers,{id:"5",numbers:handleNumbers}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Numbers,{id:"6",numbers:handleNumbers}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MathButton,{id:"\u2014",function:mathematicsOperations,keyCode:"\u2014"}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Numbers,{id:"1",numbers:handleNumbers}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Numbers,{id:"2",numbers:handleNumbers}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Numbers,{id:"3",numbers:handleNumbers}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MathButton,{id:"+",function:mathematicsOperations,keyCode:"+"}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Numbers,{id:".",numbers:inputDot}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Numbers,{id:"0",numbers:handleNumbers}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Special,{id:"Nan"}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MathButton,{id:"=",function:evaluate,keyCode:"="}))}__webpack_exports__.a=App},function(e,t,a){e.exports=a(13)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(0),_=a.n(r),s=a(4),n=a.n(s),c=(a(11),a(5));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(_.a.createElement(_.a.StrictMode,null,_.a.createElement(c.a,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[6,1,2]]]);
//# sourceMappingURL=main.7297fc02.chunk.js.map