Unofficial, mock website for the Ames Figure Skating Club created for ISU CS 319 mid-term project.

To Kaylee,

sorry for coercing you into doing our midterm in React and Tailwind; this was lowkey selfish and I do genuinely feel bad. To explain myself as much as possible, I am writing out a short quick list of things.

HELLO. If you are confused on why im so committed to React, that is SO UNDERSTANDABLE DO NOT FRET PLEASE. I didn't know ANY react a week ago and now I can do all of this random stuff. React basically just makes making interactive pages WAY easier. vanilla javascript DOM manipulation is EXTREMELY TEDIOUS and is a huge roadblock when it comes to quickly developing stuff like a dropdown menu or a changing list of items. It also helps with organization of code; you write components and you can use them wherever you want, and you can even pass it props so you can have reusable, customizable bits of HTML/CSS WITHOUT a 400 line HTML file. As for Tailwind, Tailwind makes (at least for me, maybe you don't feel the same, in which case look to #3 of my note) writing CSS 10x faster and enjoyable. Instead of having to flip files 42 million times, I just write the individual property I want on my element, and I move on with my day. It is also very robust in terms of features, and the official Docs are extremely good, making the learning process very fast. If you know CSS, learning Tailwind is nothing. Finally, for front-end/web development, React is the #1 most in-demand framework, because it's the most popular. It is a hireable skill, which is always good. Tailwind is not as popular as React, but it is still extremely well known; I personally know someone who is working as a web developer for a tech consulting company that uses Tailwind (and React). I seriously super sincerely hope that this does not come off as mansplaining or condescending in any way; I do genuinely feel bad for pushing this project so hard despite us not being exactly on the same page. Again, that was selfish and I apologize. If you ever have a question regarding whatever, you can ask me or ChatGPT or Google. Anyway, I wrote some notes in case you needed questionable assistance.

STEP 0: VERY IMPORTANT
    install Node.js if you don't already have it; it's a framework for backend stuff, but don't worry about that (idek how to use it) the important thing is that it comes with this thing         called NPM (Node Package Manager) this like the DEFACTO TOOL to basically do project setup really easily (especially when cloning github repos!)

1. First, I SETUP this project using this thing called Vite; you don't need to know how it works (I barely know how it works), BUT, after you clone the repo, you need to do a teeny-tiny few     things. 
    a. Open the project folder in VSCode
    b. open up the terminal at the bottom of VSCode (shortcut CTRL+` if you don't see it)
    c. type "npm i" (without the quotes)
    d. now, whenever you want a live version of the page, instead of hitting go live at the bottom right, type into the terminal "npm run dev" - it does the same thing
        NOTE: to close the dev server, click into the terminal and press CTRL + C

2.  To GET STARTED WITH REACT, you can do whatever you want obviously. However, for me at least, it's always good to start simple. Make a page (does not have to be visually stunning) with         all the info you want on it, without any real interactability or fancy tech. Doing this is functionally identical to vanilla HTML, but instead of working in an HTML file, you will be in       a React "component" (function).

3. TAILWINDCSS !!!!! this is a framework? idek what it is exactly but BASICALLY it makes it so you NEVER HAVE TO WRITE IN A .CSS FILE AGAIN (mostly)!!!
    a. DOWNLOAD TAILWIND INTELLISENSE ON VSCODE; SELF-EXPLANATORY, VERY USEFUL IF U FORGET CLASS NAMES
    b. all you need to do is add the property    you want, for example, "bg-red-500" which is equivalent to background-color: red; INSIDE the elements classes. In React, it should look like         className="bg-red-500"    .
    c. IF YOU DON'T FEEL LIKE WORKING WITH TAILWIND, TOTALLY UNDERSTANDABLE. I CAN ALWAYS DO IT ORRRRR YOU CAN MAKE .CSS FILES AND STYLE AS NORMAL.
        i. to make a css file and use it to style, make a new folder in the src folder called "styles". put your CSS in there (name it whatever, ideally related to the page you're working on             though). THEN, ON THE .jsx FILE YOU ARE WORKING ON, IMPORT IT AT THE TOP!! should look like     import './whateverName.css'   THEN YOU'RE GOLDEN

THANK YOU FOR READING, I HOPE THIS HELPS.
