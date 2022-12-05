<template>
  <div class="home backg">
    <Heading :msg="text2" :image="image2"/>
    <subtitle :msg="text1"/>
    <quote :ava="image" quote="Добро пожаловать в исследовательский комплекс BLACK MESA. Сами вы его выбрали
           или его выбрали за вас — это лучший комплекс из оставшихся. Я такого высокого мнения о BLACK MESA, что
           решил разместить свою администрацию здесь, в секторе D, столь заботливо предоставленной нашими Покровителями.
           Я горжусь тем, что называю BLACK MESA своим домом." name="Уолесс Бринн"/>
    <Scroll v-bind:images="images1" v-bind:msg="text3"/>
    <Scroll v-bind:images="images2" v-bind:msg="text4"/>
  </div>

</template>

<script>
// @ is an alias to /src
import Quote from '@/components/Quite/Quote.vue'
import Subtitle from '@/components/Heading/Subtitle'
import Heading from '@/components/Heading/Heading'
import Scroll from '@/components/Scroll/Scroll'



export default {
  name: 'HomeView',
  components: {
    Quote,
    Subtitle,
    Heading,
    Scroll
  },data(){return{
    text1: "Black Mesa — «Чёрная столовая гора») — американская исследовательская корпорация, штаб-квартира" +
    " которой расположена в Научно-исследовательском комплексе Чёрная Меза в пустыне Нью-Мексико.",
    text2: "Добро пожаловать в исследовательский комплекс BLACK MESA",
    text3: "В нашем комплексе работают люди всех специальностей. Область исследований простирается от молекулярной" +
        " физики и биологии до полётов в космос.",
    text4: "Служба безопасности Чёрной Мезы — основной состав сотрудников в Чёрной Мезе. Вместе с персоналом научной" +
        " команды, они являются одними из ключевых сотрудников. Сотрудники Службы безопасности встречаются во всех" +
        " секторах Чёрной Мезы. Их задача — надзор в области безопасности в комплексе. Они работают в семь смен," +
        " соответствующих службе в различных секторах комплекса.",
    image: require('@/assets/brin.jpg'),
    image2: require('@/assets/BlackMesaWithFon.png'),
    images1:[
      "https://us.v-cdn.net/5021068/uploads/editor/73/q60evhb2fudv.jpg",
      "https://cdn.shazoo.ru/113080_gsjJLnqNhS_r8tnoiv.png",
      "https://indie-torrent.ru/_ld/7/34662481.jpg",
      "https://media.moddb.com/images/mods/1/15/14206/Screen5.png",
      "https://cdnb.artstation.com/p/assets/images/images/012/661/117/medium/silvertm-fin16.jpg?1535901856","https://cdnb.artstation.com/p/assets/images/images/012/661/157/large/silvertm-fin14.jpg?1535901876",
      "https://i.ytimg.com/vi/DeRyHRHc6zw/maxresdefault.jpg"
    ],
    images2:[
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/893b9bdd-3dd4-45e2-b42d-5d0e26b22dc0/d2iol2e-32cfe790-226a-46a9-9d34-fda915ca1594.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl0sIm9iaiI6W1t7InBhdGgiOiIvZi84OTNiOWJkZC0zZGQ0LTQ1ZTItYjQyZC01ZDBlMjZiMjJkYzAvZDJpb2wyZS0zMmNmZTc5MC0yMjZhLTQ2YTktOWQzNC1mZGE5MTVjYTE1OTQuanBnIn1dXX0.YeYLYLIDi9JyI3Q0Q-dNGSWVwgiGLY9SjQIZiqw2tlw",
      "https://cdnb.artstation.com/p/assets/images/images/000/206/995/large/ivan-vavilov-guard.jpg?1410855361",
      "https://steamuserimages-a.akamaihd.net/ugc/90477725532741628/658381BECBACED2EAB14D856952624A9469E1075/?imw=512&amp;imh=288&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true",
      "https://i.redd.it/i1njm45ieo1z.jpg",
      "https://steamuserimages-a.akamaihd.net/ugc/948453728018929767/A0E0B40C151C7126C0E82B8257FC7CF8FFAE0DED/",
      "https://www.gmod-fan.ru/uploads/posts/2013-11/1384703945_steamworkshop_webupload_previewfile_156852696_preview.jpg"
    ]
  }}
}
</script>

<style>
.home {background: url('https://media.moddb.com/images/games/1/80/79536/2_1.1.jpg')}
.backg{
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-clip: content-box;
  background-size: cover;
}
</style>
