function flutterMaps() {
    openWindow('https://mapsrealtime.netlify.app/', 360, 640);
  }
  
  function openLivrosAPI() {
    openWindow('https://livros-api.netlify.app/', 360, 640);
  }
  
  function openWindow(url, width, height) {
    var left = (screen.width - width) / 2;
    var top = (screen.height - height) / 2;
    window.open(url, '_blank', 'width=' + width + ',height=' + height + ',left=' + left + ',top=' + top);
  }