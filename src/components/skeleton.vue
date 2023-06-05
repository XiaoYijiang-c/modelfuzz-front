<template>
  <div class="single-page">
    <div class="navigation navigation__inside">
      <span class="navigation--name">nerual sentinel</span>
      <div class="navigation--logo" >
        <span class="navigation--button" @click="changeLanguage"><el-icon style="font-size:3.6rem;"><svg t="1685423673570" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3405"><path d="M870.912 103.936H152.576c-47.616 0-86.528 38.912-86.528 86.528v526.848c0 47.616 38.912 86.528 86.528 86.528h224.256l111.616 111.616c6.656 6.656 14.848 9.728 23.552 9.728s16.896-3.072 23.552-9.728l111.616-111.616h224.256c47.616 0 86.528-38.912 86.528-86.528V190.464c-0.512-47.616-38.912-86.528-87.04-86.528z m19.968 613.376c0 10.752-8.704 19.968-19.968 19.968H640c-10.24-2.048-21.504 1.024-29.696 9.216L512 844.8l-98.304-98.304c-8.192-8.192-19.456-11.264-29.696-9.216H152.576c-10.752 0-19.968-8.704-19.968-19.968V190.464c0-10.752 8.704-19.968 19.968-19.968h718.336c11.264 0 19.968 8.704 19.968 19.968v526.848z" fill="#93AAC9" p-id="3406"></path><path d="M248.32 258.56c-16.896 0-30.72 13.312-31.744 30.208v317.44c0 17.408 14.336 31.744 31.744 31.744 17.408 0 31.744-14.336 31.744-31.744v-317.44c-1.024-16.896-14.848-30.208-31.744-30.208z" fill="#769D80" p-id="3407"></path><path d="M515.072 378.368c-9.216-7.168-20.992-12.288-34.304-14.848-13.312-3.072-28.672-4.096-45.568-4.096-14.336 0-27.136 1.536-37.888 4.096-10.752 2.56-20.48 6.144-28.672 10.24-8.192 4.096-15.36 9.216-20.992 14.336-4.608 4.608-8.704 9.728-11.776 14.336-4.608 5.632-7.68 12.8-7.68 20.48 0 17.408 14.336 31.744 31.744 31.744 15.36 0 28.16-10.752 31.232-25.088l0.512-0.512c2.56-2.56 5.632-5.12 9.216-7.168 4.096-2.048 8.704-4.096 13.824-5.12 5.632-1.536 11.776-2.048 19.456-2.048s14.848 0.512 20.992 2.048c5.632 1.024 10.24 3.072 13.824 5.632 3.584 2.56 6.144 5.632 8.192 9.728 2.048 4.096 3.072 10.24 3.072 16.896v4.608l-48.64 4.608c-14.336 1.536-27.648 3.584-39.424 7.168-12.288 3.584-23.552 8.192-32.768 14.848-9.216 6.656-16.896 15.872-22.016 26.624s-8.192 24.064-8.192 39.424c0 11.776 2.048 22.528 5.632 32.768 3.584 9.728 9.216 18.944 16.384 26.112 7.168 7.168 15.872 13.312 26.112 16.896 10.24 4.096 22.016 6.144 35.328 6.144 15.872 0 30.72-3.584 44.544-10.24 8.704-4.608 17.408-9.728 25.6-15.872v9.728c0 16.896 13.824 30.72 30.72 30.72s30.72-13.824 30.72-30.72V450.048c0-16.896-2.56-31.232-7.168-43.008-5.12-11.776-12.288-21.504-22.016-28.672z m-34.816 167.424c-4.096 3.072-8.192 6.656-12.288 9.216-5.12 3.584-10.24 6.656-14.848 9.216-5.12 2.56-9.728 4.608-14.336 6.144-4.608 1.536-8.704 2.048-12.8 2.048-10.752 0-18.432-2.048-24.064-6.144-5.12-3.584-7.168-11.264-7.168-21.504 0-6.144 1.024-11.776 3.584-15.872 2.56-4.096 5.632-7.68 10.24-10.752 5.12-3.072 11.264-5.632 18.432-7.168 7.68-2.048 16.896-3.072 27.136-4.096l26.624-2.56v41.472zM799.232 384.512c-6.144-8.192-14.336-14.848-24.576-18.944-9.728-4.096-22.016-6.144-36.352-6.144-8.192 0-16.384 1.024-24.576 3.584-8.192 2.56-15.872 5.632-23.552 9.216-7.68 4.096-14.336 8.704-21.504 13.824l-6.144 4.608v-5.632 4.608c0-17.408-14.336-31.232-31.744-31.232s-31.744 13.824-31.744 31.232v-4.608 226.304c0 17.408 14.336 31.744 31.744 31.744s31.744-14.336 31.744-31.744V451.584c4.608-4.096 9.216-7.68 14.336-11.776 5.632-4.096 11.264-8.192 16.896-11.264 5.632-3.072 10.752-5.632 16.384-7.68 5.12-1.536 9.728-2.56 13.824-2.56 6.656 0 11.776 1.024 15.36 2.56 3.072 1.536 5.632 4.096 7.68 8.192 2.048 4.608 3.584 10.24 4.096 17.92 0.512 8.192 1.024 17.92 1.024 29.696v134.656c0 17.408 14.336 31.744 31.744 31.744s31.744-14.336 31.744-31.744V453.12c0-14.336-1.024-27.136-3.584-38.4-2.048-11.776-6.656-22.016-12.8-30.208z" fill="#93AAC9" p-id="3408"></path></svg></el-icon></span>
      </div>
    </div>
    <div class="single-page--main-window">
      <div class="single-page--background"></div>
      <div class="aside-tool">
        <AsideTools ref="asidetools" @show="show" @switchpenal="switchpenal" @switchchart="switchchart" :newNumber="numberCount.dlfuzz" :openASide="openASide" @switchPage="emits('switchPage', 0)"></AsideTools>
      </div>
      <div class="console">
        <Userhub v-if="mainListShow.userhub" :userMessage="props.loginMessage" @show="show"  @switchPage="emits('switchPage', 0)"></Userhub>
        <projectshub ref="projecthub" v-show="mainListShow.projectshub" :userMessage="props.loginMessage" @set_projects="set_projects" @switch_to_penel="switch_to_penel"> </projectshub>
        <div class="chart_visiable" v-show="mainListShow.chart">
          <div class="chart_visiable--header">
              <!-- <h3 class="chart_visiable--header__text">Project-ID</h3> -->
              <div class="chart_visiable--header__left">
                  <el-dropdown class="chart_visiable--header__left--dropdown">
                    <span class="el-dropdown-link chart_visiable--header__text u-menu_list u-font-f2f2f2" v-if="currentProject.id == '-1'">
                      {{ $t('skeleton.prompt_message') }}
                    </span>
                  <span class="el-dropdown-link chart_visiable--header__text u-menu_list u-font-f2f2f2" v-else>
                      <el-icon class="el-icon--right u-margin-right-1rem" v-if="currentProject.type === 'cv'"><Picture /></el-icon>
                      <el-icon class="el-icon--right u-margin-right-1rem" v-else-if="currentProject.type === 'mal'"><Platform /></el-icon>
                      <el-icon class="el-icon--right u-margin-right-1rem" v-else-if="currentProject.type === 'eval'"><DataAnalysis /></el-icon>
                      <el-icon class="el-icon--right u-margin-right-1rem" v-else-if="currentProject.type === 'reinforce'"><svg t="1685245817415"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4321" ><path d="M409.6 750.933l34.133 68.267H170.667v136.533h682.666V819.2H580.267l34.133-68.267h238.933A68.267 68.267 0 0 1 921.6 819.2v136.533A68.267 68.267 0 0 1 853.333 1024H170.667a68.267 68.267 0 0 1-68.267-68.267V819.2a68.267 68.267 0 0 1 68.267-68.267H409.6zM273.067 68.267h477.866a68.267 68.267 0 0 1 68.267 68.266V614.4a68.267 68.267 0 0 1-68.267 68.267H273.067A68.267 68.267 0 0 1 204.8 614.4V136.533a68.267 68.267 0 0 1 68.267-68.266z m0 68.266V614.4h477.866V136.533H273.067z m614.4 102.4a34.133 34.133 0 0 1 34.133 34.134v204.8a34.133 34.133 0 1 1-68.267 0v-204.8a34.133 34.133 0 0 1 34.134-34.134z m-750.934 0a34.133 34.133 0 0 1 34.134 34.134v204.8a34.133 34.133 0 0 1-68.267 0v-204.8a34.133 34.133 0 0 1 34.133-34.134zM989.867 307.2A34.133 34.133 0 0 1 1024 341.333V409.6a34.133 34.133 0 1 1-68.267 0v-68.267a34.133 34.133 0 0 1 34.134-34.133z m-955.734 0a34.133 34.133 0 0 1 34.134 34.133V409.6A34.133 34.133 0 0 1 0 409.6v-68.267A34.133 34.133 0 0 1 34.133 307.2z m341.334 102.4a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4z m273.066 0a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4zM512 0a34.133 34.133 0 0 1 34.133 34.133V102.4a34.133 34.133 0 0 1-68.266 0V34.133A34.133 34.133 0 0 1 512 0z m-68.267 614.4a34.133 34.133 0 0 1 34.134 34.133v136.534a34.133 34.133 0 1 1-68.267 0V648.533a34.133 34.133 0 0 1 34.133-34.133z m136.534 0a34.133 34.133 0 0 1 34.133 34.133v136.534a34.133 34.133 0 1 1-68.267 0V648.533a34.133 34.133 0 0 1 34.134-34.133z" p-id="4322" ></path></svg></el-icon>
                      {{ currentProject.name }}<el-icon class="el-icon--right u-margin-left-1rem"><arrow-down /></el-icon>
                  </span>

                  <template #dropdown>
                  <el-dropdown-menu id="el-dropdown-menu-1">
                          <div class="u-menu_list" v-for="item in projectList" :key="item.id">
                          <el-dropdown-item  @click="changeProject(item),choose_project(),setProjectID(item.id),switchchart()">{{ item.name }} 
                            <div  v-if="item.type === 'cv'" class="u-flex-center "><el-icon color="#f2f2f2"><Picture /></el-icon></div>
                            <div v-else-if="item.type === 'mal'" class="u-flex-center "><el-icon  color="#f2f2f2"><Platform /></el-icon></div>
                            <div v-else-if="item.type === 'eval'" class="u-flex-center "><el-icon  color="#f2f2f2"><DataAnalysis /></el-icon></div>
                            <div v-else-if="item.type === 'reinforce'" class="u-flex-center "><el-icon color="#f2f2f2" ><svg t="1685245817415"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4321" ><path d="M409.6 750.933l34.133 68.267H170.667v136.533h682.666V819.2H580.267l34.133-68.267h238.933A68.267 68.267 0 0 1 921.6 819.2v136.533A68.267 68.267 0 0 1 853.333 1024H170.667a68.267 68.267 0 0 1-68.267-68.267V819.2a68.267 68.267 0 0 1 68.267-68.267H409.6zM273.067 68.267h477.866a68.267 68.267 0 0 1 68.267 68.266V614.4a68.267 68.267 0 0 1-68.267 68.267H273.067A68.267 68.267 0 0 1 204.8 614.4V136.533a68.267 68.267 0 0 1 68.267-68.266z m0 68.266V614.4h477.866V136.533H273.067z m614.4 102.4a34.133 34.133 0 0 1 34.133 34.134v204.8a34.133 34.133 0 1 1-68.267 0v-204.8a34.133 34.133 0 0 1 34.134-34.134z m-750.934 0a34.133 34.133 0 0 1 34.134 34.134v204.8a34.133 34.133 0 0 1-68.267 0v-204.8a34.133 34.133 0 0 1 34.133-34.134zM989.867 307.2A34.133 34.133 0 0 1 1024 341.333V409.6a34.133 34.133 0 1 1-68.267 0v-68.267a34.133 34.133 0 0 1 34.134-34.133z m-955.734 0a34.133 34.133 0 0 1 34.134 34.133V409.6A34.133 34.133 0 0 1 0 409.6v-68.267A34.133 34.133 0 0 1 34.133 307.2z m341.334 102.4a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4z m273.066 0a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4zM512 0a34.133 34.133 0 0 1 34.133 34.133V102.4a34.133 34.133 0 0 1-68.266 0V34.133A34.133 34.133 0 0 1 512 0z m-68.267 614.4a34.133 34.133 0 0 1 34.134 34.133v136.534a34.133 34.133 0 1 1-68.267 0V648.533a34.133 34.133 0 0 1 34.133-34.133z m136.534 0a34.133 34.133 0 0 1 34.133 34.133v136.534a34.133 34.133 0 1 1-68.267 0V648.533a34.133 34.133 0 0 1 34.134-34.133z" p-id="4322" ></path></svg></el-icon></div>

                        </el-dropdown-item>
                          
                          </div>
                  </el-dropdown-menu>
                  </template>
              </el-dropdown>
              <div></div>
              <div class="chart_visiable--header__search">
              <input
              autocomplete="off"
                  type="text"
                  name="search"
                  v-model="input2"
                  class="input_self u-input-dark"
              />
              <div class="chart_visiable--header__search__button " ><el-icon><Search /></el-icon></div>
              </div>
            </div>
          </div>
          <EmptyChart ref="emptyChart" v-show="mainListShow.emptyChart"></EmptyChart>
          <DlfuzzChart ref="dlfuzzChart" v-show="mainListShow.dlfuzzImage" :currentProject="currentProject" :projectList="projectList" @changeProject="changeProject" @sendAxios="sendAxios" @chooseProject="choose_project" :formPartLogin="formPartLogin" :currentProjectId="current_project_id" @setProjectID="setProjectID">
        </DlfuzzChart>
        <MalfuzzChart ref="malfuzzChart" v-show="mainListShow.malfuzzChart" :currentProject="currentProject" :projectList="projectList" @changeProject="changeProject" @sendAxios="sendAxios" @chooseProject="choose_project" :formPartLogin="formPartLogin" :currentProjectId="current_project_id" @setProjectID="setProjectID">
        </MalfuzzChart>
        <ReinforcementChart ref="reinforcementChart" v-show="mainListShow.reinforcementChart" :currentProject="currentProject" :projectList="projectList" @changeProject="changeProject" @sendAxios="sendAxios" @chooseProject="choose_project" :formPartLogin="formPartLogin" :currentProjectId="current_project_id" @setProjectID="setProjectID">
        </ReinforcementChart>
        <DatasetEvaluateChart ref="datasetEvaluateChart" v-show="mainListShow.datasetEvaluateChart" :currentProject="currentProject" :projectList="projectList" @changeProject="changeProject" @sendAxios="sendAxios" @chooseProject="choose_project" :formPartLogin="formPartLogin" :currentProjectId="current_project_id" @setProjectID="setProjectID">
        </DatasetEvaluateChart>
        </div>
        
        <div class="form-with-guide" v-show="mainListShow.penel">
          <div class="form-with-guide--main-part">
            <div class="form-with-guide--main-part__left">
              <div class="form-with-guide--header ">
              <el-dropdown class="form-with-guide--header--dropdown">
                <span class="el-dropdown-link chart_visiable--header__text u-menu_list u-font-f2f2f2" v-if="currentProject.id == '-1'">
                      {{ $t('skeleton.prompt_message') }}
                    </span>
                <span class="el-dropdown-link form-with-guide--header__text u-menu_list u-font-f2f2f2" v-else>
                  <el-icon class="el-icon--right u-margin-right-1rem" v-if="currentProject.type === 'cv'"><Picture /></el-icon>
                  <el-icon class="el-icon--right u-margin-right-1rem" v-else-if="currentProject.type === 'mal'"><Platform /></el-icon>
                  <el-icon class="el-icon--right u-margin-right-1rem" v-else-if="currentProject.type === 'eval'"><DataAnalysis /></el-icon>
                  <el-icon class="el-icon--right u-margin-right-1rem" v-else-if="currentProject.type === 'reinforce'"><svg t="1685245817415"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4321" ><path d="M409.6 750.933l34.133 68.267H170.667v136.533h682.666V819.2H580.267l34.133-68.267h238.933A68.267 68.267 0 0 1 921.6 819.2v136.533A68.267 68.267 0 0 1 853.333 1024H170.667a68.267 68.267 0 0 1-68.267-68.267V819.2a68.267 68.267 0 0 1 68.267-68.267H409.6zM273.067 68.267h477.866a68.267 68.267 0 0 1 68.267 68.266V614.4a68.267 68.267 0 0 1-68.267 68.267H273.067A68.267 68.267 0 0 1 204.8 614.4V136.533a68.267 68.267 0 0 1 68.267-68.266z m0 68.266V614.4h477.866V136.533H273.067z m614.4 102.4a34.133 34.133 0 0 1 34.133 34.134v204.8a34.133 34.133 0 1 1-68.267 0v-204.8a34.133 34.133 0 0 1 34.134-34.134z m-750.934 0a34.133 34.133 0 0 1 34.134 34.134v204.8a34.133 34.133 0 0 1-68.267 0v-204.8a34.133 34.133 0 0 1 34.133-34.134zM989.867 307.2A34.133 34.133 0 0 1 1024 341.333V409.6a34.133 34.133 0 1 1-68.267 0v-68.267a34.133 34.133 0 0 1 34.134-34.133z m-955.734 0a34.133 34.133 0 0 1 34.134 34.133V409.6A34.133 34.133 0 0 1 0 409.6v-68.267A34.133 34.133 0 0 1 34.133 307.2z m341.334 102.4a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4z m273.066 0a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4zM512 0a34.133 34.133 0 0 1 34.133 34.133V102.4a34.133 34.133 0 0 1-68.266 0V34.133A34.133 34.133 0 0 1 512 0z m-68.267 614.4a34.133 34.133 0 0 1 34.134 34.133v136.534a34.133 34.133 0 1 1-68.267 0V648.533a34.133 34.133 0 0 1 34.133-34.133z m136.534 0a34.133 34.133 0 0 1 34.133 34.133v136.534a34.133 34.133 0 1 1-68.267 0V648.533a34.133 34.133 0 0 1 34.134-34.133z" p-id="4322" ></path></svg></el-icon>
                  {{ currentProject.name }}<el-icon class="el-icon--right u-margin-left-1rem"><arrow-down /></el-icon>
                </span>
                <template #dropdown>
                  <el-dropdown-menu id="el-dropdown-menu-2">
                        <div class="u-menu_list" v-for="item in projectList" :key="item.id">
                          
                          <el-dropdown-item  @click="changeProject(item),choose_project(),setProjectID(item.id),switchpenal()">{{ item.name }} 
                            <div  v-if="item.type === 'cv'" class="u-flex-center "><el-icon color="#f2f2f2"><Picture /></el-icon></div>
                            <div v-else-if="item.type === 'mal'" class="u-flex-center "><el-icon  color="#f2f2f2"><Platform /></el-icon></div>
                            <div v-else-if="item.type === 'eval'" class="u-flex-center "><el-icon  color="#f2f2f2"><DataAnalysis /></el-icon></div>
                            <div v-else-if="item.type === 'reinforce'" class="u-flex-center "><el-icon color="#f2f2f2" ><svg t="1685245817415"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4321" ><path d="M409.6 750.933l34.133 68.267H170.667v136.533h682.666V819.2H580.267l34.133-68.267h238.933A68.267 68.267 0 0 1 921.6 819.2v136.533A68.267 68.267 0 0 1 853.333 1024H170.667a68.267 68.267 0 0 1-68.267-68.267V819.2a68.267 68.267 0 0 1 68.267-68.267H409.6zM273.067 68.267h477.866a68.267 68.267 0 0 1 68.267 68.266V614.4a68.267 68.267 0 0 1-68.267 68.267H273.067A68.267 68.267 0 0 1 204.8 614.4V136.533a68.267 68.267 0 0 1 68.267-68.266z m0 68.266V614.4h477.866V136.533H273.067z m614.4 102.4a34.133 34.133 0 0 1 34.133 34.134v204.8a34.133 34.133 0 1 1-68.267 0v-204.8a34.133 34.133 0 0 1 34.134-34.134z m-750.934 0a34.133 34.133 0 0 1 34.134 34.134v204.8a34.133 34.133 0 0 1-68.267 0v-204.8a34.133 34.133 0 0 1 34.133-34.134zM989.867 307.2A34.133 34.133 0 0 1 1024 341.333V409.6a34.133 34.133 0 1 1-68.267 0v-68.267a34.133 34.133 0 0 1 34.134-34.133z m-955.734 0a34.133 34.133 0 0 1 34.134 34.133V409.6A34.133 34.133 0 0 1 0 409.6v-68.267A34.133 34.133 0 0 1 34.133 307.2z m341.334 102.4a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4z m273.066 0a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4zM512 0a34.133 34.133 0 0 1 34.133 34.133V102.4a34.133 34.133 0 0 1-68.266 0V34.133A34.133 34.133 0 0 1 512 0z m-68.267 614.4a34.133 34.133 0 0 1 34.134 34.133v136.534a34.133 34.133 0 1 1-68.267 0V648.533a34.133 34.133 0 0 1 34.133-34.133z m136.534 0a34.133 34.133 0 0 1 34.133 34.133v136.534a34.133 34.133 0 1 1-68.267 0V648.533a34.133 34.133 0 0 1 34.134-34.133z" p-id="4322" ></path></svg></el-icon></div>
                        </el-dropdown-item>
                        </div>
                  
                    
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
              <div></div>
              <div class="form-with-guide--header__search">
                <input
                autocomplete="off"
                  type="text"
                  name="search"
                  v-model="input2"
                  class="input_self u-input-dark"
                />
                <div class="form-with-guide--header__search__button"><el-icon><Search /></el-icon></div></div>
              </div>
              <DlfuzzPenel ref="dlfuzzPenel" v-show="mainListShow.dlfuzzpenel"  :currentProjectId="current_project_id"  @setstep="setStep">
                <template v-slot:Submit_button>
                  <HeaderTag v-show="mainListShow.dlfuzzpenel" :topList="topList" @changeOpenASide="changeOpenASide" @headFunction="headFunction" ></HeaderTag>
                </template>
              </DlfuzzPenel>
              <DatasetEvaluate ref="datasetEvaluate" v-show="mainListShow.datasetEvaluate"  :currentProjectId="current_project_id"  @setstep="setStep">
                <template v-slot:Submit_button>
                  <HeaderTag v-show="mainListShow.datasetEvaluate" :topList="topList" @changeOpenASide="changeOpenASide" @headFunction="headFunction" ></HeaderTag>
                </template>
              </DatasetEvaluate>
              <Malfuzz ref="malfuzz" v-show="mainListShow.malfuzz"  :currentProjectId="current_project_id"  @setstep="setStep">
                <template v-slot:Submit_button>
                  <HeaderTag v-show="mainListShow.malfuzz" :topList="topList" @changeOpenASide="changeOpenASide" @headFunction="malheadFunction" ></HeaderTag>
                </template>
              </Malfuzz>
              <Reinforcementfuzz ref="reinforcement" v-show="mainListShow.reinforcement"  :currentProjectId="current_project_id"  @setstep="setStep">
                <template v-slot:Submit_button>
                  <HeaderTag v-show="mainListShow.reinforcement" :topList="topList" @changeOpenASide="changeOpenASide" @headFunction="malheadFunction" ></HeaderTag>
                </template>
              </Reinforcementfuzz>
              <Emptypenal ref="emptypenal" v-show="mainListShow.emptypenal"  :currentProjectId="current_project_id"  @setstep="setStep">
                <template v-slot:Submit_button>
                  <HeaderTag v-show="mainListShow.emptypenal" :topList="topList" @changeOpenASide="changeOpenASide" @headFunction="malheadFunction" ></HeaderTag>
                </template>
              </Emptypenal>
            </div>
            <div class="form-with-guide--main-part__right">
              <div style="height: 300px;position:sticky;top:2rem">
                <el-steps direction="vertical" :active="activeStep" finish-status="success" v-if="currentProject.id == '-1'">
                  <el-step :title="$t('empty.step')"  style="background-color: transparent;" >
                    <template v-slot:description>
                        <span  class="step-text">{{ $t('empty.message') }}</span>
                    </template>
                    <template v-slot:title>
                        <span  class="step-title">{{  $t('empty.step') }}</span>
                    </template>
                  </el-step>
                  
                </el-steps>
                <el-steps direction="vertical" :active="activeStep" finish-status="success" v-else>
                  <el-step :title="$t('skeleton.step_0')"  style="background-color: transparent;" >
                    <template v-slot:description>
                        <span  class="step-text">{{ $t('skeleton.step_message_0') }}</span>
                    </template>
                    <template v-slot:title>
                        <span  class="step-title">{{  $t('skeleton.step_0') }}</span>
                    </template>
                  </el-step>
                  <el-step :title="$t('skeleton.step_1')"  style="background-color: transparent;" >
                    <template v-slot:description>
                        <span  class="step-text">{{ $t('skeleton.step_message_1') }}</span>
                    </template>
                    <template v-slot:title>
                        <span  class="step-title">{{  $t('skeleton.step_1') }}</span>
                    </template>
                  </el-step>
                  <el-step :title="$t('skeleton.step_2')"  style="background-color: transparent;" >
                    <template v-slot:description>
                        <span  class="step-text">{{ $t('skeleton.step_message_2') }}</span>
                    </template>
                    <template v-slot:title>
                        <span  class="step-title">{{  $t('skeleton.step_2') }}</span>
                    </template>
                  </el-step>
                  <el-step :title="$t('skeleton.step_3')"  style="background-color: transparent;" >
                    <template v-slot:description>
                        <span  class="step-text">{{ $t('skeleton.step_message_3') }}</span>
                    </template>
                    <template v-slot:title>
                        <span  class="step-title">{{  $t('skeleton.step_3') }}</span>
                    </template>
                  </el-step>
                </el-steps>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <el-dialog v-model="add_project" title="Shipping address" :modal="false" center>
    <el-form>
        <el-form-item label="project name" >
            <el-input v-model="add_form.name" placeholder="Please input" />
        </el-form-item>
        <el-form-item label="project type" >
            <el-cascader v-model="add_form.type" :options="options" />
        </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="add_project = false">Cancel</el-button>
        <el-button type="primary" @click="send_add_project(),add_project = false">
        Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
