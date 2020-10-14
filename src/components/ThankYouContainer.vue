<template>
  <div class="my-10">
    <h2>Credit to</h2>
    <ul class="pl-1">
      <li v-for="name in thankyou" :key="name">{{name}}</li>
    </ul>
  </div>
</template>


<script>
export default {
  data() {
    return {
      thankyou: [
        "Hackalong & Lunarpunklabs for web design",
      ],
    };
  },
};
</script>

