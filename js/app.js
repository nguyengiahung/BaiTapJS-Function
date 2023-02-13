
// Bai 1
/* 
    B1: Tạo UI giao diện (dùng BS)
    B2: Tạo biến DiemChuan, KhuVuc, DoiTuong, DiemMon1, DiemMon2, DiemMon3, TongDiem
    B3: Có 2 trường hợp
    - TH1: KHi điểm của từng môn > 0, nếu TongDiem > DiemChuan thì in ra kết quả thí sinh đậu, ngược lại thì in ra kết quả thí sinh rớt
    - TH2: Khi có 1 trong 3 môn có điểm = 0, thì in ra kết quả thí sinh rớt
    B4: Thông báo kết quả ra giao diện bằng sự kiện click button
*/

function TinhTuyenSinh() {
    var DiemChuan = Number(document.getElementById('DiemChuanForm1').value);
    var KhuVuc = Number(document.getElementById('KhuVuc').value);
    var DoiTuong = Number(document.getElementById('DoiTuong').value);
    var DiemMon1 = Number(document.getElementById('DiemMon1Form1').value);
    var DiemMon2 = Number(document.getElementById('DiemMon2Form1').value);
    var DiemMon3 = Number(document.getElementById('DiemMon3Form1').value);
    var TongDiem = KhuVuc + DoiTuong + DiemMon1 + DiemMon2 + DiemMon3;

    if (DiemMon1 > 0 && DiemMon2 > 0 && DiemMon3 > 0) {
        if (TongDiem > DiemChuan) {
            document.getElementById('textKetQuaForm1').innerHTML = "Bạn đã đậu. " + "Tổng điểm: " + TongDiem;
        } else {
            document.getElementById('textKetQuaForm1').innerHTML = "Bạn đã rớt. " + "Tổng điểm: " + TongDiem;
        }
    } else {
        document.getElementById('textKetQuaForm1').innerHTML = "Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0";
    }
}

document.getElementById('BtnForm1').onclick = TinhTuyenSinh;

// Bai 2
/* 
    B1: Tạo UI giao diện (dùng BS)
    B2: Tạo biến HoTen, SoKw, KetQua
    B3: Bao gồm các trường hợp
    - TH1: SoKw <= 50 thì KetQua = SoKw*500
    - TH2: 50 < SoKw <= 100 thì KetQua = 50*500 + (SoKw-50)*650
    - TH3: 100 < SoKw <= 200 thì KetQua = 50*500 + 50*650 + (SoKw-100)*850
    - TH4: 200 < SoKw <= 350 thì KetQua = 50*500 + 50*650 + 100*850 + (SoKw-200)*1100
    - TH5: SoKw > 350 thì KetQua = 50*500 + 50*650 + 100*850 + 150*1100 + (SoKw-350)*1300
    B4: Thông báo kết quả ra giao diện bằng sự kiện click button
*/

function TinhTienDien() {
    var HoTenForm2 = document.getElementById('HotenForm2').value;
    var SoKw = Number(document.getElementById('SoKwForm2').value)
    var KetQuaForm2;

    if (SoKw <= 50) {
        KetQuaForm2 = SoKw*500;
    } else if (SoKw > 50 && SoKw <= 100) {
        KetQuaForm2 = 50*500 + (SoKw-50)*650;
    } else if (SoKw > 100 && SoKw <= 200) {
        KetQuaForm2 = 50*500 + 50*650 + (SoKw-100)*850;
    } else if (SoKw > 200 && SoKw <= 350) {
        KetQuaForm2 = 50*500 + 50*650 + 100*850 + (SoKw-200)*1100;
    } else {
        KetQuaForm2 = 50*500 + 50*650 + 100*850 + 150*1100 + (SoKw-350)*1300;
    }

    document.getElementById('textKetQuaForm2').innerHTML = "Họ tên: " + HoTenForm2 + "; " + "Tiền điện: " + KetQuaForm2.toLocaleString();     

}

document.getElementById('BtnForm2').onclick = TinhTienDien;


// Bai 3
/* 
    B1: Tạo UI giao diện (dùng BS)
    B2: Tạo biến Hoten, TongThuNhap, PhuThuoc, ThuNhapChiuThue(TNCT), TienThue
    B3: Có các trường hợp
    - TH1: TNCT <= 60 thì TienThue = TNCT*0.05;
    - TH2: 60 < TNCT <= 120 thì TienThue = TNCT*0.1;
    - TH3: 120 < TNCT <= 210 thì TienThue = TNCT*0.15;
    - TH4: 210 < TNCT <= 384 thì TienThue = TNCT*0.2;
    - TH5: 384 < TNCT <= 624 thì TienThue = TNCT*0.25;
    - TH6: 624 < TNCT <= 960 thì TienThue = TNCT*0.3;
    - TH7: TNCT >= 960 thì TienThue = TNCT*0.35;
    B4: Thông báo kết quả ra giao diện bằng sự kiện click button

*/

