(function(window){
var indexes=[];
var nodes={}
var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
// create an observer instance
if (MutationObserver){
var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
	var r=mutation.removedNodes;
    if (r.length){
		r.forEach(function(el){
			var a=indexes.indexOf(el)
			if (a>=0) {
				nodes[a].forEach(function(f){f(el);});
				
				if (indexes.length-1>a) for(var i=a+1;i<indexes.length-1;i++) nodes[i-1]=nodes[i]
				indexes.splice(a,1)
			}
			
			
			
		})
	} 
}); 
});
observer.observe(document, { attributes: false, childList: true, characterData: false,subtree:true}); 
} 
  

 
window.onRemoval=function(el,func){

var a=el?indexes.indexOf(el):-1;
if (a<0) {
	a=[];
	if (el) {
		indexes.push(el);
		nodes[indexes.length-1]=a;
		if (! MutationObserver &&window.addEventListener){
			(function(el,list){
			el.onRemoval=function(){
				list.forEach(function(l){
					l(el);
				});
				
			}
			el.addEventListener('DOMNodeRemoved', el.onRemoval, false);
		})(el,a)
		}
	}
} 
if (typeof(func)=='function') a.push(func)	
};
window.offRemoval=function(el,func){
var a=el?indexes.indexof(el):-1;
if (a) {
	
	if (func){
	var b=nodes[a]
	var p=b.indexOf(func);
	if (p>=0) b.splice(p,1);
} else {
	delete nodes[a]
   if (! MutationObserver &&window.removeEventListener){
			
			el.removeEventListener('DOMNodeRemoved', el.onRemoval);
				
	}	
		
}
} 

};
	


})(window)
