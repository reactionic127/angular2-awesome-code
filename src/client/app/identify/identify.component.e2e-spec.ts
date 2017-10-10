describe('Identify', () => {

  beforeEach( () => {
    browser.get('/identify');
  });

  it('should have correct feature heading', () => {
    expect(element(by.css('sd-identify h2')).getText()).toEqual('Features');
  });

});
