<script lang="ts">
import './style.css'
import Header from "./components/Header.vue"
import Swiper from './components/Swiper.vue'
import axios from "axios"
export default {
  components: {
    Header,
    Swiper
  },
  data() {
    return {
      anim: false,
      text: "",
      number: "+998 ",
      token: "6441441973:AAF8ONlafB4gUsqF9CQW2dLobTHrA-OaD-s",
      chatId: "-4103620426",
    }
  },
  methods: {
    async send() {
      let message =
        `
      Новая заявка ❗️ \n Имя: ${this.text} 🙂 \n Телефон: ${this.number} ☎️
      `
      let api = `https://api.telegram.org/bot${this.token}/sendMessage?chat_id=${this.chatId}&text=${message}`

      await axios.post(api)
      this.text = ''
      this.number = ''

    }
  },
  mounted() {
    document.cookie = "locale=ru"
    document.querySelector("body").onscroll = () => {
      if (pageYOffset > document.querySelector(".third-section").getBoundingClientRect().height + document.querySelector(".second-section").getBoundingClientRect().height - 60) {
        this.anim = true
      } else {
        this.anim = false
      }


    }

  }
}
</script>

<template>
  <main>
    <Header />
    <section
      class="second-section z-[10] relative h-[738px] sm:h-[max-content] sm:pb-[30px] w-[100%] mt-[75px] overflow-hidden">
      <div class="flex flex-col items-center pt-[45px] max-w-[1200px] mx-auto relative">

        <h3
          class="sm:hidden flex items-center w-[max-content] sm:w-[90%] mx-auto text-[40px] sm:text-[30px] font-[400] font-[atypMedium]">
          <img class="h-[46px] mr-[10px] sm:h-[25px]" src="./assets/firstscreenTitle.png" alt="image">
          {{ $t("one.title") }}
          <!-- <span class="text-[#D34D26] text-[40px] font-[400] mx-[10px] sm:text-[30px] font-[atypMedium]">атом!</span> -->
        </h3>

        <h3
          class="sm:flex hidden text-center items-start leading-[30px] w-[max-content] sm:w-[90%] mx-auto text-[40px] sm:text-[30px] font-[400] font-[atypMedium]">
          <img class="h-[46px] sm:h-[25px]" src="./assets/firstscreenTitle.png" alt="image">
          <p>{{ $t("one.title") }} </p>
        </h3>

        <img class="mt-[20px] h-[310px] sm:h-[initial] sm:w-[90%]" src="./assets/logo.png" alt="image">
        <div
          class="sitata max-w-[828px] sm:z-[999] sm:w-[95%] sm:text-[14px] rounded-[5px] text-black w-[100%] pt-[13px] px-[20px] mt-[55px] min-h-[107px] text-[16px] font-[gotempro] font-[400]">
          {{ $t("one.text") }} <br> <a href="#application" class="text-[#D34D26] underline cursor-pointer">{{
            $t("one.add") }}
          </a>
        </div>
        <a href="#application"
          class="flex block w-[323px] cursor-pointer items-center font-[gotempro] font-[1000] p-[12px] pr-[15px] mt-[40px] border-[#D34D26] border-[2px] rounded-[8px]">
          <p class="mr-[10px]">
            {{ $t("one.sub") }}
          </p>
          <svg class="h-[40px]" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0.458879 1.04335C0.16506 1.33726 9.03347e-07 1.73583 8.85181e-07 2.15142C8.67015e-07 2.56701 0.16506 2.96558 0.458879 3.25949L8.21692 11.0175L0.458879 18.7756C0.173386 19.0712 0.0154125 19.4671 0.018984 19.878C0.0225545 20.2889 0.187384 20.682 0.47797 20.9726C0.768557 21.2632 1.16165 21.428 1.57259 21.4316C1.98352 21.4352 2.37942 21.2772 2.67501 20.9917L11.5411 12.1256C11.8349 11.8317 12 11.4331 12 11.0175C12 10.6019 11.8349 10.2034 11.5411 9.90946L2.67501 1.04335C2.38111 0.749531 1.98253 0.584472 1.56695 0.584472C1.15136 0.584472 0.752788 0.749531 0.458879 1.04335Z"
              fill="#D34D26" />
          </svg>
        </a>
      </div>
    </section>
    <section id="aboutus" class="top-[75px] bg-black z-[20] overflow-hidden third-section">
      <div class="max-w-[1200px] z-[11] mx-auto pt-[30px] pb-[150px] sm:pb-[100px]">
        <h2 class="text-[81px] sm:text-[50px] text-center uppercase font-[atypBold] mb-[20px] text-white"><span
            class="text-[#D34D26]">{{ $t("second.title") }}</span> {{ $t("second.title2") }}</h2>
        <div class="text-white font-[gotempro] text-[18px] sm:w-[90%] sm:mx-auto sm:text-[14px] textshadow">
          <p class="mb-[30px]">
            {{ $t("second.one") }}
          </p>
          <p class="mb-[30px]">
            {{ $t("second.two") }}
          </p>
          <p class="mb-[30px]">
            {{ $t("second.three") }}
          </p>
          <p class="mb-[30px]">
            {{ $t("second.four") }}
          </p>
        </div>
      </div>

    </section>
    <div class="gradi"></div>
    <section id="ourcourses" class="course  bg-[white] pt-[80px] pb-[100px] relative">
      <img id="grad" class="absolute h-[557px] sm:max-h-[300px] left-[-200px] top-[-12px] translate-y-[-50%] "
        src="./assets/coursedecor1.png" alt="image">
      <h3 class="text-center mb-[25px] font-[atypBold] uppercase font-[1000] text-[81px] sm:text-[40px]">
        <span class="text-[#D34D26]"> {{ $t("third.title") }}</span>
        {{ $t("third.title2") }}
      </h3>
      <div class="max-w-[1200px] gap-[40px] w-[100%] sm:justify-center mx-auto flex flex-wrap">
        <div
          class="blurss sm:h-[max-content] h-[249px] sm:px-[10px] sm:py-[15px] px-[20px] py-[18px] shadow-option border-[1px] border-[#D34D26] sm:max-w-[95%] rounded-[5px] flex-1 min-w-[40%] sm:min-w-[50%]">
          <div class="flex items-center">
            <img class="sm:h-[30px] mr-[10px]" src="./assets/1.png" alt="image">
            <h4 class="uppercase font-[atypBold] font-[1000] text-[33px] mt-[15px] sm:text-[18px]">{{
              $t("third.english.title") }} <span class="text-[#D34D26]">(IELTS/cefr)</span></h4>
          </div>
          <p class="font-[gotempro] font-[400] mt-[10px] text-[18px] sm:text-[14px] leading-[21px]">{{
            $t("third.english.text") }} </p>
          <a href="#application"
            class="btn bg-[#D34D26] px-[15px] py-[8px] font-[atypBold] text-white uppercase mt-[15px] rounded-[5px]">{{
              $t("third.sign") }} </a>
        </div>

        <div
          class="blurss sm:min-w-[50%]  sm:h-[max-content] h-[249px] px-[20px] py-[18px] shadow-option border-[1px] border-[#D34D26] sm:max-w-[95%] rounded-[5px] flex-1 min-w-[40%]">
          <div class="flex">
            <img class="sm:h-[30px] mr-[20px]" src="./assets/1.png" alt="image">
            <h4 class="uppercase font-[atypBold] font-[1000] text-[33px] mt-[15px] sm:text-[18px]">{{
              $t("third.russian.title") }} </h4>
          </div>
          <p class="font-[gotempro] font-[400] mt-[10px] text-[18px] sm:text-[14px] leading-[21px]">{{
            $t("third.russian.text") }}</p>
          <a href="#application"
            class="btn bg-[#D34D26] px-[15px] py-[8px] font-[atypBold] text-white uppercase mt-[15px] rounded-[5px]">{{
              $t("third.sign") }} </a>
        </div>

        <div
          class="blurss sm:min-w-[50%] sm:h-[max-content] h-[249px] px-[20px] py-[18px] shadow-option border-[1px] border-[#D34D26] sm:max-w-[95%] rounded-[5px] flex-1 min-w-[40%]">
          <div class="flex">
            <img class="sm:h-[30px] mr-[20px]" src="./assets/3.png" alt="image">
            <h4 class="uppercase font-[atypBold] font-[1000] text-[33px] mt-[15px] sm:text-[18px]">{{
              $t("third.math.title") }} <span class="text-[#D34D26]">(sat)</span></h4>
          </div>
          <p class="font-[gotempro] font-[400] mt-[10px] text-[18px] sm:text-[14px] leading-[21px]">{{
            $t("third.math.text") }} </p>
          <a href="#application"
            class="btn bg-[#D34D26] px-[15px] py-[8px] font-[atypBold] text-white uppercase mt-[15px] rounded-[5px]">{{
              $t("third.sign") }} </a>
        </div>
        <div
          class="blurss sm:min-w-[50%] sm:h-[max-content] h-[249px] px-[20px] py-[18px] shadow-option border-[1px] border-[#D34D26] sm:max-w-[95%] rounded-[5px] flex-1 min-w-[40%]">
          <div class="flex">
            <img class="sm:h-[30px] mr-[20px]" src="./assets/6.png" alt="image">
            <h4 class="uppercase font-[atypBold] font-[1000] text-[33px] mt-[15px] sm:text-[18px]">{{
              $t("third.physic.title") }} </h4>
          </div>
          <p class="font-[gotempro] font-[400] mt-[10px] text-[18px] sm:text-[14px] leading-[21px]">{{
            $t("third.physic.text") }}</p>
          <a href="#application"
            class="btn bg-[#D34D26] px-[15px] py-[8px] font-[atypBold] text-white uppercase mt-[15px] rounded-[5px]">{{
              $t("third.sign") }}</a>
        </div>
      </div>
    </section>
    <section id="filial" class=" filial overflow-hidden relative bg-black pt-[20px] pb-[50px]">
      <img id="feed" class='absolute bottom-0 left-[-130px] sm:hidden' src="./assets/filial2.png" alt="image">
      <img id="course2" class="absolute right-[-60px] sm:hidden top-0 h-[350px]" src="./assets/filial.png" alt="image">
      <h3
        class="text-center text-white mb-[25px] font-[atypBold] sm:pt-[30px] sm:text-[40px] uppercase font-[1000] text-[81px]">
        <span class="text-[#D34D26]">{{ $t("fiveth.title") }}</span>
        {{ $t("fiveth.title2") }}
      </h3>
      <iframe class="max-w-[1200px] rounded-[10px] sm:h-[300px] mx-auto w-[100%] h-[500px]"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1259.0597505805379!2d69.2819940102555!3d41.36179422883174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8d8c85382f63%3A0x30502569c71e766e!2sMr.DONIYOR&#39;s%20SCHOOL!5e0!3m2!1sru!2s!4v1714175928294!5m2!1sru!2s"
        style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <p
        class="font-[atypBold] sm:text-[20px] uppercase text-white max-w-[1200px] text-[33px] text-center mx-auto w-[100%] mt-[40px] text-[400]">
        {{ $t("fiveth.text") }}</p>
    </section>

    <section id="application" class="feedback bg-white relative overflow-hidden min-h-[400px] pt-[20px] pb-[50px]">
      <img id="feed2" class='absolute sm:hidden top-[-160px] left-[-130px]' src="./assets/filial3.png" alt="image">
      <h3 class="text-center sm:text-[30px] mb-[25px] font-[atypBold] uppercase font-[1000] text-[81px]">
        <span class="text-[#D34D26]">{{ $t("sixth.title") }}</span>
        {{ $t("sixth.title2") }}
      </h3>
      <div class="max-w-[668px] w-[100%] mx-auto">
        <div class="sm:mx-auto sm:max-w-[80%] ">
          <span class="font-[gotempro] font-[400] text-[16px]"> {{ $t("sixth.name") }}</span> <br>
          <input required v-model="text"
            class="text-[26px] pl-[20px] font-[600] font-[atypBold] mt-[18px] w-[100%] border-[2px] border-[#D34D26] sm:h-[50px] h-[101px] rounded-[5px]"
            type="text">
        </div>
        <div class="mt-[20px] sm:mx-auto sm:max-w-[80%] ">
          <span class="font-[gotempro] font-[400] text-[16px]"> {{ $t("sixth.tel") }}</span> <br>
          <input required v-model="number"
            class="text-[26px] pl-[20px] font-[600] sm:h-[50px]  font-[atypBold] mt-[18px] w-[100%] border-[2px] border-[#D34D26] h-[101px] rounded-[5px]"
            type="text">
        </div>
        <div class="sm:text-center">
          <button :class="{disabled: this.text.length < 1}" :disabled="{disabled: this.text.length < 1}" @click="send()" onclick="my_modal_1.showModal()"
            class="w-[100%] bg-[#D34D26] sm:text-[25px] font-[atypBold] text-[33px] uppercase text-white rounded-[5px] mt-[40px] sm:h-[70px] sm:mx-auto sm:max-w-[80%] h-[100px]">{{
              $t("sixth.btn") }}</button>

          <dialog id="my_modal_1" class="modal">
            <div class="modal-box">
              <div class="border-[3px] mx-auto border-[#D34D26] rounded-[50%] w-[70px] h-[70px] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-[40px] h-[40px] text-[#D34D26]">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                </svg>
              </div>

              <p class="py-4 font-[atypBold] text-center text-[24px]"> {{ $t("send") }} </p>
              <div class="modal-action w-[100%]">
                <form method="dialog" class="w-[100%]">
                  <!-- if there is a button in form, it will close the modal -->
                  <button class="btn w-[100%] bg-[#D34D26]  font-[atypBold] text-white text-[19px]">Close</button>
                </form>
              </div>
            </div>
          </dialog>


        </div>
        <p
          class="mt-[40px] db text-center leading-[20px]  sm:leading-[17px] sm:text-[15px] sm:mx-auto sm:w-[90%] font-[gotempro] font-[600] text-[black]">
          {{ $t("sixth.text") }}
        </p>
      </div>
    </section>

    <section class=" bgfeed bg-black pt-[20px] relative pb-[50px] overflow-hidden">
      <div class="absolute sm:hidden h-[100%] w-[100%] left-0 top-0 bgthis"></div>
      <h3
        class="text-center mb-[25px] sm:mb-[0px] sm:text-[40px] sm:p-[20px] font-[atypBold] uppercase font-[1000] text-[81px]">
        <span class="text-[#D34D26]"> {{ $t("seventh.title") }}</span>
      </h3>
      <div class="max-w-[1200px] mx-auto  h-[205px] sm:">
        <Swiper />
      </div>
    </section>

    <section id="sponsors" class=" bgthis1 sm:pb-[100px] pb-[50px]">
      <h3
        class="text-center mb-[25px] sm:text-[40px] sm:pt-[50px] pt-[10px] font-[atypBold] uppercase font-[1000] text-[81px]">
        <span class="text-[#D34D26]">{{ $t("eight.title") }} </span>
        {{ $t("eight.title2") }}
      </h3>
      <div class="flex justify-center items-center gap-[100px] sm:flex-col">
        <a href="https://botirov.com/"><img class="sm:h-[150px] mb-[-50px]" src="./assets/sponsor1.png" alt="image"></a>
        <a href="https://gubkin.uz/"><img class="sm:h-[70px]" src="./assets/sponsor.png" alt="image"></a>
      </div>
    </section>

    <footer id="contact" class=" bg-[#000000] bgthis2 h-[433px] sm:h-[max-content] pb-[92px] pt-[70px]">
      <div
        class="mx-auto max-w-[1200px] sm:flex-col flex justify-between items-center border-b-[1px] border-[#D34D26] pb-[80px]">
        <img class="sm:h-[100px]" src="./assets/bgfooter.png" alt="image">
        <div class="flex flex-col items-center">
          <p class="font-[400] text-[43px] sm:text-[30px] sm:mt-[40px] font-[atypMedium] text-white uppercase">{{
            $t("footer") }}</p>
          <a class="text-[43px] font-[atypMedium] text-white uppercase" href="tel:+998900006444"> <span
              class="text-[#D34D26]">(90) </span> 000 64 44</a>
          <div class="flex gap-[34px] items-center mt-[20px]">
            <img class="sm:h-[25px]" src="./assets/Vector-1.png" alt="image">
            <img class="sm:h-[25px]" src="./assets/Vector-2.png" alt="image">
            <img class="sm:h-[25px]" src="./assets/Vector.png" alt="image">
          </div>
        </div>
      </div>
    </footer>

  </main>
