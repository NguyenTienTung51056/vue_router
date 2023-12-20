// src/components/index.js
import Header from './header/Header.vue';
import Sidebar from './sidebar/Sidebar.vue';

//Global Registration

export default {
  register(app) {
    app.component("Header", Header);
    app.component("Sidebar", Sidebar);
    // Đăng ký thêm các components khác nếu cần
  }
};