// interface Form {
//   type: Array<String>;
//   value: Number;
//   neuralNum: Number;
//   seedNum: Number;
//   modelFile: File;
//   codeFile: File;
// }
import { reactive, ref, watch, h,Ref,onMounted } from "vue";
import axios from "axios";
import { ElMessage } from 'element-plus'
import message from "../json/message.json"
import { Obj } from "@popperjs/core";
import { useI18n } from "vue-i18n";

const { locale,t } = useI18n({ useScope: "global" });
function changeLanguage() {
   
    if (locale.value == 'zh-CN') {
        locale.value = "en-US"; // 切换成英文
    } else if (locale.value == 'en-US') {
        locale.value = "zh-CN"; // 切换成中文
    } else {
        console.warn('changeLanguage Error')
    }
     
}
// onMounted(() => {
//   penel = dlfuzzPenel;
//   console.log("onMounted penel",penel)
// })
const input2 = ref('')
const current_project_id: Ref<string> = ref('')
function setProjectID(item:string) {
  current_project_id.value = item
  
}
interface Project {
    type: string;
    name: string;
    id:string
}
interface LoginMessage {
  username: string;
  userID: string;
  loginState: boolean;
  projects: Array<Project>;
  projects_length: number;
}
const props = defineProps<{
  loginMessage: LoginMessage,
}>();
console.log(props.loginMessage)
function set_projects(projects:Project[]) {
  props.loginMessage.projects = projects
  props.loginMessage.projects_length = projects.length
  projectList.value = projects
}
const projectSubmitState:Ref<boolean> = ref(false)

