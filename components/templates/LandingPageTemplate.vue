<template>
    <div class="landing-page">
      <header class="landing-header">
        <slot name="header" />
      </header>
      <main>
        <slot name="main" />
      </main>
      <footer class="landing-footer">
        <slot name="footer" />
      </footer>
    </div>
  </template>
  
  <style scoped>
  .landing-page {
    text-align: center;
    padding: 20px;
  }
  
  .landing-header {
    background-color: #f8f9fa;
    padding: 50px;
  }
  
  .landing-footer {
    padding: 20px;
    background-color: #f8f9fa;
  }
  </style>