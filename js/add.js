let username = document.querySelector(".userName")
let userEmail = document.querySelector(".userEmail")
let userNumber = document.querySelector(".userNumber")
let userCity = document.querySelector(".userCity")

let data = document.querySelector('.date_el1')
let department = document.querySelector('.form-select1')


let maleInput = document.querySelector('.userGenderinputMale')
let femaleInput = document.querySelector('.userGenderinputFemale')
let otherInput = document.querySelector('.userGenderinputOther')


let addBtn = document.querySelector('.add_obj')
let resetBtn = document.querySelector('.reset-btn')


let btnedit = document.querySelector('.btn-edit')



addBtn.addEventListener("click", () => {

    addItem()
})


function addItem() {
    let contentAdd = {
        id: object[object.length - 1].id + 1,
        username: '',
        userEmail: '',
        userMobile: null,
        usercity: '',
        usergender: {
            male: false,
            female: false,
            other: false,
        },
        department: 'none',
        date: "",
    }

    //Tepadagi Contentdagi obyekni har bosilgan paytta yangi qiymat olishi uchun 
    contentAdd.username = username.value;
    contentAdd.userEmail = userEmail.value;
    contentAdd.userMobile = userNumber.value;
    contentAdd.userCity = userCity.value;

    contentAdd.usergender.male = maleInput.checked
    contentAdd.usergender.female = femaleInput.checked
    contentAdd.usergender.other = otherInput.checked
    contentAdd.department = department.value
    contentAdd.date = data.value



    object.push(contentAdd)
    show()
    reset()
}

function reset() {
    username.value = ''
    userEmail.value = ''
    userNumber.value = ''
    userCity.value = ''
    maleInput.checked = false
    femaleInput.checked = false
    otherInput.checked = false
    department.value = 'none'
    data.value = ''
}

function remove(e) {
    object = object.filter(item => item.id !== +e.currentTarget.classList[0])
    show()
}