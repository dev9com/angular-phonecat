describe('Phone detail view', function(){

    var phones = require('../page_objects/phones.page.js'),
        phoneDetails;

    beforeEach(function() {
        browser.get('app/index.html#/phnes');
        phones.searchFor('nexus');
        phoneDetails = phones.selectFirstPhone();
    });


    it('should display nexus-s page', function() {
        expect(phoneDetails._getName()).toBe('Nexus S');
    });

    it('should display the first phone image as the main phone image', function() {
        expect(phoneDetails._getImage()).toMatch(/img\/phones\/nexus-s.0.jpg/);
    });

    it('should swap main image if a thumbnail image is clicked on', function() {
        phoneDetails.clickThumbnail(3);
        expect(phoneDetails._getImage()).toMatch(/img\/phones\/nexus-s.2.jpg/);

        phoneDetails.clickThumbnail(1);
        expect(phoneDetails._getImage()).toMatch(/img\/phones\/nexus-s.0.jpg/);
    });
});