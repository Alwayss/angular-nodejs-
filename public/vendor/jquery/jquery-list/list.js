/**
 * Created by admin on 2015/9/29.
 */
document.getElementById("a").onmousemove=function(){
    document.getElementById("a").style.color="red";
    document.getElementById("img_2").src="../images/sj_x.png";
    document.getElementById("u").style.display="block";
};
document.getElementById("a").onmouseout=function(){
    document.getElementById("a").style.color="white";
    document.getElementById("img_2").src="../images/sj.png";

};
document.getElementById("u").onmouseout=function(){
    document.getElementById("u").style.display="none";
    document.getElementById("img_2").src="../images/sj.png";
    document.getElementById("a").style.color="white";
};
document.getElementById("u").onmouseover=function(){
    document.getElementById("u").style.display="block";
    document.getElementById("img_2").src="../images/sj_x.png";
    document.getElementById("a").style.color="red";
};