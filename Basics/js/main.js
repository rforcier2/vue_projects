var app = new Vue({
    el: '#app',
    data: {
        randNum: Math.floor(Math.random()*50) + 1,
        shown: false
    }
});