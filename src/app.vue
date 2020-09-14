<template>
<div>
  <h1>Hello App!</h1>
  <p>
    <router-link to="/page1">Go to page1 with react</router-link>
    <router-link to="/page2">Go to page2</router-link>
  </p>
        <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>