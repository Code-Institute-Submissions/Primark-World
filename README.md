# PRIMARK WORLD #
--
Interactive Frontend Development - Code institute
> **_Primark World_** is a one stop shop for important live information




---
<a name="toc"></a>
## Table of Contents
1. [**UX**](#ux)
2. [**Scope**](#scope)
3. [**Structure**](#structure)
4. [**Wireframe Mockups**](#wireframes)
5. [**Surface**](#surface)
6. [**Technologies**](#technologies)
7. [**Features**](#features)
8. [**Testing**](#testing)
9. [**Bugs**](#bugs)
10. [**Deployment**](#deployment)
11. [**Credits**](#credits)
12. [**Acknowledgements**](#acknowledgements)

---
<a name="ux"></a>
## UX

This project showcases an interactive frontend development prototype project that could be upgraded and launched for the benefit of Head Office staff at Primark.

All information contained herewithin is either publicly accessible or made up, for educational purposes and with permission.

However, real information could be supplied and the site made live for use by employees.

I work in the fashion industry in merchandise planning and believe accessible, intelligent data analysis key to optimised decision making.


Planners need to take into account store and depot profiles, weather variances (against LY), and media releases.

<br>
My goals were :<br>
*  To set up a means to view store and depot profiles<br>
*  To establish proof of concept <br>
*  To analyse weather impact on performance







I divided the site into separate areas: <br>

**Home:** First impression and landing point for visitors<br>

**City:** This was supposed to be an OpenWeatherMap API this year vs LY comparator section. However, unfortunately I ran out of time to implement this function<br>

**Store:** Google Maps API that shows location of all stores / depot / head office. Could be upgraded to show data by store such as grading<br>

**Contact:** A means to get in touch regarding any issues

### User Stories

> 1. As a user, I want to know if weather was different by city this year vs LY, as that could have a impact on trade
> 2. As a user, I want to be able to view where our stores are based and their proximity to depots

---

<a name="scope"></a>
## Scope
The biggest problem this website was designed to solve is the current mechanism for finding weather is very slow and time intensive, with manual scrolling on websites to pull information onto excel sheets. 

There is no means to see where all the stores are located relative to each other although individual stores can be found on the publicly accessible website.

The website is aimed to be intiutive and informative with the ability to get data quickly.

---
<a name="structure"></a>
## Structure.


#### **_Main Page_**
 - **Navigation Bar**
   - Primark logo on the left is clickable and returns user to home page.<br>
   - Links to City / Store / Contact pages<br>

 - **Hero Image & Welcome**
   - Visual display and acknowledgement of visitor<br>

 - **Important - check this out**
   -  Downloadable PDF feature
   -  Click the download icon, and PDF will automatically download

 - **Sign Up to Our Newsletter**
   -  Input form that takes email and sends automated response

 - **Footer Icons**
   -  Sends user to City / Store / Contact pages, same as in nav

 - **Social Media Icons**
   -  Links to facebook / twitter / instagram / pinterest


#### **_City Page_**  
  - **Weather comparator**
    - TBC, placeholder. Should be able to link to OpenWeatherMap API


#### **Store Page_**  
  - **Google Maps API**
    - Shows head office / stores / depots in various countries across the world
    - Reset button


#### **_Contact Page_**  
  - **Email Form**
    - The form asks the user to leave a comment via email and sends an automated response.


<a name="wireframes"></a>

#### Wireframe Mockups

- [Org Design](https://c5dee634-71c4-41b1-8bb3-a1ccb37b664a.ws-eu01.gitpod.io/files/download/?id=e6677e8a-a2f1-4014-b27e-6f71ee22b5e8)<br>
The original wireframes ultimately proved beyond my skill level to implement. I would redo wireframes for mobile / pad / desktop but ran out of time
<br>

The website itself provides the same experience on all screens
<a name="surface"></a>

---
## Surface
The Navigation Bar at the top blends into the background color of the site which is Primark Teal. It is prefaced with a site-wide alert that welcomes the vistior

The hero image is for Boston because this was the first city in the United States where Primark opened and gives a dynamic and worldly vibe. I also included images from the UK, where we the most stores, and Gran Via Madrid, which is the location for our second biggest store.

I selected *"Roboto"* as the primary font from [Google Fonts](https://fonts.google.com/), as it is modern and clean. The secondary font is *"Noto Sans JP"*, which is clear and complementary.

I used light blue and white boxes to place text and light or dark greys for icons and buttons. It reflects a colour theme that is easy on the eye.





---
<a name="technologies"></a>
## Technologies

- [HTML5](https://en.wikipedia.org/wiki/HTML)
- [CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
- [JavaScript](https://en.wikipedia.org/wiki/JavaScript)
- [jQuery](https://code.jquery.com/)
- [GitHub](https://github.com/)
- [Slack](https://slack.com/intl/en-ie/)
- [Google Fonts](https://fonts.google.com/)
- [Weather_Api](https://openweathermap.org/api)
- [Google Maps Api](https://cloud.google.com/maps-platform)
- [Website Responsive Testing](Toolresponsivetesttool.com)
- [W3 Validator](https://validator.w3.org/nu/)
- [Emailjs_Api](https://www.emailjs.com/)
- [Gmail](https://www.gmail.com/)
- [Pic Resize](https://picresize.com/)


---
<a name="features"></a>
## Features

- **Google Maps API** <br>
[Google Maps API](https://cloud.google.com/maps-platform) using the arrays, info windows and clustering to provide a wholistic view of the Primark portfolio
- **JSEmail.**<br>
On the contact page, there is a form for comments or questions including user country of origin.



### Features Left to Implement
-  **OpenWeatherMap API**<br>
I tried to implement this feature but I ran out of time as Google Maps API took more time than I anticipated<br>
-  **Stock Price**<br>
I wanted to link a ticker to ABF share price in real time<br>
-  **Currency exchanges rates**<br>
Same as above, where the rate of USD to GBP & EUR has a material impact on margins
-  **Store Profiles**<br>
I would like to be able to give specific store data & images in info windows if this was to be upgraded and used by company
-  **Google Maps API alternative views**<br>
I wanted to be able to switch views (e.g. only stores by the coast or Top 20 stores)
-  **jQuery functionality**<br>
I managed to write some jQuery code that worked independently of the rest of the site. However, I had to delete it as I couldn't integrate jQuery effectively into my existing code. 

---

<a name="testing"></a>
## Testing
- I tested my code on [Chrome Developer](https://developers.google.com/web/tools/chrome-devtools) I used the extension called [Live Server](https://github.com/ritwickdey/vscode-live-server)
 on [Visual Studio Code](https://code.visualstudio.com/). 
-  I tested HTML with w3 Validator and passed
-  I tested CSS with w3 Validator and passed<br>
- I ran through JavaScript code to make sure it was working and smoothly as possible.
- Google Maps API took up most of my time testing, and I use Chrome Developer Tools for this
-  I tested the contact us page to ensure the form linked to the emailjs API and email response is working correctly.
- I tested the form for form validation, making sure it displayed an error if a input fields was left blank.
- I tested the validation of the email input, to make sure a email address was entered.
- I checked refresh speed to load time of page from cached and uncached browsers. 
- I resized images a second time to 250KB or lower where I found Slow 3G takes 2.09s but all other throttling is quicker than 2s.
- I also checked x 7 industry wide tests to run for a website : Lighthouse, WebPageTest, TestMySite, PageSpeed Insights, Speed Scorecard, Impact Calculator, Chrome Developer Tools
-  I also conducted the Media Query Test and all the Presets in Chrome and Firefox Development tools. 


---

<a name="deployment"></a>
## Deployment
I hosted this site on [GitHub Pages](https://github.com/pjshvision/Primark-World/). GitHub Pages is a static site hosting service that takes HTML, CSS, and JavaScript files straight from a repository on GitHub, optionally runs the files through a build process, and publishes a website. 




---
<a name="Credits"></a>
## Credits


##### Design:


The concept and design is my own but I was inspired by [Primark Home Page](https://www.primark.com/en-ie), in particular the Store Locator tool which also uses Google Maps API

##### Content:

I was careful to ensure from the outset that no confidential or restricted information has been used in the making of this site<br>

Most of the code for the Google Maps API was supplied by Google Maps Documentation, which was extensively well documented.<br>

- Code Institute coursework including Cool Runnings, Whiskey Drop, Rosie Odenkirk
Code snippet for quotes in Home Page was taken from Bootstrapious[(https://bootstrapious.com/p/bootstrap-quote)]
- Code on responsive squares derived from Bobby Kilpatrick [(https://spin.atomicobject.com/2015/07/14/css-responsive-square/)]
- How to make squares by Shikkediel [(https://css-tricks.com/forums/topic/making-a-responsive-css-square/)] 
- How to make a CSS contact form by W3Schools [(https://www.w3schools.com/howto/howto_css_contact_form.asp)]

##### Resources used
Color Picker From Image https://www.ginifab.com/feeds/pms/color_picker_from_image.php
Cropped circle icon using Photo Scissors https://photoscissors.com/
Tower Block Icon <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

I attribute code taken & modified from :

##### Media:

##### 
[CC licences](https://en.wikipedia.org/wiki/Creative_Commons_license) or paid Standard licences.

[Shutterstock](https://www.shutterstock.com/home) 

Icons taken from [Icons8](https://icons8.com/icon/60575/depot)

Topglass architectural photos available for download at [Primark](https://www.primark.com/en-ie)

Attribution to Unsplash photographers in alphabetical order :

- Alev Takil
- Christian Salow
- Ethan Hu
- Hosein Emrani
- Mangopear Creative
- Osman Rana



<a name="acknowledgements"></a>
### Acknowledgements
I would like to thank Jonathon Munz, my mentor, for help with my coding and keeping me positive. <br>

Some further helpful resources :

- [YouTube - The Coding Train](https://www.youtube.com/watch?v=ecT42O6I_WI) for code snippets and know how.<br>
- [YouTube - Steve Griffith](https://www.youtube.com/watch?v=5a3LthQ2xCI) for code snippets and know how
- [Google Maps Platform Documentation](https://developers.google.com/maps/documentation/javascript/tutorial) for a lot of help with getting it to work.
- [CSS-Tricks](https://css-tricks.com/) website for good ideas and work arounds.<br>
- [W3Schools](https://www.w3schools.com/) for code snippets and documentation with [Creating Modal,](https://www.w3schools.com/howto/howto_css_custom_scrollbar.asp) and general research on HTML CSS and JavaScript.
- [GitHub](https://github.com/) for documentation on how to [How to Clone Repository](https://bit.ly/32Emdbc).
- [Google Fonts](https://fonts.google.com/) for fonts.
- [Slack](https://slack.com/intl/en-ie/) community for reassurance, tips and pointers.<br> 

---

[Back to top ](#toc)
