import React from 'react';

import './header.scss';

function Header() {

    const headerComponents: string[] =[ 'Sobre', 'Experiências', 'Projetos', 'Contato'];

    return (
        <header>

            <div className="header-logo">
                <span>xXG4briel</span>
            </div>

            <section className="header-aboutme">
                <nav>
                    <ul>
                        {headerComponents.map( headerComponent => 
                        <li key={headerComponent}>{ headerComponent }</li>
                        )}
                    </ul>
                </nav>
                <button>Contrate-me</button>
            </section>

        </header>
    );
}

export default Header;