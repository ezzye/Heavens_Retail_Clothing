"use strict";
angular.module('Heavens.controllers.Main', [])

.controller('MainController', function(){
  var self = this;

  self.showProducts = {
    "products": [
      {
        "productName": "Almond Toe Court Shoes",
        "color": "Patent Black",
        "category": "Womens Footwear",
        "price": 99.00,
        "quantity": 5,
        "image": "http://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=61954405"
      },
      {
        "productName": "Suede Shoes",
        "color": "Blue",
        "category": "Womens Footwear",
        "price": 42.00,
        "quantity": 4,
        "image": "http://www.shoeperwoman.com/wp-content/uploads/2011/07/blue-suede-shoes-georgia-rose.jpg"
      },
      {
        "productName": "Leather Driver Saddle Loafers",
        "color": "Tan",
        "category": "_Mens Footwear",
        "price": 34.00,
        "quantity": 12,
        "image": "http://johnlewis.scene7.com/is/image/JohnLewis/001411068?$prod_grid3$"
      },
      {
        "productName": "Flip Flops",
        "color": "Red",
        "category": "_Mens Footwear",
        "price": 19.00,
        "quantity": 6,
        "image": "http://s1.thcdn.com/productimg/0/600/600/58/10301758-1357811154-763561.jpg"
      },
      {
        "productName": "Flip Flops",
        "color": "Blue",
        "category": "_Mens Footwear",
        "price": 19.00,
        "quantity": 0,
        "image": "http://www.kindredsole.com/media/catalog/product/cache/1/image/600x/9df78eab33525d08d6e5fb8d27136e95/h/a/havaianas_top_blue_sky_flip_flops.jpg"
      },
      {
        "productName": "Gold Button Cardigan",
        "color": "Black",
        "category": "Womens Casualwear",
        "price": 167.00,
        "quantity": 6,
        "image": "https://cdnc.lystit.com/photos/3e6c-2014/06/13/armani-jeans-black-gold-button-cardigan-product-1-20763686-1-544847571-normal.jpeg"
      },
      {
        "productName": "Cotton Shorts",
        "color": "Medium Red",
        "category": "Womens Casualwear",
        "price": 30.00,
        "quantity": 5,
        "image": "http://www.rustyzipper.com/full/151191L.jpg"
      },
      {
        "productName": "Fine Stripe Short Sleeve Shirt",
        "color": "Grey",
        "category": "_Mens Casualwear",
        "price": 49.99,
        "quantity": 9,
        "image": "https://cdnd.lystit.com/photos/cdca-2015/10/16/lacoste-grey-greyblue-short-sleeve-polo-shirt-with-fine-stripes-gray-product-1-257548960-normal.jpeg"
      },
      {
        "productName": "Fine Stripe Short Sleeve Shirt",
        "color": "Green",
        "category": "_Mens Casualwear",
        "price": 39.99,
        "originalPrice": 49.99,
        "quantity": 3,
        "image": "http://www.cwclothes.com.au/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/p/t/pts11grn-flat.jpg"
      },
      {
        "productName": "Sharkskin Waistcoat",
        "color": "Charcoal",
        "category": "_Mens Formalwear",
        "price": 75.00,
        "quantity": 2,
        "image": "http://www.birtchnells.co.uk/images/products/scott-slim-fit-blue-sharkskin-waist-coat-Tt0N.jpg"
      },
      {
        "productName": "Lightweight Patch Pocket Blazer",
        "color": "Deer",
        "category": "_Mens Formalwear",
        "price": 175.00,
        "quantity": 1,
        "image": "https://cdna.lystit.com/photos/2012/07/24/reiss-deer-lightweight-patch-pkt-blazer-product-1-4269143-518146599.jpeg"
      },
      {
        "productName": "Bird Print Dress",
        "color": "Black",
        "category": "Womens Formalwear",
        "price": 270.00,
        "quantity": 10,
        "image": "http://www.goldkidlondon.com/image/cache/data/dress/gk09/gk09-black/GK09_BLACK-BACK-11-746x1000.jpg"
      },
      {
        "productName": "Mid Twist Cut-Out Dress",
        "color": "Pink",
        "category": "Womens Formalwear",
        "price": 540.00,
        "quantity": 5,
        "image": "http://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=125654260"
      }
    ]
  };

  self.basket = [];

  self.addToBasket = function(item) {
    self.basket.push(
      {
        "image": item.image,
        "productName": item.productName,
        "color": item.color,
        "price": item.price,
        "quantity": 1
      }
    );
  };

});