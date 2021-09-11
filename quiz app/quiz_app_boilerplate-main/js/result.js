function reset()
{
location.href="./index.html";
}

var points=sessionStorage.getItem("points");
var head=document.getElementById("result-header");
var body=document.getElementById("result-body");
if(points>=5)
{

head.innerText="That's nice! You've got "+points+"out of 6";
body.innerText="You worked hard and it paid off! Nice Work figuring out these tough question, you earned it buddy!";
}
else
{

head.innerText="Opps! You've got "+points+"out of 6";
body.innerText="Marvels has created more avengers than even the geekiest of the geek could remember, but that doesn't mean you shouldn't try";
}