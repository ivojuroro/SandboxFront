<template>
  <div id="app">
<!--    <link href="//stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet" />-->
      <link href="https://fonts.googleapis.com/css?family=Inconsolata|Wallpoet&display=swap" rel="stylesheet">
      <Login/>
  </div>
</template>

<script>
import Login from "./components/Login";

export default {
  name: 'app',
  components: {
    Login
  }
}
</script>

<style>
  #app {
    font-family: 'Wallpoet', cursive;
    /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
