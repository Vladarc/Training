// ### Задача 1
function isTriangle(a, b, c) {
    if (a <= 0 || b <= 0 || c <= 0) {
        return false;
    }
    if ((a + c) <= b || (b + c) <= a || (a + b) <= c) {
        return false
    };

    return true;

}
console.log(isTriangle(3, 4, 5));
console.log(isTriangle(2.3, 2.3, 2.3));
console.log(isTriangle(11.4, 0.8, 11));
console.log(isTriangle(1, 30, 15));
console.log(isTriangle(2, 2, 5));

// ### Задача 2

function getNthItem(a, n) {
    let sum = [0];

    for (let i = 1; i <= n; i++) {
        sum.push(a - 2 * sum[i - 1]);
    }

    return sum[sum.length - 1];
}
console.log(getNthItem(5, 1), 5);
console.log(getNthItem(11, 0), 0);
console.log(getNthItem(10, 3), 30);
console.log(getNthItem(0, 1), 0);
console.log(getNthItem(30, 2), -30);
console.log(getNthItem(-5, 40), 1832519379625);
console.log(getNthItem(12, 8), -1020);
console.log(getNthItem(0, 0), 0);

//### Задача 3

function sumDigits(x) {

    if (x != 0) {
        let convertToString = x + " ";
        sum = 0;
        for (i = 0; i < convertToString.length; i++) {
            sum += Number(convertToString[i])
        }
        return sum
    }




    return 0
}

console.log(sumDigits2(2222))

// part 2 
function sumDigits2(num) {

    var sum = 0, tmp;

    while (num) {

        tmp = num % 10;

        num = (num - tmp) / 10

        sum += tmp
    }

    return sum;
}

console.log(sumDigits2(2610));

// ### Задача 4
function formatTime(sec) {

    let hours = Math.floor(sec / 3600)
    minutes = Math.floor(sec / 60 % 60)
    seconds = Math.floor(sec % 60)
    hours === 0 ? "12:00:00 AM" : hours
    hours < 10 ? hours = "0" + hours : hours
    minutes < 10 ? minutes = "0" + minutes : minutes
    seconds < 10 ? seconds = "0" + seconds : seconds
    if (hours < 12) {
        hours < 1 ? hours = 12 : hours
        return `${hours}:${minutes}:${seconds} AM`
    }
    if (hours >= 12) {
        hours -= 12;
        hours < 10 ? hours = "0" + hours : hours
        hours < 1 ? hours = 12 : hours
        return `${hours}:${minutes}:${seconds} PM`
    }






    return ""

}



console.log(formatTime(37784), "10:29:44 AM");
console.log(formatTime(59900), "04:38:20 PM");
console.log(formatTime(0), "12:00:00 AM");
console.log(formatTime(86399), "11:59:59 PM");
console.log(formatTime(3599), "12:59:59 AM");
console.log(formatTime(3600), "01:00:00 AM");
console.log(formatTime(43199), "11:59:59 AM");
console.log(formatTime(43200), "12:00:00 PM");
console.log(formatTime(46799), "12:59:59 PM");
console.log(formatTime(46800), "01:00:00 PM");

// ### Задача 5
function trim(text, maxLength) {
    if (maxLength <= 0) {
        return "RangeError"
    }
    if (text == "") {
        return ''
    }
    if (text.length > maxLength) {
        let textCase = text.slice(0, maxLength)
        return textCase + "\u2026"

    }

    return text

}
console.log(trim("Hello, I am a text!", 9), "Hello, I\u2026");
console.log(trim("Hello, I am a text!", 1), "\u2026");
console.log(trim("", 5), "");
console.log(trim("Hello, I am a text!", 19), "Hello, I am a text!");
console.log(trim("I'm a text!", -50), 'RangeError');
console.log(trim("", 0), "RangeError");


// ### Задача 6


function getStats(data) {
    if (data.length != 0) {
        let min = Math.min.apply(null, data);
        let max = Math.max.apply(null, data);
        let avg = 0;
        for (i = 0; i < data.length; i++) avg += data[i] / data.length

        return `max:${max} min:${min} avg:${Math.floor(avg)}`



    }



    return {
        min: null,
        max: null,
        avg: null
    };
}



console.log(getStats([33, -18, -12, 37, 14, 41, 26, -4, -19, -26, -38, -15, -11, 1, 1, 42, -13, -32, -27, 42, -47, -50, -30, -19, 3, 37, 38, 6, 26, -40, 3, 10, -32, 38, -18, 44, 22, 19, -7, -7, 33, 25, 36, 38, -40, -35, -1, 30, 41, -16]));
console.log(getStats([]), { max: null, min: null, avg: null });

//### Задача 7

function unique(data) {
    if (data.length > 0) {
        let uniqArr = [...new Set(data)]
        return uniqArr
    }


    return [];
}



console.log(unique([]), []);
console.log(unique([5]), [5]);
console.log(unique([8, 2, 2, 3, 8, 2, 2, 3]), [8, 2, 3]);
console.log(unique(["A", 5, true, "arr", "obj", "a", 5, "obj"]), ["A", 5, true, " arr", "obj", "a"]);

// ### Задача 8

function getTopLetter(str) {
    let objForWords = {};
    let maxWordValue = 0;
    let resultValue = '';
    if (str) {
        for (let char of str) {
            if (objForWords.hasOwnProperty(char))
                objForWords[char]++
            else {
                objForWords[char] = 1;
            }

        }
        for (let char in objForWords) {
            if (objForWords[char] > maxWordValue) {
                maxWordValue = objForWords[char]
                resultValue = char
            }
        }
        return resultValue

    }



    return "";
}

console.log(getTopLetter('aaaabbbcc'))


//### Задача 9

const package0 = { "name": "boots", "weight": 10.3, "price": 122, "fragile": false, "owner": "Michael Caine" };
const package1 = { "price": 31.5, "fragile": true, "owner": "Tom Cruise", "address": "Washington DC, Ave. 144/5" };
const package2 = { "price": 103.25, "charged": true, "fromCountry": "India", "volume": "10 L" };


const merge = (...args) => {
    const pr = {};
    args.forEach(cur => {
        const keys = Object.keys(cur);
        keys.forEach(el => {
            if (!pr[el]) {
                pr[el] = [];
            }
            pr[el].push(cur[el]);
        })
    });
    return pr;
}

console.log(merge(package0, package1, package2));


// ### Задача 10 

function boundingRect(coordsList) {


    if (coordsList.length > 0) {
        let maxX = Math.max.apply(null, coordsList.map(item => item.x))
        let minX = Math.min.apply(null, coordsList.map(item => item.x))
        let maxY = Math.max.apply(null, coordsList.map(item => item.y))
        let minY = Math.min.apply(null, coordsList.map(item => item.y))
        return {
            top: maxY,
            bottom: minY,
            left: minX,
            right: maxX
        }

    }
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    };
}

console.log(boundingRect([
    { x: 49.2382, y: 28.4529 },
    { x: 49.2433, y: 28.4641 },
    { x: 49.2337, y: 28.4715 },
    { x: 49.2365, y: 28.4637 }
]))

/* result ->
top: 28.4715,
right: 49.2433,
bottom: 28.4529,
left: 49.2337
 */




console.log(boundingRect([
    { x: -8.141, y: -9.155 },
    { x: -6.5477, y: -7.7143 },
    { x: -8.0407, y: -6.4022 },
    { x: -9.2639, y: -8.7352 },
    { x: -7.1035, y: -6.6033 }
]))
/*
result->
top: -6.4022,
                right: -6.5477,
                bottom: -9.155,
                left: -9.2639
*/