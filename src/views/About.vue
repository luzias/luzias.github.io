<template lang="pug">
#about
  router-link(to="/")
    .back 
      img.backicon(src="@/assets/img/back.svg")
      span Voltar
  .content
    h1 Sobre o Luzias
    p Mesmo que todas as mulheres tenham características e diferenças socioculturais que tornam as experiências únicas, Luzias trata de um assunto que faz parte da vida reprodutiva feminina.

    h2 O website transmídia Luzias nasceu com o objetivo de dar luz a um tema “obscuro”: o aborto. 

    p Idealizado por mulheres, esse é um trabalho experimental desenvolvido em 2019 na disciplina de Projeto Experimental II do curso de Jornalismo da Universidade Federal de Uberlândia, sob orientação da Profª Drª Vanessa Matos dos Santos e co-orientação da Profª Drª Mirna Tonus. 

    p Luzias é um trocadilho entre 'luz' e o nome feminino comum "Luzia", colocado no plural para remeter a uma situação que todas mulheres podem compartilhar.

    h3 Ficha técnica

    p 
      div Universidade Federal de Uberlândia - UFU
      div <b>Reitor:</b> Profº Drº Valder Steffen Júnior

    p 
      div Faculdade de Educação (FACED)
      div <b>Diretora:</b> Giovanna Ferreira Melo

    p 
      div Curso de Jornalismo
      div <b>Coordenação:</b> Profº Drº Marcelo Marques Araújo
    
    p 
      div Projeto Experimental II
      div <b>Orientação:</b> Profª Drª Vanessa Matos dos Santos
      div <b>Co-orientação:</b> Profª Drª Mirna Tonus

    p <b>Produção:</b> Ana Luiza Costa, Camila Carneiro, Carolina Fernandes Cunha e Mariana Marques

    p <b>Edição:</b> Ana Luiza Costa e Mariana Marques 
    
    p <b>Cinegrafia:</b> Ana Luiza Costa, Camila Carneiro, Carolina Fernandes Cunha e Mariana Marques

    p <b>Ilustração:</b> Vitória Malterre

    p <b>Programação:</b> Gabriela Neri

    p <b>Edição de áudio:</b> Marcelo Melazzo

    p <b>Edição de arte:</b> Fernando Melo 

    p 
      div <b>Imagens de apoio:</b> Videezy
      div <b>Trilha sonora:</b> Staring at the Sun - The 126ers (Biblioteca do Youtube)
    
</template>

<script>
export default {
  name: 'about',
};
</script>

<style lang="scss" scoped>

.content {
  width: 60vw;
  margin: 2em auto;
  font-size: 16px;
  line-height: 1.5;

  p::first-letter, div::first-letter {
    margin-left: 1.75em;
  }
}

h1 {
  font-family: "Bebas Neue";
  color: #FA7A5A;
  font-size: 48px;
  text-align: center;
}

h2 {
  font-family: "Bebas Neue";
  // color: #FA7A5A;
  font-size: 32px;
  border-left: 4px solid #FA7A5A;
  padding: 0 0.75em;
  margin-left: 8px;
}

</style>
