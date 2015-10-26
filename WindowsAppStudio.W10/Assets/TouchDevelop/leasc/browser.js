var TDev;
(function (TDev) {
    TDev.dbg = false;
    TDev.isBeta = false;
    (function (BrowserSoftware) {
        BrowserSoftware[BrowserSoftware["unknown"] = 0] = "unknown";
        BrowserSoftware[BrowserSoftware["ie10"] = 1] = "ie10";
        BrowserSoftware[BrowserSoftware["ie11"] = 2] = "ie11";
        BrowserSoftware[BrowserSoftware["ieOld"] = 3] = "ieOld";
        BrowserSoftware[BrowserSoftware["android2"] = 4] = "android2";
        BrowserSoftware[BrowserSoftware["android4"] = 5] = "android4";
        BrowserSoftware[BrowserSoftware["chrome"] = 6] = "chrome";
        BrowserSoftware[BrowserSoftware["firefox"] = 7] = "firefox";
        BrowserSoftware[BrowserSoftware["safari"] = 8] = "safari";
        BrowserSoftware[BrowserSoftware["silkOld"] = 9] = "silkOld";
        BrowserSoftware[BrowserSoftware["silk"] = 10] = "silk";
        BrowserSoftware[BrowserSoftware["opera"] = 11] = "opera";
        BrowserSoftware[BrowserSoftware["nodeJS"] = 12] = "nodeJS";
        BrowserSoftware[BrowserSoftware["maxthon"] = 13] = "maxthon";
        BrowserSoftware[BrowserSoftware["bb10"] = 14] = "bb10";
    })(TDev.BrowserSoftware || (TDev.BrowserSoftware = {}));
    var BrowserSoftware = TDev.BrowserSoftware;
    var Browser;
    (function (Browser) {
        Browser.isNodeJS = false;
        Browser.isHeadless = false;
        Browser.isTouchDevice = false;
        Browser.isMobile = undefined;
        Browser.isCellphone = false;
        Browser.isTablet = false;
        Browser.isDesktop = false;
        Browser.isMobileSafari = false;
        Browser.isMobileSafariOld = false;
        Browser.isGecko = false;
        Browser.isTrident = false;
        Browser.isWebkit = false;
        Browser.isAndroid = false;
        Browser.isMacOSX = false;
        Browser.isWindows8plus = false;
        Browser.isRaspberryPiDebian = false;
        Browser.isCompiledApp = false;
        Browser.isWP8app = false;
        Browser.isHosted = false;
        Browser.browser = 0 /* unknown */;
        Browser.browserVersion = 0;
        Browser.browserVersion2 = 0;
        Browser.webkitVersion = 0;
        Browser.isEmbedded = false;
        Browser.canIndexedDB = false;
        Browser.canWebSql = false;
        Browser.canMemoryTable = true;
        Browser.hasHardwareBack = false;
        Browser.localProxy = false;
        Browser.noAnimations = false;
        Browser.noStorage = false;
        Browser.isGenStubs = false;
        Browser.mobileWebkit = false;
        Browser.touchStart = false;
        Browser.webRunner = false;
        Browser.webAppImplicit = false;
        Browser.webAppBooster = false;
        Browser.inCordova = false;
        Browser.inEditor = false;
        Browser.builtinTouchToPan = false;
        Browser.canLogin = true;
        Browser.canWriteLocalStorage;
        Browser.cscript = false;
        Browser.useConsoleLog = false;
        Browser.brokenColumns = false;
        Browser.assumeMouse = false;
        Browser.brokenGradient = false;
        Browser.deviceMotion = false;
        Browser.deviceOrientation = false;
        Browser.deviceHeading = false;
        Browser.audioDataUrls = true;
        Browser.audioWav = false;
        Browser.compilerInlining = false;
        Browser.compilerOkElimination = true;
        Browser.compilerBlockChaining = false;
        Browser.brokenBackButton = false;
        Browser.brokenResize = false;
        Browser.screenshots = false;
        Browser.setInnerHTML = function (el, html) {
            el.innerHTML = html;
        };
        Browser.dragAndDrop = false;
        Browser.videoTracks = true;
        Browser.directionAuto = true;
        Browser.notifyBackToHost = false;
        Browser.logToHost = false;
        Browser.noNetwork = false;
        Browser.lowMemory = false;
        Browser.loadingDone = false;
        Browser.platformCaps = [];
        Browser.browserShortName = "unknown";
        Browser.startTimestamp = 0;
        function browserName(s) {
            var n = BrowserSoftware[s];
            return !n || s == 0 /* unknown */ ? "unknownBrowser" : n;
        }
        function setBrowserVersion(name) {
            var userAgent = window.navigator.userAgent;
            var idx = userAgent.indexOf(name + "/");
            if (idx >= 0) {
                var verNo = userAgent.slice(idx + name.length + 1);
                Browser.browserVersion = parseInt(verNo);
            }
            var m = userAgent.match(/Version\/(\d+)\./);
            if (m)
                Browser.browserVersion2 = parseInt(m[1]);
        }
        function detect() {
            var url = document ? document.URL : "";
            if (/dbg=[1t]/.test(url) || (window && window.localStorage && window.localStorage["dbg"]))
                TDev.dbg = true;
            if (/nodbg/.test(url))
                TDev.dbg = false;
            if (window.betaFriendlyId || TDev.dbg || /localhost/.test(url) || /consolelog/.test(url))
                TDev.isBeta = true;
            if (/nobeta/.test(url))
                TDev.isBeta = false;
            Browser.useConsoleLog = TDev.isBeta && !!console && !!console.log;
            Browser.startTimestamp = new Date().getTime();
            if (window.touchDevelopExec || window.mcefQuery || window.cordova) {
                Browser.isHosted = true;
                Browser.screenshots = true;
            }
            if (window.isNodeJS) {
                Browser.isNodeJS = true;
                Browser.isHeadless = true;
            }
            if (window.localProxy || Browser.isNodeJS) {
                Browser.localProxy = true;
            }
            if (window.cordova)
                Browser.inCordova = true;
            var userAgent = Browser.isNodeJS ? "NodeJS" : window.navigator.userAgent;
            var addCap = function (c) {
                Browser.platformCaps.push(c);
            };
            if (!Browser.isNodeJS) {
                Browser.webRunner = !!window.webRunner;
                Browser.webAppImplicit = !!window.webAppImplicit;
                Browser.deviceMotion = !!window.DeviceMotionEvent;
                Browser.deviceOrientation = !!window.DeviceOrientationEvent;
                Browser.deviceHeading = Browser.deviceOrientation;
            }
            var flags = (window.runtimeFlags || "").split(/,/);
            if (flags.indexOf("notifyBack") >= 0)
                Browser.notifyBackToHost = true;
            if (flags.indexOf("logToHost") >= 0)
                Browser.logToHost = true;
            if (flags.indexOf("noNetwork") >= 0)
                Browser.noNetwork = true;
            if (/Silk|Kindle/.test(userAgent)) {
                if (/ Android [123]\./.test(userAgent))
                    Browser.browser = 9 /* silkOld */;
                else
                    Browser.browser = 10 /* silk */;
                Browser.isTablet = true;
            }
            else if (/ Trident\/[7-9]/.test(userAgent)) {
                Browser.browser = 2 /* ie11 */;
                Browser.isMobile = / IEMobile\//.test(userAgent);
                if (Browser.isMobile)
                    Browser.isCellphone = true;
                else if (window.navigator.msMaxTouchPoints)
                    Browser.isTablet = true;
                else
                    Browser.isDesktop = true;
                Browser.hasHardwareBack = Browser.isCellphone;
                Browser.isTrident = true;
            }
            else if (/Maxthon\//.test(userAgent)) {
                Browser.browser = 13 /* maxthon */;
            }
            else if (/ Android /.test(userAgent)) {
                if (/ Chrome\//.test(userAgent)) {
                    Browser.browser = 6 /* chrome */;
                    setBrowserVersion("Chrome");
                }
                else if (/ Android [123]\./.test(userAgent))
                    Browser.browser = 4 /* android2 */;
                else
                    Browser.browser = 5 /* android4 */;
                if (/ Mobile /.test(userAgent))
                    Browser.isCellphone = true;
                else
                    Browser.isTablet = true;
                Browser.isAndroid = true;
                Browser.hasHardwareBack = true;
            }
            else if (/ Chrome\//.test(userAgent)) {
                Browser.browser = 6 /* chrome */;
                setBrowserVersion("Chrome");
                Browser.isDesktop = true;
            }
            else if (/ MSIE 1[0-9]/.test(userAgent)) {
                Browser.browser = 1 /* ie10 */;
                Browser.isMobile = / IEMobile\//.test(userAgent);
                if (Browser.isMobile)
                    Browser.isCellphone = true;
                else if (window.navigator.msMaxTouchPoints)
                    Browser.isTablet = true;
                else
                    Browser.isDesktop = true;
                Browser.hasHardwareBack = Browser.isCellphone;
                Browser.isTrident = true;
            }
            else if (/ MSIE [2-9]/.test(userAgent)) {
                Browser.browser = 3 /* ieOld */;
                Browser.isDesktop = true;
                Browser.isTrident = true;
            }
            else if (/BB10/.test(userAgent)) {
                Browser.browser = 14 /* bb10 */;
                Browser.isMobile = true;
                Browser.isCellphone = true;
            }
            else if (/\(iPad/.test(userAgent)) {
                Browser.browser = 8 /* safari */;
                setBrowserVersion("Version");
                Browser.isTablet = true;
                addCap("iPad");
            }
            else if (/\(iPhone/.test(userAgent)) {
                Browser.browser = 8 /* safari */;
                setBrowserVersion("Version");
                Browser.isCellphone = true;
                addCap("iPhone");
            }
            else if (/\(iPod/.test(userAgent)) {
                Browser.browser = 8 /* safari */;
                setBrowserVersion("Version");
                Browser.isCellphone = true;
                addCap("iPod");
            }
            else if (/Safari/.test(userAgent)) {
                Browser.browser = 8 /* safari */;
                setBrowserVersion("Version");
                Browser.isDesktop = true;
            }
            else if (/ Firefox\//.test(userAgent)) {
                Browser.browser = 7 /* firefox */;
                setBrowserVersion("Firefox");
                if (/Mobile/.test(userAgent))
                    Browser.isCellphone = true;
                else if (/Tablet/.test(userAgent))
                    Browser.isTablet = true;
                else
                    Browser.isDesktop = true;
                Browser.isAndroid = /Android/.test(userAgent);
                Browser.isGecko = true;
            }
            else if (/Opera\//.test(userAgent)) {
                Browser.browser = 11 /* opera */;
            }
            else if (/NodeJS/.test(userAgent)) {
                Browser.browser = 12 /* nodeJS */;
                Browser.useConsoleLog = true;
            }
            if (Browser.isTrident && !Browser.inCordova) {
                if (/^x-wmapp/.test(document.URL)) {
                    Browser.isWP8app = true;
                    addCap("wp8app");
                }
            }
            if (Browser.inCordova)
                addCap("cordova");
            if (Browser.isTrident) {
                Browser.videoTracks = false;
                Browser.directionAuto = false;
            }
            if (/lowMemory/.test(url))
                Browser.lowMemory = true;
            if (/noAnim/.test(url))
                Browser.noAnimations = true;
            Browser.isTouchDevice = Browser.isCellphone || Browser.isTablet;
            if (Browser.isMobile === undefined)
                Browser.isMobile = Browser.isTouchDevice;
            Browser.isWebkit = /WebKit/.test(userAgent);
            if (Browser.isWebkit) {
                var m = userAgent.match(/WebKit\/(\d+)\./);
                if (m)
                    Browser.webkitVersion = parseInt(m[1]);
            }
            Browser.isMacOSX = /Macintosh/.test(userAgent);
            if (/Windows NT (6.[2-9]|[789])/.test(userAgent))
                Browser.isWindows8plus = true;
            Browser.mobileWebkit = Browser.isWebkit && Browser.isMobile;
            if (!Browser.isMobile)
                Browser.assumeMouse = true;
            Browser.builtinTouchToPan = true;
            Browser.isMobileSafari = (Browser.browser == 8 /* safari */ && Browser.isMobile);
            if (Browser.isMobileSafari) {
                var m = userAgent.match(/Safari\/([^.]*)/);
                Browser.isMobileSafariOld = (!Browser.browserVersion || Browser.browserVersion < 8) && m && m.length > 1 && parseInt(m[1]) < 7534;
            }
            if (Browser.isMobileSafari && !/Safari/.test(userAgent) && !window.navigator.standalone) {
                Browser.isEmbedded = true;
            }
            if ((Browser.browser == 1 /* ie10 */ || Browser.browser == 2 /* ie11 */) && !window.applicationCache) {
                Browser.isEmbedded = true;
            }
            var w = window;
            if (w.indexedDB || w.mozIndexedDB || w.msIndexedDB) {
                Browser.canIndexedDB = true;
            }
            if (w.openDatabase || Browser.inCordova) {
                Browser.canWebSql = true;
            }
            if (Browser.isMobile && Browser.browser == 8 /* safari */ && /CriOS/.test(userAgent)) {
                Browser.browser = 6 /* chrome */;
                setBrowserVersion("CriOS");
            }
            if (Browser.isWebkit) {
                if (!Browser.isMobileSafari)
                    Browser.brokenColumns = true;
                if (Browser.isAndroid)
                    Browser.brokenGradient = true;
            }
            if (Browser.isDesktop) {
                Browser.deviceMotion = false;
                Browser.deviceOrientation = false;
            }
            if (Browser.isMobileSafari && Browser.webkitVersion >= 537) {
                Browser.brokenBackButton = true;
                Browser.brokenResize = true;
            }
            if (/Linux armv7/.test(userAgent)) {
                Browser.isRaspberryPiDebian = true;
                Browser.noAnimations = true;
                Browser.noStorage = true;
                Browser.lowMemory = true;
            }
            Browser.browserShortName = browserName(Browser.browser);
            if (Browser.isWP8app)
                Browser.browserShortName += ".wp8app";
            else if (Browser.isCellphone)
                Browser.browserShortName += ".phone";
            else if (Browser.isTablet)
                Browser.browserShortName += ".tablet";
            else
                Browser.browserShortName += ".desktop";
            if (Browser.inCordova)
                Browser.browserShortName += ".cordova";
            addCap(Browser.browserShortName);
            addCap(browserName(Browser.browser));
            if (Browser.isCellphone)
                addCap("cellphone");
            if (Browser.isTablet)
                addCap("tablet");
            if (Browser.isTouchDevice)
                addCap("touch");
            if (Browser.isMobile)
                addCap("mobile");
            if (Browser.isMacOSX)
                addCap("macOSX");
            if (Browser.assumeMouse)
                addCap("assumeMouse");
            if (Browser.isWindows8plus) {
                addCap("win");
                addCap("win8plus");
            }
            if (Browser.isAndroid)
                addCap("android");
            if (/X11/.test(userAgent))
                addCap("x11");
            if (/Windows NT 5.1/.test(userAgent)) {
                addCap("win");
                addCap("winXP");
            }
            if (/Windows NT 6.0/.test(userAgent)) {
                addCap("win");
                addCap("winVista");
            }
            if (/Windows NT 6.1/.test(userAgent)) {
                addCap("win");
                addCap("win7");
            }
            if (Browser.webAppBooster) {
                addCap("webAppBooster");
            }
            if (Browser.isMobileSafari || (Browser.isMobile && (Browser.browser == 1 /* ie10 */ || Browser.browser == 2 /* ie11 */))) {
                Browser.audioDataUrls = false;
            }
            if (Browser.mobileWebkit)
                Browser.touchStart = true;
            Browser.canWriteLocalStorage = false;
            if (typeof window == "object" && typeof window.localStorage == "object" && window.localStorage.removeItem)
                try {
                    var s = Browser.startTimestamp + "";
                    window.localStorage["test"] = s;
                    if (window.localStorage["test"] == s) {
                        Browser.canWriteLocalStorage = true;
                        window.localStorage.removeItem("test");
                    }
                }
                catch (e) {
                }
            if (Browser.isWP8app) {
                Browser.audioDataUrls = true;
                Browser.screenshots = true;
                Browser.audioWav = true;
            }
            Browser.dragAndDrop = !Browser.isNodeJS && !Browser.isMobile && document && document.createElement && 'draggable' in document.createElement('span');
        }
        Browser.detect = detect;
        var getServiceUrl = function () { return (window.rootUrl); };
        function unsupportedMessage(what, path) {
            if (what === void 0) { what = "Touch Develop"; }
            if (path === void 0) { path = ""; }
            var message = function (problemHTML, fixHTML) {
                if (fixHTML === void 0) { fixHTML = undefined; }
                return { problemHTML: problemHTML, fixHTML: fixHTML };
            };
            var genericMessage = function (problemHTML, upgradedBrowserName) {
                if (upgradedBrowserName === void 0) { upgradedBrowserName = undefined; }
                return message(problemHTML, upgradedBrowserName ? "<p>Follow these easy steps to run " + what + " on your device:</p>" + "<ol class='light'><li>open <b>" + upgradedBrowserName + "</b></li><li>navigate to <u>touchdevelop.com" + path + "</u></li></ol>" + "<p>You can copy&amp;paste the link into " + upgradedBrowserName + ".</p>" : undefined);
            };
            if (Browser.isEmbedded)
                return genericMessage("<p>It seems you're running TouchDevelop inside of another app.</p>", "your regular internet browser");
            var olderAndroidMessage = function (problemHTML) { return message(problemHTML, "<p>Follow these easy steps to run " + what + " on Android:</p>" + "<ol class='light'><li><b>try to install the latest <a href='market://details?id=org.mozilla.firefox&hl=en'>Firefox Browser</a></b> from the Google Play Store</li>" + "<li>open <u>touchdevelop.com" + path + "</u> in the Chrome Browser</li></ol>" + "<p>You can copy&amp;paste the link into Firefox.</p>"); };
            var chromeAndroidMessage = function (problemHTML) { return message(problemHTML, "<p>Follow these easy steps to run " + what + " on Android:</p>" + "<ol class='light'><li><b>install the latest <a href='market://details?id=com.android.chrome&hl=en'>Chrome Browser</a> or <a href='market://details?id=org.mozilla.firefox&hl=en'>Firefox Browser</a> or <a href='market://details?id=com.opera.browser&hl=en'>Opera Browser</a> </b> from the Google Play Store</li>" + "<li>open <u>touchdevelop.com" + path + "</u> in the Chrome Browser</li></ol>" + "<p>You can copy&amp;paste the link into the installed browser.</p>"); };
            var upgradeMessage = function (problemHTML) { return message(problemHTML, "<p>Follow these easy steps to run " + what + " on your device:</p>" + "<ol class='light'><li>upgrade your browser to the latest version</li><li>navigate to <u>touchdevelop.com" + path + "</u></li></ol>" + "<p>You can copy&amp;paste the link into your upgraded browser.</p>"); };
            switch (Browser.browser) {
                case 3 /* ieOld */:
                    return message("TouchDevelop Wep App does not work with Internet Explorer versions earlier than 10.");
                case 9 /* silkOld */:
                    return message("TouchDevelop Wep App does not work with the Silk browser in Kindle Fire 1st Gen. Please upgrade to Kindle Fire 2nd Gen or Kindle Fire HD.");
                case 11 /* opera */:
                    return genericMessage("TouchDevelop Wep App does not work with Opera. Please use Internet Explorer 10+, Chrome or Firefox.", "one of the suggested browsers");
                case 8 /* safari */:
                    if (Browser.isMobileSafariOld)
                        return upgradeMessage("Please upgrade to the latest version of iOS / Safari.");
                    if (Browser.isMacOSX && Browser.browserVersion2 < 6)
                        return genericMessage("Safari 5 and older are not supported. Please upgrade Safari or <a href='http://www.google.com/mac/'>install Chrome</a> or <a href='http://www.mozilla.org/en-US/firefox/new/'>Firefox</a>.", "the upgraded browser");
                    if (Browser.isTouchDevice)
                        break;
                    if (Browser.isMacOSX)
                        break;
                    return genericMessage("TouchDevelop Wep App is not supported in Safari on a PC. Please use Internet Explorer 10 or better, Chrome or Firefox.", "one of the suggested browsers");
                case 4 /* android2 */:
                    return olderAndroidMessage("<p>TouchDevelop might require a newer version of Android.</p>");
                case 5 /* android4 */:
                    return chromeAndroidMessage("<p>TouchDevelop Wep App is not supported in the stock Android browser.<p/>");
                case 7 /* firefox */:
                    if (Browser.browserVersion < 16)
                        return upgradeMessage("<p>You are using an outdated version of Firefox.</p>");
                    if (Browser.isAndroid && Browser.browserVersion < 29)
                        return upgradeMessage("<p>Please upgrade to the latest version of Firefox for Android.</p>");
                    break;
                case 6 /* chrome */:
                    if (Browser.isMobileSafari && Browser.browserVersion < 38)
                        return upgradeMessage("<p>You are using an outdated version of Chrome.</p>");
                    if (Browser.isMobile && Browser.browserVersion < 19)
                        return chromeAndroidMessage("<p>You are using an outdated browser.</p>");
                    if (!Browser.isMobile && Browser.browserVersion < 21)
                        return upgradeMessage("<p>You are using an outdated version of Chrome.</p>");
                    break;
                case 1 /* ie10 */:
                    break;
                case 14 /* bb10 */:
                    break;
                case 13 /* maxthon */:
                case 0 /* unknown */:
                    return genericMessage("<p>TouchDevelop is not supported in the current browser.</p>", "<a href='https://www.touchdevelop.com/app/.browsers#supported'>a supported browser</a>");
            }
            if (!Browser.canWriteLocalStorage) {
                if (Browser.browser == 8 /* safari */)
                    return message("<p>You are running Safari in Private Mode or Private Browsing. TouchDevelop does not support this mode, as TouchDevelop needs to maintain a database of installed scripts, but Private Mode or Private Browsing does not allow the use of databases.</p>", "<p><b>Please disable Private Mode or Private Browsing, and then try again.</b></p>" + "<ul>" + "<li>In iOS 6, open 'Settings', select 'Safari', and turn 'Private Browsing' off.</li>" + "<li>In iOS 7, 8 and 8.1, open 'Safari', tap on the Bookmarks button, then tap on the 'Private' button in the lower left corner of the screen.</li>" + "</ul>");
                else
                    return genericMessage("<p>Your browser does not seem to allow storing data.</p>", "regular internet browser");
            }
            Browser.canMemoryTable = !window.localStorage["disableMemoryTable"];
            if (!Browser.canWebSql && !Browser.canIndexedDB && !Browser.isWP8app && !Browser.canMemoryTable) {
                if (Browser.browser == 1 /* ie10 */ || Browser.browser == 2 /* ie11 */)
                    return genericMessage("<p>You are running Internet Explorer in the InPrivate mode. TouchDevelop does not support this mode, as TouchDevelop needs to maintain a database of installed scripts, but the InPrivate mode does not allow the use of databases.</p>", "a regular Internet Explorer window");
                else
                    return genericMessage("<p>Your browser does not seem to support databases.</p>", "<a href='https://www.touchdevelop.com/app/.browsers#supported'>a supported browser </a>");
            }
            return null;
        }
        function supportMemoryTable(value) {
            if (value) {
                if (Browser.canWriteLocalStorage)
                    window.localStorage.removeItem('disableMemoryTable');
                Browser.canMemoryTable = true;
            }
            else {
                if (Browser.canWriteLocalStorage)
                    window.localStorage["disableMemoryTable"] = "1";
                Browser.canMemoryTable = false;
            }
        }
        Browser.supportMemoryTable = supportMemoryTable;
        function browsersHtml() {
            var url = window.browsersUrl;
            if (url)
                window.location.href = window.browsersUrl;
        }
        function supportedBrowsers(descriptionHTML, fixHTML) {
            if (fixHTML === void 0) { fixHTML = undefined; }
            var e = document.getElementById("browserMessage");
            if (e) {
                var happy = window.browserSupported;
                e.innerHTML = (happy ? "" : fixHTML ? "<p>There is only a slight problem:</p>" : "<p>There is a problem:</p>") + descriptionHTML;
                if (happy)
                    e.style.color = "green";
                if (fixHTML) {
                    e = document.getElementById("browserAlmost");
                    if (e)
                        e.innerHTML = "<p>You are almost there!</p>";
                    e = document.getElementById("browserFix");
                    if (e)
                        e.innerHTML = fixHTML;
                }
            }
            e = document.getElementById("userAgent");
            if (e)
                e.innerText = "User Agent: " + window.navigator.userAgent;
        }
        function reportBrowser(browser) {
            try {
                if (window.tdlite)
                    return;
                var serviceUrl = getServiceUrl();
                if (!serviceUrl)
                    return;
                if (window.localStorage) {
                    if (window.localStorage["browserReported"])
                        return;
                    try {
                        window.localStorage["browserReported"] = "1";
                    }
                    catch (e) {
                    }
                }
                var now = new Date();
                var userAgent = window.navigator.userAgent;
                var dateStr = now.getFullYear() + "." + (now.getMonth() + 1) + "." + now.getDate();
                var se = {};
                se["browser." + browser] = 1;
                var ticksReq = {
                    dateStr: dateStr,
                    sessionEvents: se,
                    platform: [],
                    jsUrl: window.mainJsName
                };
                var client = new XMLHttpRequest();
                client.open("POST", serviceUrl + "/api/ticks");
                client.send(JSON.stringify(ticksReq));
                if (browser == "unknown") {
                    var msg = "Unsupported-" + browser;
                    var bug = {
                        exceptionConstructor: msg,
                        exceptionMessage: msg,
                        context: "detection",
                        currentUrl: "",
                        scriptId: "",
                        stackTrace: "browserNotSupported",
                        sourceURL: "",
                        line: -1,
                        eventTrace: "",
                        userAgent: userAgent,
                        resolution: "",
                        jsUrl: window.mainJsName,
                        timestamp: now.getTime(),
                        platform: [],
                    };
                    var client = new XMLHttpRequest();
                    client.open("POST", serviceUrl + "/api/bug");
                    client.send(JSON.stringify(bug));
                }
            }
            catch (e) {
            }
        }
        function statusMsg(m) {
            var f = window.statusMsg;
            if (f)
                f(m);
        }
        function check(isIndex, what, path) {
            if (what === void 0) { what = undefined; }
            if (path === void 0) { path = undefined; }
            if (window.isNodeJS) {
                detect();
                return;
            }
            statusMsg("browser detector started");
            var userAgent = window.navigator.userAgent;
            if (/ IEMobile\/[3-9]/.test(userAgent)) {
                statusMsg("IEMobile userAgent: " + userAgent);
                if (isIndex) {
                    reportBrowser("IEMobile");
                    browsersHtml();
                }
                else {
                    supportedBrowsers("<p>The TouchDevelop Web App doesn't work on Windows Phone 7.</p>", "<p>Please get the free <a href='http://windowsphone.com/s?appId=fe08ccec-a360-e011-81d2-78e7d1fa76f8'>TouchDevelop app from the Windows Phone Store</a> instead.</p>");
                }
            }
            else if (/ MSIE [6789]/.test(userAgent)) {
                statusMsg("IEx userAgent: " + userAgent);
                if (isIndex) {
                    if (/ MSIE 9/.test(userAgent))
                        reportBrowser("IE9");
                    else
                        reportBrowser("IE8-");
                    browsersHtml();
                }
                else {
                    supportedBrowsers("<p>TouchDevelop doesn't work with Internet Explorer 9 or earlier.<p/>", '<p>You can upgrade your browser to <a href="http://windows.microsoft.com/en-us/internet-explorer/downloads/ie-10/worldwide-languages">Internet Explorer 10</a> if you are running Windows 7, ' + 'or upgrade your operating system to <a href="http://windows.microsoft.com/en-US/windows/buy">Windows 8</a> which comes with Internet Explorer 10, or try the latest version of Chrome or Firefox.</p>');
                }
            }
            else {
                statusMsg("browser detector processing");
                detect();
                var um = unsupportedMessage(what, path);
                if (!um || /ignoreAgent/.test(document.URL) || Browser.inCordova) {
                    statusMsg("browser detector success: " + Browser.browserShortName);
                    window.browserSupported = true;
                    if (isIndex)
                        reportBrowser(Browser.browserShortName);
                    else
                        supportedBrowsers("<p>Your browser is supported.</p>");
                }
                else {
                    statusMsg("browser detector failed: " + Browser.browserShortName);
                    if (isIndex) {
                        reportBrowser(Browser.browserShortName);
                        browsersHtml();
                    }
                    else {
                        supportedBrowsers(um.problemHTML, um.fixHTML);
                    }
                }
            }
        }
        Browser.check = check;
    })(Browser = TDev.Browser || (TDev.Browser = {}));
})(TDev || (TDev = {}));
