!function(e){function t(t){for(var r,a,s=t[0],c=t[1],u=t[2],f=0,h=[];f<s.length;f++)a=s[f],o[a]&&h.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(l&&l(t);h.length;)h.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={0:0},i=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=c;i.push([114,1]),n()}({114:function(e,t,n){"use strict";n.r(t);n(53),n(16),n(55),n(61),n(32),n(64);var r=n(0);n(14),n(15),n(38),n(39);r.DeviceOrientationControls=function(e){var t=this;this.object=e,this.object.rotation.reorder("YXZ"),this.enabled=!0,this.deviceOrientation={},this.screenOrientation=0,this.alpha=0,this.alphaOffsetAngle=0,this.betaOffsetAngle=0,this.gammaOffsetAngle=0;var n=function(e){t.deviceOrientation=e},o=function(){t.screenOrientation=window.orientation||0},i=function(){var e=new r.E(0,0,1),t=new r.h,n=new r.x,o=new r.x(-Math.sqrt(.5),0,0,Math.sqrt(.5));return function(r,i,a,s,c){t.set(a,i,-s,"YXZ"),r.setFromEuler(t),r.multiply(o),r.multiply(n.setFromAxisAngle(e,-c))}}();this.connect=function(){o(),window.addEventListener("orientationchange",o,!1),window.addEventListener("deviceorientation",n,!1),t.enabled=!0},this.disconnect=function(){window.removeEventListener("orientationchange",o,!1),window.removeEventListener("deviceorientation",n,!1),t.enabled=!1},this.update=function(){if(!1!==t.enabled){var e=t.deviceOrientation.alpha?r.n.degToRad(t.deviceOrientation.alpha)+this.alphaOffsetAngle:0,n=t.deviceOrientation.beta?r.n.degToRad(t.deviceOrientation.beta)+this.betaOffsetAngle:0,o=t.deviceOrientation.gamma?r.n.degToRad(t.deviceOrientation.gamma)+this.gammaOffsetAngle:0,a=t.screenOrientation?r.n.degToRad(t.screenOrientation):0;i(t.object.quaternion,e,n,o,a),this.alpha=e}},this.updateAlphaOffsetAngle=function(e){this.alphaOffsetAngle=e,this.update()},this.updateBetaOffsetAngle=function(e){this.betaOffsetAngle=e,this.update()},this.updateGammaOffsetAngle=function(e){this.gammaOffsetAngle=e,this.update()},this.dispose=function(){this.disconnect()},this.connect()};n(94),n(98),n(100),n(102),n(103),n(104),n(78);r.OBJLoader=function(e){this.manager=void 0!==e?e:r.f,this.materials=null,this.regexp={vertex_pattern:/^v\s+([\d|\.|\+|\-|e|E]+)\s+([\d|\.|\+|\-|e|E]+)\s+([\d|\.|\+|\-|e|E]+)/,normal_pattern:/^vn\s+([\d|\.|\+|\-|e|E]+)\s+([\d|\.|\+|\-|e|E]+)\s+([\d|\.|\+|\-|e|E]+)/,uv_pattern:/^vt\s+([\d|\.|\+|\-|e|E]+)\s+([\d|\.|\+|\-|e|E]+)/,face_vertex:/^f\s+(-?\d+)\s+(-?\d+)\s+(-?\d+)(?:\s+(-?\d+))?/,face_vertex_uv:/^f\s+(-?\d+)\/(-?\d+)\s+(-?\d+)\/(-?\d+)\s+(-?\d+)\/(-?\d+)(?:\s+(-?\d+)\/(-?\d+))?/,face_vertex_uv_normal:/^f\s+(-?\d+)\/(-?\d+)\/(-?\d+)\s+(-?\d+)\/(-?\d+)\/(-?\d+)\s+(-?\d+)\/(-?\d+)\/(-?\d+)(?:\s+(-?\d+)\/(-?\d+)\/(-?\d+))?/,face_vertex_normal:/^f\s+(-?\d+)\/\/(-?\d+)\s+(-?\d+)\/\/(-?\d+)\s+(-?\d+)\/\/(-?\d+)(?:\s+(-?\d+)\/\/(-?\d+))?/,object_pattern:/^[og]\s*(.+)?/,smoothing_pattern:/^s\s+(\d+|on|off)/,material_library_pattern:/^mtllib /,material_use_pattern:/^usemtl /}},r.OBJLoader.prototype={constructor:r.OBJLoader,load:function(e,t,n,o){var i=this,a=new r.G(i.manager);a.setPath(this.path),a.load(e,function(e){t(i.parse(e))},n,o)},setPath:function(e){this.path=e},setMaterials:function(e){this.materials=e},_createParserState:function(){var e={objects:[],object:{},vertices:[],normals:[],uvs:[],materialLibraries:[],startObject:function(e,t){if(this.object&&!1===this.object.fromDeclaration)return this.object.name=e,void(this.object.fromDeclaration=!1!==t);this.object&&"function"==typeof this.object._finalize&&this.object._finalize();var n=this.object&&"function"==typeof this.object.currentMaterial?this.object.currentMaterial():void 0;if(this.object={name:e||"",fromDeclaration:!1!==t,geometry:{vertices:[],normals:[],uvs:[]},materials:[],smooth:!0,startMaterial:function(e,t){var n=this._finalize(!1);n&&(n.inherited||n.groupCount<=0)&&this.materials.splice(n.index,1);var r={index:this.materials.length,name:e||"",mtllib:Array.isArray(t)&&t.length>0?t[t.length-1]:"",smooth:void 0!==n?n.smooth:this.smooth,groupStart:void 0!==n?n.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(e){return{index:"number"==typeof e?e:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:this.groupEnd,groupEnd:-1,groupCount:-1,inherited:!1}}};return this.materials.push(r),r},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(e){var t=this.currentMaterial();return t&&-1===t.groupEnd&&(t.groupEnd=this.geometry.vertices.length/3,t.groupCount=t.groupEnd-t.groupStart,t.inherited=!1),!1!==e&&0===this.materials.length&&this.materials.push({name:"",smooth:this.smooth}),t}},n&&n.name&&"function"==typeof n.clone){var r=n.clone(0);r.inherited=!0,this.object.materials.push(r)}this.objects.push(this.object)},finalize:function(){this.object&&"function"==typeof this.object._finalize&&this.object._finalize()},parseVertexIndex:function(e,t){var n=parseInt(e,10);return 3*(n>=0?n-1:n+t/3)},parseNormalIndex:function(e,t){var n=parseInt(e,10);return 3*(n>=0?n-1:n+t/3)},parseUVIndex:function(e,t){var n=parseInt(e,10);return 2*(n>=0?n-1:n+t/2)},addVertex:function(e,t,n){var r=this.vertices,o=this.object.geometry.vertices;o.push(r[e+0]),o.push(r[e+1]),o.push(r[e+2]),o.push(r[t+0]),o.push(r[t+1]),o.push(r[t+2]),o.push(r[n+0]),o.push(r[n+1]),o.push(r[n+2])},addVertexLine:function(e){var t=this.vertices,n=this.object.geometry.vertices;n.push(t[e+0]),n.push(t[e+1]),n.push(t[e+2])},addNormal:function(e,t,n){var r=this.normals,o=this.object.geometry.normals;o.push(r[e+0]),o.push(r[e+1]),o.push(r[e+2]),o.push(r[t+0]),o.push(r[t+1]),o.push(r[t+2]),o.push(r[n+0]),o.push(r[n+1]),o.push(r[n+2])},addUV:function(e,t,n){var r=this.uvs,o=this.object.geometry.uvs;o.push(r[e+0]),o.push(r[e+1]),o.push(r[t+0]),o.push(r[t+1]),o.push(r[n+0]),o.push(r[n+1])},addUVLine:function(e){var t=this.uvs,n=this.object.geometry.uvs;n.push(t[e+0]),n.push(t[e+1])},addFace:function(e,t,n,r,o,i,a,s,c,u,l,f){var h,p=this.vertices.length,d=this.parseVertexIndex(e,p),m=this.parseVertexIndex(t,p),y=this.parseVertexIndex(n,p);if(void 0===r?this.addVertex(d,m,y):(h=this.parseVertexIndex(r,p),this.addVertex(d,m,h),this.addVertex(m,y,h)),void 0!==o){var b=this.uvs.length;d=this.parseUVIndex(o,b),m=this.parseUVIndex(i,b),y=this.parseUVIndex(a,b),void 0===r?this.addUV(d,m,y):(h=this.parseUVIndex(s,b),this.addUV(d,m,h),this.addUV(m,y,h))}if(void 0!==c){var v=this.normals.length;d=this.parseNormalIndex(c,v),m=c===u?d:this.parseNormalIndex(u,v),y=c===l?d:this.parseNormalIndex(l,v),void 0===r?this.addNormal(d,m,y):(h=this.parseNormalIndex(f,v),this.addNormal(d,m,h),this.addNormal(m,y,h))}},addLineGeometry:function(e,t){this.object.geometry.type="Line";for(var n=this.vertices.length,r=this.uvs.length,o=0,i=e.length;o<i;o++)this.addVertexLine(this.parseVertexIndex(e[o],n));var a=0;for(i=t.length;a<i;a++)this.addUVLine(this.parseUVIndex(t[a],r))}};return e.startObject("",!1),e},parse:function(e){console.time("OBJLoader");var t=this._createParserState();-1!==e.indexOf("\r\n")&&(e=e.replace("\r\n","\n"));for(var n=e.split("\n"),o="",i="",a="",s=[],c="function"==typeof"".trimLeft,u=0,l=n.length;u<l;u++)if(o=n[u],0!==(o=c?o.trimLeft():o.trim()).length&&"#"!==(i=o.charAt(0)))if("v"===i)if(" "===(a=o.charAt(1))&&null!==(s=this.regexp.vertex_pattern.exec(o)))t.vertices.push(parseFloat(s[1]),parseFloat(s[2]),parseFloat(s[3]));else if("n"===a&&null!==(s=this.regexp.normal_pattern.exec(o)))t.normals.push(parseFloat(s[1]),parseFloat(s[2]),parseFloat(s[3]));else{if("t"!==a||null===(s=this.regexp.uv_pattern.exec(o)))throw new Error("Unexpected vertex/normal/uv line: '"+o+"'");t.uvs.push(parseFloat(s[1]),parseFloat(s[2]))}else if("f"===i)if(null!==(s=this.regexp.face_vertex_uv_normal.exec(o)))t.addFace(s[1],s[4],s[7],s[10],s[2],s[5],s[8],s[11],s[3],s[6],s[9],s[12]);else if(null!==(s=this.regexp.face_vertex_uv.exec(o)))t.addFace(s[1],s[3],s[5],s[7],s[2],s[4],s[6],s[8]);else if(null!==(s=this.regexp.face_vertex_normal.exec(o)))t.addFace(s[1],s[3],s[5],s[7],void 0,void 0,void 0,void 0,s[2],s[4],s[6],s[8]);else{if(null===(s=this.regexp.face_vertex.exec(o)))throw new Error("Unexpected face line: '"+o+"'");t.addFace(s[1],s[2],s[3],s[4])}else if("l"===i){var f=o.substring(1).trim().split(" "),h=[],p=[];if(-1===o.indexOf("/"))h=f;else for(var d=0,m=f.length;d<m;d++){var y=f[d].split("/");""!==y[0]&&h.push(y[0]),""!==y[1]&&p.push(y[1])}t.addLineGeometry(h,p)}else if(null!==(s=this.regexp.object_pattern.exec(o))){var b=s[0].substr(1).trim();t.startObject(b)}else if(this.regexp.material_use_pattern.test(o))t.object.startMaterial(o.substring(7).trim(),t.materialLibraries);else if(this.regexp.material_library_pattern.test(o))t.materialLibraries.push(o.substring(7).trim());else{if(null===(s=this.regexp.smoothing_pattern.exec(o))){if("\0"===o)continue;throw new Error("Unexpected line: '"+o+"'")}var v=s[1].trim().toLowerCase();t.object.smooth="1"===v||"on"===v,(I=t.object.currentMaterial())&&(I.smooth=t.object.smooth)}t.finalize();var g=new r.k;g.materialLibraries=[].concat(t.materialLibraries);for(u=0,l=t.objects.length;u<l;u++){var w=t.objects[u],O=w.geometry,E=w.materials,x="Line"===O.type;if(0!==O.vertices.length){var _=new r.d;_.addAttribute("position",new r.c(new Float32Array(O.vertices),3)),O.normals.length>0?_.addAttribute("normal",new r.c(new Float32Array(O.normals),3)):_.computeVertexNormals(),O.uvs.length>0&&_.addAttribute("uv",new r.c(new Float32Array(O.uvs),2));for(var j,S=[],M=0,A=E.length;M<A;M++){var T=E[M],I=void 0;if(null!==this.materials&&(I=this.materials.create(T.name),x&&I&&!(I instanceof r.m))){var D=new r.m;D.copy(I),I=D}I||((I=x?new r.m:new r.q).name=T.name),I.shading=T.smooth?r.A:r.i,S.push(I)}if(S.length>1){for(M=0,A=E.length;M<A;M++){T=E[M];_.addGroup(T.groupStart,T.groupCount,M)}var P=new r.r(S);j=x?new r.l(_,P):new r.o(_,P)}else j=x?new r.l(_,S[0]):new r.o(_,S[0]);j.name=w.name,g.add(j)}}return console.timeEnd("OBJLoader"),g}};n(20),n(21);var o={FOV:45,WINDOW_WIDTH:window.innerWidth,WINDOW_HEIGHT:window.innerHeight,ASPECT_RATIO:window.innerWidth/window.innerHeight,NEAR:.01,FAR:1e3};function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=function(e){function t(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),u(c(c(e=function(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?c(e):t}(this,a(t).call(this)))),"onDeviceOrientationChange",function(t,n,r){e.userData.target.x=.002*(1-r.x),e.userData.target.y=.002*(1-r.y),e.rotation.x+=.05*(e.userData.target.y-e.rotation.x),e.rotation.y+=.05*(e.userData.target.x-e.rotation.y)}),u(c(c(e)),"onMouseMove",function(t,n){e.userData.target.x=.002*(1-n.x),e.userData.target.y=.002*(1-n.y),e.rotation.x+=.05*(e.userData.target.y-e.rotation.x),e.rotation.y+=.05*(e.userData.target.x-e.rotation.y)}),e.aspect=n.ASPECT_RATIO,e.far=n.FAR,e.fov=n.FOV,e.near=n.NEAR,e.userData=[],e.userData.target=new r.D,e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,r["t"]),t}(),f={GAME_FLOOR:"GAME_FLOOR",TOWER_ALPHA:"TOWER_ALPHA",SHIP:"SHIP",METEOR:"METEOR",METEOR_FIELD:"METEOR_FIELD"},h={materials:{colors:{green:{hex:65535},white:{hex:16777215},blue:{hex:65535}}},sceneUtils:{canCollide:[],materials:{}},state:"",stageObjects:[],sceneObjects:[],userData:{mouse:null,isMobile:!1}},p={WIDTH:20,HEIGHT:50,WIDTH_SEGMENTS:50},d={WIDTH:1,HEIGHT:10,DEPTH:1},m={WIDTH:1,HEIGHT:1,SPEED:2e-4,materials:{parent:null}},y={RADIUS:.75,WIDTH_SEGMENTS:5,HEIGHT_SEGMENTS:5,VALUE:0,COORDINATES:[0,0,0],materials:{parent:null,destroyVal:null}},b={1:[0,0,-10],2:[-2.65,-4.75,-15],3:[10,2.75,12],4:[15,-3.75,18],5:[13,5.75,6],6:[8.5,2.3,-10],7:[2,-4,13],8:[-2,9,15],9:[5,-1,0]};function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t){return!t||"object"!==v(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var E=function(e){function t(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{x:0,y:0,z:0};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=g(this,w(t).call(this))).geometry=new r.a(.25,.25,.75),e.material=new r.p({color:65280,wireframe:!0}),e.mesh=new r.o({color:65280,wireframe:!0}),e.position.x=n.x,e.position.y=n.y,e.position.z=n.z;var o=new r.e(.045,.05,.5,10),i=new r.o(o,e.material);i.rotation.x=-1.5,i.position.z=-.65;var a=new r.e(.1,.1,.75,6),s=new r.o(a,e.material);return i.add(s),s.position.y=-.425,e.add(i),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(t,r["o"]),t}(),x=(n(105),n(107),function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,r=Math.random()*n-t;return 0==r?e():r}),_=function(e){return e.charAt(Math.floor(Math.random()*e.length))};function j(e){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function S(e,t){return!t||"object"!==j(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function M(e){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function A(e,t){return(A=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var T=function(e){function t(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=S(this,M(t).call(this))).config=n,e.gameObjectType=f.GAME_FLOOR,e.geometry=new r.u(100,100,70,70),e.material=new r.w({color:16777215,size:.15});var o=!0,i=!1,a=void 0;try{for(var s,c=e.geometry.vertices[Symbol.iterator]();!(o=(s=c.next()).done);o=!0){var u=s.value;u.z=x(),u.x-=x()}}catch(e){i=!0,a=e}finally{try{o||null==c.return||c.return()}finally{if(i)throw a}}return e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&A(e,t)}(t,r["v"]),t}();function I(e){return(I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function D(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function L(e,t){return(L=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function R(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function H(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var F=function(e){function t(){var e,n,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),H(R(R(n=function(e,t){return!t||"object"!==I(t)&&"function"!=typeof t?R(e):t}(this,P(t).call(this)))),"createChildMesh",function(e){var t=R(R(n));(new r.j).load("../../src/assets/fonts/helvetiker_regular.typeface.json",function(n){var o,i=new r.C(String(e),{font:n,size:.75,height:.25,curveSegments:1});o=new r.p({color:16777215,wireframe:!0});var a=new r.o(i,o);a.position.x=-.25,a.position.y=-.3,t.add(a)})}),H(R(R(n)),"animate",function(){n.rotation[n.userData.rotationAxis]+=n.userData.rotationVelocity}),n.config=o,n.gameObjectType=f.SHIP,n.geometry=new r.B(n.config.RADIUS,n.config.WIDTH_SEGMENTS,n.config.HEIGHT_SEGMENTS),n.material=new r.p({color:65535,wireframe:!0}),(e=n.position).set.apply(e,D(n.config.COORDINATES)),n.userData.rotationAxis=_("xyz"),n.userData.rotationVelocity=x()/10,n.destroyVal=n.config.VALUE,n.mesh=new r.o(n.geometry,n.material),n.createChildMesh(n.destroyVal),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&L(e,t)}(t,r["o"]),t}();function C(e){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function V(e){return(V=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function U(e,t){return(U=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function N(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var G=function(e){function t(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),z(N(N(e=function(e,t){return!t||"object"!==C(t)&&"function"!=typeof t?N(e):t}(this,V(t).call(this)))),"move",function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;switch(e.position.z-=.05,t){case"ArrowUp":e.position.y<=2&&(e.rotation.x-=Math.PI/2);break;case"ArrowDown":e.position.y>=-Math.abs(2)&&(e.rotation.x+=Math.PI/2);break;case"ArrowRight":e.position.x<=3.5&&(e.rotation.y-=Math.PI/2);break;case"ArrowLeft":e.position.x>=-Math.abs(3.5)&&(e.rotation.y+=Math.PI/2)}}),z(N(N(e)),"shoot",function(e,t){}),e.config=n,e.gameObjectType=f.SHIP,e.geometry=new r.b(n.WIDTH,n.HEIGHT),e.material=new r.p({color:15597568,wireframe:!0}),e.mesh=new r.o(e.geometry,e.material),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&U(e,t)}(t,r["o"]),t}();function W(e){return(W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function k(e,t){return!t||"object"!==W(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function B(e){return(B=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function q(e,t){return(q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var X=function(e){function t(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=k(this,B(t).call(this))).config=n,e.gameObjectType=f.TOWER_ALPHA,e.geometry=new r.b(n.WIDTH,n.HEIGHT,n.DEPTH),e.material=new r.p({color:16711680,wireframe:!0}),e.mesh=new r.o(e.geometry,e.material),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&q(e,t)}(t,r["o"]),t}();function J(e){return(J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function K(e){return(K=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Y(e,t){return(Y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Z(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var Q=function(e){function t(e){var n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:p;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(Z(Z(n=function(e,t){return!t||"object"!==J(t)&&"function"!=typeof t?Z(e):t}(this,K(t).call(this)))),"animate",function(){var e=!0,t=!1,r=void 0;try{for(var o,i=n.children[Symbol.iterator]();!(e=(o=i.next()).done);e=!0){o.value.animate()}}catch(e){t=!0,r=e}finally{try{e||null==i.return||i.return()}finally{if(t)throw r}}}),n.config=r,n.gameObjectType=f.METEOR_FIELD,n.children=e,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Y(e,t)}(t,r["k"]),t}(),$=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=(arguments.length>4&&void 0!==arguments[4]&&arguments[4],t||""),a=function(e,t,n){for(var o=new r.k,i=0;i<t;i++){var a=new e;a.position.x=i*n,o.add(a)}return o};switch(e){case f.GAME_FLOOR:return new T(i);case f.METEOR:return 1==n?new F(i):a(F,n,o);case f.METEOR_FIELD:return new Q(function(e,t){for(var n=[],r=0;r<e;r++){var o=new F;o.position.x=r*t,n.push(o)}return n}(n,o),i);case f.SHIP:return new G(i);case f.TOWER_ALPHA:return 1==n?new X(i):a(X,n,o);default:new Error("Invalid gameObjectType")}},ee={SCENE_MANAGER:"SCENE_MANAGER",CAMERA:"CAMERA"};function te(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ne(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var re=function(){function e(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),ne(this,"init",function(){var e=window.innerWidth,n=window.innerHeight,o=e/n;t.camera.position.set(0,0,-.5),t.camera.updateProjectionMatrix(),t.camera.aspect=o,t.renderer.setSize(e,n),t.isMobile&&(t.controls=new r.DeviceOrientationControls(t.camera,!0),t.controls.connect())}),ne(this,"isCollider",function(e){var n=e.children;n.length>1?n.forEach(function(e){this.utils.canCollide.push(e)},t):t.utils.canCollide.push(e)}),ne(this,"onKeyDown",function(e){if("click"==e.type||"mousedown"==e.type||"touchstart"==e.type){var n=e.target.getAttribute("data-buttoncode");t.playerShip.move(n)}else t.playerShip.move(e.code)}),ne(this,"onMouseMove",function(e){var n=new r.D(window.innerWidth/2,window.innerHeight/2);t.mouseCoords.x=e.clientX-n.x,t.mouseCoords.y=e.clientY-n.x,t.camera.onMouseMove(e,t.mouseCoords)}),ne(this,"loadMaterials",function(){var e=t.materials.colors;for(var n in e){var o=e[n].hex,i=new r.p({color:o,wireframe:!0});e[n].material=i}}),ne(this,"onResize",function(){var e=window.innerWidth,n=window.innerHeight,r=e/n;t.renderer.setSize(e,n),t.camera.aspect=r,t.camera.updateProjectionMatrix()}),ne(this,"loadStageObjects",function(){t.playerShip=new $(f.SHIP),t.playerShip.position.z=0,t.stageObjects.push(t.playerShip);var e=new E({x:-1,y:-.62,z:-1.5});e.rotation.y=-.35,e.rotation.x=.15,t.camera.add(e);var n=new E({x:1,y:-.62,z:-1.5});n.rotation.y=.35,n.rotation.x=.15,t.camera.add(n);var r=new $(f.GAME_FLOOR);r.position.y=-5,r.position.z=0,r.rotateX(1.6),t.stageObjects.push(r)}),ne(this,"preload",function(){t.loadMaterials(),t.loadStageObjects(),t.state="PRELOAD";for(var e=1;e<=9;e++){var n=JSON.parse(JSON.stringify(y));n.VALUE=e,n.materials.parent=t.materials.colors.blue.material,n.materials.destroyVal=t.materials.colors.white.material,n.COORDINATES=b[e.toString()];var r=new $(f.METEOR,n,1,null,e);t.isCollider(r),t.sceneObjects.push(r)}t.stageScene()}),ne(this,"stageScene",function(){t.playerShip.add(t.camera);var e=!0,n=!1,r=void 0;try{for(var o,i=t.stageObjects[Symbol.iterator]();!(e=(o=i.next()).done);e=!0){var a=o.value;t.scene.add(a)}}catch(e){n=!0,r=e}finally{try{e||null==i.return||i.return()}finally{if(n)throw r}}t.state="STAGED"}),ne(this,"sceneStart",function(){t.playerShip.add(t.camera);var e=!0,n=!1,r=void 0;try{for(var o,i=t.sceneObjects[Symbol.iterator]();!(e=(o=i.next()).done);e=!0){var a=o.value;t.scene.add(a)}}catch(e){n=!0,r=e}finally{try{e||null==i.return||i.return()}finally{if(n)throw r}}t.state="ACTIVE"}),ne(this,"sceneEnd",function(){}),ne(this,"updateRaycaster",function(){t.camera.getWorldPosition(),t.camera.getWorldDirection(),t.raycaster.set(t.camera.getWorldPosition(),t.camera.getWorldDirection()),t.intersects=t.raycaster.intersectObjects(t.utils.canCollide);for(var e=0;e<t.intersects.length;e++)return t.intersects[e].object;return null}),ne(this,"update",function(){if("ACTIVE"==t.state||"STAGED"==t.state){var e=!0,n=!1,r=void 0;try{for(var o,i=t.sceneObjects[Symbol.iterator]();!(e=(o=i.next()).done);e=!0){var a=o.value;a.hasOwnProperty("animate")&&a.animate()}}catch(e){n=!0,r=e}finally{try{e||null==i.return||i.return()}finally{if(n)throw r}}t.renderer.render(t.scene,t.camera),t.userData.isMobile&&t.controls.update()}t.playerShip.position.z<=-120&&(t.state="END")}),this.camera=new l,this.raycaster=new r.y,this.scene=new r.z,this.configObjectType=ee.SCENE_MANAGER,this.isMobile=n.userData.isMobile,this.materials=n.materials;var o={alpha:!0,canvas:document.getElementById("game-stage"),antialias:!0};this.renderer=new r.F(o),this.sceneData=n.sceneData,this.sceneObjects=n.sceneObjects,this.stageObjects=n.stageObjects,this.state=n.state,this.utils=n.sceneUtils,this.userData=n.userData,this.userData.mouse=new r.D,this.intersects=[]}return function(e,t,n){t&&te(e.prototype,t),n&&te(e,n)}(e,[{key:"mouseCoords",get:function(){return this.userData.mouse},set:function(e){this.userData.mouse=e}}]),e}();function oe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ie=function e(){var t=this,n=arguments.length>0&&void 0!==arguments[0]&&arguments[0];!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),oe(this,"activateUI",function(){t.UI.mathViewport.classList.add("active"),t.UI.crosshair.classList.add("active"),t.UI.introDisplay.classList.remove("active")}),oe(this,"onStart",function(e){t.currentAnswer=e;var n=t.mathDictionary[e],r=Math.floor(x(1,9)),o=n[r=Math.abs(r)];t.activateUI(),t.updateProblem(o),t.initTimer()}),oe(this,"initTimer",function(){var e=20,n=setInterval(function(r){e.toString().length<2?t.UI.timerDisplayEL.innerHTML="0"+e:t.UI.timerDisplayEL.innerHTML=e,(e-=1)<=0&&(clearInterval(n),t.UI.timerDisplayEL.innerHTML="00")},1e3)}),oe(this,"fetchProblem",function(e){var n=t.mathDictionary[e];return n[Math.floor(Math.random()*n.length)]}),oe(this,"updateProblem",function(){var e=Math.floor(x(1,9));e=Math.abs(e),t.updateTargetAnswer(e);var n=t.fetchProblem(e);t.currentProblem=n,t.UI.problemDisplayEL.innerHTML=t.currentProblem}),oe(this,"updateTargetAnswer",function(e){t.currentAnswer=e}),oe(this,"updateScore",function(e){t.UI.scoreKeeperEL.innerHTML=e}),oe(this,"userInputResponse",function(e){t.UI.userFeedbackDisplay.classList.add(e),setTimeout(function(){t.UI.userFeedbackDisplay.classList.remove(e)},150)}),oe(this,"validateAnswer",function(e){var n="",r=0;if(e===t.currentAnswer){n="correct",r=1;var o=t.score+=10;t.updateScore(o)}else n="incorrect";return t.userInputResponse(n),t.updateProblem(),r}),this.mathDictionary={1:["1 X 1","5 - 4","9 / 9"],2:["6 / 3","18 / 9","2 X 1"],3:["6 / 2"," 3 X 1","33 / 11"],4:["2 X 2","16 / 8","32 / 7"],5:["5 X 1","15 - 10","7 - 2"],6:["6 X 1","36 / 6","3 x 2"],7:["77 X 11","42 / 7","21 x 3"],8:["8 X 1","24 / 4","96 / 12"],9:["9 X 1","36 / 4","90 / 10"]},this.isMobile=n,this.currentProblem="",this.currentAnswer="",this.currentTime=20,this.score=0,this.UI={problemDisplayEL:document.getElementById("current-problem"),timerDisplayEL:document.getElementById("timer"),scoreKeeperEL:document.getElementById("score-keeper"),userFeedbackDisplay:document.getElementById("user-feedback-display"),mathViewport:document.getElementById("math-viewport"),crosshair:document.getElementById("crosshair"),introDisplay:document.getElementById("intro-page-wrapper")}};function ae(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}(new function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),ae(this,"assignEvenListeners",function(e){var t=e.el,n=e.assignments;for(var r in n){var o=n[r];t.addEventListener(r,o,!1)}}),ae(this,"bindEventListeners",function(){var e=null,n=document.getElementById("game-stage-wrapper"),r=document.getElementById("start"),o=document.getElementsByClassName("control-button"),i={el:n,assignments:{click:t.updateMath,touchstart:t.updateMath,keydown:t.updateMath}},a={el:r,assignments:{click:t.onStart}},s=(t.onKeyDown,clearTimeout(e),clearTimeout(e),clearTimeout(e),{el:document,assignments:{mousemove:t.onMouseMove,keydown:t.onKeyDown}});t.assignEvenListeners(i),t.assignEvenListeners(a),t.assignEvenListeners(s),window.addEventListener("resize",t.onResize,!1),Array.from(o).forEach(function(t){t.addEventListener("click",this.onKeyDown,!1),t.addEventListener("touchstart",function(t){var n=this;e=setInterval(function(){return n.onKeyDown(t)},300)}),t.addEventListener("mouseup",function(t){clearTimeout(e)}),t.addEventListener("touchcancel",function(t){clearTimeout(e)}),t.addEventListener("touchend",function(t){clearTimeout(e)})},t)}),ae(this,"isMobileDevice",function(){return/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)}),ae(this,"init",function(){var e=document.documentElement;t.isMobile&&(e.classList.add("isMobile"),t.requestFullScreen(document.documentElement)),t.bindEventListeners(),t.sceneManager.preload(),t.renderScene()}),ae(this,"updateMath",function(){var e=t.sceneManager.updateRaycaster();e&&t.clientManager.validateAnswer(e.destroyVal)}),ae(this,"onKeyDown",function(e){e.preventDefault(),t.sceneManager.onKeyDown(e)}),ae(this,"onMouseMove",function(e){e.preventDefault(),t.sceneManager.onMouseMove(e)}),ae(this,"onResize",function(e){e.preventDefault(),t.sceneManager.onResize(e)}),ae(this,"onStart",function(){t.clientManager.onStart(3),t.sceneManager.sceneStart()}),ae(this,"renderScene",function(){requestAnimationFrame(t.renderScene),t.sceneManager.update()}),ae(this,"requestFullScreen",function(e){!function(e){e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen()}(e)}),this.isMobile=this.isMobileDevice();var n=JSON.parse(JSON.stringify(h));n.userData.isMobile=this.isMobile,this.sceneManager=new re(n),this.sceneManager.init(),this.clientManager=new ie(this.isMobile)}).init()},53:function(e,t,n){}});
//# sourceMappingURL=app.e5e300c8.js.map