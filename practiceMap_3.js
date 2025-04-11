// arrow function
const words_1 = ["apple", "banana", "cherry"];

const upperWords_1 = words_1.map(words_1 => words_1.toUpperCase());
console.log(upperWords_1);

// Anonymous function
const words_2 = ["apple", "banana", "cherry"];

const upperWords_2 = function() {
    return words_2.map(function(word) {
        return word.toUpperCase();
    });
};

console.log(upperWords_2());
