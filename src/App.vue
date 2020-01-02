<template>
  <div id="app">
    <div class="header">通讯录</div>
    <div class="main">
      <router-view/>
    </div>
    <div class="footer">
      <router-link to="/xiao">消息</router-link>
      <router-link to="/ming">名字</router-link>
      <router-link to="/kong">空间</router-link>
    </div>
  </div>
</template>

<style lang="scss">
html,body{
  width: 100%;
  height: 100%;
}
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
   width: 100%;
  height: 100%;
}
#app{
  display: flex;
  flex-direction: column;
  .header{
    width: 100%;
    height: 45px;
    background: #00f;
    color: #fff;
    text-align: center;
    line-height: 45px;
  }
  .main{
    flex: 1;
    width: 100%;
    overflow: auto;
  }
  .footer{
    width: 100%;
    height: 45px;
    background: #00f;
    color: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    a{
      color: #fff;
      text-decoration: none;
      &.router-link-exact-active {
      color: red;
    }
    }
  }
}

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
