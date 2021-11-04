// import { React } from 'react';
import './home.scss'
// import Typewritter from 'typewriter-effect';
import Typewriter from 'typewriter-effect';

function Home(){

    const imgs: any[] = [
        { name: 'Facebook',icon : 'logo-facebook.svg' }, 
        { name: 'Instagram',icon : 'logo-instagram.svg' }, 
        { name: 'Linkedin',icon : 'logo-linkedin.svg' }
    ];

    return (
        <div className="home-page-container">
            <main>
                <section className="main-welcome">
                    <aside>
                        <div>
                            <span className="font-small">Bem vindo ao meu mundo.</span>
                            {/* <p>Olá, me chamo <span>Gabriel</span>  sou um estudante e Desenvolvedor Front end</p> */}
                            <p><Typewriter
                                onInit={(typewriter: any) => {
                                    typewriter.typeString('Olá, me chamo <span class="my-name">Gabriel</span>  sou um estudante e Desenvolvedor Front end')
                                    .callFunction(() => {
                                        console.log('String typed out!');
                                    })
                                    // .pauseFor(2500)
                                    // .deleteAll()
                                    // .callFunction(() => {
                                    //     console.log('All strings were deleted');
                                    // })
                                    .start();
                                }}
                            /></p>
                                
                        </div>
                        <div className="main-midias-sociais">
                            <span className="font-small">Minhas midias sociais</span>
                            <div className="main-midias-icons">
                                {imgs.map( ( {icon, name} ) =>
                                    <img draggable="false" key={name} src={ '/assets/icon/' + icon } alt={name} />
                                    )}
                            </div>
                        </div>
                    </aside>
                </section>
                <section className="main-img">
                        <img src="https://avatars.githubusercontent.com/u/62632117?v=4" alt="Me"/>
                    {/* <div>
                    </div> */}
                </section>
            </main>
        </div>
    );
}

export default Home;