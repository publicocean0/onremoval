(function(window){
var indexes=[]; //index for element
var parents={} // elem -> []
var nodes={}// calbacks
var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
// create an observer instance
function findAncestor (el, p) {
    while ((el = el.parentElement) && p!=el) ;
    return el==p;
}
if (MutationObserver){
var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
	var r=mutation.removedNodes;
    if (r.length){
		r.forEach(function(el){// el element removed

			for(var i=0;i<indexes.length;i++){
				var a=indexes[i]
				if (findAncestor(a,el)){
					
				nodes[i].forEach(function(f){f(el);});
				
				if (indexes.length-1>i) for(var j=i+1;j<indexes.length-1;j++) nodes[j-1]=nodes[j]
				indexes.splice(i,1)
					
				break;	
				}
				
				
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
				var a=indexes.indexOf(el);
				list.forEach(function(l){
					l(el);
				});
				if (indexes.length-1>a) for(var i=a+1;i<indexes.length-1;i++) nodes[i-1]=nodes[i]
				indexes.splice(a,1)
			}
			el.addEventListener('DOMNodeRemoved', el.onRemoval, false);
			while ((el = el.parentElement)) el.addEventListener('DOMNodeRemoved', el.onRemoval,false);
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
			while ((el = el.parentElement)) el.removeEventListener('DOMNodeRemoved', el.onRemoval);
				
	}	
		
}
} 

};
	


})(window)
