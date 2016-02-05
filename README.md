## Heavens Retail Clothing

Responsive website for a clothing retailer.


# Installation

Build your project for the first time:

`npm install`

`bower install`

`gulp build`


`npm run update-webdriver`


To run live app:

in `www` directory

`http-server -a localhost -p 8000`


To run unit tests:

`npm test`


To run e2e test:

`protractor src/e2e-tests/protractor.conf.js`


To run unit tests:

`karma start karma.conf.js`

Tested on Chrome simulating Samsung Galaxy S4 and standard Chrome browser.




# Approach

 1 Use Mobile Angular UI (JavaScript Framework) to ensure website responsive (and mobile first)

 2 Use incremental development

 3 Use BDD (few important tests) and TDD (many unit tests)

 4 Use SOLID OOD (Single-responsiblity principle; Open-closed principle; Liskov substitution principle; Interface segregation principle and Dependency Inversion Principle)

 5 Iterate through user stories


# Discount

Code for £5 discount `5PoundDiscount`

# User Stories Completed

As a User I can view the products and their category, price and availability information.

1. As a User I can add a product to my shopping cart (basket).

2. As a User I can remove a product from my shopping cart.

3. As a User I can view the total price for the products in my shopping cart.

4. As a User I can apply a voucher to my shopping cart.

5. As a User I can view the total price for the products in my shopping cart with discounts applied (partly done).

6. As a User I am alerted when I apply an invalid voucher to my shopping cart (not attempted).

7. As a User I am unable to add Out of Stock products to the shopping cart.




