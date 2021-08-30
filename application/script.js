const date = new Date()

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

const renderCalendar = () => {
  date.setDate(1)

  const monthDays = document.querySelector('.days')
  const month = date.getMonth()
  const year = date.getFullYear()

  const firstDayIndex = date.getDay()
  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay()
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate() //Retorna o ultimo dia do mes
  const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate() //Retorna o ultimo dia do mes anterior
  const nextDays = 7 - lastDayIndex - 1

  document.querySelector('.date h3').innerHTML = `${months[month]}  ${year}`

  let days = ''

  for (let i = firstDayIndex; i > 0; i--) {
    days += `<div class="prev-date" >${prevLastDay - i + 1}</div>`
  }

  for (let i = 1; i <= lastDay; i++) {
    days += `<div>${i}</div>`
  }

  for (let i = 1; i <= nextDays; i++) {
    days += `<div class = "next-date">${i}</div>`
  }

  monthDays.innerHTML = days
}

document.querySelector('.prev').addEventListener('click', () => {
  date.setMonth(date.getMonth() - 1)
  renderCalendar()
})

document.querySelector('.next').addEventListener('click', () => {
  date.setMonth(date.getMonth() + 1)
  renderCalendar()
})

renderCalendar()
