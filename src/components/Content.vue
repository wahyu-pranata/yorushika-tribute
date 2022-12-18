<template>
  <div class="intro-content">
    <div class="intro-content-heading">
      <slot name="side"></slot>
    </div>
    <slot name="body">
      <div class="intro-content-body">
        <p class="intro-content-paragraph">
          <slot name="paragraph1"></slot>
        </p>
        <p class="intro-content-paragraph">
          <slot name="paragraph2"></slot>
        </p>
      </div>
    </slot>
  </div>
</template>
