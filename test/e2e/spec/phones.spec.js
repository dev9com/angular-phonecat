describe('Phone list view', function(){

    var phones = require('../page_objects/phones.page.js');

    beforeEach(function() {
        browser.get('app/index.html#/phones');
    })

    it('should filter the phone list as a user types into the search box', function() {
        expect(phones._phonesCount()).toBe(20);

        phones.searchFor('nexus');
        expect(phones._phonesCount()).toBe(1);

        phones.clearSearch();
        phones.searchFor('motorola');
        expect(phones._phonesCount()).toBe(8);
    });

    it('should be possible to control phone order via the drop down select box', function() {
        phones.clearSearch();
        phones.searchFor('tablet'); //let's narrow the dataset to make the test assertions shorter

        expect(phones._getNames()).toEqual([
            "Motorola XOOM\u2122 with Wi-Fi",
            "MOTOROLA XOOM\u2122"
        ]);

        phones.sortItBy('name');

        expect(phones._getNames()).toEqual([
            "MOTOROLA XOOM\u2122",
            "Motorola XOOM\u2122 with Wi-Fi"
        ]);
    });

    it('should render phone specific links', function() {
        phones.clearSearch();
        phones.searchFor('nexus');
        phones.selectFirstPhone();
        browser.getLocationAbsUrl().then(function(url) {
            expect(url.split('#')[1]).toBe('/phones/nexus-s');
        });
    });
});