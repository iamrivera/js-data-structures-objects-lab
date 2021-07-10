// Write your solution in this file!
const driver = {}; 

function updateDriverWithKeyAndValue(object,key,value) {
    const newDriver = {};
    return Object.assign(newDriver,object,{[key]:value})
}

function destructivelyUpdateDriverWithKeyAndValue(object, key, value) {
    object[key] = value
    return object
}

function deleteFromDriverByKey(object, key) {
    const newDriver = Object.assign({},object);

    delete newDriver[key];

    return newDriver;
}

function destructivelyDeleteFromDriverByKey(object, key) {
    delete object[key];
    return object; 
}