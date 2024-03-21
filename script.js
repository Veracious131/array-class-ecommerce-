// var partyPackage = ['rice', 'meat', 'juice']
// for (i=0; i <= 3; i++) {
//     // rice
//     // meat
//     // juice
// }
// partyPackage.shift()
// partyPackage.push('jotter')
// partyPackage.pop()
// partyPackage.unshift('hand fan')
// partyPackage.push('pen')
// partyPackage.splice(0,1, 'Jotter')
// console.log(partyPackage);

var cart = []

if (cart.length == 0) {
    bigDiv.style.display = 'block'
    bigDiv.innerHTML = `
                <p class="alert alert-danger text-center p-2">No items added yet</p>
            `
}
function submitItem() {
    if (items.value === '') {
        errorMsg.style.display = 'block'
    } else {
        bigDiv.style.display = 'none'
        errorMsg.style.display = 'none'
        bigShow.style.display = 'block'
        cart.push(items.value)
        console.log(cart);
        document.getElementById('items').value = ''
        displayItem()
    }
}

function delLast() {
    cart.pop()
    console.log(cart);
    displayItem()
}

function delFirst(){
    cart.shift()
    displayItem()
}

function delAll() {
    var confirmation = confirm('Are you sure you want to delete. This action is irreversible')
    console.log(confirmation);
    if (confirmation === true) {
        cart.splice(0, cart.length)
        displayItem()
    }
}

function delAny() {
    var start = prompt("Which number are you deleting?");
    if (start === null || start === '') {
        if (start === null) {
            alert('hi');
        } else {
            alert('hey');
        }
    } else {
        var startNumber = Number(start);
        if (!isNaN(startNumber)) {
            // Assuming cart is defined elsewhere in your code
            cart.splice(startNumber - 1, 1);
            displayItem();
        } else {
            alert("Please enter a valid number.");
        }
    }
}

// function delAny() {
//     var start = Number(prompt("Which number are you deleting?"))
//     if (isNaN(start) || start === null || start ===''){
//        if (start === null){ 
//         alert('hi')
//     }else{ 
//         alert('hey')
//         }
//     }else if (start=== true){
//     cart.splice(start - 1, 1,)
//     displayItem()
// }
// }

function addFirst() {
    let theValue = document.getElementById("firstItem").value
if (theValue === '') {
    document.getElementById("errorFirst").style.display = 'block'
} else {
    cart.unshift(theValue)
    console.log(cart);
    document.getElementById("errorFirst").style.display = 'none'
    document.getElementById('firstItem').value =''
    displayItem()
}
}
function edit() {
    if (newIndex.value === '' || editedValue.value === '') {
        alert("fill something jor")
    } else {
        if((Number(newIndex.value)) > cart.length) {
            alert("Haba, fear God now")
        } else {
            var indexNew = Number(document.getElementById('newIndex').value)
            var replacement = document.getElementById('editedValue').value
            console.log(indexNew, replacement);
            cart.splice(indexNew-1, 1, replacement)
            displayItem()
        }
    }
}
// function editAny() {
//     var editAble = Number(prompt("Which number are you editing?"))
//     console.log(editAble);
//     if (editAble ==='') {
//         alert('could not execute operation because you did not fill in anything. Please try again')
//     } else if(editAble===null) {
//         cart.unshift(editAble)
//     }else{
//         prompt('fill here your desire product')
//     cart.splice(editAble-1,1, prompt)

//     }

//         displayItem()
// }

// function editAny() {
//     var editIndex = Number(prompt("Which number are you editing?"));
//     console.log(editIndex);
//     if (isNaN(editIndex)) {
//         alert('Could not execute operation because you did not fill in a valid number. Please try again.');
//     } else if (editIndex === null) {
//         console.log('User cancelled the prompt.');
//     } else {
//         var newProduct = prompt('Enter the new product:');
//         if (newProduct !== null) {
//             cart.splice(editIndex-1,1,newProduct)
//         }
//     }

//     displayItem();
// }


function displayItem() {
    show.innerHTML = ''
    // for (var i = 0; i < cart.length; i++) {
    //     // console.log(cart[i])
    //     show.innerHTML += `
    //                     <small>${i + 1}</small>
    //                     <p>${cart[i]}</p>
    //                 `
    // }
    var myTable= '<table>';
        myTable +='<tr>';
        myTable +='<th>S/N</th>'
        myTable +='<th> Products</th>'
        myTable +='</tr>'
    for (var i = 0; i < cart.length; i++) {
        myTable += '<tr>';
        myTable +='<td>' +`
                    ${i + 1} 
                    ` +
                     '</td>';
       myTable +='<td>'+`
                     <small>${cart[i]}</small>
                     ` +
                      '</td>';
   
    }


   myTable += '</table>';
   document.getElementById('show').innerHTML= myTable;

    // cart.map((goods, i)=>{
    //     show.innerHTML += `

    //         <small>${i+1}</small>
    //         <p>${goods}</p>
    //     `
    // })
}

// var foods = ['amala', 'iyan', 'ogufe', 'panla', 'bokoto', 'bogo', 'eja']
// for(var i=0; i < foods.length; i++) {
//     console.log(foods[i]);
// }

// foods.map((food,index)=>{
//     console.log(index+1, food);
// })