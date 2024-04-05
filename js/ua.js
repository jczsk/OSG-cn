'use strict';
if(sessionStorage.os_name == null){
    var uaparser = document.createElement("script"); 
    uaparser.src = "https://cdnjs.cloudflare.com/ajax/libs/UAParser.js/2.0.0-alpha.2/ua-parser.min.js"; 
    uaparser.onload = function() {
                    var uap = new UAParser();
                    var result = uap.getResult();
                    sessionStorage.device_vendor = result.device.vendor;
                    if(sessionStorage.device_vendor=='undefined'){sessionStorage.device_vendor='undefined';}
                    sessionStorage.device_model = result.device.model;
                    if(sessionStorage.device_model=='undefined'){sessionStorage.device_model='';}
                    sessionStorage.cpu_architecture = result.cpu.architecture;
                    if(sessionStorage.cpu_architecture=='undefined'){sessionStorage.cpu_architecture='undefined';}
                    sessionStorage.os_name = result.os.name;
                    if(sessionStorage.os_name=='undefined'){sessionStorage.os_name='undefined';}
                    sessionStorage.os_num = getPCNum();
                    if(sessionStorage.os_num=='undefined'){sessionStorage.os_num='';}
                    sessionStorage.browser_name = result.browser.name;
                    if(sessionStorage.browser_name=='undefined'){sessionStorage.browser_name='undefined';}
                    sessionStorage.browser_version = result.browser.version;
                    if(sessionStorage.browser_version=='undefined'){sessionStorage.browser_version='';}
                    uap.getOS().withClientHints().then(os => {
                      sessionStorage.os_version = os.version;
                      ua();
                  });
    }; 
    document.getElementsByTagName('head')[0].appendChild(uaparser);
}else{
    ua();
}

function ua() {
    let cpu = document.getElementById("cpu");
        cpu.innerText=sessionStorage.cpu_architecture;
        cpu.href="/cpu/"+sessionStorage.cpu_architecture.toLowerCase().replace(/\s+/g, '')+".html";
    let device = document.getElementById("device");
        device.innerText=sessionStorage.device_vendor+" "+sessionStorage.device_model;
        device.href="/device/"+sessionStorage.device_vendor.toLowerCase().replace(/\s+/g, '')+".html";
    let os = document.getElementById("os");
        os.innerText=sessionStorage.os_name+" "+sessionStorage.os_version+" "+sessionStorage.os_num;
        os.href="/os/"+sessionStorage.os_name.toLowerCase().replace(/\s+/g, '')+".html";
    let browser = document.getElementById("browser");
        browser.innerText=sessionStorage.browser_name+" "+sessionStorage.browser_version;
        browser.href="/browser/"+sessionStorage.browser_name.toLowerCase().replace(/\s+/g, '')+".html";
  }
  function getPCNum(){var agent=navigator.userAgent.toLowerCase();var isMac=function(){return/macintosh|mac os x/i.test(navigator.userAgent)}();if(agent.indexOf("win32")>=0||agent.indexOf("wow32")>=0){return "X86"}if(agent.indexOf("win64")>=0||agent.indexOf("wow64")>=0){return "X64"}}
