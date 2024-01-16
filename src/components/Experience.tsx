export default function Experience() {
    return (
        <div className="bg-primary-100 m-4 p-4 w-full mx-0">
            <h1 className="text-5xl py-4">Experiência Profissional</h1>

            {/* Experiência na Motorola */}
            <div className="experience-item mb-8 flex">
                <div className="flex-1">
                    <h2 className="text-4xl py-4">Motorola</h2>
                    <p>Nov 2022 - Presente</p>
                </div>
                <div className="flex-1">
                    <h2 className="text-4xl py-4">Software Tests</h2>
                </div>
            </div>

            <div className="experience-item mb-4 flex">
                <div className="flex-1">
                    
                </div>
                <div className="flex-1">
                    <ul className="list-disc pl-4">
                        <li className="mb-2">Ambientação de Testes e Testes de Regressão em Ambientes Android</li>
                        <li className="mb-2">Metodologia Ágil e Colaboração em Equipe</li>
                        <li className="mb-2">Gestão de Projetos com Jira</li>
                        <li className="mb-2">Consultas SQL para Criação e Análise de Relatórios</li>
                        <li className="mb-2">Utilização eficiente da ferramenta Idart</li>
                    </ul>
                </div>
            </div>

            {/* Experiência na Educandus */}
            <div className="experience-item mb-8 flex">
                <div className="flex-1">
                    <h2 className="text-4xl py-4">Educandus</h2>
                    <p>Ago 2021 - Nov 2022</p>
                </div>
                <div className="flex-1">
                    <h2 className="text-4xl py-4">Web Developer</h2>
                </div>
            </div>

            <div className="experience-item mb-4 flex">
                <div className="flex-1">
                    
                </div>
                <div className="flex-1">
                    <ul className="list-disc pl-4">
                        <li className="mb-2">Desenvolvimento de páginas web dinâmicas e responsivas utilizando JavaScript, HTML e CSS.</li>
                        <li className="mb-2">Implementação de suítes interativas utilizando a biblioteca CreateJS.</li>
                        <li className="mb-2">Aprimoramento da experiência do usuário e fluidez das páginas web através da criação e integração de animações com CreateJS.</li>
                        <li className="mb-2">Colaboração com a equipe de design para garantir interfaces intuitivas e esteticamente agradáveis.</li>
                        <li className="mb-2">Otimização de desempenho para garantir tempos de carregamento rápidos e eficientes.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
