<script setup>
  import { useDimensions } from './dimensions.js'
  const { dx, dy, wx, wy } = useDimensions()
</script>

<template>
  <div id="dimensions">
    <table class="table">
      <thead>
          <tr>
              <th>Dimensions</th>
              <th>Width</th>
              <th>Height</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <th>Window</th>
              <td v-text="wx + 'px' || 'N/A'"></td>
              <td v-text="wy + 'px' || 'N/A'"></td>
          </tr>
          <tr>
              <th>Document</th>
              <td v-text="dx + 'px' || 'N/A'"></td>
              <td v-text="dy + 'px' || 'N/A'"></td>
          </tr>
      </tbody>
      <tfoot>
          <tr>
              <td colspan="3">
                  <h1>Germinate</h1>
              <p>A simple HTML project boilerplate and asset compiling using <a target="_blank" href="https://vite.dev/">Vite</a>.</p>
          </td>
          </tr>
          <tr>
            <td colspan="3">
                <p><a @click.prevent target="_blank" href="//github.com/alenabdula/germinate"><svg viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg></a></p>
            </td>
          </tr>
      </tfoot>
    </table>
  </div>
</template>

<style scoped>
  #dimensions {
    svg {
      vertical-align: top;
      height: 32px;
      width: 32px;
      fill: black;
    }
  }
  #dimensions .table {
    text-align: left;
    padding:2rem;
    max-width: 400px;
    font-size: 80%;
    box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  }
</style>