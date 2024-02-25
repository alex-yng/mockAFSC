Unofficial, mock website for the Ames Figure Skating Club created for ISU CS 319 mid-term project.

To Kaylee,

If you are reading this, HELLO. If you are feeling at all overwhelmed, that is SO UNDERSTANDABLE DO NOT FRET PLEASE. I didn't know ANY react a week ago and now I can do all of this random stuff. React can be really complex if you are doing really complex things; DO NOT WORRY!!! we are just making a few webpages, which in React, IS ALMOST EASIER!!!! Now, the general high-level approach React uses does need to be learned (Components and whatnot) but you can definitely get that down quickly because you are smart. BUT AFTER THAT?!!?!? You can start really simply like I did. Anyway, I will leave a few tips here for you in case you don't know where to start. AND DO NOT FORGET IF AT ANY POINT YOU HAVE A QUESTION PLEASE FEEL FREE TO ASK IM NO PROFESSIONAL BUT I AM A BIG NERD SO I KNOW SOME STUFF.

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
