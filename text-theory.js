// <--ĐỀ THI THỰC HÀNH

//                                      KẾT THÚC MODULE BOOTCAMP PREPARATION
//  Câu 1.Xây dựng hàm gải phương trình bậc hai,niết tham số là các hệ số nguyên a,b và c.Hàm trả về nghiệm của phương trình theo tham số đã cho.
//  Viêt chương trình sử dụng hàm xây dựng để gải phương trình bậc hai với hệ số :-->
function equation2(a, b, c) {
    let delta = b * b - 4 * a * c
    if (a != 0) {
        if (delta == 0) {
            return console.log("Phuong trinh vo nghiem");
        } else if (delta > 0) {
            x1 = (-b + Math.sqrt(delta)) / 2 * a
            x2 = (-b - Math.sqrt(delta)) / 2 * a
            return console.log(`Phuong trinh co 2 nghiem la ${x1} va ${x2}`);
        } else {
            x = -b / (2 * a)
            return console.log(`Phuong trinh co nghiem kep la ${x}`);
        }
    } else {
        return console.log('Phuong trinh vo nghiem');
    }
}

equation2(8, 12, -20)

//Câu 2.Xây dựng hàm trả về vị trí của phần tử cần tìm trong một mảng cho trước(Gỉa sử tất cả các phần tử trong mảng không giống nhau).
//Hàm có hai tham số:số phần tử cần tìm,mảng cho trước.
//Viết chương trình với một mảng số nguyên được khởi tạo trước.Nhập vào một giá trị bất kỳ,sau đó kiểm tra xem
 //giá trị số nguyên bất kỳ vừa nhập có nằm trong mảng đã nhập hay không.

// //Cau 2
let arr = [1, 2, 3, 4, 5, 6]
function returnElement(number, arr) {
    let result = arr.indexOf(number)
    return console.log(`Vi tri cua ${number} la ${result}`);
}
function checkExist(number, arr) {
    let check = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == number) {
            check += 1;
        }
    }
    if (check == 1) {
        return console.log(`So nguyen vua nhap nam trong mang`);
    } else {
        return console.log(`So nguyen vua nhap khong nam trong mang`);
    }
}
checkExist(2,arr)

//Câu 3 :Viết hàm đếm số ký tự nguyên âm trong một chuỗi cho trước.Hàm có một tham số truyền vào mà một mảng ký tự.Hàm trả về false nếu không có ký tự nguyên âm nào.
//Viết chương trình nhập vào một chuỗi bất kỳ.Gọi hàm tìm số ký tự nguyên âm vừa xây dựng ở trên.
//Nguyên âm  là các ký tự :a,o,e,u,i

let str = "day la mot chuoi ky tu"
let arr = ["a","o","e","u","i"]
let count = 0
function countVowelCharacters(string,arr){
    for (let i = 0; i < str.length; i++){
        for (let j = 0; j < arr.length; j++){
            if(string[i] == arr[j]){
                count += 1;
            }
        }
    }
    if ( count != 0){
        return console.log(`So ky tu nguyen am la ${count}`);
    } else {
        return console.log(`false`);
    }
}

countVowelCharacters(str,arr)

// Cau 4
//1 Xây dựng lớp Staff với các thuộc tính và phương thức:
class Staff {
    constructor(fullname, email) {
        this.email = email;
        this.fullname = fullname;
    }
    setFullname = function (fullname) {
        this.fullname = fullname;
    }
    getFullname = function () {
        return this.fullname;
    }
    setEmail = function (email) {
        this.email = email;
    }
    getEmail = function () {
        return this.email;
    }
    toString = function () {
        return console.log(`Ten day du: ${this.getFullname()}, Email: ${this.getEmail()}`);
    }
}
 //2 Sử dụng lớp Staff vừa định nghĩa để xây dựng một chương trình JavaScipt :

let a = new Staff("david", "david@gmail.com");
a.setFullname("David Do");
a.setEmail("david.do@gmail.com");
a.toString();
let Staffs = [
    new Staff("Hung", "hung@gmail.com"),
    new Staff("david", "david@gmail.com"),
    new Staff("Le", "Le@gmail.com")
]
for (i = 0; i < Staffs.length; i++){
    Staffs[i].toString()
}





















