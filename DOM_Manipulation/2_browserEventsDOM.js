/*
💥 Browser Events ⇒ DOM PART TWO

1️⃣ monitorEvents() method is used to see the events occured on mouse click events, keyboard events and many more.

  Example: monitorEvents(document)

  🔸 Is example pae hum monitorEvents() method ko document kae upper use kar rahe hai, aub joh bhi events agar document pae hongae toh hum unhae dekh sakta hai.

2️⃣ EventTarget : Yae ake top-level interface hota hai joh ki objects kae dwara use kiya jaata hai, kisi bhi events ko receive karne kae liye aur unpae listeners laganae kae liye. Eventtarget kae 3 method hotae hai:

  1. addEventListeners()

  2. removeeventListener()
  
  3. dispatchEvent()

3️⃣ EventTarget ⇦⇦⇦ Node : Node inherit all the properties and methods from EventTarget.

4️⃣ EvenTarget ⇦⇦⇦ Node ⇦⇦⇦ Elements : And, elements inherit all the properties from node.

5️⃣ To apply .addEventListener() method we require 3 things:
    1. <event-target>   E.g. <div>, <article>, <p>
    2. "event-type"   E.g. "click", "scroll", "hover"
    3. function   E.g function will tell what to be performed after event happen.

    🔸 Syntax ⇒ <event-target>.addEventListener("click", () => {});

6️⃣ Phases of Events ⇒

    1. Capturing : First phase where event starts at the root of the DOM tree and move downward towards the target. If we pass "true" as parameter inside addEventListener() it means we are enabling capturing phase.
    
      E.g : element.addEventListener('click', callback, true); // 'true' enables capturing

    2. Target Phase : When the event reaches the actual target.

    3. Bubling Phase : After handling the event in this phase target move again towards the root of the DOM tree.

    Event phases: 
      🔸Capture: Root ⇢⇢ Parent Elemnt ⇢⇢ Target

      🔸 Target: Event handled on the target phase.

      🔸 Bubbling: Taget ⇢⇢ Parent Element ⇢⇢ Root

7️⃣ To stop the by default behaviour of any tag we use " .preventDefault( ) ".  

8️⃣ Target Property :  Return the element where the event occured.

    🔸Example: 
      function main(event){
          console.log('Para' + event.target.textContent)
      };
*/
