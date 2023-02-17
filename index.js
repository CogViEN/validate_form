function kiemtra() {
    var check = false; // check toan cuc

    // check ho ten
    let ten = document.getElementById("ten").value;
    if (ten.length === 0) {
        document.getElementById("error_ten").innerHTML =
            "Khong duoc" + " de trong ten";
    } else {
        let regex_ten =
            /^[AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬBCDĐEÈẺẼÉẸÊỀỂỄẾỆFGHIÌỈĨÍỊJKLMNOÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢPQRSTUÙỦŨÚỤƯỪỬỮỨỰVWXYỲỶỸÝỴZ][aàảãáạăằẳẵắặâầẩẫấậbcdđeèẻẽéẹêềểễếệfghiìỉĩíịjklmnoòỏõóọôồổỗốộơờởỡớợpqrstuùủũúụưừửữứựvwxyỳỷỹýỵz]+ [AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬBCDĐEÈẺẼÉẸÊỀỂỄẾỆFGHIÌỈĨÍỊJKLMNOÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢPQRSTUÙỦŨÚỤƯỪỬỮỨỰVWXYỲỶỸÝỴZ][aàảãáạăằẳẵắặâầẩẫấậbcdđeèẻẽéẹêềểễếệfghiìỉĩíịjklmnoòỏõóọôồổỗốộơờởỡớợpqrstuùủũúụưừửữứựvwxyỳỷỹýỵz]+(?: [AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬBCDĐEÈẺẼÉẸÊỀỂỄẾỆFGHIÌỈĨÍỊJKLMNOÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢPQRSTUÙỦŨÚỤƯỪỬỮỨỰVWXYỲỶỸÝỴZ][aàảãáạăằẳẵắặâầẩẫấậbcdđeèẻẽéẹêềểễếệfghiìỉĩíịjklmnoòỏõóọôồổỗốộơờởỡớợpqrstuùủũúụưừửữứựvwxyỳỷỹýỵz]*)*/;
        if (!regex_ten.test(ten)) {
            document.getElementById("error_ten").innerHTML =
                "Nhap sai" + " ki tu";
        } else {
            document.getElementById("error_ten").innerHTML = "";
            check = true;
        }
    }

    check = false;
    // check ngay sinh
    let ngaySinh = document.getElementById("ngaySinh").value;
    if (ngaySinh.length == 0) {
        document.getElementById("error_ngaySinh").innerHTML =
            "Khong" + " duoc de trong ngay sinh";
    } else {
        document.getElementById("error_ngaySinh").innerHTML = "";
        check = true;
    }

    // check gioi tinh
    check = false;
    let mang_gioi_tinh = document.getElementsByName("gioiTinh");
    let gt = false;
    for (let i = 0; i < mang_gioi_tinh.length; i++) {
        if (mang_gioi_tinh[i].checked) {
            gt = true;
            break;
        }
    }
    if (gt) {
        document.getElementById("error_gioiTinh").innerHTML = "";
    } else {
        document.getElementById("error_gioiTinh").innerHTML =
            "Chua nhap" + " gioi tinh";
        check = true;
    }

    // check email
    check = false;
    let email = document.getElementById("email").value;
    if (email.length == 0) {
        document.getElementById("error_email").innerHTML =
            "Khong" + " duoc de trong emial";
    } else {
        let regex_email = /^[a-z0-9_]+@[a-z]+\.[a-z]+$/;
        if (!regex_email.test(email)) {
            document.getElementById("error_email").innerHTML =
                "Email" + " khong hop le";
        } else {
            document.getElementById("error_email").innerHTML = "";
        }
    }
    check = false;
    // check password
    let passwor = document.getElementById("matKhau").value;
    if (passwor.length == 0) {
        document.getElementById("error_mk").innerHTML =
            "Khong" + " duoc de trong password";
    } else {
        let regex_pass =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/;
        if (!regex_pass.test(passwor)) {
            document.getElementById("error_mk").innerHTML =
                "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:";
        }
        else{
            check = true;
        }
    }
    return check;
}

function showPW(){
    var x = document.getElementById("matKhau");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}