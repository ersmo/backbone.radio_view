this["JST"] = this["JST"] || {};

this["JST"]["radioItem"] = function anonymous(locals) {
var buf = [];
var locals_ = (locals || {}),name = locals_.name,value = locals_.value,checked = locals_.checked,text = locals_.text;buf.push("<input" + (jade.attrs({ 'type':("radio"), 'name':(name), 'value':(value), 'checked':(checked) }, {"type":true,"name":true,"value":true,"checked":true})) + "/>" + (null == (jade.interp = text) ? "" : jade.interp));;return buf.join("");
};