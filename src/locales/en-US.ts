const FirstPage = {
    switchLan: '切换为中文',
    AImodelfuzz: 'AI Model Fuzz',
    datasetEvaluate: 'Dataset Evaluation',
    modelRobustness: 'Model Robustness Evaluation',
    retrain: 'Model Retrain',
    user: 'Personal',
    button: 'QUICK START'
}
const Userhub = {
    tool_item_0: "Projects",
    tool_item_1: "Results",
    tool_item_2: "Message",
    hot_picture: "Understand the heat calculation method"
}

const Projectshub = {
    last_page: "PreviousPage",
    next_page: "NextPage",
    project_list: "Project List",
    project_add: "Add Project",
    project_name: "Project Name",
    project_type: "Project Type",
    warn: "Warning",
    warn_text: "Are you sure you want to delete the project:",
    warn_confirm: "confirm",
    warn_cancal: "cancel",
}

const skeleton = {
    prompt_message: 'Select Your Project',
    step_0: 'step 1',
    step_1: 'step 2',
    step_2: 'step 3',
    step_3: 'step 4',
    step_message_0: 'Upload the model and dataset to be tested',
    step_message_1: 'Provide basic model information',
    step_message_2: 'Confirm fuzzy parameters',
    step_message_3: 'SUBMIT',
}
const empty = {
    message: 'Please Select Your Project',
    step: 'step 1'
}

const aside_tools = {
    item_0: 'Home',
    item_1: 'Statistical',
    item_2: 'Management',
    item_3: 'Settings',
}

const datasetEvaluate = {
    title: 'Upload Model And Dataset',
    button_0: 'Select',
    button_1: 'Template',
    card_title_0: 'Upload Model Structure Code',
    card_title_1: 'Upload The Model To Be Tested',
    card_title_2: 'Upload Dataset',
    card_title_3: 'Upload Preprocessing Files',
    label_0: 'Model Function Name',
    label_1: 'Preprocessing Function Name',
    label_2: 'Input Dimension',
    step_0: 'Upload Model Structure Code And Dataset',
}
// 按功能模块导出
export default {
    FirstPage,
    Userhub,
    Projectshub,
    skeleton,
    empty,
    aside_tools,
    datasetEvaluate
}
