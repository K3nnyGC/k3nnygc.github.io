(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["registro"],{5753:function(t,e,i){"use strict";var a=i("9b7f"),s=i.n(a);s.a},"63fb":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"register"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col s12 m10 offset-m1 l8 offset-l2 xl6 offset-xl3"},[i("div",{staticClass:"card-panel hoverable"},[i("h3",{staticClass:"justificado"},[t._v("Registra una canchita")]),i("form",[i("div",[i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s12"},[i("input",{staticClass:"validate",attrs:{id:"first_name",type:"text"}}),i("label",{attrs:{for:"first_name"}},[t._v("Nombre")])]),i("div",{staticClass:"input-field col s12"},[i("input",{staticClass:"validate",attrs:{id:"last_name",type:"text"}}),i("label",{attrs:{for:"last_name"}},[t._v("Dirección")])]),i("div",{staticClass:"input-field col s12"},[i("input",{staticClass:"validate",attrs:{id:"dni",type:"text"}}),i("label",{attrs:{for:"dni"}},[t._v("Telefono")])]),i("div",{staticClass:"input-field col s12"},[i("div",{staticClass:"file-field input-field"},[i("div",{staticClass:"btn waves-effect green"},[i("span",[t._v("Imagen")]),i("input",{attrs:{type:"file",id:"file-upload",accept:"image/*"}})]),i("div",{staticClass:"file-path-wrapper"},[i("input",{staticClass:"file-path validate",attrs:{type:"text"}})]),i("div",{staticClass:"img-contenedor",attrs:{id:"file-preview-zone"}})])])])]),i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s12"},[i("input",{staticClass:"btn waves-effect green",attrs:{type:"submit",value:"Registrar"}})])])])])])])])}],l={name:"register",data:function(){return{}},methods:{},mounted:function(){this.$nextTick(function(){var t=document.getElementById("file-upload");t.onchange=function(t){var e=t.srcElement;if(e.files&&e.files[0]){var i=new FileReader;i.onload=function(t){var e=document.createElement("img");e.id="file-preview",e.src=t.target.result,console.log(t.target.result);var i=document.getElementById("file-preview-zone");i.innerHTML="",i.appendChild(e)},i.readAsDataURL(e.files[0])}}})}},n=l,r=(i("5753"),i("2877")),c=Object(r["a"])(n,a,s,!1,null,"3a458b21",null);e["default"]=c.exports},"9b7f":function(t,e,i){}}]);
//# sourceMappingURL=registro.7a73d3a6.js.map