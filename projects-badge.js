/**
 * This script adds a "View my other projects" badge to my repls.
 */

function main() {
  // Theme is passed from the script tag, default blue
  const themes = {
    dark: { fg: '#F5F9FC', bg: '#130F26' },
    light: { fg: '#130F26', bg: '#F5F9FC' },
    red: { fg: '#F5F9FC', bg: '#FA4B4B' },
    orange: { fg: '#F5F9FC', bg: '#D96D00' },
    yellow: { fg: '#F5F9FC', bg: '#A68A00' },
    lime: { fg: '#F5F9FC', bg: '#639400' },
    green: { fg: '#F5F9FC', bg: '#00A11B' },
    teal: { fg: '#F5F9FC', bg: '#0093B0' },
    blue: { fg: '#F5F9FC', bg: '#0F87FF' },
    blurple: { fg: '#F5F9FC', bg: '#8E78FF' },
    purple: { fg: '#F5F9FC', bg: '#B266FF' },
    magenta: { fg: '#F5F9FC', bg: '#EB3BEB' },
    pink: { fg: '#F5F9FC', bg: '#F545BA' },
  };
  const color = themes[document.currentScript.getAttribute('theme') || 'blue'];

  const badge = `
  <style>
  #replit-badge {
    position: fixed;
    cursor: pointer;
    bottom: 16px;
    right: 16px;
    z-index: 1000;
  }

  #replit-badge svg {
    opacity: 0.5;
    transition-property: opacity, transform;
    transition: opacity 120ms, transform 120ms;
    transition-timing-function: ease-out;
  }

  #replit-badge:hover svg {
    transform: scale(1.05);
    opacity: 1;
  }
  </style>
  
  <a id="replit-badge" href="https://snakebyte.repl.co/#projects" target="_blank" rel="noopener noreferrer">

  <svg
  width="186"
  height="45"
  viewBox="0 0 49.212502 11.90625"
  version="1.1"
  id="svg240"
  xml:space="preserve"
  inkscape:version="1.2.1 (9c6d41e410, 2022-07-14)"
  sodipodi:docname="badge.svg"
  xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
  xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:svg="http://www.w3.org/2000/svg"><sodipodi:namedview
  id="namedview242"
  pagecolor="#505050"
  bordercolor="#eeeeee"
  borderopacity="1"
  inkscape:showpageshadow="0"
  inkscape:pageopacity="0"
  inkscape:pagecheckerboard="0"
  inkscape:deskcolor="#505050"
  inkscape:document-units="px"
  showgrid="false"
  inkscape:zoom="3.3638608"
  inkscape:cx="123.66742"
  inkscape:cy="8.6210464"
  inkscape:window-width="1440"
  inkscape:window-height="837"
  inkscape:window-x="-8"
  inkscape:window-y="-8"
  inkscape:window-maximized="1"
  inkscape:current-layer="svg240" /><defs
  id="defs237" /><rect
  fill="${color.bg}"
  width="49.212494"
  height="11.90625"
  x="6.2056988e-06"
  y="0"
  id="rect4"
  style="fill-opacity:1;stroke-width:0.751517"
  ry="3.3821504" /><path
  d="m 6.7972027,1.711258 c -1.5301021,0 -2.75532,0.6968778 -3.6472484,1.5263141 -0.8862472,0.8218621 -1.4789725,1.8065807 -1.7592387,2.4826292 -0.062492,0.1496014 -0.062492,0.3162459 0,0.4658474 0.2802662,0.6760477 0.8729915,1.6607672 1.7592387,2.4826284 0.8919284,0.829437 2.1171463,1.5263149 3.6472484,1.5263149 1.5301022,0 2.7553195,-0.6968779 3.6472483,-1.5263149 0.886248,-0.823755 1.478973,-1.8065807 1.761132,-2.4826284 0.06249,-0.1496015 0.06249,-0.316246 0,-0.4658474 C 11.923424,5.0441528 11.330699,4.0594342 10.444451,3.2375721 9.5525222,2.4081358 8.3273049,1.711258 6.7972027,1.711258 Z M 4.0702882,5.953125 a 2.7269148,2.7269148 0 1 1 5.4538292,0 2.7269148,2.7269148 0 1 1 -5.4538292,0 z M 6.7972027,4.7411635 c 0,0.6684729 -0.5434893,1.2119615 -1.2119619,1.2119615 -0.1344516,0 -0.2632232,-0.022721 -0.3844194,-0.062494 -0.1041532,-0.03409 -0.2253491,0.030299 -0.2215618,0.1401312 0.00569,0.1306724 0.024615,0.2613294 0.060599,0.391994 C 5.2992933,7.3923257 6.2972683,7.9680076 7.2668381,7.7085721 8.2364079,7.4491363 8.8120899,6.4511615 8.5526537,5.4815922 8.3424542,4.6957095 7.6474697,4.1673708 6.874844,4.1351779 6.7650101,4.1313919 6.7006245,4.2506933 6.7347115,4.3567395 6.774478,4.477939 6.7972022,4.6067064 6.7972045,4.7411593 Z" fill="${color.fg}"
  id="path6"
  style="fill-opacity:1;stroke-width:0.75" />
    <text fill="${color.fg}"
  xml:space="preserve"
  style="font-size:3.95834px;font-family:'Reprise Stamp Std';-inkscape-font-specification:'Reprise Stamp Std, Normal';text-align:center;text-anchor:middle;fill-opacity:1;fill-rule:evenodd;stroke-width:0.75"
  x="30.944756"
  y="4.0551"
  id="text10"><tspan fill="${color.fg}"
    sodipodi:role="line"
    id="tspan2587"
    style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:3.95834px;font-family:'Segoe UI';-inkscape-font-specification:'Segoe UI, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;fill-opacity:1;stroke-width:0.261;stroke-dasharray:none"
    x="30.944756"
    y="4.0551">View other projects</tspan><tspan fill="${color.fg}"
    sodipodi:role="line"
    style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:3.95834px;font-family:'Segoe UI';-inkscape-font-specification:'Segoe UI, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;fill-opacity:1;stroke-width:0.261;stroke-dasharray:none"
    x="30.944756"
    y="9.8496456"
    id="tspan2641">by @SnakeByte</tspan></text></svg>

  </a>
  `;

  document.body.insertAdjacentHTML('beforeend', badge);
}

main();
