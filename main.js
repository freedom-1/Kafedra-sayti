let inpLoginId = document.querySelector('[name=loginId]')
let inpPasswordId = document.querySelector('[name=password]')
let resultDiv = document.getElementById('Xabar')

/* Parolni Sha256 orqali encript qilib beradi */
const generateHash = (item)=>{
	    let md = forge.md.sha256.create() 
        md.start()
        md.update(item, "utf8")
        let hashText = md.digest().toHex()
        return hashText
}

const AdminList=[{
    loginID: '94419b99b12c11133a4dfeccc3e17885974beb48f7827c48239aabfbcad238d8', //ali
    password: 'b04cb420ab9974b2abad1478f986d0854e3771f67932bf270d625cbbb693d5bb' //akbar
}]

/* login funksiyasi yordamida foydalanuvchilarni parolini tekshirib keyin kiritamiz */
const login = ()=>{
    let checkUsername = (AdminList[0].loginID === generateHash(inpLoginId.value))
    let checkPassword = (AdminList[0].password === generateHash(inpPasswordId.value))

    if(inpLoginId.value && inpPasswordId.value && checkPassword && checkUsername){
        alert("Siz tizimga muvaffaqiyatli kirdingiz!!!")
    }
    else{
        resultDiv.innerHTML =`
        <div class="notification is-primary">
            <button class="delete" onclick="onNotes()"></button>
        Qiymatlar bo'sh bo'lmasligi kerak
        </div>
        `
    }
}

const onNotes = ()=>{
    console.log("notes bosildi")
}

document.addEventListener('DOMContentLoaded', () => {
    (document.getElementById('Xabar') || []).forEach(($delete) => {
      const $notification = $delete.parentNode;
  
      $delete.addEventListener('click', () => {
        $notification.parentNode.removeChild($notification)
      })
    })
  })