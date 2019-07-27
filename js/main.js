console.log('Sample JavaScript #3 HW #17');

var counter = (function() {
    var count = 0;
    return function(n) {
        count = n !== undefined ? n : count;
        return count++;
    }
}());


//***************************************************8 */

var counting = function(){
    var count = 0;
    counting.value = function(n){
        if (n !== undefined) count = n;
        return count;
    };
    counting.increment = function(){
        count++;
    };
    counting.decrement = function(){
        count--;
    }
};
counting();

console.log(counting.value(30));
console.log(counting.value());
counting.decrement();
console.log(counting.value());
counting.increment();
counting.increment();
console.log(counting.value());

//*************************************************** */
 

function myPow(a, b, myPrint) {
    let res;
    if (b > 1) {
        let str = myPow(a, b - 1, myPrint);
        str = str.substring(str.indexOf('=') + 1);
        res = a * Number(str);
    } 
    else res = a;
    return myPrint(a, b, res);
    
};
function myPrint(a, b, res) {
    return a + '^' + b + '=' + res;
};


console.log(myPow(2, 4, myPrint));
console.log(myPow(3, 4, myPrint)); // 3^4=81
console.log(myPow(2, 3, myPrint)); // 2^3=8
console.log(myPow(3, 4, myPrint)); // 3^4=81
console.log(myPow(2, 3, myPrint)); // 2^3=8

//*************************************************** */

var car = {
    engine: 5117,
    model: 'Chellendger',
    name: 'Dodge',
    year: 2010,
    _used: 'used',
    set used(str) {
        if(str === 'new') {
            this._used = str;
            this.year = yearNow;
        }
        if(str === 'used') this._used = str;
    },
    get used() {
        if(this.year === yearNow) return 'new';
        else return 'used';
    },
    info: function() {return this.name + ' ' + this.model + ', ' + this.engine + 'cc, year ' + this.year + ", " + this._used}
};


var anotherCar = {
    engine: 6000,
    model: 'M2',
    name: 'BMW',
    year: 2018,
    _used: 'new',
    set used(str) {
        if(str === 'new') {
            this._used = str;
            this.year = yearNow;
        }
        if(str === 'used') this._used = str;
    },
    get used() {
        if(this.year === yearNow) return 'new';
        else return 'used';
    },
    info: function() {return this.name + ' ' + this.model + ', ' + this.engine + 'cc, year ' + this.year + ", " + this._used}
};

let yearNow = 2019;

console.log(car.used);
car.used = 'opa';
console.log(car.used);
console.log(car.year);
console.log(car.info());

//*************************************************** */


function myMax(arr) {
    return Math.max.apply(null, arr);
}

let list = [12, 23, 100, 34, 56, 9, 233];
console.log(myMax(list)); // 233

//*************************************************** */


 var myMul = (a, b) => a * b;
 var myDouble = function(a) {
    return myMul.bind(a, 2);
 }(); 
 var myTriple = function(n) {
     return myMul.bind(n, 3);
 }();

console.log(myDouble(3)); // = myMul(2, 3) = 6

console.log(myDouble(4)); // = myMul(2, 4) = 8

console.log(myDouble(5)); // = myMul(2, 5) = 10

console.log(myTriple(3)); // = myMul(3, 3) = 9

console.log(myTriple(4)); // = myMul(3, 4) = 12

console.log(myTriple(5)); // = myMul(3, 5) = 15

//*************************************************** */

 function myUniq(arr) {
     let set = new Set();
     for (let value of arr) {
         set.add(value);
     }
     return set;
 }
let notUniqNums = [1, 1, 2, 3, 4, 5, 6, 7];

let notUniqStrings = ['Bob', 'Kate', 'Jhon', 'Tom', 'Jhon', 'Kate', 'Tom', 'Bob', 'Jhon', 'Tom'];

console.log(myUniq(notUniqNums));

console.log(myUniq(notUniqStrings));