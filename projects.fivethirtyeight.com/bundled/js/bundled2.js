function getScript(e,t,n=!1){var a=document.createElement("script"),o=document.getElementsByTagName("script")[0];a.async=1,o.parentNode.insertBefore(a,o),a.onload=a.onreadystatechange=function(e,n){(n||!a.readyState||/loaded|complete/.test(a.readyState))&&(a.onload=a.onreadystatechange=null,a=void 0,n||t&&t())},n&&(a.onerror=function(){t()}),a.src=e}function inView(e,t,n){var a=e.getBoundingClientRect();return n=n||0,a.bottom>0&&a.right>0&&a.left<(t.innerWidth||t.document.documentElement.clientWidth)&&a.top<(t.innerHeight||t.document.documentElement.clientHeight)+n}function getDeviceType(){var e=window,t="inner";"innerWidth"in window||(t="client",e=document.documentElement||document.body);var n=e[t+"Width"];return n<=768?"Smartphone":n<=1024?"Tablet":"Desktop"}function getFteUrl(){return window.location.hostname.includes("fivethirtyeight.com")?window.location.href.split(/[?#]/)[0]:trackingConfig.fullUrl}window.pageSection={life:"culture"}[trackingConfig.section]||trackingConfig.section,window.___skipShowAds=navigator.userAgent&&navigator.userAgent.indexOf("Electron")>-1||window.location&&window.location.search&&window.location.search.indexOf("skipads")>=0;var FTEChartbeat={uid:"12240",domain:"fivethirtyeight.com",path:"/"+trackingConfig.path,sections:pageSection,authors:trackingConfig.author},FTENielsen={asset_id:trackingConfig.postId+":"+trackingConfig.title,section:pageSection,seg_a:"",seg_b:"",seg_c:""};function analyticsInit(){var e,t;if(void 0!==FTEChartbeat&&(window._sf_startpt=(new Date).getTime(),window._sf_async_config=window._sf_async_config||{},window._sf_async_config.useCanonical=!0,window._sf_async_config.useCanonicalDomain=!0,window._sf_async_config.flickerControl=!1,window._sf_async_config.uid=FTEChartbeat.uid,window._sf_async_config.domain=FTEChartbeat.domain,window._sf_async_config.path=FTEChartbeat.path,window._sf_async_config.sections=FTEChartbeat.sections,window._sf_async_config.authors=FTEChartbeat.authors,e=document.createElement("script"),t=document.getElementsByTagName("script")[0],e.async=!0,e.type="text/javascript",e.src="https://static.chartbeat.com/js/chartbeat_mab.js",t.parentNode.insertBefore(e,t),e=document.createElement("script"),t=document.getElementsByTagName("script")[0],e.async=!0,e.type="text/javascript",e.src="https://static.chartbeat.com/js/chartbeat.js",t.parentNode.insertBefore(e,t)),triggerNielsonAndComscore(),!window.gtmAdded){window.gtmAdded=!0,function(e,t,n,a,o){e[a]=e[a]||[],e[a].push({"gtm.start":(new Date).getTime(),event:"gtm.js"});var i=t.getElementsByTagName(n)[0],r=t.createElement(n);r.async=!0,r.src="https://www.googletagmanager.com/gtm.js?id=GTM-KLHT6T2",i.parentNode.insertBefore(r,i)}(window,document,"script","dataLayer");var n=document.createElement("iframe");n.src="https://www.googletagmanager.com/ns.html?id=GTM-KLHT6T2",n.width="0",n.height="0",n.style.display="none",document.body.appendChild(n)}var a=document.getElementsByClassName("comments fte-expandable")[0]||document.getElementById("related");a&&window.addEventListener("scroll",(function(e){if(!window.taboolaAdded&&inView(a,window,50)){window.taboolaAdded=!0,window.ESPNTaboola={publisher:"abcnews-fivethirtyeight",type:"photo"},window._taboola=window._taboola||[];var t=document.createElement("script"),n=document.getElementsByTagName("script")[0];t.async=!0,t.type="text/javascript",t.src="https://cdn.taboola.com/libtrc/"+ESPNTaboola.publisher+"/loader.js",t.id="tb_loader_script",n.parentNode.insertBefore(t,n),window.performance&&"function"==typeof window.performance.mark&&window.performance.mark("tbl_ic");var o=document.createElement("div");o.className="container",o.setAttribute("aria-hidden","true"),a.parentNode.insertBefore(o,a.nextSibling);var i=document.createElement("div");i.className="taboola-placeholder taboola-recommendations",i.setAttribute("id","taboola-"+trackingConfig.postId),o.appendChild(i),window._taboola.push({mode:"thumbnails-c",container:"taboola-"+trackingConfig.postId,placement:"Mid Article Thumbnails",target_type:"mix"}),window._taboola.push({photo:"auto",url:trackingConfig.fullUrl})}}))}function triggerNielsonAndComscore(){var e,t,n,a;void 0!==FTENielsen&&((n=window)[a="NOLBUNDLE"]=n[a]||{nlsQ:function(e,t,o,i,r,d){return(i=(r=n.document).createElement("script")).async=1,i.src="https://cdn-gl.imrworldwide.com/conf/"+e+".js#name="+t+"&ns="+a,(d=r.getElementsByTagName("script")[0]).parentNode.insertBefore(i,d),n[a][t]=n[a][t]||{g:o||{},ggPM:function(e,o,i,r,d){(n[a][t].q=n[a][t].q||[]).push([e,o,i,r,d])}},n[a][t]}},e=NOLBUNDLE.nlsQ("PF2155097-E1B7-4900-A8F3-22BADF34DBC6","nlsnInstance",{}),t={type:"static",assetid:FTENielsen.asset_id,section:FTENielsen.section,segA:FTENielsen.seg_a,segB:FTENielsen.seg_b,segC:FTENielsen.seg_c},e.ggPM("staticstart",t));var o,i,r=r||[];r.push({c1:"2",c2:"3000032"}),o=document.createElement("script"),i=document.getElementsByTagName("script")[0],o.async=!0,o.src="https://sb.scorecardresearch.com/beacon.js",i.parentNode.insertBefore(o,i)}var fteAdNetwork=window.location.hostname.indexOf("qa.538.io")>=0?"21743558653":"21783347309",fteAdTargeting="undefined"!=typeof adConfig&&adConfig.targeting?adConfig.targeting:"/"+fteAdNetwork+"/abc-news/fivethirtyeight.com/web/projects",inlineAdIdx=1,googletag=googletag||{};function getViewport(){var e=window,t="inner";return"innerWidth"in window||(t="client",e=document.documentElement||document.body),{width:e[t+"Width"],height:e[t+"Height"]}}function getCurrentBreakpoint(){var e=getViewport().width;return e>1280?"xl":e>1024?"l":e>768?"m":"s"}function doNotTrackEnabled(){return window.doNotTrack||navigator.doNotTrack||navigator.msDoNotTrack||void 0!==window.external&&"msTrackingProtectionEnabled"in window.external?"1"===window.doNotTrack||"yes"===navigator.doNotTrack||"1"===navigator.doNotTrack||"1"===navigator.msDoNotTrack||void 0!==window.external&&void 0!==window.external.msTrackingProtectionEnabled&&window.external.msTrackingProtectionEnabled()?1:0:null}function loadInlineAds(){var e=1;[].forEach.call(document.querySelectorAll(".inline-ad"),(function(t){t.setAttribute("aria-hidden","true");var n=document.createElement("div"),a="div-gpt-ad-1558036340566-"+inlineAdIdx.toString();n.setAttribute("id",a),t.appendChild(n),inlineAdIdx+=1,e+=1;var o="s"==getCurrentBreakpoint()?[[300,250]]:[[728,90]];googletag.cmd.push((function(){for(var t in googletag.defineSlot(fteAdTargeting,o,a).addService(googletag.pubads()).setTargeting("pos","banner"+e.toString()),window.custParams)googletag.pubads().setTargeting(t,window.custParams[t]);googletag.pubads().enableSingleRequest(),googletag.pubads().collapseEmptyDivs(),googletag.enableServices()})),googletag.cmd.push((function(){googletag.display(a)}))}))}function initAds(){if(!window.___skipShowAds&&document.getElementById("ad")&&!window.adsInititalized){window.adsInititalized=!0;var e=document.createElement("div");e.setAttribute("id","div-gpt-ad-1558036340566-0"),document.getElementById("ad").setAttribute("aria-hidden","true"),document.getElementById("ad").appendChild(e),window.custParams={pgtyp:"index",sp:"fivethirtyeight",lang:"en",devType:"desktop",prof:getCurrentBreakpoint(),devOS:navigator.userAgent},null!==doNotTrackEnabled()&&(window.custParams.isDnt=doNotTrackEnabled());var t="Smartphone"==getDeviceType()?[[300,50],[320,50]]:[[728,90],[970,250],[970,66]];getScript("https://www.googletagservices.com/tag/js/gpt.js",(function(){googletag.cmd.push((function(){for(var e in googletag.defineSlot(fteAdTargeting,t,"div-gpt-ad-1558036340566-0").addService(googletag.pubads()).setTargeting("pos","banner1"),window.custParams)googletag.pubads().setTargeting(e,window.custParams[e]);googletag.pubads().enableSingleRequest(),googletag.pubads().collapseEmptyDivs(),googletag.enableServices()})),googletag.cmd.push((function(){googletag.display("div-gpt-ad-1558036340566-0")}));let e=document.querySelectorAll(".teads");for(let t=0;t<e.length;t++)e[t].id="teads-"+t;let n={};for(let t=0;t<e.length;t++){let a=e[t];n[a.id]||(n[a.id]=!0,googletag.cmd.push((()=>{googletag.defineSlot(fteAdTargeting,[[1,3]],a.id).addService(googletag.pubads()).setTargeting("pos","outstream")})),googletag.cmd.push((()=>{googletag.display(a.id)})))}loadInlineAds()}))}}googletag.cmd=googletag.cmd||[],window.___skipShowAds||document.addEventListener("DOMContentLoaded",(function(){getScript(`https://dcf.espn.com/TWDC-DTCI/${window.location.hostname.indexOf("qa.538.io")>=0?"stage":"prod"}/Bootstrap.js`,(function(){if("undefined"!=typeof __dataLayer){var e=trackingConfig.publishTime.split(" ")[1],t=trackingConfig.publishTime.split(" ")[0];t=t.split("-")[1]+"/"+t.split("-")[2]+"/"+t.split("-")[0],__dataLayer.page||={},__dataLayer.page.page_url=getFteUrl(),__dataLayer.page.page_name=trackingConfig.section+":interactives:"+trackingConfig.pageName,__dataLayer.page.author=trackingConfig.author,__dataLayer.page.content_last_update_date=t,__dataLayer.page.content_last_update_time=e,__dataLayer.page.content_publish_date=t,__dataLayer.page.content_publish_time=e,__dataLayer.page.content_type="interactives",__dataLayer.page.section_1=trackingConfig.section,__dataLayer.page.section_2=trackingConfig.section+":"+trackingConfig.primaryTag,__dataLayer.page.story_id=trackingConfig.postId,__dataLayer.page.story_title=trackingConfig.title,__dataLayer.device||={},__dataLayer.device.device_type=getDeviceType()}analyticsInit(),initAds()}),!0)})),window.refreshAds=function(){!window.___skipShowAds&&document.getElementById("ad")&&(googletag.pubads().refresh(),loadInlineAds())};let ftePathName=window.location.pathname;setInterval((function(){ftePathName!=window.location.pathname&&(ftePathName=window.location.pathname,window.refreshAdsAndTracking())}),200),window.refreshAdsAndTracking=function(){"undefined"!=typeof __dataLayer&&(__dataLayer.page.page_url=getFteUrl(),__dataLayer.publish("pageView"),triggerNielsonAndComscore()),window.refreshAds()},document.getElementById("fte-expandable-title")&&(document.getElementById("fte-expandable-title").onclick=function(){var e,t,n,a,o;document.querySelector(".fte-expandable-icon").classList.contains("fte-open")?document.getElementById("entry-comments-content").style.display="none":(document.getElementById("entry-comments-content").style.display="block",document.getElementById("fb-comments").dataset.width=document.getElementById("fb-comments").parentNode.offsetWidth-24,t="script",n="facebook-jssdk",o=(e=document).getElementsByTagName(t)[0],e.getElementById(n)||((a=e.createElement(t)).id=n,a.src="https://connect.facebook.net/en_US/sdk.js#version=v2.6&xfbml=1&appId=797620670264818",o.parentNode.insertBefore(a,o))),document.querySelector(".fte-expandable-icon").classList.toggle("fte-open")}),window.reloadAdsAndTracking=function(){},window.updateOmnitureData=function(){},window.espn=window.espn||{},espn.hasOwnProperty("track")||(espn.track={}),espn.track.hasOwnProperty("init")||(espn.track.init=function(){}),setTimeout((function(){var e=Array.prototype.slice.call(document.querySelectorAll("li.footer-menu-item")).filter((function(e){return"Do Not Sell My Info"==e.textContent}))[0],t=Array.prototype.slice.call(document.querySelectorAll("li.footer-menu-item")).filter((function(e){return"Privacy Policy"==e.textContent}))[0];if(t&&!e){var n=document.createElement("li");n.classList.add("footer-menu-item"),n.innerHTML='<a href="https://privacy.thewaltdisneycompany.com/en/dnsmi/" class="ot-sdk-show-settings" target="_blank" rel="noopener noreferrer">Do Not Sell My Info</a>',t.parentNode.insertBefore(n,t.nextSibling)}(e=Array.prototype.slice.call(document.querySelectorAll("li.footer-menu-item a")).filter((function(e){return"Do Not Sell My Info"==e.textContent}))[0])&&e.classList.add("ot-sdk-show-settings")}),0),document.cookie="country=us; path=/";