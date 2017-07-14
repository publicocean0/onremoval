# onRemoval
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
