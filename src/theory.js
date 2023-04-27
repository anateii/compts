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

//Accordion Example

//1. List of what user will do:
//   - user clicks on third section
//   - first section collapses
//   - third section expands
//   - clicks on second section
//   - third secion collapses
//   - second section expands

//2. User sees something on the screen change --> state
//    - whenever a user clicks on the section
//   Types of state: ideally avoid arrays/objects because it can get too complicated.
//   Better numbers, booleans, strings.

//   User committed some action --> event handler
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
