btnElement = document.querySelector('.btn');
resultElement = document.querySelector('.result');

const products = document.querySelectorAll('.item');

inputSurname = document.querySelector('[name="surname"]');
inputName = document.querySelector('[name="name"]');


function totalSumm(){
    sum = 0;
    for(const product of products){
        let checkboxElement = product.querySelector('input[type="checkbox"]');
        let countElement = product.querySelector('input[type="number"]');
            if(checkboxElement.checked){
                if(countElement.value <= 0 || countElement.value > 100){
                countElement.value = 1;
                }
            sum += parseInt(checkboxElement.dataset.price) * parseInt(countElement.value);
            }else{
            countElement.value = 0;
            }
        resultElement.textContent = sum + ` грн.`;
    }
}

btnElement.addEventListener('click', function(){
    orderList = [];
    for(const product of products){
        let choiceElement = product.querySelector('[name="menu"]');
        let amount = product.querySelector('[name="quantity"]');

        if(choiceElement.checked){
            totalPrice = parseInt(choiceElement.dataset.price) * parseInt(amount.value);
            foodName = choiceElement.dataset.goods;
            position = `${foodName} - ${amount.value} шт. = ${totalPrice} грн.`;
            orderList.push(position);
        }
    }
    if(orderList === ""){
        alert("Товар не вибрано!")
    }else{
        alert(`Замовник: ${inputSurname.value} ${inputName.value}
        \nВаше замовлення: ${orderList.join('\n')}
        \nВсього до оплати: ${resultElement.textContent}
        \nДЯКУЄМО ЩО ОБРАЛИ НАС.`);
    }
});