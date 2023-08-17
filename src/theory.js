//DESIGN PROCESS OF THE COMPONENTS

//--->Events + State Design Process

//1. List out what a user will do and changes they will see while using your app
//2. Categorize each step as 'state' or 'event handler'
//3. Group common steps. Remove duplicates. Rewrite descriptions

//4. Look at mockup. Remove or simplify parts that aren't changing
//5. Replace remaining elements with text descriptions
//6. Repeat #4 and #5 with a different variation

//7. Imagine you have to write a function that returns the text of steps #5 and $6.
//   In addition to your component props, what other arguments would you need?
//8. Decide where each event handler + state will be defined

//ACCORDION EXAMPLE

//1. List of what user will do:
//   - user clicks on third section
//   - first section collapses
//   - third section expands
//   - clicks on second section
//   - third secion collapses
//   - second section expands

//2. User sees something on the screen change --> State
//    - whenever a user clicks on the section
//   Types of state: ideally avoid arrays/objects because it can get too complicated.
//   Better numbers, booleans, strings.

////&& operator gives back the first falsey value or the last truthy value
//|| operator gives back the first value that is truthy
//React doesn't print booleans, nulls or undefined. So if isExpanded is false it won't show the div

//   User committed some action --> Event Handler
//    - whenever the other sections expand or collapse

//3. Group commons steps:
//   - the click on a section header
//   - the state for one expanded section, all others collapsed

//4-5-6. Looking at the mockup you realize that the text inside the header and the content area
//   is not changing so remove it and replace with something simpler like "Expanded" and "Collapsed"

//7. For our function to return the "Collapsed" or "Expanded" we need to:
//   function myFunction(items, expandedIndex) {
//      return items.map((item, index) => {
//      if ( index === expandedIndex) {
//           return 'Expanded'
//       } else {
//           return 'collapsed'
//               }
//       }
//      })
//    }

//myFunction(propsItems, 0) //['Expanded','collapsed','collapsed']
//myFunction(propsItems, 2) //['collapsed','collapsed','Expanded']

//What type would this argument have to be? extendedIndex can be a number in this case

//8. Where should we define our state and event handlers? In the parent or the child?
//   - one solution is define expandedIndex inside our App and then pass it as prop to Accordion
//   - other solution is inside the Accordion
//   Both these solutions would work, however, the real question we should ask ourselves is:
//   Does any component (in our entire app) besides Accordion reasonably need to know which item is expanded?
//   -->Yes: Define in App
//   -->No: Define in Accordion

//As for the event handler, usually is defined in the same component where state is modified (co-location)

//VARIATION OF EVENT HANDLERS

//Longhand version: <div onClick={handleClick}></div>
//the handleClick function is outside of onClock. Slightly harder to use with lists

//Shorthand version: <div onClick={() => console.log("Hi")}></div>
//the function is handled directly inside the onClick but it can make JSX harder to read if
// we have more functions do deal with

//TOGGLE PANELS

//What if we want to toggle the panels and make them closed as default start?
// we can put useState(-1) this way the index starts at a negative value and all
// the panels are closed by default.

//THE BUG

//Click on a panel and go to inspect. You will see in html that the div for that panel
//has a direct JavaScript reference --> $0

//If I click the div twice it should close and open. But if in the console I am writin
// $0.click(); $0.click(); the result is undefined.

//But why isn't behaving correctly?
// 1. expandedIndex === 0
// 2. User clicks first header(index 0)
// 3. Event handler executed
// 4. Because expandedIndex === index we call setExpandedIndex(-1)
// 5. React: Oh... you want to update state? let me do that in the future
// 6. User clicks first header again (index 0)
// 7. Event handler executed
// 8. expandedIndex hasn't been updated yet! It's still equal to zero
// 9. Because expandedIndex === index we call setExpandedIndex(-1)
// 10. React: Oh you want to update state.. I'll do that later. Time passes (miliseconds)
// 11. React: Ok I will update it expandedIndex === -1
// 12. First panel is collapsed

//OPTION 1: Get React to process state updates istantly and make it stop doing anything else
//This will make the app run a little bit slowly so not ideal

//OPTION 2: Get access to the most up to date value of expandedIndex in handleClick
//Functional technique: Used if new value depends on old value

// const [counter, setCounter] = useState(0)

// const handleClick = () => {
//  setCounter(currentCounter => {
//    if (currentCounter > 10) {return 20}
//        else { return currentCounter + 1}
//  })
// }

//currentCounter is guaranteed to be the MOST UP TO THE DATE version of the counter
// counter will beupdated to whatever the value we return from this function

//    console.log("STALE version of expandedIndex", expandedIndex);
//     setExpandedIndex((currentExpandedIndex) => {
//       console.log("UPDATED version of expandedIndex", currentExpandedIndex);
//       if (currentExpandedIndex === nextIndex) {
//         return -1;
//       } else {
//         return nextIndex;
//       }
//     });

//DROPDOWN COMPONENT

//Use the Design Process

//Menu opens & closes -> State
//  -> Name: isOpen
//  -> Type: boolean
//  -> Where to define it: Dropdown Component

//An item can be selected-> State
//  -> Name: selectedOption
//  -> Type: Option object || null
//  -> Where to define it: Parent Component

//Click an option -> Event handler
//  -> Name: handleSelect
//  -> Type: function
//  -> Where to define it: Parent Component

//Click the dropdown  -> Event handler
//  -> Name: handleToggleDropdown
//  -> Type: function
//  -> Where to define it: Dropdown Component

//REUSABLE PRESENTATION COMPONENTS

//1. Create a new component that shows a handful of JSX elements
//2. Make sure the component accepts + uses the 'children' prop
//3. Allow extra classNames to be passed in + merge them
//4. Take extra props, pass them through to root element

//EVENT CAPTURE AND BUBBLING

//1. Capture Phase
//2. Target Phase
//3. Bubble Phase

//Example:
//1.User clicks button! Browser needs to find click event handlers to call
//2.The browser is going to take a look at the button and ask: do you have a click
//  event handler? If yes, I'll call it.
//3. Go to parent of clicked element, see if it has handler, Then go to parent's parent...etc
//   Basically going backwards the DOM tree.

//------------------------------------------

//BROWSER NAVIGATION

//When you enter your url, the browser will perform a GET request by default to whatever address you type in
//The request will be sent to a server. Many servers implement something called router, a snippet of code that
//takes a look at your incoming request, looking for the method and the address. Depending on these 2 factors
//it will decide what type of content to send back as a response

//Standard browser behaviour: When the browser load an HTML file all existing JS variables and code is dumped
