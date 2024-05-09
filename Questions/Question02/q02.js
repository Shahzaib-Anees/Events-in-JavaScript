let userArray = ["John 10" , "Doe 9" , "Mark 10" , "James 8" , "Bilal 6" , "Mubashir 19" , "Fakhir 15"];
let row1 = document.getElementById("row-dt1");
let row2 = document.getElementById("row-dt2");
let row3 = document.getElementById("row-dt3");
let row4 = document.getElementById("row-dt4");
let row5 = document.getElementById("row-dt5");
let row6 = document.getElementById("row-dt6");
let row7 = document.getElementById("row-dt7");
let rowData1 =document.getElementById("table_row1");
let rowData2 =document.getElementById("table_row2");
let rowData3 =document.getElementById("table_row3");
let rowData4 =document.getElementById("table_row4");
let rowData5 =document.getElementById("table_row5");
let rowData6 =document.getElementById("table_row6");
let rowData7 =document.getElementById("table_row7");

row1.innerHTML = userArray[0];
row2.innerHTML = userArray[1];
row3.innerHTML = userArray[2];
row4.innerHTML = userArray[3];
row5.innerHTML = userArray[4];
row6.innerHTML = userArray[5];
row7.innerHTML = userArray[6];



function delete_item(element , str){
    if(str === "Item1"){
        userArray.splice(0,1);
        alert("Row 1 has been deleted");
        rowData1.style.display = "none";
        console.log("Item 1 Deleted");
    }else if(str === "Item2"){
        userArray.splice(1,1);
        alert("Row 2 has been deleted");
        rowData2.style.display = "none";
        console.log("Item 2 Deleted");
    }else if(str === "Item3"){
        userArray.splice(2,1);
        alert("Row 3 has been deleted");
        rowData3.style.display = "none";
        console.log("Item 3 Deleted");
    }else if(str === "Item4"){
        userArray.splice(3,1);
        alert("Row 4 has been deleted");
        rowData4.style.display = "none";
        console.log("Item 4 Deleted");
    }else if(str === "Item5"){
        userArray.splice(4,1);
        alert("Row 5 has been deleted");
        rowData5.style.display = "none";
        console.log("Item 5 Deleted");
    }else if(str === "Item6"){
        userArray.splice(5,1);
        alert("Row 6 has been deleted");
        rowData6.style.display = "none";
        console.log("Item 5 Deleted");
    }else if(str === "Item7"){
        userArray.splice(6,1);
        alert("Row 7 has been deleted");
        rowData7.style.display = "none";
        console.log("Item 7 Deleted");
    }else{
        console.log("Your Function has Collapsed")
    }
}