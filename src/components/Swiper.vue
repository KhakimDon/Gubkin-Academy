<template>
    <swiper :slidesPerView="1" :spaceBetween="30" :freeMode="true" :modules="modules" class="mySwiper">
        <swiper-slide v-for="item of this.feedbacks" :key="item.id">
            <div class="h-[145px] sm:h-[50px] sm:w-[50px] mr-[25px] sm:mr-[15px] rounded-[50%] w-[145px] bg-[#D9D9D9]">
                <img class="h-[100%] w-[100%] object-cover" :src="item.img" alt="image">
            </div>
            <div class="flex flex-col items-start flex-1">
                <p class="font-[gotempro] text-[15px] font-[700] sm:text-[12px] mb-[2px] text-[#474747]">{{ item.date_ru
                    }} </p>
                <p class="text-blackl flex items-center font-[gotempro] text-[20px] sm:text-[16px] font-[700]">
                    {{ item[$t("seventh.name")] }}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6 ml-[6px] text-[#D34D26]">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                    </svg>
                </p>
                <div class="flex gap-[1px]">
                    <svg v-for="i of 5" :key="i.id" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-4 h-4 fill-[yellow] text-[yellow] mt-[3px]">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>

                </div>
                <p
                    class="flex-1 text-left mt-[15px] sm:mt-[5px] font-[400] text-[16px] sm:text-[10px] sm:leading-[12px] font-[gotempro] leading-[15px]">
                    {{ item[$t("seventh.text")] }}
                </p>
            </div>
        </swiper-slide>
    </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/free-mode';

// import required modules
import { FreeMode } from 'swiper/modules';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [FreeMode],
        };
    },
    data() {
        return {
            feedbacks: [
                {
                    img: "https://media-public.canva.com/N2Y1c/MAEbiyN2Y1c/1/t.png",
                    date_ru: "01.04.2024",
                    name_ru: "Дилшода Рахимова",
                    name_en: "Dilshoda Rakhimova",
                    name_uz: "Dilshoda Raximova",
                    uz: "Gubkin Akademiyasi o'quv markazi mening kutganimdan oshib ketdi! O'qituvchilar o'quvchilarni qanday qilib qiziqtirishni bilishadi va ularning o'qitish usuli haqiqatan ham samarali. Trening natijalaridan juda mamnunman!",
                    ru: `Учебный центр Gubkin Akademy превзошел мои ожидания! Преподаватели знают, как заинтересовать студентов, и их педагогический подход действительно эффективен. Очень доволен результатами обучения!`,
                    en: "The Gubkin Akademy training center exceeded my expectations! The teachers know how to keep students interested and their teaching approach is really effective. I am very pleased with the results of the training!",
                },
                {
                    img: "https://media-public.canva.com/N2Y1c/MAEbiyN2Y1c/1/t.png",
                    date_ru: "17.01.2024",
                    name_ru: "Асаль Султанова",
                    name_uz: "Asal Sultonova",
                    name_en: "Asal Sultanova",
                    ru: `Мне нравится, как в учебном центре Gubkin Akademy организовано обучение. Преподаватели профессионалы своего дела, их подход к обучению делает уроки интересными и запоминающимися. Спасибо образование!`,
                    en: `I like the way training is organized at the Gubkin Akademy training center. The teachers are professionals in their field, their approach to teaching makes the lessons interesting and memorable. Thanks education!`,
                    uz: `Menga Gubkin akademiyasi o'quv markazida mashg'ulotlarning tashkil etilishi yoqadi. O'qituvchilar o'z sohasining professionallari, ularning darsga yondashuvi darslarni qiziqarli va esda qolarli qiladi. Ta'limga rahmat!`,
                },
                {
                    img: "https://media-public.canva.com/N2Y1c/MAEbiyN2Y1c/1/t.png",
                    date_ru: "21.12.2023",
                    name_ru: "Имона Шарипова",
                    name_uz: "Imona Sharipova",
                    name_en: "Imona Sharipova",
                    ru: `Gubkin Akademy - это место, где развивают не только знания, но и личность. Учители замечательно подготовлены и доступно объясняют сложные вещи. Рекомендую всем!`,
                    uz: `Gubkin akademiyasi nafaqat bilim, balki shaxsiyat ham rivojlantiriladigan joy. O'qituvchilar ajoyib tarzda tayyorlangan va murakkab narsalarni aniq tushuntirishgan. Hammaga tavsiya qilaman!`,
                    en: `Gubkin Akademy is a place where not only knowledge, but also personality is developed. The teachers are wonderfully prepared and explain complex things clearly. I recommend to all!`,
                },
                {
                    img: "https://media-public.canva.com/N2Y1c/MAEbiyN2Y1c/1/t.png",
                    date_ru: "08.11.2023",
                    name_ru: "Денис Иванов",
                    name_uz: "Denis Ivanov",
                    name_en: "Denis Ivanov",
                    ru: `Учебный центр Gubkin Akademy - это место, где учат не только материалу, но и креативному мышлению. Преподаватели вдохновляют на новые открытия, а методы обучения делают уроки увлекательными и понятными!`,
                    uz: `Gubkin akademiyasi o'quv markazi nafaqat moddiy, balki ijodiy fikrlashni ham o'rgatadigan joy. O'qituvchilar yangi kashfiyotlar uchun ilhomlantiradi va o'qitish usullari darslarni qiziqarli va tushunarli qiladi!`,
                    en: `The Gubkin Akademy training center is a place where they teach not only material, but also creative thinking. The teachers inspire new discoveries, and the teaching methods make the lessons fun and understandable!`,
                },
            ]
        }
    }
};
</script>
<style>
.swiper {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    height: 205px;
    width: 905px !important;
    text-align: center;
    background: linear-gradient(90deg, #8F8F8F, #5E5E5E);
    font-size: 18px;
    border: 1px solid #C0C0C0;
    border-radius: 5px;
    /* Center slide text vertically */
    display: flex;
    padding: 30px;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.mySwiper {
    max-width: 1200px !important;
    overflow: visible !important;
}
</style>