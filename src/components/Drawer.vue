<template>
  <div class="drawer-container">
    <div class="drawer">
      <ul class="drawer-items">
        <li><router-link to="/" @click="$emit('toggle-drawer')">home</router-link></li>
        <li>
          <router-link to="/about" @click="$emit('toggle-drawer')">about</router-link>
        </li>
        <li>
          <router-link to="/biography" @click="$emit('toggle-drawer')"
            >biography</router-link
          >
        </li>
        <li>
          <router-link to="/disco" @click="$emit('toggle-drawer')"
            >discography</router-link
          >
        </li>
        <li>
          <router-link to="/movies" @click="$emit('toggle-drawer')">movie</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
.drawer-container {
  @apply fixed top-0 left-14 z-[11] select-none transition-all duration-300 ease-out;
}
.drawer {
  @apply flex h-screen w-[calc(100vw-4.58rem)] items-center justify-center border-l border-r-white bg-yoru-200 md:w-96;
}
.drawer-items {
  @apply flex h-3/5 w-2/3 flex-col justify-around;
}
.drawer-items li {
  @apply relative inline-block w-max font-nunitosans uppercase tracking-widest transition-all after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-yoru-100 after:transition-transform after:duration-300 hover:text-yoru-100 hover:after:origin-bottom-left hover:after:scale-x-100;
}
</style>
