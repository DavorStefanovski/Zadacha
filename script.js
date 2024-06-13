document.addEventListener('DOMContentLoaded', () => {
    const rating = JSON.parse(sessionStorage.getItem('rating')) || [];
    showrating(rating);

});

function over(id){
    const rating = JSON.parse(sessionStorage.getItem('rating')) || [];
    
    const stars = document.getElementById("rating").children;
    for(var i=0;i<=id;i++){
        stars[i].innerHTML = '<path d="M18.8462 32.0283L26.9684 29.5849L30.362 42L18.8462 32.0283ZM37.5385 15.9811H23.2411L18.8462 0L14.4513 15.9811H0.15387L11.7253 25.8868L7.33038 41.8679L18.9018 31.9623L26.0227 25.8868L37.5385 15.9811Z" fill="#FFB400"/>';
    }
    for(var i=id+1;i<5;i++){
        stars[i].innerHTML = '<path d="M18.6923 32.0283L26.8146 29.5849L30.2081 42L18.6923 32.0283ZM37.3846 15.9811H23.0872L18.6923 0L14.2974 15.9811H0L11.5714 25.8868L7.17651 41.8679L18.7479 31.9623L25.8688 25.8868L37.3846 15.9811Z" fill="#808080"/>'
    }
    
}
function out(){
    const rating = JSON.parse(sessionStorage.getItem('rating')) || [];
    showrating(rating);
    
}
function rate(id){
    alert("Thank you for feedback!")
    rating=id+1;
    sessionStorage.setItem('rating', JSON.stringify(rating));
    showrating(rating);
}
function showrating(number){
    const stars = document.getElementById("rating").children;
    for(var i=0;i<number;i++){
        stars[i].innerHTML = '<path d="M18.8462 32.0283L26.9684 29.5849L30.362 42L18.8462 32.0283ZM37.5385 15.9811H23.2411L18.8462 0L14.4513 15.9811H0.15387L11.7253 25.8868L7.33038 41.8679L18.9018 31.9623L26.0227 25.8868L37.5385 15.9811Z" fill="#FFB400"/>';
    }
    for(var i=number;i<6;i++){
        stars[i].innerHTML = '<path d="M18.6923 32.0283L26.8146 29.5849L30.2081 42L18.6923 32.0283ZM37.3846 15.9811H23.0872L18.6923 0L14.2974 15.9811H0L11.5714 25.8868L7.17651 41.8679L18.7479 31.9623L25.8688 25.8868L37.3846 15.9811Z" fill="#808080"/>'
    }
}