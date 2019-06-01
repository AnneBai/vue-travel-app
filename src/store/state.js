
let defaultCity = {
    name: "北京",
    id: 2,
};
// localStorage在某些浏览器设置（禁用本地存储，隐身模式等）的情况下不可用，此时访问其属性会造成浏览器报错，页面不可用。
// 使用localStorage最好使用try-catch块
try {
    if (localStorage.getItem("city")) {
        defaultCity = JSON.parse(localStorage.getItem("city"));
    }
} catch(e) {}

export default {
    city: defaultCity, 
}