function TinhTienThue() {
    var HoTenForm3 = document.getElementById('HotenForm3').value;
    var TongThuNhap = (document.getElementById('TongThuNhapForm3').value).toLocaleString();
    var PhuThuoc = Number(document.getElementById('PhuThuocForm3').value);
    var ThuNhapChiuThue = TongThuNhap - 4e+6 - PhuThuoc*1.6e+6;
    var TienThue;


    if (ThuNhapChiuThue <= 60e+6) {
        TienThue = ThuNhapChiuThue * 0.05;
    } 
    else if (ThuNhapChiuThue > 60e+6 && ThuNhapChiuThue <= 120e+6) {
        TienThue = ThuNhapChiuThue * 0.1;
    } 
    else if (ThuNhapChiuThue > 120e+6 && ThuNhapChiuThue <= 210e+6) {
        TienThue = ThuNhapChiuThue * 0.15;
    } 
    else if (ThuNhapChiuThue > 210e+6 && ThuNhapChiuThue <= 384e+6) {
        TienThue = ThuNhapChiuThue * 0.2;
    } 
    else if (ThuNhapChiuThue > 384e+6 && ThuNhapChiuThue <= 624e+6) {
        TienThue = ThuNhapChiuThue * 0.25;
    } 
    else if (ThuNhapChiuThue > 624e+6 && ThuNhapChiuThue <= 960e+6) {
        TienThue = ThuNhapChiuThue * 0.3;
    } 
    else {
        TienThue = ThuNhapChiuThue * 0.35;
    }

    document.getElementById('textKetQuaForm3').innerHTML = "Họ tên: " + HoTenForm3 + "; " + "Tiền thuế thu nhập cá nhân: " + TienThue.toLocaleString();
 }

document.getElementById('BtnForm3').onclick = TinhTienThue;


// Bai 4
/* 
    B1: Tạo UI giao diện (dùng BS)
    B2: Tạo biến LoaiKhachHang, MaKhachHang, SoKenh, SoKetNoi, PhiXuLy, PhiKenh, PhiDichVu, KetQuaForm4
    B3: Có 2 trường hợp
    - Th1: KHi KH là nhà dân thì thiết lập các số tiền tương ứng với đề bài và viết ra công thức Ketqua
    - Th2: Khi KH là doanh nghiệp thì thiết lập các số tiền tương ứng với đề bài, nếu số kết nối > 10 thì PhiDichVu = 10*75 + (SoKetNoi-10)*5, ngược lại thì PhiDichVu = SoKetNoi*75 và viết ra công thức Ketqua
    Ngoài ra tạo hàm appearBlock để ẩn hiện input SoKetNoi, thêm style display none với option Nhà Dân và display block với option Doanh Nghiệp
    B4: Thông báo kết quả ra giao diện bằng sự kiện click button
*/

function TinhTienCap() {
    var LoaiKhachHang = Number(document.getElementById('LoaiKhachHang').value);
    var MaKhachHang = document.getElementById('MaKhachHang').value;
    var SoKenh = Number(document.getElementById('SoKenh').value);
    var SoKetNoi = Number(document.getElementById('SoKetNoi').value);
    var PhiXuLy;
    var PhiKenh;
    var PhiDichVu;
    var KetQuaForm4;

    if (LoaiKhachHang === 4.5) {
        PhiXuLy = 4.5;
        PhiKenh = 7.5;
        PhiDichVu = 20.5;
        KetQuaForm4 = PhiXuLy + PhiKenh*SoKenh + PhiDichVu;
    } else {
        PhiXuLy = 15;
        PhiKenh = 50;
        if (SoKetNoi > 10) {
            PhiDichVu = 10*75 + (SoKetNoi-10)*5
        } else {
            PhiDichVu = SoKetNoi*75;
        }
        KetQuaForm4 = PhiXuLy + PhiKenh*SoKenh + PhiDichVu;
    }

    document.getElementById('textKetQuaForm4').innerHTML = "Mã khách hàng: " + MaKhachHang + "; " + "Tiền cáp: " + "$" + KetQuaForm4.toLocaleString();
}

function appearBlock() {
    var LoaiKhachHang = Number(document.getElementById('LoaiKhachHang').value);
    console.log(LoaiKhachHang);
    if (LoaiKhachHang === 15) {
        document.getElementById('blockKetNoi').style.display = "block";
    } else {
        document.getElementById('blockKetNoi').style.display = "none";
    }
}

document.getElementById('BtnForm4').onclick = TinhTienCap;