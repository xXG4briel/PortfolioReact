import './project.scss';

function Project() {
    const projects: any = [
        { 
            name: 'Projeto', 
            image: './logo192.png',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Turpis dignissim lectus mauris etiam. Pellentesque parttitor sit ultrices...' 
        },
        { 
            name: 'Projeto', 
            image: './logo192.png',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Turpis dignissim lectus mauris etiam. Pellentesque parttitor sit ultrices...' 
        },
        { 
            name: 'Projeto', 
            image: './logo192.png',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Turpis dignissim lectus mauris etiam. Pellentesque parttitor sit ultrices...' 
        },
        { 
            name: 'Projeto', 
            image: './logo192.png',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Turpis dignissim lectus mauris etiam. Pellentesque parttitor sit ultrices...' 
        },
        { 
            name: 'Projeto', 
            image: './logo192.png',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Turpis dignissim lectus mauris etiam. Pellentesque parttitor sit ultrices...' 
        },
        { 
            name: 'Projeto', 
            image: './logo192.png',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Turpis dignissim lectus mauris etiam. Pellentesque parttitor sit ultrices...' 
        }
    ]

    return (
    <main>
        <h1>Projetos</h1>
        <div className="project-container">
            { projects.map( (project: any) => 
            <aside className="project-card">
                <h3>{project?.name}</h3>
                <img src={project?.image} alt="logo"/>
                <div className="project-text-project">
                    <p>{project?.text}</p>
                </div>
            </aside>
            ) }
        </div>
    </main>
    );
}

export default  Project;