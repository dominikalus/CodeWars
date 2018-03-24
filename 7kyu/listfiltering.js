/*
Example

function to cut strings out

filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
*/

//My solution

function filter_list(l) {
    // Return a new array with the strings filtered out
    return l.filter(number => {
        if(typeof number === 'number'){
//if we want to keep element must be true
        return true }
})
}

//Best solution

function filter_list(l) {
    return l.filter(function(v) {return typeof v == 'number'})
}