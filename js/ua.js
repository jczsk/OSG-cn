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
    var head = document.getElementsByTagName('head')[0];
    head.innerHTML += "<style>.ua-list p{text-align:left;} .ua-list span{display:inline-block;width:70px;}.ua-list a{display:inline-block;margin: 0.125em 0.25em;padding: 0 0.25em;border-radius: 0.25em;background: var(--bg-color-secondary);color: var(--text-color-light);font-weight: bold;line-height: 2;}</style>"
    var sidebar = document.getElementsByClassName('sidebar-inner');
    for (var i = 0; i < sidebar.length; i++) {
    sidebar[i].innerHTML += "<hr><div class='ua-list'></div>"
    }
    var ualist = document.getElementsByClassName('ua-list');
    if(ualist.length > 0){
        for (var i = 0; i < ualist.length; i++) {
        if(sessionStorage.cpu_architecture != 'undefined'){
            ualist[i].innerHTML += "<p><span>处理器</span>:<a href='/cpu/"+sessionStorage.cpu_architecture.toLowerCase().replace(/\s+/g, '')+".html'>"+sessionStorage.cpu_architecture+"</a></p>"
        }
        if(sessionStorage.device_vendor != 'undefined'){
            ualist[i].innerHTML += "<p><span>设备</span>:<a href='/device/"+sessionStorage.device_vendor.toLowerCase().replace(/\s+/g,'')+".html'>"+sessionStorage.device_vendor+" "+sessionStorage.device_model+"</a></p>"
        }
        if(sessionStorage.os_name != 'undefined'){
            ualist[i].innerHTML += "<p><span>系统</span>:<a href='/os/"+sessionStorage.os_name.toLowerCase().replace(/\s+/g, '')+".html'>"+sessionStorage.os_name+" "+sessionStorage.os_version+" "+sessionStorage.os_num+"</a></p>"
        }
        if(sessionStorage.browser_name != 'undefined'){
            ualist[i].innerHTML += "<p><span>浏览器</span>:<a href='/browser/"+sessionStorage.browser_name.toLowerCase().replace(/\s+/g, '')+".html'>"+sessionStorage.browser_name+" "+sessionStorage.browser_version+"</a></p>"
        }
        ualist[i].innerHTML += "<p>以上信息通过浏览器开放的UA（UserAgent）标识获取，准确性仅作参考！</p>"
    }
}
  }
  function getPCNum(){var agent=navigator.userAgent.toLowerCase();var isMac=function(){return/macintosh|mac os x/i.test(navigator.userAgent)}();if(agent.indexOf("win32")>=0||agent.indexOf("wow32")>=0){return "X86"}if(agent.indexOf("win64")>=0||agent.indexOf("wow64")>=0){return "X64"}}
