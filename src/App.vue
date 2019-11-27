<template>
  <div id="app">
      <link href="//stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet" />
<!--      <link rel="stylesheet" href="styles.css"> TODO: Not working-->
      <link href="https://fonts.googleapis.com/css?family=Inconsolata|Wallpoet&display=swap" rel="stylesheet">
      <Login/>
  </div>
</template>

<script>
import Login from "./components/login/Login";

export default {
  name: 'app',
  components: {
    Login
  }
}
</script>

<style>
    html{
    }
    .container{
        text-align: center;
        margin: 0;
    }
    .card{
        margin: 100px;
    }

</style>