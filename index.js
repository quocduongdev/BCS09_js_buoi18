
var arrInput = []

function postValue() {
    var postvalue = document.getElementById("output_value").innerHTML = arrInput
}



function getValueInput() {
    event.preventDefault()
    var valueInput = document.getElementById("input_nhap").value * 1;
    arrInput.push(valueInput);
    console.log(arrInput)
    postValue()
}
// function checkPositive(n) {
//     arrcheck = []
//     for (var i = 0; i < arrInput.length; i++) {
//         if (n >= 0) {
//             return arrcheck.push()
//         }
//     } 
// }

function element_click(ele) {
    var outputEle = document.getElementById(ele);

    return outputEle;
}
// console.log(element_click(btn1_tongsoduong))


// bài 1 : Tính tổng số Dương

// element_click("tongsoduong") = function () {
//     console.log("first")
// }



document.getElementById("btn1_tongsoduong").onclick = () => {
    var sumPositive = 0
    for (var i = 0; i < arrInput.length; i++) {
        if (arrInput[i] > 0) {
            sumPositive += arrInput[i];
        }
    }
    document.querySelector(".btn_tongsoduong").innerHTML = `Tổng Số Dương là : ${sumPositive} `
}

//Bài 2 : Đếm Số Dương
document.getElementById("btn2_tongsoduong").onclick = () => {
    var positive = 0;
    for (var i = 0; i < arrInput.length; i++) {
        if (arrInput[i] > 0) {
            positive++
        }
    }
    document.querySelector(".btnp2_tongsoduong").innerHTML = `Tổng Số Dương là : ${positive}`
}

//Bài 3 : tìm số nhỏ nhất 
document.getElementById("btn3").onclick = () => {
    // var lessNumber = arrInput[0];
    // for (var i = 1; i < arrInput.length; i++) {
    //     function check() {
    //         if (lessNumber < arrInput[i]) {
    //             return lessNumber
    //         } else {
    //             lessNumber = arrInput[i]
    //         }
    //         return lessNumber
    //     }
    // }
    // console.log(lessNumber)
    var sortInput = arrInput.sort((a, b) => a - b)
    document.querySelector(".output_3").innerHTML = `Số Nhỏ Nhất là : ${sortInput[0]} `
}

// Bài 4 : Tìm Số Dương Nhỏ Nhất : 

document.getElementById("btn4").onclick = () => {
    var numberPositive = []
    for (var i = 0; i < arrInput.length; i++) {
        if (arrInput[i] > 0) {
            numberPositive.push(arrInput[i])
        }
    }
    var sortNumberPositive = numberPositive.sort((a, b) => a - b)
    document.querySelector(".output_4").innerHTML = `Số Dương Nhỏ Nhất là : ${sortNumberPositive[0]} `
}

//bài 5 : 
document.getElementById("btn5").onclick = () => {
    let evenNumber = [];
    for (i = 0; i < arrInput.length; i++) {
        if (arrInput[i] % 2 == 0) {
            evenNumber.push(arrInput[i])
        }
    }
    let sortEvenNumber = evenNumber.sort((a, b) => a - b)
    document.querySelector(".output_5").innerHTML = `Số Dương cuối cùng là ${sortEvenNumber[sortEvenNumber.length - 1]} `
}

//bài 6 : 
document.getElementById("btn6").onclick = function () {
    var number1 = document.getElementById("input6_1").value * 1
    var number2 = document.getElementById("input6_2").value * 1
    var member = arrInput[number1];
    arrInput[number1] = arrInput[number2];
    arrInput[number2] = member
    document.querySelector(".output_6").innerHTML = `Mảng Mới là ${arrInput}`
}

//bài 7 : 
document.getElementById("btn7").onclick = () => {
    document.querySelector(".output_7").innerHTML = `Chuỗi Tăng Dần : ${arrInput.sort((a, b) => a - b)}`
}

//bài 8 : 
document.getElementById("btn8").onclick = () => {
    function isPrime(number) {
        if (number <= 1) {
            return false;
        }
        if (number <= 3) {
            return true;
        }
        if (number % 2 === 0 || number % 3 === 0) {
            return false;
        }

        for (let i = 5; i * i <= number; i += 6) {
            if (number % i === 0 || number % (i + 2) === 0) {
                return false;
            }
        }

        return true;
    }

    // Tìm số nguyên tố đầu tiên trong mảng
    let soNguyenToDauTien = null;

    for (let i = 0; i < arrInput.length; i++) {
        if (isPrime(arrInput[i])) {
            soNguyenToDauTien = arrInput[i];
            break;
        }
    }

    document.querySelector(".output_8").innerHTML = `Số Nguyên Tố Đầu Tiên : ${soNguyenToDauTien}`
}

//bài 9 : Đếm số nguyên 
document.getElementById("btn9").onclick = () => {
    let n = 0;
    for (var i = 0; i < arrInput.length; i++) {
        if (Number.isInteger(arrInput[i]) == true) {
            n++
        }
    }
    document.querySelector(".output_9").innerHTML = `Có ${n} SỐ Nguyên `
}

//bài 10 : 
document.getElementById("btn10").onclick = () => {
    let d = 0;
    let a = 0;
    content = ''
    for (var i = 0; i < arrInput.length; i++) {
        if (arrInput[i] >= 0) {
            d++
        } else {
            a++
        }
    }
    if (d > a) {
        content = "Số Dương Lớn HƠn Số Âm"
    } if (d < a) {
        content = "Số Dương Lớn HƠn Số Âm"
    } else {
        content = "Số Âm = Dương"
    }

    document.querySelector(".output_10").innerHTML = `
    Có ${d} Số Dương ; Có ${a} Số Âm ;  => ${content}
    `
}