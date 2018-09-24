!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t,n){const o=n(5);e.exports={getUrlHexadecimalValue:function(){const e=location.href;if(e.indexOf("#")>-1){const t=e.split("#")[1];if(t.length>0)return t}return!1},updateColor:function(e){let t="";e.length>0?(document.getElementById("color-indicator").style.backgroundColor="#"+e,o[e]&&(t=o[e])):document.getElementById("color-indicator").style.backgroundColor=null,document.getElementById("color_name").textContent=t},getHexadecimalValue:function(){return document.getElementById("hexadecimal").value},setDOMContentLoadedEvent:function(e){document.addEventListener("DOMContentLoaded",e)},updateFocus:function(e){9!=e.which&&16!=e.which&&("rgb_r"==e.target.id&&document.getElementById("rgb_r").value.length>=3&&document.getElementById("rgb_g").focus(),"rgb_g"==e.target.id&&document.getElementById("rgb_g").value.length>=3&&document.getElementById("rgb_b").focus())},setKeyUp:function(e){document.addEventListener("keyup",e)},setLinkNewWindowClickEvent:function(e){document.getElementById("link_new_window").addEventListener("click",e)},focusDecimal:function(){document.getElementById("decimal").focus()},setValues:function(e){for(var t in e){let n=document.getElementById(t);n&&(n.value=e[t])}},isToolbar:function(){return-1===location.href.indexOf("#")&&"undefined"!=typeof browser},removeActionsBlock:function(){document.getElementsByClassName("actions")[0].remove()}}},function(e,t){t.decimal=function(e){let t=parseInt(e);return isNaN(t)&&(t=0),t=Math.max(0,t)},t.octal=function(e){return(""+e).replace(/[^0-7]/g,"")},t.hexadecimal=function(e){return e.replace(/[^A-F0-9]/g,"")},t.binary=function(e){return e.replace(/[^01]/g,"")},t.base256=function(e){let n=e.replace(/[^0-9,]/g,"").split(",");for(let e=0;e<n.length;e++)n[e]=t.decimal(n[e]),n[e]=Math.min(255,n[e]);return n.join(",")}},function(e,t){t.convertBinToDec=function(e){let t=0,n=1;for(var o=e.length-1;o>=0;o--)t+=n*e[o],n*=2;return t},t.convertHexToDec=function(e){for(var t={A:10,B:11,C:12,D:13,E:14,F:15},n=0;n<10;n++)t[""+n]=n;var o=0,r=[];for(n=e.length-1;n>=0;n--)r.push(t[e[n]]);var a=1;for(n=0;n<r.length;n++)o+=a*r[n],a*=16;return o},t.convertOctToDec=function(e){let t=0,n=1;for(var o=e.length-1;o>=0;o--)t+=n*e[o],n*=8;return t},t.convert256ToDec=function(e){const t=e.split(",");let n=0,o=1;for(var r=t.length-1;r>=0;r--)n+=o*t[r],o*=256;return n},t.decToHex=function(e){return e<10?e:{10:"A",11:"B",12:"C",13:"D",14:"E",15:"F"}[e]},t.convertDecToBin=function(e){for(var t="";e>1;)t=e%2+t,e=Math.floor(e/2);return t=e+t},t.convertDecToHex=function(e){for(var n="";e>15;)n=t.decToHex(e%16)+n,e=Math.floor(e/16);return n=t.decToHex(e)+n},t.convertDecToOct=function(e){var t="";let n=e;for(;n>7;)t=n%8+t,n=Math.floor(n/8);return t=n+t},t.convertDecTo256=function(e){let t="",n=[],o=e;for(;o>0;)n.unshift(o%256),o=Math.floor(o/256);return t=n.join(",")}},function(e,t,n){const o=n(2),r=n(1);e.exports=function(e,t){var n={};if("decimal"==t)n.decimal=r.decimal(e),n.hexadecimal=o.convertDecToHex(n.decimal),n.binary=o.convertDecToBin(n.decimal),n.octal=o.convertDecToOct(n.decimal),n.base256=o.convertDecTo256(n.decimal);else if("hexadecimal"==t){var a=e.toUpperCase();a=r.hexadecimal(a),n.hexadecimal=a,n.decimal=o.convertHexToDec(a),n.binary=o.convertDecToBin(n.decimal),n.octal=o.convertDecToOct(n.decimal),n.base256=o.convertDecTo256(n.decimal)}else if("binary"==t)n.binary=r.binary(e),n.decimal=o.convertBinToDec(n.binary),n.hexadecimal=o.convertDecToHex(n.decimal),n.octal=o.convertDecToOct(n.decimal),n.base256=o.convertDecTo256(n.decimal);else if("octal"==t)n.octal=r.octal(e),n.decimal=o.convertOctToDec(n.octal),n.binary=o.convertDecToBin(n.decimal),n.hexadecimal=o.convertDecToHex(n.decimal),n.base256=o.convertDecTo256(n.decimal);else if("rgb_r"==t||"rgb_g"==t||"rgb_b"==t)n.rgb_r=Math.min(o.intval(document.getElementById("rgb_r").value),255),n.rgb_g=Math.min(o.intval(document.getElementById("rgb_g").value),255),n.rgb_b=Math.min(o.intval(document.getElementById("rgb_b").value),255),n.hexadecimal=o.convertDecToHex(n.rgb_r).padStart(2,"0")+o.convertDecToHex(n.rgb_g).padStart(2,"0")+o.convertDecToHex(n.rgb_b).padStart(2,"0"),n.decimal=o.convertHexToDec(n.hexadecimal),n.binary=o.convertDecToBin(n.decimal),n.octal=o.convertDecToOct(n.decimal),n.base256=o.convertDecTo256(n.decimal);else{if("base256"!=t)return;n.base256=r.base256(e),n.decimal=o.convert256ToDec(n.base256),n.hexadecimal=o.convertDecToHex(n.decimal),n.binary=o.convertDecToBin(n.decimal),n.octal=o.convertDecToOct(n.decimal)}if("rgb_r"==t||"rgb_g"==t||"rgb_b"==t)n.rgb_r=Math.min(o.intval(document.getElementById("rgb_r").value),255),n.rgb_g=Math.min(o.intval(document.getElementById("rgb_g").value),255),n.rgb_b=Math.min(o.intval(document.getElementById("rgb_b").value),255),n.hexadecimal=o.convertDecToHex(n.rgb_r).padStart(2,"0")+o.convertDecToHex(n.rgb_g).padStart(2,"0")+o.convertDecToHex(n.rgb_b).padStart(2,"0"),n.color=n.hexadecimal.padStart(6,"0");else if(n.hexadecimal.length>6)n.color="",n.rgb_r="",n.rgb_g="",n.rgb_b="";else{const e=n.hexadecimal.padStart(6,"0");n.color=e,n.rgb_r=o.convertHexToDec(e.slice(0,2)),n.rgb_g=o.convertHexToDec(e.slice(2,4)),n.rgb_b=o.convertHexToDec(e.slice(4,6))}return n}},function(e,t,n){const o=n(0),r=n(3);t.openNewWindow=function(e){try{browser.windows.create({height:260,width:340,url:"index.html#"+o.getHexadecimalValue(),type:"popup"})}catch(e){alert(e.message)}},t.updateValues=function(e,t){var n=r(e,t);n&&(o.setValues(n),o.updateColor(n.color))},t.onChange=function(e){t.updateValues(e.target.value,e.target.id),o.updateFocus(e)}},function(e,t){e.exports={F0F8FF:"AliceBlue",FAEBD7:"AntiqueWhite","00FFFF":"Cyan","7FFFD4":"Aquamarine",F0FFFF:"Azure",F5F5DC:"Beige",FFE4C4:"Bisque","000000":"Black",FFEBCD:"BlanchedAlmond","0000FF":"Blue","8A2BE2":"BlueViolet",A52A2A:"Brown",DEB887:"BurlyWood","5F9EA0":"CadetBlue","7FFF00":"Chartreuse",D2691E:"Chocolate",FF7F50:"Coral","6495ED":"CornflowerBlue",FFF8DC:"Cornsilk",DC143C:"Crimson","00008B":"DarkBlue","008B8B":"DarkCyan",B8860B:"DarkGoldenRod",A9A9A9:"DarkGrey","006400":"DarkGreen",BDB76B:"DarkKhaki","8B008B":"DarkMagenta","556B2F":"DarkOliveGreen",FF8C00:"DarkOrange","9932CC":"DarkOrchid","8B0000":"DarkRed",E9967A:"DarkSalmon","8FBC8F":"DarkSeaGreen","483D8B":"DarkSlateBlue","2F4F4F":"DarkSlateGrey","00CED1":"DarkTurquoise","9400D3":"DarkViolet",FF1493:"DeepPink","00BFFF":"DeepSkyBlue",696969:"DimGrey","1E90FF":"DodgerBlue",B22222:"FireBrick",FFFAF0:"FloralWhite","228B22":"ForestGreen",FF00FF:"Magenta",DCDCDC:"Gainsboro",F8F8FF:"GhostWhite",FFD700:"Gold",DAA520:"GoldenRod",808080:"Grey","008000":"Green",ADFF2F:"GreenYellow",F0FFF0:"HoneyDew",FF69B4:"HotPink",CD5C5C:"IndianRed","4B0082":"Indigo",FFFFF0:"Ivory",F0E68C:"Khaki",E6E6FA:"Lavender",FFF0F5:"LavenderBlush","7CFC00":"LawnGreen",FFFACD:"LemonChiffon",ADD8E6:"LightBlue",F08080:"LightCoral",E0FFFF:"LightCyan",FAFAD2:"LightGoldenRodYellow",D3D3D3:"LightGrey","90EE90":"LightGreen",FFB6C1:"LightPink",FFA07A:"LightSalmon","20B2AA":"LightSeaGreen","87CEFA":"LightSkyBlue",778899:"LightSlateGrey",B0C4DE:"LightSteelBlue",FFFFE0:"LightYellow","00FF00":"Lime","32CD32":"LimeGreen",FAF0E6:"Linen",800000:"Maroon","66CDAA":"MediumAquaMarine","0000CD":"MediumBlue",BA55D3:"MediumOrchid","9370DB":"MediumPurple","3CB371":"MediumSeaGreen","7B68EE":"MediumSlateBlue","00FA9A":"MediumSpringGreen","48D1CC":"MediumTurquoise",C71585:"MediumVioletRed",191970:"MidnightBlue",F5FFFA:"MintCream",FFE4E1:"MistyRose",FFE4B5:"Moccasin",FFDEAD:"NavajoWhite","000080":"Navy",FDF5E6:"OldLace",808000:"Olive","6B8E23":"OliveDrab",FFA500:"Orange",FF4500:"OrangeRed",DA70D6:"Orchid",EEE8AA:"PaleGoldenRod","98FB98":"PaleGreen",AFEEEE:"PaleTurquoise",DB7093:"PaleVioletRed",FFEFD5:"PapayaWhip",FFDAB9:"PeachPuff",CD853F:"Peru",FFC0CB:"Pink",DDA0DD:"Plum",B0E0E6:"PowderBlue",800080:"Purple",663399:"RebeccaPurple",FF0000:"Red",BC8F8F:"RosyBrown","4169E1":"RoyalBlue","8B4513":"SaddleBrown",FA8072:"Salmon",F4A460:"SandyBrown","2E8B57":"SeaGreen",FFF5EE:"SeaShell",A0522D:"Sienna",C0C0C0:"Silver","87CEEB":"SkyBlue","6A5ACD":"SlateBlue",708090:"SlateGrey",FFFAFA:"Snow","00FF7F":"SpringGreen","4682B4":"SteelBlue",D2B48C:"Tan","008080":"Teal",D8BFD8:"Thistle",FF6347:"Tomato","40E0D0":"Turquoise",EE82EE:"Violet",F5DEB3:"Wheat",FFFFFF:"White",F5F5F5:"WhiteSmoke",FFFF00:"Yellow","9ACD32":"YellowGreen"}},function(e,t,n){const o=n(0),r=n(4);o.setDOMContentLoadedEvent(function(){o.setKeyUp(r.onChange),o.setLinkNewWindowClickEvent(r.openNewWindow),setTimeout(o.focusDecimal,100);const e=o.getUrlHexadecimalValue();e&&r.updateValues(e,"hexadecimal",!1),o.isToolbar()||o.removeActionsBlock()})}]);