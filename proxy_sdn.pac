function FindProxyForURL(url, host) {
  const ips = [5, 3, 7, 4, 2, 6, 8, 9].map(i => '192.168.1.' + i);
  const hosts = [
    'chrome.com', 'google.com', 'youtube.com',
    'googleusercontent.com', 'pixiv.net', 'razord.top',
    'goo.gl', 'facebook.com', 'twitter.com'
  ];
  let result = 'DIRECT';
  if (hosts.some(h => host == h || host.includes('.' + h))) {
    const toProxy = url.startsWith('http') ? ip => 'PROXY ' + ip + ':7890' : ip => 'SOCKS ' + ip + ':7891';
    const proxys = ips.map(ip => toProxy(ip)).join(';');
    result = proxys + ';' + result;
  }
  return result;
}
