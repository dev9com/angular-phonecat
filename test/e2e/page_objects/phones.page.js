Phones = {
    elements: {
        _search: function () {
            return element(by.model('query'));
        },

        _sort: function(){
            return element(by.model('orderProp'));
        },

        _phoneList: function(){
            return element.all(by.repeater('phone in phones'));
        },

        _phoneNameColumn: function(){
            return  element.all(by.repeater('phone in phones').column('phone.name'));
        }
    },

    _phonesCount: function(){
        return this.elements._phoneList().count();
    },

    searchFor: function(word){
        this.elements._search().sendKeys(word);
    },

    clearSearch: function(){
        this.elements._search().clear();
    },

    _getNames: function(){
        return this.elements._phoneNameColumn().map(function(elem){
            return elem.getText();
        });
    },

    sortItBy: function(type){
        this.elements._sort().element(by.css('option[value="' + type + '"]')).click();
    },

    selectFirstPhone : function(){
        element.all(by.css('.phones li a')).first().click();
        return require('./phone.details.page.js');
    }
};

module.exports = Phones;