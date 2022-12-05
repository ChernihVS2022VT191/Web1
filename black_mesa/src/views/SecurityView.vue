<template>
  <div>
    <subtitle :msg="text1"/>
    <Quote :ava="image" :quote="text2" name="Отис Лори"/>
    <Before_and_after v-bind:images="images" v-bind:msg="text3"/>
    <Quote_with_image :ava="image2" :quote="text4" name="Барни Калхаун" :image="image3"/>
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
  name: 'SecurityView',
  components: {
    Block_with_text,
    Quote_with_image,
    Before_and_after,
    Quote,
    Subtitle,
    Scroll,
  },data(){return{
    text1: "Служба безопасности Чёрной Мезы — основной состав сотрудников в Чёрной Мезе. Вместе с персоналом научной" +
        " команды, они являются одними из ключевых сотрудников",
    text2: "Добро пожаловать в службу охраны BLACK MESA. Дабы попасть в список кандидатов, нужно подходить по множеству" +
        " критериев и даже те, кто не прошли итоговый экзамен, уже считаются элитными сотрудниками правопорядка.",
    text3: "Прежде чем заступить на службу, охранник должен отчитаться о своём прибытии, после чего получить оружие и" +
        " снаряжение. Проживают они в специальных помещениях, во внекомплексных общежитиях Зоны 8.",
    text4: "Отличный курс физ подготовки, здесь вас научат как выживать в экстренных ситуациях",
    text5: "Специально для сотрудников безопасности был построен кафетерий, не забудьте зайти!",
    image: require('@/assets/Otis.png'),
    image2: require('@/assets/Barney.png'),
    image3: "https://media.moddb.com/images/members/5/4214/4213492/profile/4CH2INS.png",
    image4: "https://images.stopgame.ru/news/2021/03/16/vNNnTaw.jpg",
    images:[
      "https://i.pinimg.com/736x/85/d4/b3/85d4b37faf76f9d2678a1c77e69afb24--half-life-cosplay.jpg",
      "https://www.gmod-fan.ru/uploads/posts/2013-11/1384703945_steamworkshop_webupload_previewfile_156852696_preview.jpg"
    ]
  }}
}
</script>

<style>
</style>
