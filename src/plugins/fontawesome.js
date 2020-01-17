import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faAngleDoubleDown,
  faBars,
  faPhoneVolume,
  faCircle,
  faPepperHot,
  faPizzaSlice,
  faMotorcycle,
  faPhoneAlt,
  faMapMarkedAlt,
  faClock,
  faDollarSign
} from '@fortawesome/free-solid-svg-icons'

import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'

export default function (Vue) {
  library.add(
    faAngleDoubleDown,
    faBars,
    faPhoneVolume,
    faCircle,
    faPepperHot,
    faPizzaSlice,
    faMotorcycle,
    faPhoneAlt,
    faMapMarkedAlt,
    faClock,
    faDollarSign,
    faFacebookSquare
  )
  Vue.component('font-awesome-icon', FontAwesomeIcon)
}
