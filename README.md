# Intro to jQuery Effects
###### Today you will get to use jQuery to make your webpages have some super cool effects.

#### Let's get started:
* Open up the folder and look through all the files `index.html`, `script.js`, and `style.css`.
* Open up the `index.html` in chrome.

#### Some CSS Review in `style.css`:
* In the `style.css` file write code to make the background color of the whole page something pretty using a [hex color](https://www.google.com/search?q=hex+color+picker&oq=hex+color+picker&aqs=chrome..69i57j0l5.2831j0j1&sourceid=chrome&ie=UTF-8).
* Put a header above the container, it should say something like "Hidden Messages"
* Use a [google font](https://fonts.google.com/) to set the body `font-family` to something fancy.
* Make the background color of the container a transparent color using `rgba()` using the class `container`.
* Center the words in the boxes using the class `word`.

#### Okay, let's get into the jQuery in `script.js`:
* On the line after the `$(document).ready(function(){ ` write `console.log("page is loaded");`, then refresh the webpage and look for your message in the console.
* If the previous step worked, you're ready to get down to the real business!
* After your `console.log("page is loaded");` in `script.js` use the jQuery `hide()` and/or `show()` functions to make the page only display the words "YOU ARE SMART"
* Now display "WE LOVE TO CODE"

#### Fancy things up a bit: 
* Look up [jQuery's `fadeOut()` and/or `fadeIn()`](http://lmgtfy.com/?q=jQuery+fadeOut()) functions to make the messages appear more slowly. Replace your `hide()` with `fadeOut()` and your `show()` with `fadeIn()`. Try out different combinations of fading! Note: you can also adjust the speed of the fade.
* Look up jQuery's `fadeTo()` function to fade unwanted words to an opacity of 0.2
* [REMEMBER! Google is your friend](http://lmgtfy.com/?q=jQuery+fadeOut()).

#### Personalize your webpage
* Create a phrase using some of the words on the page
* Change your `script.js` file so that your phrase is displayed using `fadeOut()` and/or `fadeIn()`

### Extension
* Make this site look a little better with some css. 
* Adding a [parallax image](https://www.w3schools.com/howto/howto_css_parallax.asp) might be cool! Use [stocksnap](https://stocksnap.io/) to get a cool image!
* We used the [CSS grid](http://cssgridgarden.com/) to make this grid. Play this [game](http://cssgridgarden.com/) to learn about the CSS grid.
