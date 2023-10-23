$('#orderCustomerID').val(customerDB[0].id);
$('#orderCustomerName').val(customerDB[0].name);
$('#orderCustomerAddress').val(customerDB[0].address);
$('#orderCustomerSalary').val(customerDB[0].salary);
$('#txtItemCode').val(itemDB[0].code);
$('#txtItemDescription').val(itemDB[0].name);
$('#txtQTYOnHand').val(itemDB[0].qty);
$('#txtItemPrice').val(itemDB[0].price);


let totalFinal = 0;


function loadCusIds() {
    var optionCus = '';
    for (var i = 0; i < customerDB.length; i++) {
        optionCus += '<option value="' + customerDB[i].id + '">' + customerDB[i].id + '</option>';
    }
    $('#selectCusID').append(optionCus);
}

function loadItemIds() {
    var optionItem = '';
    for (var i = 0; i < itemDB.length; i++) {
        optionItem += '<option value="' + itemDB[i].code + '">' + itemDB[i].code + '</option>';
    }
    $('#selectItemCode').append(optionItem);
}

// function balance() {
//     if(orderTotal.value <= cashTxtOrderPage.value){
//         alert("same")
//     }else{
//         alert("enough money")
//     }
// }

function generateOrderId(){
    if(orderDB.length == 0){
        $('#txtOrderID').val(1);
    }else{
        $('#txtOrderID').val(orderDB.length + 2);
    }
}


$('#selectCusID').change(function(){

    for (let i=0; i < customerDB.length; i++){
        if ($(this).val() == customerDB[i].id){
            $('#orderCustomerID').val(customerDB[i].id);
            $('#orderCustomerName').val(customerDB[i].name);
            $('#orderCustomerAddress').val(customerDB[i].address);
            $('#orderCustomerSalary').val(customerDB[i].salary);
            break;
        }
    }
});

$('#selectItemCode').change(function(){

    for (let i=0; i < itemDB.length; i++){
        if ($(this).val() == itemDB[i].code){
            $('#txtItemCode').val(itemDB[i].code);
            $('#txtItemDescription').val(itemDB[i].name);
            $('#txtQTYOnHand').val(itemDB[i].qty);
            $('#txtItemPrice').val(itemDB[i].price);
            break;
        }
    }
});

$('#btnAddToTable').click(function (){
    var itemCode = $('#selectItemCode').val();
    var name = $('#txtItemDescription').val();
    var qty = $('#txtQty').val();
    var total = parseInt($('#txtQty').val()) * parseInt($('#txtItemPrice').val());


    let tr=$('<tr> <td>'+itemCode+'</td> <td>'+name+'</td> <td>'+qty+'</td> <td>'+total+'</td></tr>');
    $("#orderTable").append(tr);

    totalFinal = totalFinal + total;

    $('#total').text(totalFinal);

    for(let i = 0; i < itemDB.length; i++){
        if(itemDB[i].code == itemCode){
            itemDB[i].qty = parseInt(itemDB[i].qty) - parseInt(qty);
            $('#txtQTYOnHand').val(itemDB[i].qty);
            break;
        }
    }

    $('#txtQty').val("");

});

$("#discountTxtOrderPage").keydown(function (e){
    if(e.keyCode == 13) {
        $('#subtotal').text(totalFinal - parseInt($("#discountTxtOrderPage").val()));
    }
});


$("#cashTxtOrderPage").keydown(function (e){
    if(e.keyCode == 13) {
        $('#balanceTxtOrderPage').val(parseInt($("#cashTxtOrderPage").val()) - parseInt($('#subtotal').text()));
    }
});

$('#btnSubmitOrder').click(function (){

    let totl =parseFloat( $('#total').text());
    let cash =parseFloat( $('#cashTxtOrderPage').val());
    console.log(totl,cash);
    let result = cash-totl;
    console.log(result);
    $('#balanceTxtOrderPage').val(result);

    var orderId = $('#txtOrderID').val();
    var customerId = $('#selectCusID').val();
    var total = $('#subtotal').text();
    var date = $('#txtDate').val();

    totl = 0;


    order = {
        orderId : orderId,
        customerId : customerId,
        total : total,
        date : date
    }

    orderDB.push(order);

    $('#orderTable tr').remove();

});
