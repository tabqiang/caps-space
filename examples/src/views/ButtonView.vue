<template>
  <div>
    <div class="row">
      <caps-space-button>Default</caps-space-button>
      <caps-space-button type="primary">Primary</caps-space-button>
      <caps-space-button type="success">Success</caps-space-button>
      <caps-space-button type="warning">Warning</caps-space-button>
      <caps-space-button type="danger">Danger</caps-space-button>
      <caps-space-button type="info">Info</caps-space-button>
    </div>
    <div class="row">
      <caps-space-button round>Default</caps-space-button>
      <caps-space-button type="primary" round>Primary</caps-space-button>
      <caps-space-button type="success" round>Success</caps-space-button>
      <caps-space-button type="warning" round>Warning</caps-space-button>
      <caps-space-button type="danger" round>Danger</caps-space-button>
      <caps-space-button type="info" round>Info</caps-space-button>
    </div>
    <div class="row">
      <caps-space-button disabled>Default</caps-space-button>
      <caps-space-button type="primary" disabled>Primary</caps-space-button>
      <caps-space-button type="success" disabled>Success</caps-space-button>
      <caps-space-button type="warning" disabled>Warning</caps-space-button>
      <caps-space-button type="danger" disabled>Danger</caps-space-button>
      <caps-space-button type="info" disabled>Info</caps-space-button>
    </div>
    <div class="row">
      <caps-space-button icon="position" circle></caps-space-button>
      <caps-space-button type="primary" icon="camera" circle></caps-space-button>
      <caps-space-button type="success" icon="loading" circle></caps-space-button>
      <caps-space-button type="warning" icon="video-play" circle></caps-space-button>
      <caps-space-button type="danger" icon="refresh" circle></caps-space-button>
      <caps-space-button type="info" icon="postcard" circle></caps-space-button>
    </div>
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
