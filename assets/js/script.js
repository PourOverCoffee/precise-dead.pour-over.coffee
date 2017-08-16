// ============================================================================
// Facebook Pixel Code

!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
  n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
  document,'script','https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '1434436959980967'); // Insert your pixel ID here.
  fbq('track', 'PageView');

// ============================================================================
// Google Analytics
  (function (i, s, o, g, r, a, m) { i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () { (i[r].q = i[r].q || []).push(arguments) }, i[r].l = 1 * new Date(); a = s.createElement(o), m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m) })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

    var GA_LOCAL_STORAGE_KEY = 'ga:clientId';
    if (window.localStorage) {
      ga('create', {
        'trackingId': 'UA-104468879-1',
        'cookieDomain': 'auto',
        'storage': 'none',
        'clientId': localStorage.getItem(GA_LOCAL_STORAGE_KEY)
      });
      ga(function (tracker) {
        localStorage.setItem(GA_LOCAL_STORAGE_KEY, tracker.get('clientId'));
      });
    }
    else {
      setTimeout("ga('send', 'event', 'Kein Bounce', '45 Sekunden')", 45000); ga('create', 'UA-104468879-1', 'auto');
    }
    ga('set', 'app', 'landingpage');
    ga('send', 'pageview');


    function ga_heartbeat() {
      ga('send', 'event', 'Heartbeat', 'Heartbeat');
      setTimeout(ga_heartbeat, 25 * 1000);  // 5*60*1000
    }
    ga_heartbeat();

// ============================================================================
// Scrolling Listener

function addScollListenerToId(id) {
    element = document.getElementById(id)
    new Waypoint({
      element: element,
      handler: function() {
        console.log("Reached WayPoint")
        logAction("scrollPoint-" + window.location.search.replace('?', ''), id)
      }
    })
    console.log("Added WayPoint for " + id)
  }

  // Add scroll listeners
  $('[id^=scroll-]').each(function() { addScollListenerToId(this.id) })

// ============================================================================
// Try Buttons
$('.tryButton').each(function() { $(this).attr('href', 'thanks.html?product=03_organic'+'&'+window.location.search.replace('?', '')) })


// ============================================================================
// Facebook Test
fbq('track', 'MoreInformation', {
  type: 'info'
}); 