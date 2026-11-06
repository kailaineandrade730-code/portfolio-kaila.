
import {
  ArrowUpRight,
  GraduationCap,
  Code2,
  BrainCircuit,
  CalendarDays,
  Building2,
  Volume2,
  Mail,
  Sparkles,
  Laptop,
  UserRound,
} from "lucide-react";

const projetos = [
  {
    titulo: "Tutor Acadêmico",
    categoria: "Inteligência Artificial",
    descricao:
      "Sistema em desenvolvimento para análise de trabalhos acadêmicos utilizando inteligência artificial, agentes especializados e a abordagem RAG. A proposta é auxiliar estudantes na metodologia científica, escrita acadêmica e normas.",
    tecnologias: ["Python", "IA", "RAG", "Streamlit"],
    icone: BrainCircuit,
    status: "Em desenvolvimento",
  },
  {
    titulo: "Sistema de Agendamento",
    categoria: "Desenvolvimento de Sistemas",
    descricao:
      "Proposta de um sistema para organizar agendamentos, facilitando o cadastro, a consulta e o gerenciamento de horários.",
    tecnologias: ["Análise de Sistemas", "Modelagem", "Desenvolvimento"],
    icone: CalendarDays,
    status: "Projeto acadêmico",
  },
  {
    titulo: "Vieira Negócios Imobiliários",
    categoria: "Desenvolvimento Web",
    descricao:
      "Desenvolvimento de um site institucional para uma imobiliária, com apresentação da empresa, divulgação de imóveis e canais de contato.",
    tecnologias: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    icone: Building2,
    status: "Projeto de portfólio",
  },
  {
    titulo: "SomBom",
    categoria: "Aplicativo",
    descricao:
      "Conceito de aplicativo voltado à identificação de áreas com poluição sonora, permitindo que cidadãos visualizem pontos no mapa e registrem ocorrências.",
    tecnologias: ["UX/UI", "Mapas", "Aplicativo", "Cidadania"],
    icone: Volume2,
    status: "Projeto conceitual",
  },
];

const habilidades = [
  "Lógica de programação",
  "Python",
  "HTML e CSS",
  "JavaScript",
  "React e Next.js",
  "TypeScript",
  "Análise de sistemas",
  "Modelagem de projetos",
  "Inteligência artificial",
  "Git e GitHub",
  "Organização de projetos",
  "Resolução de problemas",
];