const currentProject: Ref<Project> = ref({
  type: '',
  name: t('skeleton.prompt_message'),
  id:'-1'
})
const projectList: Ref<Project[]> = ref(props.loginMessage.projects)
function changeProject(projectName : Project) {
  currentProject.value = projectName
}
//用于切换页面
const emits = defineEmits(["switchPage"]);
const messageText = message
/* 
  实现关闭打开侧栏 
  openASide:控制打开与关闭 @需要在headerTag中变值 @需要在tools中绑定
  changeOpenASide(): !openASide
*/
let openASide = ref(false)
const changeOpenASide = () => {
  openASide.value = !openASide.value
}
/* 
  绑定aside的宽度
*/
let aSideWidth = ref(63)
watch(openASide, (old, newMs) => {
  if (old) {
    aSideWidth.value = 63
  } else {
    aSideWidth.value = 200
  }
})
// 发送给tools的图片数量信息
const numberCount = reactive({
  dlfuzz: 0
})
const changeDlfuzzNumber = (value: number) => {
  numberCount.dlfuzz = value
}
// 左上角卡片信息
const state = reactive({
  msg: "罗家乐-2020141530059",
});

// 头部部分的列表
const topList: Array<String> = ["Reset","submit"];

// 中心部分的ref
let penel = ref()
const dlfuzzPenel = ref();
const datasetEvaluate = ref();
const introduction = ref();
const malfuzz = ref();
const reinforcement = ref()
const emptypenal = ref();
const dlfuzzImage = ref();
const dlfuzzChart = ref();
const emptyChart = ref();
const malfuzzChart = ref();
const reinforcementChart = ref();
const datasetEvaluateChart = ref();
const headFunction = (tag: string) => {
  if (tag.toUpperCase() == "SUBMIT") {
    submit('http://43.138.12.254:9000/dlfuzz/submit')
  } else if (tag.toUpperCase() == "RESET") {
    clearForm()
  }
}
const malheadFunction = (tag: string) => {
  if (tag.toUpperCase() == "SUBMIT") {
    submit('http://43.138.12.254:9000/mal/main')
  } else if (tag.toUpperCase() == "RESET") {
    clearForm()
  }
}
// 对warning类型 messagebox的封装
const warningMessage = (text: string) => {
  ElMessage({
    message: text,
    type: 'warning',
  })
}
// 清空表单
const clearForm = () => {
  try {
    penel.value.resetFormWapper()
  } catch (error) {
    warningMessage(messageText.warning.errorPageClickReset)
    console.log(error);
    
  }
}
// 提交表单函数(需要子组件有submitFormWapper函数)
const submit = async (url:string) => {
  try {
    let formdataObject = new FormData();
    formdataObject = await penel.value.submitFormWapper();
    sendAxios(url,'POST',handleSubmit,formdataObject)
  } catch (error) {
    warningMessage(messageText.warning.errorPageClickSubmit)
  }
};
// 提交axios信息
const sendAxios = (url: string, type:string, callback:Function,formdataObject?: FormData,) => {
  let res = null;
  if (type === "POST") {
    axios.post(url, formdataObject).then((response) => {
      res = callback(response.data)
    }).catch((err) => {
      console.warn(err);
    });
  } else if (type === "GET") {
    axios.get(url).then((response) => {
      res = callback(response.data)
    }).catch((err) => {
      console.warn(err);
    });
  }

  return res;
}
const handleSubmit = (data:any) => {
  if (data.flag == 'success') {
    projectSubmitState.value = true
    console.log("data.project", data.project)
    let project: Project = {
      id:data.project[0],
      type:data.project[2],
      name:data.project[1]
    }
    changeProject(project);
    choose_project();
    setProjectID(project.id);
    switchpenal()
      ElMessage({
        message: h('p', null, [
          h('i', { style: 'color: teal' }, 'Fuzz Started Successfully'),
        ]),
        type: 'success',
        duration: 5000
      })
      // download('/upload/status')
  } else if (data == 'have project') {
    add_project.value = true
   }
  else {
    projectSubmitState.value = false
      ElMessage({
        message: h('p', null, [
          h('i', { style: 'color: teal' }, 'Fuzz Startup Failed, Please Check Your Setting'),
        ]),
        type: 'error',
        duration: 5000
      })
    }
}

