import './about.scss'

function About() {
    let frase = { 
        nome: 'Stephen Hawking',
        frase: 'Não importa quanto a vida possa ser ruim, sempre existe algo que você pode fazer, e triunfar. Enquanto há vida, há esperança.'
    }

    return (
        <main>
            <section></section>
            <section>
                { frase.frase }
                { frase.nome }
            </section>
        </main>
    );
}

export default About;