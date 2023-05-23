'use strict';
// getting the required elements
const navBurger = document.querySelector('.burger');
const closeNavBtn = document.querySelector('.close-nav');
const nav = document.querySelector('nav');
const modal = document.querySelector('.modal-wrapper');
const pledgeContainer = document.querySelectorAll('.modal-article');
const pledgeBtn = document.querySelectorAll('.pledge-btn');
const thanksModal = document.querySelector('.thanks');
const overlay = document.querySelector('.overlay');
const backProjectBtn = document.querySelector('.back-project-btn');
const closeModalBtn = document.querySelector('.close-modal');
const innerCircle = document.querySelector('.circle2');
const pledgeBox25 = document.querySelector('.pledge-div-tf');
const twentyFive = document.querySelector('.twentyfive-pledge');
const seventyFive = document.querySelector('.seventy-five-pledge');
const pledge = document.querySelectorAll('.pledge');
const circle2 = document.querySelector('.circle2');
const pledgeBox75 = document.querySelector('.pledge-div-sf');
const warning25 = document.querySelector('.warning25');
const warning75 = document.querySelector('.warning75');
const form25 = document.querySelector('.form25');
const form75 = document.querySelector('.form75');
const btn25 = document.querySelector('.btn25');
const btn75 = document.querySelector('.btn75');
const logoDiv = document.querySelector('.logo-div');
const gotIt = document.querySelector('.got-it-btn');
// show nav function
const showNav = function(){
    nav.style.height = '250px';
    overlay.classList.remove('hidden');
    navBurger.classList.add('hidden');
    closeNavBtn.classList.remove('hidden');
}

// close nav function
const closeNav = function(){
    nav.style.height = '0px';
    overlay.classList.add('hidden');
    navBurger.classList.remove('hidden');
    closeNavBtn.classList.add('hidden');
}

//show modal function
const showModal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');

}

// close modal function
const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

// pledge function
twentyFive.addEventListener('click', function(){
     pledgeBox25.classList.remove('hidden');
     seventyFive.classList.remove('active');
     twentyFive.classList.add('active');
     pledgeBox75.classList.add('hidden');

});

seventyFive.addEventListener('click', function(){
    pledgeBox75.classList.remove('hidden');
    twentyFive.classList.remove('active');
    seventyFive.classList.add('active');
    pledgeBox25.classList.add('hidden');
});


// form
const pledge25approval = function(e){
    e.preventDefault();
    const form25Input = Number(form25.value);
    if (form25Input < 25){
        warning25.style.display = 'block';
        warning25.innerHTML = `<h6> Pledge is too small, 25$ or more</h6>`;
        warning25.style.color = 'red';   
    }

    else{
        thanksModal.classList.remove('hidden');
        modal.classList.add('hidden');
        overlay.classList.remove('hidden');
        logoDiv.style.zIndex = '-2';
    }

};

const pledge75approval = function(e){
    e.preventDefault();
    const form75Input = Number(form75.value);
    console.log(form75Input);
    if (form75Input < 75){
        warning75.style.display = 'block';
        warning75.innerHTML = `<h6> Pledge is too small, 75$ or more</h6>`;
        warning75.style.color = 'red';   
    }

    else{
        thanksModal.classList.remove('hidden');
        modal.classList.add('hidden');
        overlay.classList.remove('hidden');
        logoDiv.style.zIndex = '-2';
    }
}

// Thank you function
const homePage = function(){
    thanksModal.classList.add('hidden');
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
    logoDiv.style.zIndex = '2';
}

// event listeners
navBurger.addEventListener('click', showNav);
closeNavBtn.addEventListener('click', closeNav);
backProjectBtn.addEventListener('click', showModal);
closeModalBtn.addEventListener('click', closeModal);
btn25.addEventListener('click', pledge25approval);
btn75.addEventListener('click', pledge75approval)
gotIt.addEventListener('click', homePage);