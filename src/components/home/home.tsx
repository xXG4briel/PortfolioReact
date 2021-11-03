// import { React } from 'react';
import './home.scss'

function Home(){

    const imgs: any[] = [
        { name: 'Facebook',icon : 'logo-facebook.svg' }, 
        { name: 'Instagram',icon : 'logo-instagram.svg' }, 
        { name: 'Linkedin',icon : 'logo-linkedin.svg' }
    ];

    return (
        <main>
            <section className="main-welcome">
                <aside>
                    <div>
                       <span className="font-small">Bem vindo ao meu mundo.</span>
                       <p>Olá, me chamo <span>Gabriel</span>  sou um estudante e Desenvolvedor Front end .</p>
                       <div className="main-midias-sociais">
                           <span className="font-small">Minhas midias sociais</span>
                           <div className="main-midias-icons">
                               {imgs.map( ( {icon, name} ) =>
                                <img key={name} src={ '/assets/icon/' + icon } alt={name} />
                                )}
                           </div>
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
    );
}

export default Home;