### Communication between Vue components

#### Props
##### 1.Basic  
Delared in child component and using v-bind or string to pass on in parent component. ( That is to say " prop = 'strMsg' " only exists when you directly pass string 'strMsg'. Apart from this, whenever you pass a variable's name or integer/boolean/... , such as 1, you should use v-bind)
##### 2.Parent-To-Children
'Props' is one-way data flow, thich means it should always be passed from parent to children. So when varibles changes in parent component, child component's state will be update. But when in reverse, it is not commended and vue will warn you a console. Vue encourages you to use deep copy to create a similar object.    
**However**, imaging a situation like this: There is a list in parent component which parent on concerned about it length and child concerned with it array item. It seems to be nothing wrong with passing it to child and modifying it.  
If strictly kept to the above rule, we should deel this situation like this: 1.Passing the array to the child. 2. Deep-Copy it. 3. Submit it when needed by emit an event to call parent to merge it with the original one. Much trouble. So I think if you know what you are doing, changing props seems to be acceptable, this maybe the reason why this is just a 'warn'.

#### Event
##### 1.Basic
You can use vanila 'addEventListener' or vue's $on to create a listener and emit whenever you like, even in another component or js file ( Ensure the same global context is of course needed ).  Always remember to remove listeners before vue instance destoryed.
