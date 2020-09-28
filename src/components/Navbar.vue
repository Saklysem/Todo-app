<template>
  <nav style="color: green">
    <div class="nav-wrapper" style="color: green">
      <div class="container" style="color: green">
        <router-link to="/" class="brand-logo" style="color: black">Front End</router-link>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <router-link to="/" style="color: black">Home</router-link>
          </li>        
          <li>
            <router-link to="/about" style="color: black">Contact</router-link>
          </li>
          <li>
            <router-link to="/about" style="color: black">About</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<style scoped>
nav{
  background-color: rgba(144, 243, 144, 0.75);
}
</style>