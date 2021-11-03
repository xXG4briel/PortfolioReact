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
            <section>
                <aside>
                    <div>
                       <span>Bem vindo ao meu mundo.</span>
                       <p>Olá, me chamo Gabriel  sou um estudante e Desenvolvedor Front end .</p>
                       <div className="main-midias-sociais">
                           <span>Minhas midias sociais</span>
                           <div className="main-midias-icons">
                               {imgs.map( ( {icon, name} ) =>
                                <img key={name} src={ '/assets/icon/' + icon } alt={name} />
                                )}
                           </div>
                       </div>
                    </div>
                </aside>
            </section>
            <section></section>
        </main>
    );
}

export default Home;