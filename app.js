const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));

// Static files (dùng public nằm trong src)
app.use(express.static(path.join(__dirname, 'src/public')));

// Set biến mặc định cho layout
app.use((req, res, next) => {
  res.locals.authPage = false;
  next();
});

app.use(expressLayouts);

// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));
app.set('layout', 'layouts/layout');

// Routes
app.get('/', (req, res) => {
  res.redirect('/result');
});

app.get('/result', (req, res) => {
  res.render('pages/result', { title: 'Kết quả xổ số' });
});

app.get('/contact', (req, res) => {
  res.render('pages/contact', { title: 'Danh bạ khách hàng' });
});

app.get('/message', (req, res) => {
  res.render('pages/message', { title: 'Tin nhắn' });
});

app.get('/money', (req, res) => {
  res.render('pages/money', { title: 'Doanh thu' });
});

app.get('/revenue', (req, res) => {
  res.render('pages/revenue', { title: 'Phân loại doanh thu' });
});

app.get('/setting', (req, res) => {
  res.render('pages/setting', { title: 'Cấu hình kiểu đánh' });
});

app.get('/guide', (req, res) => {
  res.render('pages/guide', { title: 'Hướng dẫn sử dụng' });
});

app.get('/download-app', (req, res) => {
  res.render('pages/download-app', { title: 'Tải ứng dụng' });
});

// Auth pages
app.get('/login', (req, res) => {
  res.render('auth/login', { title: 'Đăng nhập', authPage: true });
});

app.get('/register', (req, res) => {
  res.render('auth/register', { title: 'Đăng ký', authPage: true });
});

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
