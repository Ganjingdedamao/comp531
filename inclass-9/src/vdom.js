//
// Inclass Virtual DOM Exercise
// ============================
//
// You need to implement createElement() and updateElement()
//
;(function(exports) {

'use strict'

function h(tag, props, ...children) {
    return { tag, props: props ? props : { }, 
        children: Array.isArray(children[0]) ? children[0] : children }
}

function createElement(node) {
	//console.log('Create element called for', node)

	// create the element and return it to the caller
	// the node might have event listeners that need to be registered
	// the node might have children that need to be created as well
    var element=document.createElement(node.tag);
    Object.keys(node.props).forEach(function(p){
        if(p=="className"){
            element.setAttribute('class',node.props[p])
            //console.log("22222")
        }
        if(p=="onClick"){
            //console.log("11111")
            
            element.addEventListener('click',function eventHandler(evt) {
                node.props[p](evt)
                update()
            })
        }
        element.setAttribute(p,node.props[p])
    })
    /*for(var p in node.props){
        if(p=="className"){
            element.setAttribute('class',node.props[p])
            //console.log("22222")
        }
        if(p=="onClick"){
            //console.log("11111")
            
            element.addEventListener('click',function eventHandler(evt) {
                node.props[p](evt)
                update()
            })
        }
        element.setAttribute(p,node.props[p])
    }*/
            
    if(node.children!=null){
        node.children.forEach(function(child){
            var newele=(child instanceof Object)?createElement(child):document.createTextNode(child)
            element.appendChild(newele)
        })
    }
    //console.log(element)
    return element
   
  
}

function changed(node1, node2) {
    return typeof node1 !== typeof node2 ||
            (typeof node1 === 'string' && node1 !== node2) ||
            node1.tag !== node2.tag ||
            (node1.props && node2.props && 
            	node1.props.id && node2.props.id && 
            	node1.props.id != node2.props.id)
}

function updateElement(parent, newNode, oldNode, index=0) {
	// index will be needed when you traverse children
	// add the new node to the parent DOM element if
	// the new node is different from the old node 
	// at the same location in the DOM.
	// ideally we also handle inserts, but ignore that functionality for now.
    //console.log(parent);
    //console.log(newNode);
    //console.log(oldNode);
    if (!oldNode) {
        parent.appendChild(createElement(newNode))
    } 
    else {
    	console.log('update element that may have changed')
    	// you can use my changed(node1, node2) method above
        //parent.removeChild(parent.childNodes[0]);
        //parent.appendChild(createElement(newNode));
       /* console.log(oldNode)
        console.log(newNode)
        if(changed(newNode,oldNode)){
            console.log("changed");
            parent.removeChild(parent.childNodes[index]);
            parent.insertBefore(createElement(newNode),parent.childNodes[index]);
        }
        if(index<parent.childNodes.length-1)
        {
            updateElement(parent.childNodes[index+1],)
        }
        Object.keys(parent.childNodes).forEach(function(index){
                updateElement(parent)
        })
        console.log(newNode.children.length);
        console.log(oldNode.children.length);
        if(newNode.children.length!=oldNode.children.length){
            parent.removeChild(oldNode)
            parent.appendChild(newNode)
        }
        else{
            Object.keys(newNode.children).forEach(function(k){
                updateElement()
            })
        }*/
    	// to determine if an element has changed or not

    	// be sure to also update the children!
    }
}

const deepCopy = (obj) => {
    if (obj === null || typeof(obj) !== 'object')
        return obj;
    const props = {}
    if (obj.props) {

        for (let p in obj.props) {
            //console.log(obj.props[p])
            props[p] = obj.props[p]
        }
    }
    return h(obj.tag, props,
        Array.isArray(obj.children) ? obj.children.map(deepCopy) : obj.children)
}

const update = () => requestAnimationFrame(() => {
	// compare the current vdom with the original vdom for updates
    updateElement(h.mounted.root, h.mounted.current, h.mounted.original)
    h.mounted.original = deepCopy(h.mounted.current)
})

h.mount = (root, component) => {
    // we keep a copy of the original virtual DOM so we can diff it later for updates
    const originalComponent = deepCopy(component)
    h.mounted = { root: root, current: component, original: originalComponent }
    updateElement(root, originalComponent)

}

exports.h = h
exports.update = update

})(window);