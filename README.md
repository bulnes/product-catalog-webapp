# Product catalog webapp

## Description

One of our clients needs an application to showcase all of their products. All of the products are assigned to a set of categories to make it easier for customers to find what they're looking for. 

The application should consume data from https://fakestoreapi.com/docs and be written using React or Vue.

Layout requirements:

* Content showing a product grid
* Each product cart should show: image, title and price
* Select box with options to sort products ascending or descending
* Sidebar on the left showing all categories

Behavior requirements:

* When page is loaded, 20 products will be loaded
* When a category is clicked, the list of products will be filtered by the selected category
* When the page is scrolled until the end, the next 20 products will be loaded

## How to

* You will need Node Lts and Yarn
* First time, use ```yarn```
* To up the server, use ```yarn start```