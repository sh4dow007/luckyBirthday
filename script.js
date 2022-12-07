var birthDateInput = document.querySelector('#birth-date')
var luckyNoInput = document.querySelector('#lucky-no')
var checkAction = document.querySelector('#check')
var finalResult = document.querySelector('#final-result')
var result = document.querySelector('#result')
var privacyNote = document.querySelector('#privacy-note')
var closeNote = document.querySelector('#close-note')

var finalImg = document.createElement('img')
finalImg.className = "finalImg"

function isYourBirthdayLucky(event) {
  event.preventDefault()

  if (!birthDateInput.value || !luckyNoInput.value) {
    alert("Please enter correct values to proceed!")
    return
  } else if (parseInt(luckyNoInput.value) === 0) {
    alert("Lucky Number can't be 0! :)")
    return
  }

  let birthDate = parseInt(birthDateInput.value.split('-').join(''))
  let luckyNo = parseInt(luckyNoInput.value)
  let dateSum = 0

  while (birthDate !== 0) {
    let unit = birthDate % 10
    dateSum += unit
    birthDate -= unit
    birthDate /= 10
  }

  if (dateSum % luckyNo === 0) {
    result.textContent = 'Yes, your birthday is lucky! :)'
    finalImg.src = 'assets/happy.jpg'
  }
  else {
    result.textContent = 'No, your birthday is not lucky! :('
    finalImg.src = 'assets/sad.jpg'
  }
  finalResult.appendChild(finalImg)
}

function closePrivacyNote() {
  privacyNote.style.display = "none"
}

checkAction.addEventListener('click', isYourBirthdayLucky)
closeNote.addEventListener('click', closePrivacyNote)
