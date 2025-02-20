import { ref, onMounted, onUnmounted } from 'vue'

export function useDimensions() {
  const w = ref(0)
  const d = ref(0)
  const e = ref(0)
  const b = ref(0)
  const dx = ref(0)
  const dy = ref(0)
  const wx = ref(0)
  const wy = ref(0)

  function update() {
    w.value = window,
    d.value = document,
    e.value = d.value.documentElement,
    b.value = d.value.getElementsByTagName('body')[0],
    dx.value = w.value.innerWidth || e.value.clientWidth,
    dy.value = w.value.innerHeight|| e.value.clientHeight,
    wx.value = b.value.clientWidth,
    wy.value = b.value.clientHeight
  }

  function resized(a, b) {
    window.onresize = () => {
        window.clearTimeout(b);
        b = window.setTimeout(a, 100);
    };
    return a;
  }

  onMounted(() => update())
  onMounted(() => resized(() => { update() }) )

  return { dx, dy, wx, wy }
}

