/*
1️⃣ Measure Speed of code ⇒ To measure the spped of our code we use " performance.now() " method. This return us an timestamp of our code.

2️⃣ To optimize the code we should make sure that we should avoid more reflow and repaint.

3️⃣ 📌 Document Fragment ⇒ It is light weight document object. We use document fragement to avoid re-flow and repaint bcoz reflow and repaint is highly extensive task. And the best practice is to use this where our DOM is continiously updating.

🔸 Example of single reflow and single repaint by using document fragement.
  
    const fragment = document.createDocumentFragment();
    for (let i = 0; i <= 100; i++){
        let newElement = document.createElement('p');
        newElement.textContent = `This is para ${i}`;

        fragment.appendChild(newElement);
    }
    
    document.body.appendChild(fragment);
*/
