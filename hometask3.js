//Easy level

//Find all images on the page. 
document.querySelectorAll('img');
//Find images that are icons on the web.
document.querySelectorAll('img[src*="icon"]');
//Find all button elements present on a specified web page
document.querySelectorAll('.btn');
//Find all input fields on a web page.
document.querySelectorAll('input');
//Find the link that is responsible for going to the map to find a place to buy eco-bags.
document.querySelector('.tertiary-global-button.btn-link[href="#/places"]');

//Medium level

/* Task 1

On a Home page, there are a series of images. Write a script that:
1. Iterates through all the images on the page.
2. Logs to the console those images that have a height greater than 300 pixels.
3. After analyzing all images, displays in the console the total number of images that meet the condition.
*/
const images = document.querySelectorAll('img');
let count = 0;
images.forEach( image => {
    if(image.height > 300){
        console.log(image);
        count++
    }
});
console.log(`Total number ${count}`);


/* Task 2 
Display the number of unique colors used in the elements on the page.
*/
const elements = document.querySelectorAll('*');
let colors = new Set();
elements.forEach(element => {
    colors.add(getComputedStyle(element).color);
})
    console.log(`The number of unique colors used in the elements on the page is ${colors.size}`);
    
    
    //console.log(colors);

/* Task 3
Find all button elements present on a specified web page and output the cumulative quantity of these buttons.
*/
const buttons = document.querySelectorAll('.btn');
let buttonsAmount = buttons.length;
console.log('Quantity of all button elements presented on the page: ' + buttonsAmount);

/* Task 4
Find and determine the types of all input fields (input) on a web page.
*/
const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    console.log(`Type of "${input.placeholder}" input field is "${input.type}" `)
})

//console.log('Types of all input fields: ' + input.type);

/* Task 5
Utilizing CSS selectors in conjunction with JavaScript, identify all the social media button elements present on a specified web page and determine their respective destination URLs.
*/
const socialMediaButtons = document.querySelectorAll('.footer_social-link');
socialMediaButtons.forEach(button => {
    const img = button.querySelector('img');
    console.log(`URL for "${img.alt}" social media button is: ${button.href}`)
})


//Hard level

/* Task 6
Log into your profile at https://www.greencity.cx.ua/#/profile, there is a calendar that displays the week, with navigation buttons (previous/next) and the days of the week.

Determine the current day: Locate the day that has the class current-day and display its value. (Expected result, for example, "Current day: 20 September 2024").
Check for navigation buttons: Ensure there are two navigation buttons (previous/next) and display their images.
Determine the displayed days of the week: Collect all elements with the class days-name and display their names.
*/

const currentDay = document.querySelector('.current-day')?.textContent.trim() || 'Unknown number';
const currentMonthAndYear = document.querySelector('.monthAndYear')?.textContent.trim() || 'Unknown number';
console.log(`Current day: ${currentDay} ${currentMonthAndYear}`);

const previousButton = document.querySelector('img.arrow-previous');
const nextButton = document.querySelector('img.arrow-next');
if(previousButton && nextButton){
    console.log(`Previous button image source: ${previousButton.src}`);
    console.log(`Next button image source: ${nextButton.src}`);
} else {
    console.log('Navigation button images not found');
}

const days = document.querySelectorAll('.days-name');
days.forEach(day => {
   console.log(day.textContent.trim());
});