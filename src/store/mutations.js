export default {
    changeCity(state, city) {
        state.city = city;
        try {
            localStorage.setItem("city", JSON.stringify(city));
        } catch(e) {}
        
    }
}