function changeContent(topico) {
    let contentSection = document.getElementById("content");
    contentSection.innerHTML = "";
  
    let Paragrafo = document.createElement("p");
    Paragrafo.className = "mb-5 w-[620px]";
  
    if (topico === "volume") {
      Paragrafo.innerHTML =
        "O volume se refere à quantidade imensa de dados gerados a cada segundo. Com a expansão da internet, redes sociais, dispositivos móveis, sensores IoT (Internet das Coisas), o volume de dados gerados cresceu exponencialmente. As empresas e organizações enfrentam o desafio para armazenar, processar e analisar dados, exigindo tecnologias avançadas de armazenamento e de computação.";
    } else if (topico === "variedade") {
      Paragrafo.innerHTML =
        "Variedade indica a diversidade dos tipos de dados. Diferente dos dados estruturados tradicionais que se encaixam em tabelas (como os dados em bancos de dados SQL), o Big Data inclui dados semiestruturados e não estruturados, como e-mails, mensagens de texto, vídeos, fotos, dados de sensores e posts em redes sociais. A variedade de dados exige novas abordagens para armazenamento e análise, já que os métodos tradicionais não são suficientes para lidar com essa diversidade.";
    } else if (topico === "velocidade") {
      Paragrafo.innerHTML =
        "Velocidade se refere à rapidez com que os dados são gerados e precisam ser processados. Por exemplo, em mercados financeiros, dados em tempo real são cruciais para tomar decisões de compra e venda de ações. A velocidade com que os dados chegam e são processados pode influenciar diretamente a capacidade de uma organização de reagir a mudanças e eventos em tempo real, como nas redes sociais, onde tendências podem surgir e desaparecer rapidamente.";
    } else if (topico === "veracidade") {
      Paragrafo.innerHTML =
        "Veracidade trata da qualidade e da confiabilidade dos dados. Como grande parte dos dados gerados são imprecisos, incompletos ou ambíguos, a veracidade é uma preocupação central no Big Data. Informações incorretas ou enganosas podem levar a conclusões erradas e decisões desfavoráveis. Assim, é importante garantir que os dados sejam limpos e precisos para que as análises sejam confiáveis.";
    } else if (topico === "valor") {
      Paragrafo.innerHTML =
        "Valor refere-se à utilidade dos dados. Não importa o quanto de dados você tem ou quão rápido você pode processá-los, se os dados não trazem insights ou não podem ser usados para tomar decisões estratégicas, eles não têm valor. O objetivo final do Big Data é extrair valor desses dados para melhorar produtos, serviços, operações ou para obter uma vantagem competitiva.";
    }
  
    contentSection.appendChild(Paragrafo);
  }