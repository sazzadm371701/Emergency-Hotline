1. What is the difference between **getElementById, getElementsByClassName, and querySelector /
   querySelectorAll**?

## Answer:

    getElementById('my-id') -->
    This method is designed to find a single element with a specific ID.

    getElementsByClassName('my-class') -->
    This method finds all elements that have a specific class
    name. It returns a live HTMLCollection, which is a list of elements that automatically updates
    if elements with that class are added to or removed from the DOM.

    querySelector('selector') -->
    This method finds the first element that matches the specified CSS
    selector. It returns a single element object or null if no match is found.

    querySelectorAll('selector') -->
    This method finds all elements that match the specified CSS
    selector. It returns a static NodeList, which is a snapshot of the elements at the time the
    query was run.

2. How do you **create and insert a new element into the DOM**?

## Answer:

Creating and inserting a new element into the DOM (Document Object Model) is a common task in
JavaScript. The most straightforward and recommended way is to use document.createElement() to
create the element, then use an insertion method like appendChild() or append() to place it in
the DOM.

3. What is **Event Bubbling** and how does it work?

## Answer:

Event bubbling is the process by which an event, triggered on a child element, propagates or
"bubbles up" through its parent elements in the Document Object Model (DOM) hierarchy. This is
the default behavior for most events in modern browsers.
When an event occurs on an element (the target), the event is first handled by that element. If
its parent also has an event handler for the same type of event, that handler is executed next,
and then its parent's, and so on, all the way up to the document object.

4. What is **Event Delegation** in JavaScript? Why is it useful?

## Answer:

Event delegation is a technique that takes advantage of event bubbling to handle events on
multiple child elements with a single event listener attached to a common parent element. Instead
of adding a separate event listener to each child, you place one listener on the parent. When an
event occurs on a child, it bubbles up to the parent, where the single listener catches it and
identifies the original target of the event.

5. What is the difference between **preventDefault() and stopPropagation()** methods?

## Answer:

event.preventDefault() -->
This method stops the browser's default action for a given event. The default action is what the
browser would normally do in response to that event.

event.stopPropagation() -->
This method stops the event from propagating further up the DOM tree, preventing it from
triggering any event handlers on parent elements. It essentially ends the event bubbling phase.
