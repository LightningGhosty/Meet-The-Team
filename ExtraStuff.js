console.log('We still need to accomodate for different screen sizes, because right now it only looks ideal on 27" 1440p and stuff like text doesnt re-size. That is an issue; fix later.');


console.log('I can still do math!');
console.log(4+4);





window.onscroll = function() {scrollFunction()}; /*I don't know exactly what this does but it is saying to execute the function when the window scrolls*/

function scrollFunction(){
    
    if (document.body.scrollTop > 2 || document.documentElement.scrollTop > 2) 
        {
            
            document.getElementById("navbar").style.top="0";
        }

    else
        {
            document.getElementById("navbar").style.top="-50px";
        }
}