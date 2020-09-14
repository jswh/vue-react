<template>
    <div>
    <h1> page1 with react components</h1>
    <section id='react-app'></section>
    </div>
</template>

<script>
import React from 'react';
import ReactDOM from 'react-dom';
import Form from './app.jsx'


export default {
  name: 'page1',
  mounted: function () {
    ReactDOM.render(
    <Form/>,
    document.getElementById('react-app')
    );
  }
}
</script>