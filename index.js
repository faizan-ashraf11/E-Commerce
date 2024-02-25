console.log('abc Loading ');
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  });
  
  var product = 1;
  function productChange(id){

  }

  const prod1 = document.getElementById("product1");

  prod1.addEventListener("click" , function(){
    product = 1;
    conditionProductCall();
    console.log('Products: ' , product);
  })
  const prod2 = document.getElementById("product2");

  prod2.addEventListener("click" , function(){
    product = 2;
    conditionProductCall();
    console.log('Products: ' , product);
  })
  const prod3 = document.getElementById("product3");

  prod3.addEventListener("click" , function(){
    product = 3;
    conditionProductCall();
    console.log('Products: ' , product);
  })
 
  const prodCondition = document.getElementById("pd1");
  conditionProductCall();

  function conditionProductCall(){

    if(product == 1){
      prodCondition.innerHTML = `<div style="width: 40%;">
      <img src="product1.png" alt="" style="width: 350px; height: 350px; ">
  </div>
  <div style="width: 60%; display: flex; flex-direction: column; color: white;">
      <h1 style="margin-bottom: 0px !important;">Roller Gen 5</h1>
      <p style="color: #888 !important; margin-top: 5px;">Gaming Wired Headphone</p>
      <p style="width: 70%; line-height: 25px;">Roller Gen 5 is our best gaming headset comes up with good NFC and sound quality that amuses both music listeners and gamers!</p>
      <button class="cssbuttons-io-button" style="margin-left: 0px; margin-right: auto; margin-top: 10px;">
          Buy Now
          <div class="icon">
            <svg
              height="24"
              width="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </button>
  </div>`;
    }else if(product == 2){
      prodCondition.innerHTML = `<div style="width: 40%;">
      <img src="folder.png" alt="" style="width: 350px; height: 350px; ">
  </div>
  <div style="width: 60%; display: flex; flex-direction: column; color: white;">
      <h1 style="margin-bottom: 0px !important;">Folder X1</h1>
      <p style="color: #888 !important; margin-top: 5px;">Wireless foldable Headset</p>
      <p style="width: 70%; line-height: 25px;">Folder X1 is a wireless headset benificial for use in travelling , sports and gaming with fast connecting transmission speed!</p>
      <button class="cssbuttons-io-button" style="margin-left: 0px; margin-right: auto; margin-top: 10px;">
          Buy Now
          <div class="icon">
            <svg
              height="24"
              width="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </button>
  </div>`;
    }else if(product == 3){
      prodCondition.innerHTML = `<div style="width: 40%;">
      <img src="glow.png" alt="" style="width: 350px; height: 350px; ">
  </div>
  <div style="width: 60%; display: flex; flex-direction: column; color: white;">
      <h1 style="margin-bottom: 0px !important;">Glow P6</h1>
      <p style="color: #888 !important; margin-top: 5px;">Wireless Headset</p>
      <p style="width: 70%; line-height: 25px;">Glow P6 is a wireless headset it has unique color and our special edition headset availaible in limited quantity!</p>
      <button class="cssbuttons-io-button" style="margin-left: 0px; margin-right: auto; margin-top: 10px;">
          Buy Now
          <div class="icon">
            <svg
              height="24"
              width="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </button>
  </div>`;
    }
  }