// download the picture.zip
const download = (url: string) => {
  axios.get(url).then((res) => {
    dlfuzzChart.value.loading = false
    let tableDataItem = {
      'total_time': res.data.total_time,
      'average_norm': res.data.average_norm,
      'adversial_num': res.data.adversial_num,
      'average_perb_adversial': res.data.average_perb_adversial,
    }
    dlfuzzChart.value.tableData.push(tableDataItem)
    dlfuzzChart.value.filepath = res.data.filepath;
    console.log(res, dlfuzzChart.value.tableData);
  })
}
// 控制中心部分显示的结构
const mainListShow = reactive({
  userhub: true,
  chart:false,
  penel:false,
  projectshub: false,
  datasetEvaluate: false,
  malfuzz: false,
  reinforcement:false,
  emptypenal:false,
  dlfuzzpenel: false,
  dlfuzzImage: false,
  malfuzzChart: false,
  reinforcementChart: false,
  datasetEvaluateChart: false,
  emptyChart:false,
});
// 控制中心部分显示的函数(tools.vue控制)
const show = (item: string) => {
  if (item == "userhub") {
    closeAllShow()
    mainListShow.userhub = true
  }
  else if (item == "projectshub") {
    closeAllShow()
    mainListShow.projectshub = true
  }
  else if (item === "dlfuzzpenel") {
    closeAllShow()
    mainListShow.dlfuzzpenel = true;
    mainListShow.penel = true;
    penel = dlfuzzPenel;
  }
  else if (item === "datasetEvaluate") {
    closeAllShow()
    mainListShow.datasetEvaluate = true;
    mainListShow.penel = true;
    penel = datasetEvaluate;
  }
  else if (item === "malfuzz") {
    closeAllShow()
    mainListShow.malfuzz = true;
    mainListShow.penel = true;
    penel = malfuzz;
  }
  else if (item === "reinforcement") {
    closeAllShow()
    mainListShow.reinforcement = true;
    mainListShow.penel = true;
    penel = reinforcement;
  }
  else if (item === "emptypenal") {
    closeAllShow()
    mainListShow.emptypenal = true;
    mainListShow.penel = true;
  }
  else if (item === "activity") {
    closeAllShow()
    mainListShow.dlfuzzImage = true;
    mainListShow.chart = true;
    penel = dlfuzzChart;
    // if (projectSubmitState.value) {
      console.log('start.......')
      dlfuzzChart.value.loadChart()
    // }
  }else if (item === "malfuzzchart") {
    closeAllShow()
    mainListShow.malfuzzChart = true;
    mainListShow.chart = true;
    penel = malfuzzChart;
   
    malfuzzChart.value.loadChart()
    
  }
  else if (item === "reinforcementChart") {
    closeAllShow()
    mainListShow.chart = true;
    mainListShow.reinforcementChart = true;
    penel = reinforcementChart;
   
    reinforcementChart.value.loadChart()
    
  }
  else if (item === "datasetEvaluateChart") {
    closeAllShow()
    mainListShow.chart = true;
    mainListShow.datasetEvaluateChart = true;
    penel = datasetEvaluateChart;
   
    datasetEvaluateChart.value.loadChart()
    
  }
  else if (item === "emptyChart") {
    closeAllShow()
    mainListShow.emptyChart = true;
    mainListShow.chart = true;
  }
};

