//Все цифры
const numbers = document.querySelectorAll('[data-name="btn_0-9"]')

// Ввод
const input = document.querySelector('#input')

// Действия
const percent = document.querySelector('#percent')
const division = document.querySelector('#division')
const multiply = document.querySelector('#multiply')
const minus = document.querySelector('#minus')
const plus = document.querySelector('#plus')

//Равно
const equal = document.querySelector('#equal')  


// Ресет
const reset= document.querySelector('#reset')


//Script Calc


//Фунция получения значения из поля ввода
let getValue = function(){
    return Number(input.value)
}

//Функция добавления цифры в поле ввода

let addNumber = function(item){
    if (item.value=='.'){
        if ((input.value).includes('.')==0){
            input.value+=(item.value)
        }
    }
        else{
               
        }
    
    if (item.value !='.'){
        input.value+=(item.value)
    }

    return(getValue())
}

for (let index=0; index<numbers.length;index++){
    numbers[index].addEventListener('click',function(){
        addNumber(numbers[index])
    }) 
}



let first__value= []
let action = []

//Функция получения результата
let getEqual = function(){
    let second__value = getValue()
    
    if (action[action.length - 1]=='+'){
        input.value = (getValue()+first__value[first__value.length - 1]  )
    }    
    if (action[action.length - 1]=='-'){
        input.value = (first__value[first__value.length - 1] - getValue()  )
    }
    if (action[action.length - 1]=='/'){
        input.value = (first__value[first__value.length - 1] /getValue() )
    }
    if (action[action.length - 1]=='*'){
        input.value = (getValue()*first__value[first__value.length - 1]  )
    }
    if (action[action.length - 1]=='%'){
        input.value = (Math.abs(getValue())  )
    }
    

    if (second__value != ''){
        first__value.push(second__value)
    }
        
}    
equal.addEventListener('click',getEqual)    



//Нажатия на кнопки
let getPlus = function(){
     if (getValue() != ''){
         first__value.push(getValue())
    }
     action.push('+')
    input.value=''
}
plus.addEventListener('click',getPlus)

let getMinus = function(){
    if (getValue() != ''){
        first__value.push(getValue())
   }
    action.push('-')
   input.value=''
}
minus.addEventListener('click',getMinus)

let getMultiply = function(){
    if (getValue() != ''){
        first__value.push(getValue())
   }
    action.push('*')
   input.value=''
}
multiply.addEventListener('click',getMultiply)

let getDivide = function(){
    if (getValue() != ''){
        first__value.push(getValue())
   }
    action.push('/')
   input.value=''
}
division.addEventListener('click',getDivide)


//Вот тут может быть параша полная
let getPercent = function(){
    if (getValue() != ''){
        first__value.push(getValue())
   }
    action.push('%')
   input.value= (Math.abs(getValue())  )
}
percent.addEventListener('click',getPercent)



// function selectAction (act){
//     if (getValue() != ''){
//         first__value.push(getValue())
//     }
//     action.push(act)
//     input.value=''
// }
// plus.addEventListener('click',selectAction('+'))









//Очистка поля ввода
reset.addEventListener('click',function(){
    input.value=''
})


    
const ivent__button = document.querySelector('#ivent__button')

const calc = document.querySelector('#calc')

//Script button

ivent__button.addEventListener('click',function(){
    calc.classList.remove('hidden')
    calc.classList.add('flex')
    ivent__button.classList.add('hidden')
})

