# Elevator Simulator Web App

## 🚀 Giới thiệu
Đây là một ứng dụng mô phỏng hệ thống thang máy với 3 thang hoạt động song song trong một tòa nhà 10 tầng. Ứng dụng được xây dựng bằng **React.js (Vite) cho frontend** và **Node.js với Socket.io cho backend**.

## 🛠 Công nghệ sử dụng
- **Frontend:** React.js (Vite), CSS
- **Backend:** Node.js, Express, Socket.io

## 📂 Cấu trúc thư mục
```
/elevator-simulator
│── /backend             # Backend server
│   ├── index.js         # Main backend server
│   ├── elevator.js      # Elevator logic
│   ├── package.json     # Backend dependencies
│── /frontend            # Frontend client
│   ├── /src
│   │   ├── components   # React components (Elevator, Floor...)
│   │   ├── styles       # CSS styles
│   │   ├── App.jsx      # Main React App
│   │   ├── main.jsx     # Entry point
│   ├── package.json     # Frontend dependencies
│── README.md            # Hướng dẫn cài đặt và chạy chương trình
```

## 📦 Cài đặt
### 1️⃣ Clone dự án
```sh
git clone https://github.com/your-repo/elevator-simulator.git
cd elevator-simulator
```
### 2️⃣ Cài đặt Backend
```sh
cd backend
npm install
```
### 3️⃣ Cài đặt Frontend
```sh
cd ../frontend
npm install
```

## ▶️ Chạy ứng dụng
### 1️⃣ Khởi động Backend
```sh
cd backend
node index.js
```
Mặc định backend sẽ chạy tại **http://localhost:3000**.

### 2️⃣ Khởi động Frontend
```sh
cd ../frontend
npm run dev
```
Mở trình duyệt và truy cập **http://localhost:5173** để sử dụng ứng dụng.

## 🎮 Cách sử dụng
1. Nhấn nút **▲ hoặc ▼** tại mỗi tầng để gọi thang máy.
2. Khi thang máy đến, chọn tầng muốn đi.
3. Quan sát thang máy di chuyển theo hướng đã chọn.
4. Nhấn nút "Open" để giữ cửa mở, "Close" để đóng cửa ngay lập tức.

## 🛠 Lưu ý
- Thang máy chỉ nhận yêu cầu cùng chiều.
- Nếu tất cả thang máy đang bận, yêu cầu sẽ được xếp hàng.

---
💡 **Mọi góp ý hoặc lỗi, vui lòng mở issue trên GitHub hoặc liên hệ nhóm phát triển.** 🚀

