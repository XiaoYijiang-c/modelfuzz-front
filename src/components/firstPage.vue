<template>
    <NavigationButton @login="emits('switchPage', 1)"></NavigationButton>
    <div class="header header--img-city header--img-clip-buttom">
        <div class="header__logo-box">
            <img src="../img/logo.png" alt="logo" class="header__logo" >
        </div>
        <div class="header__main-box--top45">
            <h1 class="heading-primary">
                <span class="heading-primary__main">{{_languageJson['heading_main'] }}</span>
                <span class="heading-primary__sub">{{_languageJson['heading_sub'] }}</span>
                <router-link replace to="/testnnsvg"><a href="#" @click="checkLogin"><span class="btn btn--white">{{_languageJson['heading_btn']}}</span></a></router-link>
            </h1>
        </div>
    </div>
    
    <div class="introduction u-wid-max">
        <div class="u-center-text u-margin-bottom-big">
            <h2 class="heading-secondary">
                Exciting tours for fuzzing model
            </h2>
        </div>
        <div class="row">
            <div class="col-1-of-2">
                <h3 class="heading-tertiary u-margin-bottom-small">hello h3</h3>
                <p class="paragraph">
                    hello p3 hello p3 hello p3 hello p3
                </p>
                <h3 class="heading-tertiary u-margin-bottom-small">hello h3</h3>
                <p class="paragraph">
                    hello p3 hello p3 hello p3 hello p3 hello p3 hello p3 hello p3
                    hello p3 hello p3 hello p3 hello p3 hello p3 hello p3 hello p3
                    hello p3 hello p3 hello p3 hello p3 hello p3 hello p3 hello p3
                    hello p3 hello p3 hello p3 hello p3 hello p3 hello p3 hello p3
                </p>
            </div>
            <div class="col-1-of-2">
                <div class="composition">
                    <img src="../img/city.jpg" alt="" class="composition__photo composition__photo--p1">
                    <img src="../img/Top-Img2.jpeg" alt="" class="composition__photo composition__photo--p2">
                    <img src="../img/Top_Img.jpeg" alt="" class="composition__photo composition__photo--p3">
                </div>
            </div>
        </div>
    </div>
    <!-- <div class="dataset-evaluate u-wid-max">
        <div class="row">
            <div class="col-1-of-3">
                <div class="dataset-evaluate__image-box">
                    <img src="../img/6-医疗-神经元.png" alt="" class="dataset-evaluate__img-box__img">
                </div>
            </div>
            <div class="col-2-of-3">
                
                
                
            </div>
        </div>
    </div> -->
    <!-- <div class="header header--img-black  header--img-clip-top" id="card-choose-box">
        <div class="heading-secondary header__head-text u-margin-top-medium u-padding-top-medium  u-wid-max u-10rem-height">{{ _languageJson['head_text'] }}</div>
        <div class="card-box header__main-box--top60">
            <span class="glass-card glass-card__big-size" v-for="card in cardList" :key="card.title" :class="card.class">
                <h3 class="glass-card__title">{{card.title}}</h3>
                <p class="glass-card__text">{{ card.content }}</p>
                <div class="glass-card__btn-box">
                    <span class="glass-card__btn-box__btn btn" @click="emits('switchPage', card.ID)">{{ card.buttonTips1 }}</span>
                    <span class="glass-card__btn-box__btn btn">{{ card.buttonTips2 }}</span>
                </div>
            </span>
        </div>
    </div> -->
    <div class="section_no_background u-wid-max">
        <div class="u-center-text u-margin-bottom-big">
            <h2 class="heading-secondary">
                Exciting tours for fuzzing model
            </h2>
        </div>
        <div class="row">
            <div class="col-1-of-3">
                <div class="card">
                    <div class="card__side card__side--front">
                        <div class="card__picture card__picture-1">
                            &nbsp;
                        </div>
                        <h4 class="card__heading">
                            <span class="card__heading-span card__heading-span-1">Computer Vision</span>
                        </h4>
                        <div class="card__details">
                            <ul>
                                <li>list 1</li>
                                <li>list 1</li>
                                <li>list 1</li>
                                <li>list 1</li>
                                <li>list 1</li>
                            </ul>
                        </div>

                    </div>
                    <div class="card__side card__side--back card__side--back-1">
                        <div class="card__cta">
                            <div class="card__price-box">
                                <p class="card__price-only">Only</p>
                                <p class="card__price-value">Only</p>
                            </div>
                            <span class="btn btn--white u-large-btn-font card__cta__color_select-1" >new project</span>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="col-1-of-3">
                <div class="card">
                    <div class="card__side card__side--front">
                        <div class="card__picture card__picture-2">
                            &nbsp;
                        </div>
                        <h4 class="card__heading">
                            <span class="card__heading-span card__heading-span-2 ">Natural language process</span>
                        </h4>
                        <div class="card__details">
                            <ul>
                                <li>list 1</li>
                                <li>list 1</li>
                                <li>list 1</li>
                                <li>list 1</li>
                                <li>list 1</li>
                            </ul>
                        </div>

                    </div>
                    <div class="card__side card__side--back card__side--back-2">
                        <div class="card__cta">
                            <div class="card__price-box">
                                <p class="card__price-only">Only</p>
                                <p class="card__price-value">Only</p>
                            </div>
                            <span class="btn btn--white u-large-btn-font card__cta__color_select-2">new project</span>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="col-1-of-3">
                <div class="card">
                    <div class="card__side card__side--front">
                        <div class="card__picture card__picture-3">
                            &nbsp;
                        </div>
                        <h4 class="card__heading">
                            <span class="card__heading-span card__heading-span-3">Malware detection</span>
                        </h4>
                        <div class="card__details">
                            <ul>
                                <li>list 1</li>
                                <li>list 1</li>
                                <li>list 1</li>
                                <li>list 1</li>
                                <li>list 1</li>
                            </ul>
                        </div>

                    </div>
                    <div class="card__side card__side--back card__side--back-3">
                        <div class="card__cta">
                            <div class="card__price-box">
                                <p class="card__price-only">Only</p>
                                <p class="card__price-value">Only</p>
                            </div>
                            <span class="btn btn--white u-large-btn-font card__cta__color_select-3">new project</span>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <footer class="footer">
        <div class="footer__logo-box">
            <img src="../img/logo.png" alt="Logo" class="footer__logo">
        </div>
        <div class="row">
            <div class="col-1-of-2">
                <ul class="footer__list footer__navigation">
                    <li class="footer__item"><a href="#" class="footer__link">Company</a></li>
                    <li class="footer__item"><a href="#" class="footer__link">Contact us</a></li>
                    <li class="footer__item"><a href="#" class="footer__link">Carrers</a></li>
                    <li class="footer__item"><a href="#" class="footer__link">Privacy policy</a></li>
                    <li class="footer__item"><a href="#" class="footer__link">Terms</a></li>
                </ul>
            </div>
            <div class="col-1-of-2">
                <p class="footer__copyright">SCU <a href="#" class="footer__link">Luojiale</a> build this web.\nCopyright@ by LuoJiale. Email:879373096@qq.com. You are 100% allowed to use this webpage for both personal and commercial use. </p>
            </div>
        </div>
    </footer>
