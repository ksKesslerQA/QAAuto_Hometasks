//Easy level 
//To solve this, it is enough to use the shortcut $x() in the Chrome developer console to execute XPath queries.

// Find the first h1 element on the main page.
$x("(//h1)[1]")
// Find all images that have an 'alt' attribute.
$x("//img[@alt]")
//Find the button with the text "Start forming a habit!".

$x("//button[text()='Start forming a habit!']")     // only second button, with exact text, without any additional spaces
$x("//button[contains(., 'Start forming a habit')]")        //all 3 buttons ( searching for this text everywhere)

//<button _ngcontent-ng-c2028559249="" class="primary-global-button btn"> Start forming a habit! </button>
//<button _ngcontent-ng-c1738710125="" class="primary-global-button btn">Start forming a habit!</button>
//<button _ngcontent-ng-c1738710125="" class="primary-global-button btn"> Start forming a habit! </button>

//Check for the presence of a search icon on the webpage.
$x('//li[@class="search-icon"]/img')

//or
if ($x('//li[@class="search-icon"]/img').length > 0) {
    console.log('Search icon is present.');
} else {
    console.log('Search icon is not found.');
}
$x('//li[@class="search-icon"]/img')

$x('//li[@role="search"]/img') //for Docker

//Check for the presence of checkboxes.
if ($x('//input[@type="checkbox"]').length > 0) {
    console.log('Checkboxes are present!');
} else {
    console.log('No checkboxes found.');
}
$x('//input[@type="checkbox"]')

//Medium level
//To solve this, it is necessary to use JavaScript and the method document.evaluate() in the Chrome developer console to execute XPath queries.

/*
Task 1
To find the first h1 element on the main page.
*/

let firstH1 = document.evaluate('(//h1)[1]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

if (firstH1) {
 console.log('First h1 element on the main page is found:', firstH1);
} else {
 console.log('First h1 element on the main page is not found');
}


/*
Task 2
Find all images that have the 'alt' attribute.
Output the message in the console "Found (number) images with the alt attribute."
*/

let imagesWithAlt = document.evaluate('//img[@alt]', document, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);

let count = 0;
let image = imagesWithAlt.iterateNext();

while (image) {
    count++;
    image = imagesWithAlt.iterateNext();
}

if (count > 0) {
    console.log(`Found ${count} images with the alt attribute.`);
} else {
    console.log('Images that have the "alt" attribute not found');
}



/*
Task 3
Find the button element with the text "Start forming a habit!". 
If an element with such text is not found, display a corresponding message. 
Output the message with numbers of buttons in the console.

*Check the accuracy of the number of buttons found. If you get an incorrect value, analyze why this happened. 
To do this, find the code for the required elements and, if necessary, modify your script.
*/

let startButtons = document.evaluate('//button[contains(., "Start forming a habit")]', document, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);

let count1 = 0;
let startButton = startButtons.iterateNext();

while (startButton) {
    count1++;
    startButton = startButtons.iterateNext();
}

if (count > 0) {
    console.log(`Found ${count1} button element with the text "Start forming a habit!".`);
} else {
    console.log('Button element with the text "Start forming a habit!" is not found');
}

/*
Task 4
Validate the presence and visibility of the site search icon on the webpage, and ensure the image associated with the search icon has the appropriate alt text and a source (src) path.
*/

let searchIcon = document.evaluate('//li[@aria-label="site search"]/img', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

let correctAlt = "Internal search button";
let correctSrc = "assets/img/search.svg";

if (searchIcon) {
 console.log('Search icon is present.');
    if((searchIcon.getAttribute("alt")) == correctAlt){
        console.log('The image associated with the search icon has the appropriate alt text.')
    } else {
        console.log('The image associated with the search icon does not have appropriate alt text.')
    }
    if((searchIcon.getAttribute("src")) == correctSrc){
        console.log('The image associated with the search icon has the appropriate source (src) path.')
    } else {
        console.log('The image associated with the search icon does not have appropriate source (src) path.')
    }
} else {
 console.log('Search icon is not present.');
}

/*
Task 5
Log in to your profile at https://www.greencity.cx.ua/#/profile.
Go to the profile editing page by clicking on the "Edit your profile" button.
Locate the checkboxes at the bottom of the page.
Check the state of each checkbox: determine whether they are checked or unchecked.
Display a message with the number of checked and unchecked checkboxes.
*/

let checkboxesFound = document.evaluate('//input[@type="checkbox"]', document, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);

let countChecked = 0;
let countUnchecked = 0;
let checkbox = checkboxesFound.iterateNext();

while (checkbox) {
    if(checkbox.checked){
        countChecked++;
    } else {
        countUnchecked++;
    }
    checkbox = checkboxesFound.iterateNext();
}

if (countChecked > 0 || countUnchecked > 0) {
    console.log(`Found ${countChecked} checked checkboxes.`);
    console.log(`Found ${countUnchecked} unchecked checkboxes.`);
} else {
    console.log('No checkboxes found.');
}


/*
Hard level

Task 6 *
Validate the website's ability to switch languages effectively.

Initiate a search to identify the user interface element designated for language toggling.
If the specified element is successfully pinpointed, activate it to attempt a language change.
Log the result in the console, specifying whether the language toggle element was detected.
Should the language alteration succeed, log the preceding and new language settings into the console for verification purposes.
*/

let langList = document.evaluate('//ul[@aria-label="language switcher"]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

if (langList) {
  console.log('Language switcher was detected.');

  //let items = [...langList.querySelectorAll('li')];
  let beforeLanguage = document.evaluate('//ul[@aria-label="language switcher"]/li/span/text()', document, null, XPathResult.STRING_TYPE, null).stringValue;
  console.log('Language before changing:', beforeLanguage);
  
  langList.click();
  let otherLanguage = document.evaluate('//ul[@aria-label="language switcher"]/li[2]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    
  otherLanguage.click();
  let finalLanguage = document.evaluate('//ul[@aria-label="language switcher"]/li/span/text()', document, null, XPathResult.STRING_TYPE, null).stringValue;
  console.log('Language after changing:', finalLanguage);
  
} else {
  console.log('Language switcher was not detected.');
}
