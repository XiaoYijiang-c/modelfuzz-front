<template>
  <div class="single-page">
    <div class="navigation navigation__inside">
      <span class="navigation--name">nerual sentinel</span>
      <div class="navigation--logo" >
        <img src="../img/logo.png" alt="logo" class="navigation--logo__logo" >
        <span class="navigation--button" @click="changeLanguage">{{ $t("FirstPage.switchLan") }}</span>
      </div>
    </div>
    <div class="single-page--main-window">
      <div class="single-page--background"></div>
      <div class="aside-tool">
        <AsideTools ref="asidetools" @show="show" @switchpenal="switchpenal" @switchchart="switchchart" :newNumber="numberCount.dlfuzz" :openASide="openASide" @switchPage="emits('switchPage', 0)"></AsideTools>
      </div>
      <div class="console">
        <Userhub v-show="mainListShow.userhub" :userMessage="props.loginMessage" @show="show"  @switchPage="emits('switchPage', 0)"></Userhub>
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
    mainListShow.reinforcementChart = true;
    mainListShow.chart = true;
    penel = reinforcementChart;
   
    reinforcementChart.value.loadChart()
    
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
  mainListShow.dlfuzzImage = false;
  mainListShow.datasetEvaluate = false;
  mainListShow.emptyChart = false;
}
const formPartLogin = ref(true)
function choose_project() {
  formPartLogin.value = false;

}
function switchpenal() {
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
  if (currentProject.value.id == '-1') {
    show('emptyChart')
  } else {
    if (currentProject.value.type == 'cv') {
      show('activity')

    } else if (currentProject.value.type == 'mal') {
      show('malfuzzchart')

    } else if (currentProject.value.type == 'eval') {
      show('datasetEvaluate')
    }else if (currentProject.value.type == 'reinforce') {
      show('reinforcementChart')
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