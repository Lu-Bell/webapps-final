//INTRODUCTION

const { builtinModules } = require("module");

// In the Node.js module system, each file is treated as a seperate module.
// Variables locale to the module are private.
//
//
// To make an object available outside of a module youjust need to expose them
// as additional properties to the 'export' object.
//


/*
var area2 = function(width){
    return width * width;
}

exports.area = function(width){
    return width * width;
}

exports.perimeter = width => 4 * width;
*/

builtinModules.export = {
    area : (width) => {
        return width * width;
    },

    perimeter : (width) => {return 4 * width},

    cubded : (width) => (width * width * width)
}