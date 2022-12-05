<template>
  <div>
    <subtitle :msg="text1"/>
    <Quote :ava="image" :quote="text2" name="Илай Венс"/>
    <Before_and_after v-bind:images="images" v-bind:msg="text3"/>
    <Quote_with_image :ava="image2" :quote="text4" name="Айзек Кляйнер" :image="image3"/>
    <block_with_text :msg="text5" :image="image4"/>
  </div>

</template>

<script>
// @ is an alias to /src
import Quote from '@/components/Quite/Quote.vue'
import Subtitle from '@/components/Heading/Subtitle'
import Scroll from '@/components/Scroll/Scroll'
import Before_and_after from "@/components/Before_and_after/Before_and_after";
import Quote_with_image from "@/components/Quite/Quote_with_image";
import Block_with_text from '@/components/Block/Block_with_text'

export default {
  name: 'ScientistsView',
  components: {
    Block_with_text,
    Quote_with_image,
    Before_and_after,
    Quote,
    Subtitle,
    Scroll,
  },data(){return{
    text1: "В нашем комплексе работают люди всех специальностей. Область исследований простирается от молекулярной" +
    " физики и биологии до полётов в космос.",
    text2: "Добро пожаловать в научный персонал исследовательского центра BLACK MESA. У вас появляется уникальный шанс " +
        "сделать новое открытие ранее не возможное в условиях обычных лабораторий. Уверен вы не оставить свой след в истории" +
    " благдларя своей работе здесь.",
    text3: "Все полевые сотрудники Черной Мезы, проходят Курс Молодого Бойца, включающий в себя также и программу" +
        " обучения владения огнестрельным оружием. Вы можете увидеть как курс подготовки, созданный специально для " +
        "наших полевых сотрудников, повлиял на них",
    text4: "Наш комплекс готовится к запуску собственного спутника на ракете спроектированного и созданного нашими сотрудниками",
    text5: "Была построена новая ветка трамваев, дабы оптимизировать время всех наших сотрудников, наслаждайтесь экономией " +
        "личного времени!",
    image: "https://assets.mycast.io/characters/eli-vance-5578-normal.jpg?1563892097",
    image2: "https://phq.muddasheep.com/design/pics/artpic95_1.jpg",
    image3: "https://us.v-cdn.net/5021068/uploads/editor/73/q60evhb2fudv.jpg",
    image4: "https://indie-torrent.ru/_ld/7/34662481.jpg",
    images:[
      "https://i.ytimg.com/vi/DeRyHRHc6zw/maxresdefault.jpg",
      "https://img5.goodfon.ru/original/1920x1200/e/43/gordon-freeman-half-life-source-2-vzgliad-detali-ten-skafand.jpg"
    ]
  }}
}
</script>

<style>
</style>
