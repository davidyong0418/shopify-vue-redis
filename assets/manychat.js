if (typeof Object.assign != 'function') {
  Object.assign = function(target) {
    'use strict';
    if (target == null) {
      throw new TypeError('Cannot convert undefined or null to object');
    }

    target = Object(target);
    for (var index = 1; index < arguments.length; index++) {
      var source = arguments[index];
      if (source != null) {
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
    }
    return target;
  };
}
if (!Array.prototype.includes) {
  Array.prototype.includes = function(search, start) {
    if (typeof start !== 'number') {
      start = 0;
    }

    if (start + search.length > this.length) {
      return false;
    } else {
      return this.indexOf(search, start) !== -1;
    }
  };
}
window.onload = function() {
  var manychat_html = '<div class="_1wQLdfXe fSwDb_rd _1WdK82W-" style="background-color: rgb(255, 255, 255) !important; width: 100% !important; max-width: 100% !important; min-width: 280px !important;"><div class="_222ENa3-"><div style="padding: 10px 0px !important;"><img src="https://manybot-thumbnails.s3.eu-central-1.amazonaws.com/fb588069391390106/ca/big_56ccb001d7519166bdc1937891bfb0ee.jpg" style="max-width: 100% !important; width: auto !important; min-width: auto !important; max-height: 200px !important; display: inline !important;"></div><h2 style="color: rgb(33, 33, 33) !important;">Giveaway Alert!</h2><p style="color: rgb(158, 158, 158) !important;">Whether you’re headed back to school, or your children are we want you looking flawless!  In order to do that we bring you our Back to School $1,000 giveaway! To enter, just message us over at Facebook with "win" and you’ll be entered.</p><div class="_3b0SgtJI _3L7815pw _2B2PWepV"><div class="_3b0SgtJI _2VTUkLwb _133Zu3Ki"><div id="mc-2161a41f-e3c8-c058-05eb-332cf0d1cadd" class="fb-send-to-messenger mc-send-to-messenger fb_iframe_widget" messenger_app_id="532160876956612" page_id="588069391390106" data-ref="optin_2627932_89ac9a2b-dbc8-5ed4-5301-2c34c83f1108_5f62d390-e391-111f-9553-1c833a7c16fe" color="blue" size="xlarge" cta_text="GET_STARTED" fb-xfbml-state="rendered" fb-iframe-plugin-query="app_id=532160876956612&amp;color=blue&amp;container_width=0&amp;cta_text=GET_STARTED&amp;locale=en_US&amp;messenger_app_id=532160876956612&amp;page_id=588069391390106&amp;ref=optin_2627932_89ac9a2b-dbc8-5ed4-5301-2c34c83f1108_5f62d390-e391-111f-9553-1c833a7c16fe&amp;sdk=joey&amp;size=xlarge"><span style="vertical-align: bottom; width: 122px; height: 38px;"><iframe name="fc3467f1398848" width="1000px" height="1000px" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" allow="encrypted-media" title="fb:send_to_messenger Facebook Social Plugin" src="https://www.facebook.com/v2.12/plugins/send_to_messenger.php?app_id=532160876956612&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter%2Fr%2FbSTT5dUx9MY.js%3Fversion%3D42%23cb%3Dfaceb8a06293b4%26domain%3Dlangehair.com%26origin%3Dhttps%253A%252F%252Flangehair.com%252Ff1d2a19a368df9%26relation%3Dparent.parent&amp;color=blue&amp;container_width=0&amp;cta_text=GET_STARTED&amp;locale=en_US&amp;messenger_app_id=532160876956612&amp;page_id=588069391390106&amp;ref=optin_2627932_89ac9a2b-dbc8-5ed4-5301-2c34c83f1108_5f62d390-e391-111f-9553-1c833a7c16fe&amp;sdk=joey&amp;size=xlarge" style="border: none; visibility: visible; width: 122px; height: 38px;" class=""></iframe></span></div></div></div></div><a href="https://manychat.com" target="_blank"><svg data-test-id="manychat-logo" class="_3wLhdWUd _3yvbuIJG" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="405.216px" height="389.332px" viewBox="0 0 405.216 389.332" enable-background="new 0 0 405.216 389.332" xml:space="preserve"><path d="M172.979,139.329c0,5.181-4.199,9.379-9.379,9.379c-5.18,0-9.379-4.198-9.379-9.379c0-5.18,4.199-9.379,9.379-9.379 C168.78,129.95,172.979,134.149,172.979,139.329 M249.227,139.329c0-5.18-4.199-9.379-9.379-9.379s-9.379,4.199-9.379,9.379 c0,5.181,4.199,9.379,9.379,9.379S249.227,144.51,249.227,139.329 M319.641,343.1c22.877-0.002,45.775-8.559,63.414-25.729 l0.123-0.109c0.213-0.189,0.418-0.389,0.613-0.596c20.955-22.098,27.172-54.511,15.834-82.578 c-6.174-15.287-17.932-27.256-33.107-33.698c-15.178-6.445-31.953-6.594-47.242-0.417c-25.299,10.219-37.57,39.115-27.352,64.416 c2.174,5.376,8.291,7.975,13.67,5.805c5.377-2.173,7.975-8.291,5.803-13.669c-5.883-14.564,1.18-31.198,15.744-37.081 c20.82-8.409,44.604,1.687,53.014,22.51c8.215,20.336,3.768,43.828-11.322,59.965c-0.098,0.09-0.195,0.182-0.293,0.277 c-27.561,26.967-71.926,26.482-98.895-1.078c-23.914-24.441-26.514-63.466-6.07-90.745c0.531-0.682,3.027-3.485,5.23-5.959 c11.576-12.994,23.291-26.393,28.26-34.914c11.703-20.084,18.148-42.552,18.148-63.268c0-13.892-2.787-27.354-8.293-40.071 c1.744-7.777,7.428-29.662,12.721-49.357c0.951-3.536-0.01-7.313-2.535-9.966c-2.525-2.651-6.254-3.798-9.83-3.021 c-19.521,4.234-41.402,8.709-49.236,9.949C241.167,4.749,222.051,0,202.52,0C140.378,0,89.824,47.656,89.824,106.231 c0,20.717,6.446,43.186,18.151,63.269c4.926,8.453,16.545,21.82,28.022,34.787c2.228,2.517,4.753,5.369,5.268,6.036 c20.706,27.743,18.129,65.874-6.127,90.665c-13.064,13.352-30.546,20.816-49.225,21.02c-18.489,0.219-36.054-6.771-49.369-19.646 l-0.085-0.1c-0.084-0.096-0.169-0.189-0.255-0.285c-14.977-16.092-19.337-39.651-11.109-60.023 c4.073-10.086,11.831-17.983,21.845-22.235c10.013-4.25,21.082-4.35,31.169-0.273c14.563,5.882,21.627,22.516,15.744,37.08 c-2.171,5.378,0.427,11.496,5.804,13.669c5.381,2.17,11.498-0.429,13.669-5.805c10.217-25.301-2.052-54.197-27.352-64.416 c-15.289-6.176-32.065-6.026-47.242,0.417c-15.176,6.442-26.935,18.411-33.11,33.698c-11.243,27.837-5.325,60.021,15.073,82.049 l0.261,0.303c0.19,0.221,0.39,0.432,0.598,0.637c17.361,16.986,40.288,26.229,64.588,25.932 c24.288-0.264,47.019-9.971,64.006-27.334c15.254-15.59,24.402-36.152,25.759-57.896c1.342-21.513-4.983-42.826-17.812-60.016 c-0.889-1.19-2.596-3.128-6.373-7.395c-7.447-8.414-21.309-24.075-25.604-31.442c-9.863-16.922-15.294-35.637-15.294-52.694 C110.824,59.235,151.958,21,202.52,21c17.067,0,33.717,4.387,48.149,12.688c1.697,0.976,3.648,1.458,5.592,1.391 c4.5-0.152,23.049-3.872,38.688-7.156c-4.18,15.846-9.008,34.648-9.406,38.44c-0.201,1.915,0.127,3.848,0.953,5.589 c5.121,10.819,7.719,22.352,7.719,34.279c0,17.057-5.432,35.771-15.293,52.692c-4.32,7.413-18.291,23.098-25.797,31.522 c-3.752,4.213-5.447,6.124-6.33,7.3c-12.883,17.192-19.25,38.528-17.924,60.076c1.338,21.777,10.488,42.369,25.766,57.98 C272.42,333.982,296.02,343.1,319.641,343.1 M203.893,187.847c13.941,0,19.699-5.575,19.699-8.752c0-3.176-2.523-3.748-5.699-3.748 h-32.337c-3.176,0-5.8,0.572-5.8,3.748c0,3.177,6.12,8.752,19.8,8.752H203.893 M298.057,389.332c5.799,0,10.5-4.701,10.5-10.5 s-4.701-10.5-10.5-10.5c-17.756,0-39.418-8.361-56.533-21.82c-10.801-8.494-28.92-26.348-28.92-50.467c0-5.799-4.701-10.5-10.5-10.5 h-0.42c-5.799,0-10.5,4.701-10.5,10.5c0,24.119-18.12,41.973-28.922,50.467c-17.114,13.459-38.776,21.82-56.532,21.82 c-5.799,0-10.5,4.701-10.5,10.5s4.701,10.5,10.5,10.5c22.576,0,48.562-9.838,69.514-26.314c11.441-8.998,20.415-19.162,26.65-30.004 c6.235,10.842,15.208,21.006,26.65,30.004C249.493,379.494,275.481,389.332,298.057,389.332"></path></svg></a></div>';
  if (!document.getElementById('manychat-widget').innerHTML) {
    document.getElementById('manychat-widget').innerHTML = manychat_html;
  }
};