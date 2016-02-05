'use strict';


describe('Heavens', function() {


  it('should automatically redirect to /home when location hash is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/");
  });

  it('should get Women\'s footwear page when link clicked', function() {
    var el = element.all(by.css('.list-group-item')).get(1).getText();
    expect(el).toEqual("Women’s Footwear");
    el.click();
    expect(element(by.css('.page-header')).getText()).toEqual("Women’s Footwear");
  });

  it('Women\'s footwear page should contain list of appropriate products', function() {
    var el = element.all(by.css('.list-group-item')).get(1).getText();
    el.click();
    expect(element.all(by.css('.productName-item')).get(0).getText()).toEqual("Almond Toe Court Shoes");
  });

  it('should get Men\’s Footwear page when link clicked', function() {
    var el = element.all(by.css('.list-group-item')).get(2).getText();
    expect(el).toEqual("Men’s Footwear");
    el.click();
    expect(element(by.css('.page-header')).getText()).toEqual("Men’s Footwear");
  });

  it('should get Men\’s Footwear page when link clicked', function() {
    var el = element.all(by.css('.list-group-item')).get(2).getText();
    el.click();
    expect(element.all(by.css('.productName-item')).get(0).getText()).toEqual("Leather Driver Saddle Loafers");
  });

  it('should get Women\’s Casualwear page when link clicked', function() {
    var el = element.all(by.css('.list-group-item')).get(3).getText();
    expect(el).toEqual("Women’s Casualwear");
    el.click();
    expect(element(by.css('.page-header')).getText()).toEqual("Women’s Casualwear");
  });

  it('should get Men\’s Casualwear page when link clicked', function() {
    var el = element.all(by.css('.list-group-item')).get(4).getText();
    expect(el).toEqual("Men’s Casualwear");
    el.click();
    expect(element(by.css('.page-header')).getText()).toEqual("Men’s Casualwear");
  });

  it('should get Women\’s Formalwear page when link clicked', function() {
    var el = element.all(by.css('.list-group-item')).get(5).getText();
    expect(el).toEqual("Women’s Formalwear");
    el.click();
    expect(element(by.css('.page-header')).getText()).toEqual("Women’s Formalwear");
  });

  it('should get Men\’s Formalwear page when link clicked', function() {
    var el = element.all(by.css('.list-group-item')).get(6).getText();
    expect(el).toEqual("Men’s Formalwear");
    el.click();
    expect(element(by.css('.page-header')).getText()).toEqual("Men’s Formalwear");
  });




  describe('adding product to basket', function() {

    beforeEach(function() {
      browser.get('index.html#/mcasual');
    });


    it('should add item to basket when ADD clicked', function() {
      var el = element.all(by.css('.addButton')).first();
      el.click();
      var el2 = element(by.css('.basket'))
      el2.click();
      var el3 = element.all(by.css('.basket-item')).last().getText();
      expect(el3).toEqual("Fine Stripe Short Sleeve Shirt");
    });

  });


  describe('removing product from basket', function() {

    beforeEach(function() {
      browser.get('index.html#/mformal');
    });


    it('should remove item from basket when REMOVE clicked', function() {
      var el = element.all(by.css('.addButton')).first();
      el.click();
      var el2 = element.all(by.css('.addButton')).get(1);
      el2.click();
      var el3 = element(by.css('.basket'))
      el3.click();
      var el4 = element.all(by.css('.removeButton')).first();
      el4.click();

      var el5 = element.all(by.css('.basket-item')).last().getText();
      expect(el5).toEqual("Lightweight Patch Pocket Blazer");
    });

  });
});