const closeAllShow = () => {
  mainListShow.userhub = false;
  mainListShow.penel = false;
  mainListShow.projectshub = false;
  mainListShow.dlfuzzpenel = false;
  mainListShow.malfuzz = false;
  mainListShow.reinforcement = false;
  mainListShow.emptypenal = false;
  mainListShow.chart = false;
  mainListShow.malfuzzChart = false;
  mainListShow.reinforcementChart = false;
  mainListShow.datasetEvaluateChart = false;
  mainListShow.dlfuzzImage = false;
  mainListShow.datasetEvaluate = false;
  mainListShow.emptyChart = false;
}
const formPartLogin = ref(true)
function choose_project() {
  formPartLogin.value = false;

}
function switchpenal() {
  console.log("switchPenal")
  if (currentProject.value.id == '-1') {
    console.log('currentProject.value',currentProject.value)
    show('emptypenal')
    setStep(emptypenal.value.activeStep,emptypenal.value.stepMessage)

  } else {
    if (currentProject.value.type == 'cv') {
      show('dlfuzzpenel')
      setStep(dlfuzzPenel.value.activeStep, dlfuzzPenel.value.stepMessage)
      dlfuzzPenel.value.load_data('http://43.138.12.254:9000/dlfuzz/getdata',currentProject.value.id)

    } else if (currentProject.value.type == 'mal') {
      show('malfuzz')
      setStep(malfuzz.value.activeStep,malfuzz.value.stepMessage)

    } else if (currentProject.value.type == 'eval') {
      show('datasetEvaluate')
      setStep(datasetEvaluate.value.activeStep,datasetEvaluate.value.stepMessage)
    } else if (currentProject.value.type == 'reinforce') {
      show('reinforcement')
      setStep(reinforcement.value.activeStep,reinforcement.value.stepMessage)
    }
  }
}
function switchchart() {
  console.log(currentProject.value.type);
  
  if (currentProject.value.id == '-1') {
    show('emptyChart')
  } else {
    if (currentProject.value.type == 'cv') {
      show('activity')

    } else if (currentProject.value.type == 'mal') {
      show('malfuzzchart')

    } else if (currentProject.value.type == 'reinforce') {
      show('reinforcementChart')
    } else if (currentProject.value.type == 'eval') {
      console.log(currentProject.value.id);
      show('datasetEvaluateChart')
    }
  }
}

