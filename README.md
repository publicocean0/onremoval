# onRemoval

It is suggested to use bindep tool for including this component.Anyway it works also in standard bower. 
Bindep default preprocessor context is:

  useListener=true

# global scope api 
(useListener=false in preprocessor or no preprocessing)

 DOM node callback
 This is a utility callback for detecting when a dom node is removed.
<pre>
onRemoval(el,function(el){
console.log('removing1') 
})
onRemoval(el,function(el){
console.log('executing ....') 
})

offRemoval(el) // you can pass directly the callback to remove


</pre>
# listener api 
(useListener=true in preprocessor or no preprocessing)

 DOM node callback
 This is a utility callback for detecting when a dom node is removed.
<pre>
el.addListener('removal',function(el){
console.log('removing1') 
})
el.addListener('removal',function(el){
console.log('executing ....') 
})

el.removeListener('removal') // you can pass directly the callback to remove


</pre>
