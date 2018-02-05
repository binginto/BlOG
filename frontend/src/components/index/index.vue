<template>
  <div class="hello">
    <h3>hello binginto</h3>
    <ul>
       <li>
       <button><router-link to="/binginto">Binginto</router-link></button>
       </li>
       <li>
       <button><router-link to="/guest">Guest</router-link></button>
       </li>
    </ul>
  </div>
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
