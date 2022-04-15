const Header = (title, date, temp) => {
  const heading = document.createElement('div')
  const dateH = document.createElement('span')
  const titleH = document.createElement('h1')
  const tempH = document.createElement('span')
 
  heading.classList.add('header')
  dateH.classList.add('date')
  tempH.classList.add('temp')
  
  titleH.textContent = title
  dateH.textContent = date
  tempH.textContent = temp
 
  heading.appendChild(dateH)
  heading.appendChild(titleH)
  heading.appendChild(tempH)
 
 return heading
 }
 
 // TASK 1
   // ---------------------
   // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
   // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
   // The text inside elements will be set using their `textContent` property (NOT `innerText`).
   //
   //  <div class="header">
   //    <span class="date">{ date }</span>
   //    <h1>{ title }</h1>
   //    <span class="temp">{ temp }</span>
   //  </div>
   //
 const headerAppender = (selector) => {
   // TASK 2
   // ---------------------
   // Implement this function taking a css selector as its only argument.
   // It should create a header using the Header component above, passing arguments of your choosing.
   // It should append the header to the element in the DOM that matches the given selector.
   //
  const parentElement = document.querySelector(selector)
   parentElement.appendChild(Header('Lambda Times', 'January 6, 2021', '26°'))
  return parentElement
 }
 
 export { Header, headerAppender }
 