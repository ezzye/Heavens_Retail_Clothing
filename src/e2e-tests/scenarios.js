'use strict';



// As a User I can view the products and their category, price and availability information

// Should render homepage when user navigates to home when # empty

// Should render homepage when user navigates to home

// Should render Women’s Footwear when user navigates to wfoot

// Should render Men’s Footwear when user navigates to mfoot

// Should render Women’s Casualwear when user navigates to wcasual

// Should render Men’s Casualwear when user navigates to mcasual

// Should render Women’s Formalwear when user navigates to wformal

// Should render Men’s Formalwear when user navigates to mformal





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

  it('should get Men\’s Footwear page when link clicked', function() {
    var el = element.all(by.css('.list-group-item')).get(2).getText();
    expect(el).toEqual("Men’s Footwear");
    el.click();
    expect(element(by.css('.page-header')).getText()).toEqual("Men’s Footwear");
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

  // describe('home', function() {

  //   beforeEach(function() {
  //     browser.get('index.html#/home');
  //   });


  //   it('should render view1 when user navigates to /view1', function() {
  //     expect(element.all(by.css('[ng-view] p')).first().getText()).
  //       toMatch(/partial for view 1/);
  //   });

  // });


  // describe('view2', function() {

  //   beforeEach(function() {
  //     browser.get('index.html#/view2');
  //   });


  //   it('should render view2 when user navigates to /view2', function() {
  //     expect(element.all(by.css('[ng-view] p')).first().getText()).
  //       toMatch(/partial for view 2/);
  //   });

  // });
});