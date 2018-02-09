const image2base64 = require('./../');
const assert = require('assert');
const pt = require('path')

let url = "http://jaystack.com/wp-content/uploads/2015/12/nodejs-logo-e1497443346889.png";
let path = pt.resolve("test/nodejs.png");

describe("must to be resolved the promise", function(){
    
    it('get image of the url and convert to base64', function(){
        image2base64(url)
        .then(
            (data) => {
                assert(/^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{0,2}==)$/.test(data), true)
            }
        )
    });
    
    it('get image of the path and convert to base64', function(){
        image2base64(path)
        .then(
            (data) => {
                assert(/^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{0,2}==)$/.test(data), true)
            }
        )
    })
    
});