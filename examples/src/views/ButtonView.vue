<template>
  <div class="row">
    <caps-space-button>Default</caps-space-button>
    <caps-space-button type="primary">Primary</caps-space-button>
    <caps-space-button type="success">Success</caps-space-button>
    <caps-space-button type="warning">Warning</caps-space-button>
    <caps-space-button type="danger">Danger</caps-space-button>
    <caps-space-button type="info">Info</caps-space-button>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.row {
  margin-bottom: 20px;
  width: 800px;
  display: flex;
  justify-content: space-evenly;
  margin: 20px auto;
}
</style>