</template>
<script setup lang="ts">
import axios from "axios"
import { ref,reactive } from 'vue'
import languageJson from "../json/firstPageText.json"
import Cookies from 'js-cookie'

interface LoginMessage {
  username: string;
  userID: string;
  loginState: boolean;
}
const props = defineProps<{
  loginMessage: LoginMessage,
}>();
async function checkLogin() {
     if (Cookies.get('username') && Cookies.get('userID')) {
    //     let loginMessage = {
    //     username: Cookies.get('username'),
    //     userID : Cookies.get('userID'),
    //     loginState: true,
    //     projects: Cookies.get('projects'),
    //     projects_length: Cookies.get('projects_length')
    //   }
    //     emits('setLogin', loginMessage)
        let formDataObject = new FormData();
        let userID:any = Cookies.get('userID')
        formDataObject.append('userID',userID)
        await axios.post('http://43.138.12.254:9000/get_projects', formDataObject).then((res) => {
            let loginMessage = {
                username: Cookies.get('username'),
                userID : Cookies.get('userID'),
                loginState: true,
                projects: res.data,
                projects_length: res.data.length
            }
            console.log(loginMessage)
            emits('setLogin', loginMessage)
        }).catch((err) => {
            console.warn(err);
        });
        emits('switchPage', 2)
    } else {
        emits('switchPage', 1)
    }
}

const emits = defineEmits(["switchPage","setLogin"]);
let _languageJson= ref(languageJson.English)
let languageIsEnglish = true
const changeLanguage = () => {
    if (languageIsEnglish) {
        _languageJson.value = languageJson.Chinese;
    } else {
        _languageJson.value = languageJson.English;
    }
    languageIsEnglish = !languageIsEnglish
    for (let card of cardList.value) {
        let cardContent:string = card.title+'_content'
        card.buttonTips1 = _languageJson.value["button_tip1"];
        card.buttonTips2 = _languageJson.value["button_tip2"];
        if (card.title == 'CV') 
            card.content = _languageJson.value["CV_content"];
        else if (card.title == 'NLP')
            card.content = _languageJson.value["NLP_content"];
        else if (card.title == 'MAL')
            card.content = _languageJson.value["MAL_content"];

    }
}
const cardCV = reactive({
        ID:2,
        title: 'CV',
        content: _languageJson.value['CV_content'],
        buttonTips1:_languageJson.value.button_tip1,
        buttonTips2:_languageJson.value.button_tip2,
        class: ['glass-card--pink'],
    })
const cardNLP = reactive({
        ID:3,
        title: 'NLP',
        content: _languageJson.value['NLP_content'],
        buttonTips1:_languageJson.value.button_tip1,
        buttonTips2:_languageJson.value.button_tip2,
        class:['glass-card--cyan']
        
    })
const cardMAL = reactive({
        ID:4,
        title: 'MAL',
        content: _languageJson.value['MAL_content'],
        buttonTips1:_languageJson.value.button_tip1,
        buttonTips2:_languageJson.value.button_tip2,
        class:['glass-card--purple']
        
    })
let cardList:any = ref([])
cardList.value.push(cardCV,cardNLP,cardMAL)


</script>
<style src="../style/firstPage.scss" lang="scss">


</style>
