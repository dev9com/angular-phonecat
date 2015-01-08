PhonesDetails = {
    elements:{
        _name: function(){
            return element(by.binding('phone.name'));
        },

        _image: function(){
            return element(by.css('img.phone.active'));
        },

        _thumbnail: function(index){
            return element(by.css('.phone-thumbs li:nth-child(' + index + ') img'));
        }
    },

    _getName: function(){
        return this.elements._name().getText();
    },

    _getImage: function(){
        return this.elements._image().getAttribute('src');
    },

    clickThumbnail: function(index){
        this.elements._thumbnail(index).click();
    }
};

module.exports = PhonesDetails;