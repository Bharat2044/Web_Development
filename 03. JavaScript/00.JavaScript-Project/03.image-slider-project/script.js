const image = document.querySelector('#image');
const preBtn = document.querySelector('#previousBtn');
const nextBtn = document.querySelector('#nextBtn');

const imageSource = ["https://images.pexels.com/photos/15859215/pexels-photo-15859215.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
"https://images.pexels.com/photos/3944006/pexels-photo-3944006.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
"https://images.pexels.com/photos/9470551/pexels-photo-9470551.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
"https://images.pexels.com/photos/1144241/pexels-photo-1144241.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
"https://images.pexels.com/photos/2485336/pexels-photo-2485336.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
"https://images.pexels.com/photos/4630000/pexels-photo-4630000.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
"https://images.pexels.com/photos/6396082/pexels-photo-6396082.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
"https://images.pexels.com/photos/5851046/pexels-photo-5851046.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
"https://images.pexels.com/photos/988941/pexels-photo-988941.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
"https://images.pexels.com/photos/3030282/pexels-photo-3030282.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
"https://images.pexels.com/photos/10936282/pexels-photo-10936282.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
"https://images.pexels.com/photos/3646851/pexels-photo-3646851.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
"https://images.pexels.com/photos/9665646/pexels-photo-9665646.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
"https://images.pexels.com/photos/2271643/pexels-photo-2271643.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
"https://images.pexels.com/photos/9665646/pexels-photo-9665646.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
"https://images.pexels.com/photos/4942380/pexels-photo-4942380.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
"https://images.pexels.com/photos/15778613/pexels-photo-15778613.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
"https://images.pexels.com/photos/10390686/pexels-photo-10390686.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
"https://images.pexels.com/photos/14366597/pexels-photo-14366597.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
"https://images.pexels.com/photos/14178168/pexels-photo-14178168.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
"https://images.pexels.com/photos/14678545/pexels-photo-14678545.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
"https://images.pexels.com/photos/14527225/pexels-photo-14527225.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
"https://images.pexels.com/photos/14608918/pexels-photo-14608918.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
"https://images.pexels.com/photos/13997659/pexels-photo-13997659.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
"https://images.pexels.com/photos/13781341/pexels-photo-13781341.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"];

let index = 0;

preBtn.addEventListener("click", () => {
    if(index === 0)
        index = imageSource.length;
    index--;
    image.src = imageSource[index];
});

nextBtn.addEventListener("click", () => {
    if(index === imageSource.length-1)
        index = -1;
    index++;
    image.src = imageSource[index];
})