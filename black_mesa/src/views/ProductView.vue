<template>
  <ProductsLine v-bind:products="products"/>
</template>

<script>
import ProductsLine from "@/components/Product/ProductsLine"
export default {
  name: "ProductView",
  components: {
    ProductsLine
  },
  data() {
    return {
      products: [
        {image: "https://vse-footbolki.ru/image/catalog/vsm/0/0/601/601339/previews/people_1_krujka_front_white_700.jpg",
          title: "Супер кружка", price: "400"},
        {image: "https://img.printez.ru/products/1/17/177/177473/MTc3NDczLTEwOC0xLTItem9vbV9zbQ==.jpg",
          title: "Мужская футболка Black Mesa (черная)", price: "990"},
        {image: "https://www.mydevice.ru/assets/gallery/72/hl2vortigauntplush01.jpg",
          title: "Вортигонт", price: "1450"},
        {image: "https://avatars.mds.yandex.net/i?id=e8a352ad029e2abb3240b2315ad9d2de-4565891-images-thumbs&n=13",
          title: "Гордон Фриман", price: "4550"},
        {image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8666be85-2722-4ce3-8d98-a30b6b47d15a/dcjcspx-b05d87bc-5bf1-43a8-adf7-4e9093f3f756.jpg/v1/fill/w_1024,h_768,q_75,strp/gordon_freeman_custom_funko_pop_by_warriorcustomfigures_dcjcspx-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzY4IiwicGF0aCI6IlwvZlwvODY2NmJlODUtMjcyMi00Y2UzLThkOTgtYTMwYjZiNDdkMTVhXC9kY2pjc3B4LWIwNWQ4N2JjLTViZjEtNDNhOC1hZGY3LTRlOTA5M2YzZjc1Ni5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.t0E__4mfBK6EZ-CJjEhtDER73tRDmmXi_PH0VeJ7MAI",
          title: "Гордон Фриман funko pop", price: "2000"},

        {image: "http://www.diy.ru/media/st/7f/43/8d/2b75c99d956ef7c6d8b7beea677d98c975.jpg",
          title: "Хедкраб (шапка)", price: "1499"},
        {image: "https://cdn1.ozone.ru/s3/multimedia-q/6063267722.jpg",
          title: "Брелок Black Mesa", price: "299"},
        {image: "https://vse-footbolki.ru/image/catalog/vsm/0/1/1839/1839221/previews/people_1_notepad_front_white_700.jpg",
          title: "Блокнот Black Mesa (Черный)", price: "390"},
        {image: "https://sun9-82.userapi.com/impg/3pe8HZyg7jTWJDHpmG8Ku_K11Hm0l8ZShY_Eew/juD0ZYiowZc.jpg?size=840x1278&quality=96&sign=c799ce127b63aa1a6909e00e0aa69ca6&type=album",
          title: "Пиво Kirin Ichiban", price: "590"},

        {image: "https://sun9-86.userapi.com/impg/3cBeeqvmLYNRzwS6GSgIHVwaC-2SGvWf4DGvsg/z6VR-KC2ZvE.jpg?size=840x1278&quality=96&sign=9b9745ad268734ac20552fc6dd9db280&type=album",
          title: "Пиво Kirin Ichiban (first press, black)", price: "890"},
        {image: "https://sun9-81.userapi.com/impg/roBLk5kT_pHPDofpSm89Iov6M3Xz-fQJddz4Fw/i-SLLPnmxmo.jpg?size=840x1278&quality=96&sign=463886f8a75303e4b39e8d6b555f58e6&type=album",
          title: "Пиво Kirin Ichiban (белое)", price: "490"},
        {image: "https://sun9-68.userapi.com/impg/TJvcarBbmJoYNKHwS-1odL2jf3cvIWyZsBgMnw/FwNt0c1N9eo.jpg?size=840x1278&quality=96&sign=86eb6a277cb5cfe5546c36ce291e1ae8&type=album",
          title: "Упаковка пива Kirin Ichiban (first press)", price: "1590"},
        {image: "https://sun9-65.userapi.com/impg/YLF7yIiTetZ95CVhYWjPj_vHwuNCLjrvOxsEbw/nc7gIxFlCyw.jpg?size=840x1278&quality=96&sign=e308b30ec0261a4ca93456452b0f6850&type=album",
          title: "Пиво Kirin Ichiban (очень светлое)", price: "390"},

        {image: "https://sun9-87.userapi.com/impg/AfdYRpd0l7eQxF3cRwQQ_ItzB0RjDS1LYTGVAQ/ilymVI7jcYo.jpg?size=840x1278&quality=96&sign=ceec90538270eaa461bade9067abdab9&type=album",
          title: "Упаковка пива Kirin Ichiban (светлое)", price: "1990"},
        {image: "https://sun9-72.userapi.com/impg/DLzTtGZ1G9rRROCFzSP5dm5MFif1i3l1EFwUmw/U_1JSZEAdRk.jpg?size=840x1278&quality=96&sign=210ea7511cf3ecd0f4d26f0b4070759f&type=album",
          title: "Пиво Sapporo (premium)", price: "990"}
      ]
    }
  }
}
</script>