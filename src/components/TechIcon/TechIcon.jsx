import {
    FigmaOriginal,
    Html5Original,
    Css3Original,
    ReactOriginal,
    TailwindcssOriginal,
    StyledcomponentsOriginal,
    MysqlOriginal,
    JavascriptOriginal,
    PhpOriginal,
    GoogleOriginal
} from 'devicons-react'

const icons = {
    figma: FigmaOriginal,
    html: Html5Original,
    css: Css3Original,
    reactjs: ReactOriginal,
    tailwind: TailwindcssOriginal,
    styledcomponents: StyledcomponentsOriginal,
    mysql: MysqlOriginal,
    firestore: GoogleOriginal,
    javascript: JavascriptOriginal,
    php: PhpOriginal
}

function TechIcon({ id, size = 32 }) {
    const Icon = icons[id]
    if (!Icon) return null
    return <Icon size={size} />
}

export default TechIcon