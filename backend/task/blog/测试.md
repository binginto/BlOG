vue传参有几种情况，父组件传参到子组件，子组件传参到父组件，组件之间的传参。一般可以采用props实现父传参到子。采用$emit监控事件可以实现子传参到父和组件之间传参。遇到大型的应用，也可以采用vuex，通过this.$store.state来实现组件间传参。下面是简单的Demo。

## 父传参到子
通过props，父组件可传参到子组件。
### 子组件
``` javascript
Vue.component('child', {
  // 声明 props
  props: ['message']
  // 就像 data 一样，prop 也可以在模板中使用
  // 同样也可以在 vm 实例中通过 this.message 来使用
  template: '<span>{{ message }}</span>'
})；
```
### 父组件
``` xml
<child message="hello!"></child>
```

## 子传父和组件间传参
通过$emit和监听事件，子组件可传参到父组件。
### 子组件发射要传出数据
``` javascript
this.$emit("listenToChildEvent", "this message is from child");
```
### 父组件监听子组件传出数据
``` xml
<child :message="parentMsg" v-on:listenToChildEvent="showMsgFromChild" ></child>
```

##  Vuex管理传参数据
Vuex通过State状态来存储传参数据，通过Mutation来同步修改Vuex的State状态，通过action来异步修改mutation，从而达到异步修改State目的。.commit用于提交状态。.dispatch用于触发状态。