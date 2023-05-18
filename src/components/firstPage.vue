<template>
    <div class="firstpage" style="scroll-snap-type: y mandatory;overflow: scroll;height: 100vh;overflow-x: hidden;" @scroll="touched">
        <!-- <NavigationButton @login="emits('switchPage', 1)"></NavigationButton> -->
        <div class="navigation" >
            <div class="navigation--logo">
                <img src="../img/logo.png" alt="logo" class="navigation--logo__logo" >
            </div>
            <ul class="navigation--jump">
                <li class="navigation--jump--item" :class="{'navigation--jump--item__highlight':navigation_jump[0],'navigation--jump--item__eraserlight':!navigation_jump[0]}">
                    <a href="#fuzz_page"> 人工智能模型模糊测试</a>
                </li>
                <li class="navigation--jump--item" :class="{'navigation--jump--item__highlight':navigation_jump[1],'navigation--jump--item__eraserlight':!navigation_jump[1]}">
                    <a href="#dataset_evaluate">数据集评估</a>
                </li>
                <li class="navigation--jump--item" :class="{'navigation--jump--item__highlight':navigation_jump[2],'navigation--jump--item__eraserlight':!navigation_jump[2]}">
                    <a href="#model_evaluate">模型鲁棒性评估</a>
                </li>
                <li class="navigation--jump--item" :class="{'navigation--jump--item__highlight':navigation_jump[3],'navigation--jump--item__eraserlight':!navigation_jump[3]}">
                    <a href="#model_retrain">模型重训练</a>
                </li>
            </ul>
            <ul class="navigation--user">
                <li class="navigation--user--head">
                    <router-link replace to="/login"><img src="../img/head.png" alt="logo" class="navigation--user--head__head" ></router-link>
                </li>
                <li class="navigation--jump--item">个人中心</li>
                <li class="navigation--jump--item">消息</li>
            </ul>
        </div>
        <div class="header header--img-neural  u-scroll-snap-align" >
            <!-- <div class="header__logo-box">
                <img src="../img/logo.png" alt="logo" class="header__logo" >
            </div> -->
            <div class="header__main-box--top45">
                <h1 class="heading-primary">
                    <span class="heading-primary__main">{{_languageJson['heading_main'] }}</span>
                    <span class="heading-primary__sub">{{_languageJson['heading_sub'] }}</span>
                    <!-- <router-link replace to="/testnnsvg"><a href="#" @click="checkLogin"><span class="btn btn--white">{{_languageJson['heading_btn']}}</span></a></router-link> -->
                    <a href="#" @click="checkLogin"><span class="btn btn--white">{{_languageJson['heading_btn']}}</span></a>
                </h1>
            </div>
        </div>
        
        <div id="fuzz_page" ref="fuzz_page_0" class="introduction u-wid-max u-scroll-snap-align introduction__0" >
            <div class="u-center-text u-margin-bottom-big" ref="fuzz_page">
                <h2 class="heading-secondary">
                    人工智能模型模糊测试
                </h2>
            </div>
            <div class="row">
                <div class="col-1-of-2">
                    <h3 class="heading-tertiary u-margin-bottom-small">
                        人工智能模型模糊测试模块
                    </h3>
                    <p class="paragraph">
                        该模块包含对不同的人工智能模型类别分别设计了计算机视觉，恶意代码和强化学习三个模糊测试器，目的是对于不同类别的模糊器设计不同的更高效的变异方案。在计算机视觉模块，本项目的变异通过添加噪声在拟合图片的清晰度，曝光度和黑点等情况。在恶意代码模块，本项目实现了一种新的基于数据结构敏感的变异方法，这样可以针对恶意代码检测模型样本实现更高效的变异。在强化学习模块，项目提出了一种基于梯度上升的变异方法，从而可以探索到更多的系统状态，更大可能的触发漏洞点。本模块通过兼容pytorch和tensorflow环境，兼容主流模型，提高项目完整性。本模块对模糊测试的同时，为其他模块的数据分析提供基础。
                    </p>
                    
                </div>
                <div class="col-1-of-2">
                    <div class="composition">
                        <img src="../img/qhxx.jpg" alt="" class="composition__photo composition__photo--p1">
                        <img src="../img/mal.jpg" alt="" class="composition__photo composition__photo--p2">
                        <img src="../img/eyes.jpeg" alt="" class="composition__photo composition__photo--p3">
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
    <!-- <div id="dataset_evaluate" ref="dataset_evaluate_0" class="section_no_background u-wid-max u-scroll-snap-align">
        <div class="u-center-text u-margin-bottom-medium" ref="dataset_evaluate">
            <h2 class="heading-secondary">
                数据集评估
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
    </div> -->
    <div id="dataset_evaluate" ref="dataset_evaluate_0" class="introduction u-wid-max u-scroll-snap-align introduction__1" >
            <div class="u-center-text u-margin-bottom-big" ref="dataset_evaluate">
                <h2 class="heading-secondary">
                    数据集评估
                </h2>
            </div>
            <div class="row">
                
                <div class="col-1-of-2">
                    <h3 class="heading-tertiary u-margin-bottom-small">数据集评估模块</h3>
                    <p class="paragraph">
                        该模块采用DBSCAN聚类方法对测试样本进行聚类，得到各个样本的分类，再从样本类别数量，是否有稀缺样本和样本分布均匀度三个维度来评判数据集质量，进行打分，使得研究人员可以更好的去修改自己的数据集，使数据集在模型训练时的表现其更高效。
                    </p>
                    
                </div>
            </div>
    </div>
    <div id="model_evaluate" ref="model_evaluate_0" class="introduction u-wid-max u-scroll-snap-align introduction__2" >
            <div class="u-center-text u-margin-bottom-big" ref="model_evaluate">
                <h2 class="heading-secondary">
                    模型鲁棒性评估
                </h2>
            </div>
            <div class="row">
                <div class="col-1-of-2">
                    <img src="../img/chatu_1.png" alt="" style="width:100%">
                </div>
                <div class="col-1-of-2">
                    <h3 class="heading-tertiary u-margin-bottom-small">模型鲁棒性评估模块</h3>
                    <p class="paragraph">
                        我们从模型的准确率，精确率，召回率和F1值等方面对模型的鲁棒性进行完善的评估，并将测试结果返回给用户，使用户可以更好地了解自己模型的鲁棒性。
                    </p>
                    
                </div>
            </div>
    </div>
    <div id="model_retrain" ref="model_retrain_0" class="introduction u-wid-max u-scroll-snap-align introduction__3" >
        <div class="u-center-text u-margin-bottom-big" ref="model_retrain">
            <h2 class="heading-secondary">
                模型重训练
            </h2>
        </div>
        <div class="row">
            <div class="col-1-of-2">
                <h3 class="heading-tertiary u-margin-bottom-small">模型重训练模块</h3>
                <p class="paragraph">
                    我们从模型的准确率，精确率，召回率和F1值等方面对模型的鲁棒性进行完善的评估，并将测试结果返回给用户，使用户可以更好地了解自己模型的鲁棒性。
                </p>
                
            </div>
            <div class="col-1-of-2">
                <div class="composition">
                    <img src="../img/qhxx.jpg" alt="" class="composition__photo composition__photo--p1">
                    <img src="../img/mal.jpg" alt="" class="composition__photo composition__photo--p2">
                    <img src="../img/eyes.jpeg" alt="" class="composition__photo composition__photo--p3">
                </div>
            </div>
        </div>
    </div>
    <footer class="footer u-scroll-snap-align">
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
    </div>
