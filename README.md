# Results Summary Component

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Use the local JSON data to dynamically populate the content


### Links

- Solution URL: [Github](https://github.com/Harbike/results_summary.git)
- Live Site URL: [Github Pages](https://harbike.github.io/results_summary/)

## My process

### Built with

- Semantic HTML5 markup
- CSS
- Flexbox
- Mobile-first workflow
- [JSON](https://www.json.org/) - JSON

### What I learned

```css
.score::after{
    content: '';
    display: block;
}
```
```js
fetch('data.json')
.then(response => response.json())
.then(data => function())
.catch(error => console.log(`Error message:`, error));
```