export default function Home() {
  return (
    <main>
      <header className="container" style={{ paddingTop: "25px" }}>
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "15px",
          }}
        >
          <a
            href="#inicio"
            className="gradient-text"
            style={{ fontSize: "1.4rem", fontWeight: "bold" }}
          >
            Kailaine Andrade.
          </a>

          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
              fontSize: "0.9rem",
            }}
          >
            <a href="#sobre">Sobre</a>
            <a href="#projetos">Projetos</a>
            <a href="#habilidades">Habilidades</a>
            <a href="#contato">Contato</a>
          </div>
        </nav>
      </header>

      <section className="hero" id="inicio">
        <div className="container hero-content">
          <div className="hero-badge">
            <Sparkles
              size={15}
              style={{ display: "inline", marginRight: "7px" }}
            />
            Estudante de Sistemas de Informação
          </div>

          <h1 className="hero-title">
            Olá, eu sou
            <br />
            <span className="gradient-text">Kailaine Andrade</span>
          </h1>

          <p className="hero-description">
            Sou estudante de Sistemas de Informação e apaixonada por
            tecnologia, inovação e desenvolvimento de soluções digitais.
            Neste espaço, compartilho minha trajetória, meus conhecimentos
            e os projetos que venho construindo.
          </p>

          <div className="hero-actions">
            <a href="#projetos" className="btn-primary">
              Conheça meus projetos <ArrowUpRight size={18} />
            </a>

            <a href="#contato" className="btn-secondary">
              Entre em contato <Mail size={18} />
            </a>
          </div>
        </div>
      </section>

      <section id="sobre">
        <div className="container">
          <span className="section-label">Quem sou</span>

          <h2 className="section-title">
            Sobre <span className="gradient-text">mim</span>
          </h2>

          <p className="section-description">
            Conheça um pouco da minha formação, dos meus interesses e
            da minha jornada na área de tecnologia.
          </p>

          <div className="about-grid">
            <article className="about-card">
              <GraduationCap size={30} color="#c084fc" />
              <h3 style={{ margin: "15px 0 10px" }}>Minha formação</h3>
              <p>
                Graduanda em Sistemas de Informação pela Universidade
                Tiradentes (UNIT). Ao longo da graduação, venho desenvolvendo
                conhecimentos em tecnologia, análise de sistemas e
                desenvolvimento de soluções.
              </p>
            </article>

            <article className="about-card">
              <UserRound size={30} color="#60a5fa" />
              <h3 style={{ margin: "15px 0 10px" }}>Minha trajetória</h3>
              <p>
                Tenho interesse em aprender continuamente, explorar novas
                ferramentas e transformar ideias em projetos. Valorizo a
                comunicação, a organização, o trabalho em equipe e a
                capacidade de resolver problemas.
              </p>
            </article>

            <article className="about-card">
              <Code2 size={30} color="#f472b6" />
              <h3 style={{ margin: "15px 0 10px" }}>O que me interessa</h3>
              <p>
                Desenvolvimento web, inteligência artificial, experiência
                do usuário, análise de sistemas e criação de aplicações
                que possam facilitar o dia a dia das pessoas.
              </p>
            </article>

            <article className="about-card">
              <Laptop size={30} color="#fb923c" />
              <h3 style={{ margin: "15px 0 10px" }}>Meu objetivo</h3>
              <p>
                Ampliar minha experiência profissional, aplicar os
                conhecimentos adquiridos na graduação e contribuir
                com projetos e equipes da área de tecnologia.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="projetos">
        <div className="container">
          <span className="section-label">Meu trabalho</span>

          <h2 className="section-title">
            Projetos em <span className="gradient-text">destaque</span>
          </h2>

          <p className="section-description">
            Alguns projetos acadêmicos e pessoais que representam
            meu aprendizado e minha evolução na tecnologia.
          </p>

          <div className="projects-grid">
            {projetos.map((projeto) => {
              const Icone = projeto.icone;

              return (
                <article className="project-card" key={projeto.titulo}>
                  <div className="project-icon">
                    <Icone size={26} color="white" />
                  </div>

                  <span className="project-category">
                    {projeto.categoria}
                  </span>

                  <h3 className="project-title">{projeto.titulo}</h3>

                  <p className="project-description">
                    {projeto.descricao}
                  </p>

                  <div className="project-tags">
                    {projeto.tecnologias.map((tecnologia) => (
                      <span className="tag" key={tecnologia}>
                        {tecnologia}
                      </span>
                    ))}
                  </div>

                  <p
                    style={{
                      color: "#c084fc",
                      fontSize: "0.85rem",
                      marginTop: "20px",
                    }}
                  >
                    {projeto.status}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="habilidades">
        <div className="container">
          <span className="section-label">Conhecimentos</span>

          <h2 className="section-title">
            Minhas <span className="gradient-text">habilidades</span>
          </h2>

          <p className="section-description">
            Tecnologias e conhecimentos que venho desenvolvendo
            durante minha formação e meus projetos.
          </p>

          <div className="skills-grid">
            {habilidades.map((habilidade) => (
              <div className="skill-card" key={habilidade}>
                {habilidade}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contato">
        <div className="container">
          <div className="contact-box">
            <span className="section-label">Vamos conversar?</span>

            <h2 className="section-title">
              Vamos criar algo{" "}
              <span className="gradient-text">juntos?</span>
            </h2>

            <p>
              Estou aberta a oportunidades de estágio, experiências
              profissionais, parcerias e novos desafios na área de tecnologia.
            </p>

            <a
              href="mailto:kailaineandrade730@gmail.com"
              className="btn-primary"
            >
              <Mail size={18} /> Enviar um e-mail
            </a>

            <div className="social-links">
              <a
                href="https://github.com/kailaineandrade730-code"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Code2 size={18} /> GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/kailaine-andrade-785392378"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <UserRound size={18} /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>
            <p>
  Desenvolvido por Kailaine Andrade © 2026
</p>
          </p>
          <p>
            Transformando ideias em soluções por meio da tecnologia.
          </p>
        </div>
      </footer>
    </main>
  );
}
