self.addEventListener('install', (event) => {
  console.log('Service Worker installed');
});

self.addEventListener('fetch', (event) => {
  // 可以添加缓存逻辑，这里先不缓存，保证在线可用
});
