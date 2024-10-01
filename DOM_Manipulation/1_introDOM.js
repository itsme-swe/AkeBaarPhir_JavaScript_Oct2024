/*
💥  DOM Intro ⇒ PART ONE

1️⃣ DOM : Process of converting HTML code into JS object is known as DOM.

2️⃣ BOM : Browser Object Model help to communicate to browser other than content. E.g alerts

3️⃣ To Access an Elements we use:

    1. document.getElementById : returns a single object.

    2. document.getElementsByClassName and document.getElementsByTagName : returns a list of objects and it's an HTML collection.

    3. document.querySelector() : It returns the single object. We can pass class or id as parameter inside querySelector.

    4. document.querySelectorAll('.hidden') : It return the multiple objects and the list is of type node list.

4️⃣ Updating Existing Content of Window using few properties ⇒

    1. .innerHTML : get and set the HTML content of any element and its desendents.

    2. .outerHTML :

    3. .textContent : get and set the actual text based content of the element.

    4. .innerText : get and set the actual text based content of the element. Remember jis kisi ki bhi display property hidden hogi vo "innerText" pae render nhi hoga.

5️⃣ Create Element using JS : To create element using JS we use " .createElement() ". Now after creating we want to add this element, so to add element we use " content.appendChild() ".

6️⃣ If we create an new element and adding that element to some parent or child that element will be the last sibling of that element. If we want to position newly created elements according to us, we can use " .insertAdjacentHTML() method ". 

    🔸 .insertAdjacentHTML() method itself take two parametrs inside it as follows:

        1. location /position ⇒ means where element to be added. There are four positionional properties :
          a. beforeBegin
          b. afterBegin
          c. beforeEnd
          d. afterEnd

        2. HTML text /content to be inserted ⇒ means what we want to insert

7️⃣ Styling our page content using JS ⇒ We can add CSS to our elements by using JS properties are as follow:

    🔸  .style  : is property ko use karke hum 1 baar mae 1 he CSS property add kar sukte hai.
    
    🔸  .cssText : is property ka use karke hum multiple css properties add kar sukte hai single line mae.
                
              content.style.cssText = 'color: green; background-color: yellow; font-size: 10px';

    🔸  .setAttribute : is property ko hum sirf style kae liye he nhi balki element mae baki attributes kae lie bhi   use kar sukte hai. Jaise " content.setAttribute("id", "idName") " , content.setAttribute("style",)
    
    🔸  .className : return karta hai string of classes

    🔸 .classList : return karta hai humae array of classes.

*/

const newChild = document.querySelector(".child");

newChild.setAttribute("id", "big-child");