</template>
<script setup lang="ts">
import axios from "axios"
import { ref,reactive,onMounted,Ref} from 'vue'
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

let navigation_jump: Ref<boolean[]> = ref([false, false, false, false])
let fuzz_page = ref()
let dataset_evaluate = ref()
let model_evaluate = ref()
let model_retrain = ref()
function isElementInViewport(el:any) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function touched() {
    console.log()
    if (isElementInViewport(fuzz_page.value)) {
        console.log('fuzz_page is in the viewport!');
        navigation_jump.value[0] = true;
        fuzz_page.value.focus();
    } else {
        navigation_jump.value[0] = false;
    }
    if (isElementInViewport(dataset_evaluate.value)) {
        console.log('dataset_evaluate is in the viewport!');
        navigation_jump.value[1] = true;
    } else {
        navigation_jump.value[1] = false;
    } 
    if (isElementInViewport(model_evaluate.value)) {
        console.log('dataset_evaluate is in the viewport!');
        navigation_jump.value[2] = true;
    } else {
        navigation_jump.value[2] = false;
    } 
    if (isElementInViewport(model_retrain.value)) {
        console.log('dataset_evaluate is in the viewport!');
        navigation_jump.value[3] = true;
    } else {
        navigation_jump.value[3] = false;
    } 
    
}
function animateScroll(element:any,speed:any) {
    let rect = element.getBoundingClientRect();
    console.log(rect)
    //获取元素相对窗口的top值，此处应加上窗口本身的偏移
    let top=window.pageYOffset+rect.top;
    let currentTop=0;
    let requestId=0;
    //采用requestAnimationFrame，平滑动画
    function step(timestamp:any) {
      currentTop+=speed;
      if(currentTop<=top){
        window.scrollTo(0,currentTop);
        requestId=window.requestAnimationFrame(step);
      }else{
        window.cancelAnimationFrame(requestId);
      }
    }
    window.requestAnimationFrame(step);
  }

</script>
<style src="../style/firstPage.scss" lang="scss">


</style>
