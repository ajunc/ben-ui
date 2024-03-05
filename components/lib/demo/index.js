import Demo from './src/main.vue'

Demo.install = (Vue) => {
    Vue.component(Demo.name, Demo)
}

export default Demo