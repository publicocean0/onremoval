# onremoval
 DOM node callback
 This is a utility callback for detecting when a dom node is removed.
 
el.onRemoval(function(el){
console.log('removing1') 
})
el.onRemoval(function(el){
console.log('executing ....') 
})

el.offRemoval() // you can pass directly the callback to remove