interface StepMessage{
  title: string;
  message: string;
}
const activeStep: Ref<number> = ref(0);
const stepMessage: Ref<StepMessage[]> = ref([]);
function setStep(stepcurrent: number, stepmessage: StepMessage[]) {
  activeStep.value = stepcurrent;
  stepMessage.value = stepmessage
}


interface AddProjectForm {
    name: string;
    type: string;
}

const add_project = ref(false)
const add_form:AddProjectForm = reactive({
    name: '',
    type:''
})
const options = [{
    value: 'cv',
    label: 'computer vision',
},{
    value: 'mal',
    label: 'Malware Detection',
},{
    value: 'eval',
    label: 'Dataset Evaluate',
}]
const projecthub = ref()
async function send_add_project() {
    let formDataObject = new FormData();
  let userID: any = props.loginMessage.userID;
    if (userID) {
        formDataObject.append('userID', userID);
    } else { return }
    formDataObject.append('project_name', add_form.name);
    formDataObject.append('project_type', add_form.type);
    await axios.post('http://43.138.12.254:9000/add_project', formDataObject).then(async (res) => {
        console.log(res.data)
        if (res.data.flag == true) {
            set_projects(res.data.projects)
          projecthub.value.testprojectlist = res.data.projects
          projecthub.value.getCurrentPageData()
          let formDataObject2 = new FormData();
          for (let item of res.data.projects) {
            if (item.name == add_form.name) {
              formDataObject2 = await penel.value.submitFormWapper();
              formDataObject2.delete('project_id')
              formDataObject2.append('project_id', item.id);
              sendAxios("http://43.138.12.254:9000/dlfuzz/submit",'POST',handleSubmit,formDataObject2)
            }
          }
        }
    }).catch((err) => {
        console.warn(err);
    });
}
const asidetools = ref()
function switch_to_penel(item: Project) {
  changeProject(item);
  choose_project();
  setProjectID(item.id);
  switchpenal();
  asidetools.value.clearActiveList();
  asidetools.value.activeList._1=true;

}
</script>


<style src="../style/skeleton.scss" lang="scss">

</style>