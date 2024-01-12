// https://getbootstrap.com/docs/5.2/getting-started/vite/

// Import our custom CSS
import './scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'


// This is for importing only the things we need from Bootstrap's JS
//import Alert from 'bootstrap/js/dist/alert';
// or, specify which plugins you need:
//import { Tooltip, Toast, Popover } from 'bootstrap';

const container = document.getElementById('container')
const parser = new DOMParser()

function createWeek(weekNumber, date, presentationLink, codeLink) {
  const code = codeLink || `https://github.com/avast-python/semana-${weekNumber}`
  const presentation = presentationLink || `https://avast-python.github.io/semana-${weekNumber}`

  let template = `
  <div class="col">
    <div class="card mb-4 rounded-3 shadow-sm">
      <div class="card-header py-3">
        <h4 class="my-0 fw-normal">Semana ${weekNumber}</h4>
      </div>
      <div class="card-body">
        <h5 class="card-title">${date}</h5>
        <a class="w-100 btn btn-lg btn-outline-primary mb-2"  role="button"
          href="${presentation}">
          Presentación
        </a>
        <a class="w-100 btn btn-lg btn-outline-secondary"
          href="${code}">
          Código y soluciones
        </a>
      </div>
    </div>
  </div>
  `
  const doc = parser.parseFromString(template, 'text/html')
  return doc.body.firstChild
}


const weeks = [
  {order: 1, date: '30/9/2023'},
  {order: 2, date: '21/10/2023'},
  {order: 3, date: '28/10/2023'},
  {order: 4, date: '11/11/2023'},
  {order: 5, date: '25/11/2023'},
  {order: 5, date: '25/11/2023'},
  {order: 6, date: '2/12/2023'},
  {order: 7, date: '16/12/2023'},
  {order: 8, date: '13/01/2024'},
]
console.log(weeks)

function createWeeks() {
  weeks.forEach(week => {
    container.insertBefore(createWeek(week.order, week.date, week.presentationLink, week.codeLink), container.firstChild);
  })
}

createWeeks()
