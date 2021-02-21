var VueInstance = new Vue({
    el : '#app' , 
    data:{
        title :"Xin chào mọi người", 
        url:"https://vuejs.org/v2/guide/events.html" , 
        target:"_blank", 
        price : 29983, 
        dem : 0 
    },
    methods:{
        say: function(text){
            return "Hello " + text ; 
        } ,
        price_format: function(){
            var number = this.price;

            return (new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(number));
        },
        alert_1(){
            alert("Chào mừng bạn đến với khóa học") ; 
        },
        
       
    },
})
var Vue = new Vue({
    el:'#event1'    , 
    data:{
        dem: 0 , 
        ClientX : 0 , 
        ClientY : 0 , 
    },
    methods:{
        counter(){
            this.dem += 1 ; 
        },
        getClientXY(e){
            this.ClientX = e.clientX ; 
            this.ClientY = e.clientY ; 
            console.log('click', e) ; 
        },
        Submit_form(e){
            console.log(e) ; 
        },
        mousemose_child(e){
          console.log(e.target) ; 
        }
    }
})
console.log(VueInstance) ; 
setTimeout(() => {
    VueInstance.title = "Xin chào các bạn " ; 
}, 3000);
