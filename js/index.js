var BookMarkName = document.getElementById('BookMarkName');
var WebSiteUrl = document.getElementById('WebSiteUrl');
var tBody= document.getElementById('tBody');

var beginsite =   localStorage.getItem('sites');
var convertStrToArr = JSON.parse(beginsite);

if (convertStrToArr !== null){

 var sites = convertStrToArr ;
 
 DiplaySitesTable1();

} else {

  var sites = [];


}

 function SubmitSite(){

    var site = {
        BookMarkName : BookMarkName.value,
        WebSiteUrl : WebSiteUrl.value,
    }


    if(site.BookMarkName.length < 4){
        alert('Please Enter Bookmark name more than 4 char !!');
    }

    else if(site.WebSiteUrl.includes('.com')){

        sites.push(site);

        var convertArrToStr = JSON.stringify(sites);
        localStorage.setItem('sites' , convertArrToStr);
    
        DiplaySitesTable();
    
        Clearform();

    }

    else{
        alert('Please Enter Valid Url !!');
    }

 }


function Clearform(){

    BookMarkName.value ="";
    WebSiteUrl.value = "";

}


 function DiplaySitesTable(){

    var trs="";
    for(var i = 0 ; i < sites.length ; i++){
    trs =`<tr>
    <td>${i+1}</td>
    <td>${sites[i].BookMarkName}</td>
    <td><a href="https://${sites[i].WebSiteUrl}" target="_blank" class="text-decoration-none"><button class="bt1 rounded-2 text-light pe-3 ps-3"><i class="fa-solid fa-eye text-light pe-2"></i>Visit</button></a></td>
    <td><button onclick="Deletetr(${i});" class="text-light bt2 rounded-2  pe-3 ps-3 border-0 "><i class="fa-solid fa-trash-can"></i> Delete</button></td>
    </tr>` 
    }
    tBody.innerHTML += trs;

 }

 function DiplaySitesTable1(){

    var trs="";
    for(var i = 0 ; i < sites.length ; i++){
    trs +=`<tr>
    <td>${i+1}</td>
    <td>${sites[i].BookMarkName}</td>
    <td><a href="${sites[i].WebSiteUrl}" target="_blank" class="text-decoration-none"><button class="bt1 rounded-2 text-light pe-3 ps-3"><i class="fa-solid fa-eye text-light pe-2"></i>Visit</button></a></td>
    <td><button onclick="Deletetr(${i});" class="text-light bt2 rounded-2  pe-3 ps-3 border-0 "><i class="fa-solid fa-trash-can"></i> Delete</button></td>
    </tr>` 
    }
    tBody.innerHTML = trs;
 }

function Deletetr(ind){

    sites.splice(ind , 1);
    
    var convertArrToStr1 = JSON.stringify(sites);
    localStorage.setItem('sites' , convertArrToStr1);

    DiplaySitesTable1();
}