</template>

<style scoped>
.bgthis {
  background-image: url("./assets/footer1.png");
  background-size: 538px;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: -70px 600px;
}

.bgthis1 {
  background-image: url("./assets/footer2.png");
  background-size: 538px;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: -70px 600px;
}

.bgthis2 {
  background-image: url("./assets/footer1.png");
  background-size: 538px;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: -70px 600px;
}



.bgfeed {
  background-image: url("./assets/zayavk2.png");
  background-size: 546px;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: right bottom;
}

.feedback {
  background-image: url("./assets/zayavka.png");
  background-size: 546px;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: right bottom;
}

.blurss {
  backdrop-filter: blur(10px);
}

.shadow-option {
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.24);
}

.options {
  overflow-y: scroll;
}

.gradi {
  position: absolute;
  transform: translateY(-100%);
  height: 250px;
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.018), black);
}

main {
  max-width: 1920px;
  margin: auto;
}

.sitata {
  line-height: 20px;
  text-align: center;
  background-image: url('./assets/gray.png');
  backdrop-filter: blur(10px);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

.disabled{
  opacity: 60% !important;
}

.second-section {
  background-image: url("./assets/firstblack1.png");
  background-repeat: no-repeat;
  background-size: 618px 618px;
  background-position-x: right;
  background-attachment: fixed;
  background-position-y: 450px;
}

.third-section {
  background-image: url("./assets/aboutustoptest.png");
  background-repeat: no-repeat;
  background-size: 618px 618px;
  background-position-x: right;
  background-attachment: fixed;
  background-position-y: 450px;
}

.textshadow {
  text-shadow: 0 0 10px black;
}

.second-section::after {
  pointer-events: none;
  content: '';
  height: 100%;
  width: 100%;
  position: absolute;
  background-size: 276px;
  background-attachment: fixed;
  background-image: url("./assets/firstblack2.png") !important;
  background-repeat: no-repeat;
  background-position: 1350px 60px;
  top: 0;
  left: 0;
}

.second-section::before {
  pointer-events: none;
  content: '';
  height: 100%;
  width: 100%;
  position: absolute;
  background-size: 437px;
  background-attachment: fixed;
  background-image: url("./assets/firstblack3.png") !important;
  background-repeat: no-repeat;
  background-position: 158px 130px;
  top: 0;
  left: 0;
}

.third-section::after {
  content: '';
  height: 100%;
  width: 100%;
  position: absolute;
  background-size: 437px;
  background-attachment: fixed;
  z-index: -1;
  opacity: 20%;
  background-image: url("./assets/firstblack3.png") !important;
  background-repeat: no-repeat;
  background-position: 158px 130px;
  top: 0;
  left: 0;
}

.decor {
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
}


.course {
  background-image: url("./assets/course3.png");
  background-repeat: no-repeat;
  background-size: 742px;
  background-position: 1300px 850px;
}

/* .firstAnimate{
  position: fixed;
  right: 0;
  bottom: 0;
}
.firstAnimate2{
  position: fixed;
  right: 0;
} */
/* <img class="absolute h-[557px] left-0 bottom-0 translate-y-[50%] translate-x-[-20%]" src="./assets/aboutus.png" alt="image"> */
</style>
