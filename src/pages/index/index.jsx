import HeaderComponent from "../../components/header";
import { IndexStyle } from "./styled";
import { useState, useEffect } from "react";
import BodyArea from "../../components/body";
import { getAllJobsList } from "../../api/jobsList";
import Footer from "../../components/footer";

export default function IndexPage() {
  const [jobs, setJobs] = useState([]);
  const [originalJobs, setOriginalJobs] = useState([]);

  const jobsFake = [
    {
      id: 1,
      title: "Desenvolvedor Full Stack",
      description: "Responsável pelo desenvolvimento de aplicações web utilizando tecnologias como Node.js, React e PostgreSQL.",
      companyName: "TechCo",
      cityName: "São Paulo",
      stateName: "São Paulo",
      updatedAt: new Date("2024-05-13"),
      createdAt: new Date("2024-05-10")
    },
    {
      id: 2,
      title: "Engenheiro de Software",
      description: "Desenvolvimento e manutenção de sistemas de software, participando de todas as fases do ciclo de vida do desenvolvimento.",
      companyName: "SoftDev",
      cityName: "Rio de Janeiro",
      stateName: "Rio de Janeiro",
      updatedAt: new Date("2024-05-14"),
      createdAt: new Date("2024-05-11")
    },
    {
      id: 3,
      title: "Analista de Dados",
      description: "Coleta, análise e interpretação de grandes volumes de dados para fornecer insights valiosos para a empresa.",
      companyName: "DataInsight",
      cityName: "Belo Horizonte",
      stateName: "Minas Gerais",
      updatedAt: new Date("2024-05-15"),
      createdAt: new Date("2024-05-12")
    },
    {
      id: 4,
      title: "Designer UX/UI",
      description: "Criação de interfaces de usuário intuitivas e agradáveis, focadas na experiência do usuário.",
      companyName: "DesignCraft",
      cityName: "Curitiba",
      stateName: "Paraná",
      updatedAt: new Date("2024-05-16"),
      createdAt: new Date("2024-05-13")
    },
    {
      id: 5,
      title: "Gerente de Projetos",
      description: "Planejamento, coordenação e execução de projetos, garantindo a entrega dentro do prazo e do orçamento.",
      companyName: "ProjectMgmt",
      cityName: "Brasília",
      stateName: "Distrito Federal",
      updatedAt: new Date("2024-05-17"),
      createdAt: new Date("2024-05-14")
    },
    {
      id: 6,
      title: "Analista de Segurança da Informação",
      description: "Implementação e monitoramento de políticas de segurança para proteger os sistemas de informação da empresa.",
      companyName: "SecureTech",
      cityName: "Porto Alegre",
      stateName: "Rio Grande do Sul",
      updatedAt: new Date("2024-05-18"),
      createdAt: new Date("2024-05-15")
    },
    {
      id: 7,
      title: "Especialista em Marketing Digital",
      description: "Desenvolvimento e implementação de estratégias de marketing digital para promover os produtos da empresa.",
      companyName: "MarketBoost",
      cityName: "Salvador",
      stateName: "Bahia",
      updatedAt: new Date("2024-05-19"),
      createdAt: new Date("2024-05-16")
    },
    {
      id: 8,
      title: "Engenheiro de Redes",
      description: "Projeto, implementação e manutenção de redes de computadores, garantindo alta disponibilidade e desempenho.",
      companyName: "NetWorks",
      cityName: "Recife",
      stateName: "Pernambuco",
      updatedAt: new Date("2024-05-20"),
      createdAt: new Date("2024-05-17")
    },
    {
      id: 9,
      title: "Analista Financeiro",
      description: "Análise de dados financeiros, preparação de relatórios e previsões para apoiar as decisões de negócios.",
      companyName: "FinAnalytics",
      cityName: "Fortaleza",
      stateName: "Ceará",
      updatedAt: new Date("2024-05-21"),
      createdAt: new Date("2024-05-18")
    },
    {
      id: 10,
      title: "Analista de Suporte Técnico",
      description: "Suporte técnico aos usuários, resolvendo problemas de hardware, software e rede.",
      companyName: "TechSupport",
      cityName: "Manaus",
      stateName: "Amazonas",
      updatedAt: new Date("2024-05-22"),
      createdAt: new Date("2024-05-19")
    },
    {
      id: 11,
      title: "Desenvolvedor Full Stack",
      description: "Responsável pelo desenvolvimento de aplicações web utilizando tecnologias como Node.js, React e PostgreSQL.",
      companyName: "TechCo",
      cityName: "Lorena",
      stateName: "São Paulo",
      updatedAt: new Date("2024-05-13"),
      createdAt: new Date("2024-05-10")
    },
    {
      id: 12,
      title: "Engenheiro de Software",
      description: "Desenvolvimento e manutenção de sistemas de software, participando de todas as fases do ciclo de vida do desenvolvimento.",
      companyName: "SoftDev",
      cityName: "Morrinho",
      stateName: "Rio de Janeiro",
      updatedAt: new Date("2024-05-14"),
      createdAt: new Date("2024-05-11")
    },
    {
      id: 13,
      title: "Analista de Dados",
      description: "Coleta, análise e interpretação de grandes volumes de dados para fornecer insights valiosos para a empresa.",
      companyName: "DataInsight",
      cityName: "Juiz de Fora",
      stateName: "Minas Gerais",
      updatedAt: new Date("2024-05-15"),
      createdAt: new Date("2024-05-12")
    },
    {
      id: 14,
      title: "Designer UX/UI",
      description: "Criação de interfaces de usuário intuitivas e agradáveis, focadas na experiência do usuário.",
      companyName: "DesignCraft",
      cityName: "Cidade 1",
      stateName: "Paraná",
      updatedAt: new Date("2024-05-16"),
      createdAt: new Date("2024-05-13")
    },
    {
      id: 15,
      title: "Gerente de Projetos",
      description: "Planejamento, coordenação e execução de projetos, garantindo a entrega dentro do prazo e do orçamento.",
      companyName: "ProjectMgmt",
      cityName: "Cidade 2",
      stateName: "Distrito Federal",
      updatedAt: new Date("2024-05-17"),
      createdAt: new Date("2024-05-14")
    },
    {
      id: 16,
      title: "Analista de Segurança da Informação",
      description: "Implementação e monitoramento de políticas de segurança para proteger os sistemas de informação da empresa.",
      companyName: "SecureTech",
      cityName: "Porto Alegre",
      stateName: "Rio Grande do Sul",
      updatedAt: new Date("2024-05-18"),
      createdAt: new Date("2024-05-15")
    },
    {
      id: 17,
      title: "Especialista em Marketing Digital",
      description: "Desenvolvimento e implementação de estratégias de marketing digital para promover os produtos da empresa.",
      companyName: "MarketBoost",
      cityName: "Testinho",
      stateName: "Bahia",
      updatedAt: new Date("2024-05-19"),
      createdAt: new Date("2024-05-16")
    },
    {
      id: 18,
      title: "Engenheiro de Redes",
      description: "Projeto, implementação e manutenção de redes de computadores, garantindo alta disponibilidade e desempenho.",
      companyName: "NetWorks",
      cityName: "Caribe",
      stateName: "Pernambuco",
      updatedAt: new Date("2024-05-20"),
      createdAt: new Date("2024-05-17")
    },
    {
      id: 19,
      title: "Analista Financeiro",
      description: "Análise de dados financeiros, preparação de relatórios e previsões para apoiar as decisões de negócios.",
      companyName: "FinAnalytics",
      cityName: "Iperaiupeba",
      stateName: "Ceará",
      updatedAt: new Date("2024-05-21"),
      createdAt: new Date("2024-05-18")
    },
    {
      id: 20,
      title: "Analista de Suporte Técnico",
      description: "Suporte técnico aos usuários, resolvendo problemas de hardware, software e rede.",
      companyName: "TechSupport",
      cityName: "Floresta Amazônica",
      stateName: "Amazonas",
      updatedAt: new Date("2024-05-22"),
      createdAt: new Date("2024-05-19")
    }
    ,
    {
      id: 21,
      title: "Desenvolvedor Full Stack",
      description: "Responsável pelo desenvolvimento de aplicações web utilizando tecnologias como Node.js, React e PostgreSQL.",
      companyName: "TechCo",
      cityName: "São Paulo",
      stateName: "São Paulo",
      updatedAt: new Date("2024-05-13"),
      createdAt: new Date("2024-05-10")
    },
    {
      id: 22,
      title: "Engenheiro de Software",
      description: "Desenvolvimento e manutenção de sistemas de software, participando de todas as fases do ciclo de vida do desenvolvimento.",
      companyName: "SoftDev",
      cityName: "Rio de Janeiro",
      stateName: "Rio de Janeiro",
      updatedAt: new Date("2024-05-14"),
      createdAt: new Date("2024-05-11")
    },
    {
      id: 23,
      title: "Analista de Dados",
      description: "Coleta, análise e interpretação de grandes volumes de dados para fornecer insights valiosos para a empresa.",
      companyName: "DataInsight",
      cityName: "Belo Horizonte",
      stateName: "Minas Gerais",
      updatedAt: new Date("2024-05-15"),
      createdAt: new Date("2024-05-12")
    },
    {
      id: 24,
      title: "Designer UX/UI",
      description: "Criação de interfaces de usuário intuitivas e agradáveis, focadas na experiência do usuário.",
      companyName: "DesignCraft",
      cityName: "Curitiba",
      stateName: "Paraná",
      updatedAt: new Date("2024-05-16"),
      createdAt: new Date("2024-05-13")
    },
    {
      id: 25,
      title: "Gerente de Projetos",
      description: "Planejamento, coordenação e execução de projetos, garantindo a entrega dentro do prazo e do orçamento.",
      companyName: "ProjectMgmt",
      cityName: "Brasília",
      stateName: "Distrito Federal",
      updatedAt: new Date("2024-05-17"),
      createdAt: new Date("2024-05-14")
    },
    {
      id: 26,
      title: "Analista de Segurança da Informação",
      description: "Implementação e monitoramento de políticas de segurança para proteger os sistemas de informação da empresa.",
      companyName: "SecureTech",
      cityName: "Porto Alegre",
      stateName: "Rio Grande do Sul",
      updatedAt: new Date("2024-05-18"),
      createdAt: new Date("2024-05-15")
    },
    {
      id: 27,
      title: "Especialista em Marketing Digital",
      description: "Desenvolvimento e implementação de estratégias de marketing digital para promover os produtos da empresa.",
      companyName: "MarketBoost",
      cityName: "Salvador",
      stateName: "Bahia",
      updatedAt: new Date("2024-05-19"),
      createdAt: new Date("2024-05-16")
    },
    {
      id: 28,
      title: "Engenheiro de Redes",
      description: "Projeto, implementação e manutenção de redes de computadores, garantindo alta disponibilidade e desempenho.",
      companyName: "NetWorks",
      cityName: "Recife",
      stateName: "Pernambuco",
      updatedAt: new Date("2024-05-20"),
      createdAt: new Date("2024-05-17")
    },
    {
      id: 29,
      title: "Analista Financeiro",
      description: "Análise de dados financeiros, preparação de relatórios e previsões para apoiar as decisões de negócios.",
      companyName: "FinAnalytics",
      cityName: "Fortaleza",
      stateName: "Ceará",
      updatedAt: new Date("2024-05-21"),
      createdAt: new Date("2024-05-18")
    },
    {
      id: 30,
      title: "Analista de Suporte Técnico",
      description: "Suporte técnico aos usuários, resolvendo problemas de hardware, software e rede.",
      companyName: "TechSupport",
      cityName: "Manaus",
      stateName: "Amazonas",
      updatedAt: new Date("2024-05-22"),
      createdAt: new Date("2024-05-19")
    },
    {
      id: 31,
      title: "Analista de Suporte Técnico",
      description: "Suporte técnico aos usuários, resolvendo problemas de hardware, software e rede.",
      companyName: "TechSupport",
      cityName: "Imperatriz",
      stateName: "Maranhão",
      updatedAt: new Date("2024-05-22"),
      createdAt: new Date("2024-05-19")
    },
    {
      id: 32,
      title: "Analista de Suporte Técnico",
      description: "Suporte técnico aos usuários, resolvendo problemas de hardware, software e rede.",
      companyName: "TechSupport",
      cityName: "Anamã",
      stateName: "Amazonas",
      updatedAt: new Date("2024-05-22"),
      createdAt: new Date("2024-05-19")
    }
  ];
    
  useEffect(() => {
    async function fetchData() {
      const jobsData = await getAllJobsList(); //Api e armazenar a lista original e uma editavel
      setJobs(jobsFake);
      setOriginalJobs(jobsFake);
    }
    fetchData();
  }, []);

  const handleSearch = (inputByName, inputByCity, inputByState) => {
    let filteredJobs;
  
    if (inputByName || inputByCity || inputByState) {
      //Fazer filtragem do jobs filtrados(nome, cidade e estado)
      filteredJobs = originalJobs.filter((job) => {
        const titleMatch = job.title.toLowerCase().includes(inputByName.toLowerCase());
        const cityMatch = job.cityName.toLowerCase().includes(inputByCity.toLowerCase());
        const stateMatch = job.stateName.toLowerCase().includes(inputByState.toLowerCase());
          
        return titleMatch && cityMatch && stateMatch;
      });
    } else {
      filteredJobs = originalJobs;
    }
  
    setJobs(filteredJobs);
  };

  return (
    <IndexStyle>
      <HeaderComponent
        onSearch={handleSearch}
        originalJobs={originalJobs}
        jobs={jobs}
        setJobs={setJobs}
      />
      <BodyArea jobs={jobs} />
      <Footer />
    </IndexStyle>
  );
}
