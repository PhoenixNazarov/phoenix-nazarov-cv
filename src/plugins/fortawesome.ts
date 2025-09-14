import {
    faPhone,
    faEnvelope,
    faLocationDot,
    faCalendar,
    faClock,
    faGears,
    faBrain,
    faChessRook,
    faRocket,
    faGraduationCap
} from '@fortawesome/free-solid-svg-icons'
import {
    faTelegram,
    faGithub
} from '@fortawesome/free-brands-svg-icons'
import {library} from '@fortawesome/fontawesome-svg-core'
import type {App} from "vue";

export function installFortAwesome(_: App) {
    library.add(
        faPhone,
        faEnvelope,
        faTelegram,
        faGithub,
        faLocationDot,
        faCalendar,
        faClock,
        faGears,
        faBrain,
        faChessRook,
        faRocket,
        faGraduationCap
    )
}
