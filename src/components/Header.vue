<script lang="ts">

export default {
    data() {
        return {
            english: document.cookie == 'locale=en',
            russian: document.cookie == 'locale=ru',
            uzbek: document.cookie == 'locale=uz',
        }
    },
    methods: {
        changeLanguage(item) {
            item == "uz" ? document.cookie = 'locale=uz' : false
            item == "ru" ? document.cookie = 'locale=ru' : false
            item == "en" ? document.cookie = 'locale=en' : false
            console.log(document.cookie);
            this.english = document.cookie == 'locale=en'
            this.russian = document.cookie == 'locale=ru'
            this.uzbek = document.cookie == 'locale=uz'
        }
    }
}
</script>

<template>
    <header
        class="sm:px-[10px] h-[75px] header-background fixed flex w-[100%] z-[99] top-0 left-[0] border-b-[0.5px] border-[#1E1E1E] font-[gotempro] ">
        <div class="max-w-[1200px] w-[100%] h-[100%] mx-auto flex justify-between items-center">
            <img class="h-[38px]" src="../assets/gubkinLogo.png" alt="image">
            <nav class="sm:hidden flex navigation items-center gap-[38px]">
                <a class="uppercase text-black text-[16px] font-[500] font-[gotempro]" href="#"> {{ $t("header.home")  }} </a>
                <a class="uppercase text-black text-[16px] font-[500] font-[gotempro]" href="#aboutus">{{ $t("header.about")  }} </a>
                <a class="uppercase text-black text-[16px] font-[500] font-[gotempro]" href="#ourcourses">{{ $t("header.course")  }} </a>
                <a class="uppercase text-black text-[16px] font-[500] font-[gotempro]" href="#filial">{{ $t("header.filial")  }} </a>
                <a class="uppercase text-black text-[16px] font-[500] font-[gotempro]" href="#sponsors">{{ $t("header.sponsors")  }} </a>
                <a class="uppercase text-black text-[16px] font-[500] font-[gotempro]" href="#contact">{{ $t("header.contacts")  }} </a>
            </nav>
            <div class="flex items-center">
                <div class="dropdown">
                    <div tabindex="0" role="button" class="m-1 sm:mr-[15px] mr-[30px]  border-b-[1px] border-[black] text-black uppercase">{{  $i18n.locale }}</div>
                    <ul tabindex="0"
                        class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-[max-content]">
                        <li class="border-[1px] border-[#0000004d] rounded-[10px]" :class="{active:!this.uzbek}" @click="changeLanguage('uz'), $i18n.locale = 'uz'"><a class="font-[700] text-[14px]">UZ <img
                                    class="h-[20px] w-[30px]"
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/1280px-Flag_of_Uzbekistan.svg.png"
                                    alt="Flag_of_Uzbekistan"></a></li>
                        <li class="border-[1px] border-[#0000004d] rounded-[10px]" :class="{active:!this.russian}" @click="changeLanguage('ru'), $i18n.locale = 'ru'"><a class="font-[700] text-[14px]">RU <img
                                    class="h-[20px] w-[30px]"
                                    src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/1200px-Flag_of_Russia.svg.png"
                                    alt="1200px-Flag_of_Russia"></a></li>
                        <li class="border-[1px] border-[#0000004d] rounded-[10px]" :class="{active:!this.english}" @click="changeLanguage('en'), $i18n.locale = 'en'"><a class="font-[700] text-[14px]">EN <img
                                    class="h-[20px] w-[30px]"
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1200px-Flag_of_the_United_Kingdom_%281-2%29.svg.png"
                                    alt="1200px-Flag_of_Russia"></a></li>
                    </ul>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="#D34D26" viewBox="0 0 24 24" stroke-width="0"
                    stroke="currentColor" class="h-[21px] mr-[2px]">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                <a class="text-[16px] font-[600] text-[#D34D26]" href="tel:+998900006444"> (90) 000 64 44</a>


                <div class="dropdown dropdown-end">
                    <div tabindex="1" role="button" class=" m-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6 ml-[15px] sm:block hidden text-[#D34D26]">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                        </svg>
                    </div>
                    <ul tabindex="1"
                        class="dropdown-content border-[1px] z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a class="uppercase border-b-[1px] border-[#d34e263c] rounded-[0px] text-[16px] font-[500] font-[gotempro]"
                                href="#">Главное</a></li>
                        <li><a class="uppercase border-b-[1px] border-[#d34e263c] rounded-[0px] text-[16px] font-[500] font-[gotempro]"
                                href="#aboutus">О нас</a></li>
                        <li><a class="uppercase border-b-[1px] border-[#d34e263c] rounded-[0px] text-[16px] font-[500] font-[gotempro]"
                                href="#ourcourses">курсы</a>
                        </li>
                        <li><a class="uppercase border-b-[1px] border-[#d34e263c] rounded-[0px] text-[16px] font-[500] font-[gotempro]"
                                href="#filial">филиал</a></li>
                        <li><a class="uppercase border-b-[1px] border-[#d34e263c] rounded-[0px] text-[16px] font-[500] font-[gotempro]"
                                href="#sponsors">Наши
                                партнеры</a></li>
                        <li><a class="uppercase text-[16px] font-[500] font-[gotempro]" href="#contact">Контакты</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped>
.active{
    border: none !important;
}
.header-background {
    background: rgba(255, 255, 255, 0.508);
    backdrop-filter: blur(20px);
}
</style>
