<template lang="pug">
#interview
  router-link(to="/")
    .back 
      img.backicon(src="@/assets/img/back.svg")
      span Voltar
  .content
    h1 A complexidade ética do aborto 

    p Duas posições parecem se destacar quando discutimos a questão do aborto politicamente hoje: os que se consideram “pró-vida” e os que se consideram “pró-escolha”. Ambas parecem ser irredutíveis em seus próprios campos. O professor de filosofia e ética da Universidade Federal de Uberlândia (UFU), <b>Alcino Bonella</b>, conversou conosco sobre essa dualidade de posições e a dificuldade dos projetos antagonistas se ouvirem mutuamente.
 
    p.block
      div.question
        span.id Luzias: 
        span No seu ponto de vista, o aborto é uma questão complexa?
      div
        span.id Alcino: 
        span Eu acho que é complexo, eu acho que <b>não tem uma resposta fácil quanto à ética do aborto e nem quanto ao ato de abortar</b>. O pensamento que as pessoas podem ter sobre o aborto, sejam pessoas comuns ou pessoas que se dedicam a estudar o tema, deve levar em conta a complexidade do assunto.
 
    p.block
      div.question 
        span.id L: 
        span Na produção do documentário, fomos às ruas fazer uma pesquisa de público e perguntamos às pessoas “você é contra o aborto? Se sim, por quê?”. E havia opções como “influência familiar”, “influência religiosa” etc. O que surpreende foi que muitas pessoas responderam “Não sei”, várias vezes dizendo “eu só sou contra, não sei porquê”. Por que você acredita que há respostas assim? Seria a influência cristã do país arraigada nos indivíduos, mesmo que eles não se considerem religiosos?
      div 
        span.id A: 
        span Do ponto de vista ético, a situação é um pouco mais complexa. <b>Eu acho muito razoável ser contra o aborto.</b> Por exemplo, eu sou a favor do direito ao aborto, porque se o feto ainda não sente nada, ele não sente dor ao ser morto. Mas ele vai passar a sentir dor no futuro. Eu sou a favor do direito ao aborto porque a mulher tem que ser respeitada na sua privacidade. Mas a mulher pode muito bem pensar que o feto também tem a sua privacidade. Eu posso ser a favor do aborto porque o feto ainda não se tornou uma pessoa capaz de sentir, mas eu não gostaria de ser abortado. Então eu posso usar como argumento contra o aborto a regra de ouro<b>*</b>: assim como a gente não aceita que fôssemos, por exemplo, roubados quando criança, então a gente não aceita ser roubado hoje. Eu não aceito ser morto hoje, então eu também não aceitaria ser morto naquela época. Então alguns colocam na balança os benefícios que o feto terá e os benefícios que a mulher terá. E aí acham que tipo “o que são 9 meses de incômodo, frustração se comparados a uma vida”. Então, esses argumentos tornam-me mais cético de dizer que é um problema fácil de resolver. Esse é um dos assuntos mais difíceis. É por isso que a população que não está muito envolvida na militância, tanto pró-vida quanto pró-mulher, é mais razoável e sensata que a gente. Quando elas conversam um pouco mais, tem muita gente que é pró-vida mas que é completamente a favor o aborto de anencéfalo. Se você acompanhar os debates, os religiosos que são pró-vida também são contra o aborto de anencéfalos, porque “ele está vivo, ele é um ser humano”. Mas as pessoas comuns pensam assim “espera aí, mas qual é mesmo o caso?”, “o caso é que ele é anencéfalo, ele vai morrer”, aí a pessoa fala “ah, mas então pode né”. As pessoas são muito sensatas. <b>Quando elas dizem que não sabem, elas provavelmente não estão conseguindo verbalizar algumas dessas intuições</b> que eu acabei de te falar.
 
    p.block
      div.question
        span.id L: 
        span Por que temos essas intuições?
      div 
        span.id A: 
        span Porque a gente tem uma vida cheia de problemas específicos. Temos problemas relacionados a mentir, a distribuir recursos e temos problemas quanto a salvar ou tirar a vida, por exemplo. O aborto é em relação a salvar ou tirar a vida. E então <b>temos um conjunto de ideias éticas que a gente mobiliza</b> e a primeira resposta que a gente tem ou as respostas mais imediatas que a gente tem, chamamos de respostas intuitivas, estamos usando a <b>intuição</b>. E ela pode ser a resposta boa ou correta. Mas a gente não poderia parar na intuição. Então as pessoas usam isso, mas como elas estão na vida real e não podem parar e ficar pensando com detalhe, elas respondem que não sabem, elas só sentem. É a sua intuição mais profunda.

    p.block
      div.question 
        span.id L: 
        span Tendo em mente a complexidade da questão, como o senhor apontou, você acredita ser possível haver um diálogo entre estes dois “lados”? Pró-vida e pró-escolha?
      div 
        span.id A: 
        span Sim, eu acredito que é possível e que é um dever de cada pessoa, pelo menos de cada pessoa que tenha a capacidade de se informar. E é possível ambos os lados estarem abertos à complexidade do assunto e, se acham que é simples, <b>a complexidade de ouvir o outro lado e buscar informações baseadas na ciência e não só aquelas que favorecem o nosso lado.</b> A tendência quando acontece isso é que as pessoas aprendam com os lados e <b>amenizem as suas posições</b>. Quando um lado não ameniza é porque não dialogou direito. Só tem um defeito nessa minha posição: nos últimos anos com as mídias sociais, se tornou quase que inexistente um debate público que sirva para amenizar as posições radicais.

    p.block
      div.question  
        span.id L: 
        span Principalmente na era das mídias digitais, como você ressaltou, há uma grande dificuldade de ouvir o outro. Por quê?
      div 
        span.id A: 
        span Eu tendo a dizer que é porque nós ainda somos muito mal formados em termos de desenvolvimento escolar e cultural. Agora, nós precisamos desenvolver a capacidade de autocrítica e valorizar uma pessoa que tem a opinião contrária. Porque se você acha que tem que ter a autocrítica para não se autoiludir, <b>a posição contrária deixa de ser inimiga.</b>

    p *Também conhecida como <i>ética da reciprocidade</i>. É regra de ouro porque ela aparece em várias culturas, de épocas e locais diferentes e significa que cada um deve tratar os outros como gostaria que ele próprio fosse tratado. 

    img(src="@/assets/img/entrevista-etica.svg")
    div.credits Ilustração: rawpixel.com 
</template>

<script>
export default {
  name: 'entrevistaetica',
};
</script>

<style lang="scss" scoped>

.content {
  width: 60vw;
  margin: 2em auto;
  font-size: 16px;
  line-height: 1.5;
  font-family: "Tinos";

  p::first-letter, div::first-letter {
    margin-left: 1.75em;
  }

  img {
    margin-top: 4em;
    width: 100%;
  }
}

.credits {
  text-align: center;
  font-size: 12px;
}

span.id {
  font-weight: 700;
  color: #FA7A5A;
  font-size: 18px;
}

div.question {
  font-weight: 700;
  margin-bottom: 0.5em;
  font-size: 18px;
}

h1 {
  font-family: "Bebas Neue";
  color: #FA7A5A;
  font-size: 48px;
  text-align: center;
}

</style>
