var wait = Math.floor(Math.random() * 11000) + 0;
$(document).ready(function(){
  $('.tooltipped').tooltip();
  $('.modal').modal();
  $('.dropdown-trigger').dropdown();
  $('select').formSelect();
  setTimeout(() => {
    document.getElementById("url").focus();
  }, 100);
  setTimeout(() => {
     M.toast({html: "<img width='350px' src='blocked-example.PNG' style='padding-right: 15px;' alt='Blocked Warning Example' /><h4><b><u>Important Information:</u></b> After getting sent many images like the one on the left, we have decided to <b>create more domains for you to accees Goolag</b>. There is also a high likelihood that goolag.app will go down on December 23rd, 2022, but that's a long time from now. New domains will be announced shortly.</h4>", displayLength: "10000"})
  }, 500);
});

$(document).ready(function() {
  const href = window.location.href
  const urlID = href.split('/').reverse()[0]
  if(urlID === '#formSubmitted') {
    M.toast({html: "<h5>Form submitted successfuly</h5>"});

  } else if (urlID === '#noCaptcha') {
    M.toast({html: "<h5><b>Error: </b>You did not complete the Captcha. <i>(err.nocaptcha)</h5>"});

  } else if (urlID.indexOf("url=") >= 0){
    M.toast({html: '<h5><b>Error: </b>You need to select an option and not use enter. In the future, you can to Tab + Enter to unblock quicker. <i>(err.enterkey)</h5>'});
  };
  history.pushState("", document.title, window.location.pathname);
});

function option1() {
  var url = document.getElementById('url').value
  if (url === '') {
  M.toast({html: "<h5><b>Error: </b>You did not enter anything into the input. <i>(err.inputempty-o1)</i></h5>"})
  } else {
    showFrame();
    setTimeout(() => {
      $('#mainForm').attr('action', 'no-js');
      $('#mainForm').attr('method', 'get');
      if(url.substr(0,4) != "http"){
        url = "http://" + url;
      }
      window.location.href= 'https://option1.goolag.app/main/' + url;
      return false;
    }, wait);
}
}

function option2() {
  var url = document.getElementById('url').value
  if (url === '') {
  M.toast({html: "<h5><b>Error: </b>You did not enter anything into the input. <i>(err.inputempty-o2)</h5>"})
  } else {
    showFrame();
    setTimeout(() => {
      $('#mainForm').attr('action', 'https://option2.goolag.app/createSession');
      $('#mainForm').attr('method', 'POST');
      document.getElementById('mainForm').submit();
    }, wait);
}
}

function option3() {
  var url = document.getElementById('url').value
  if (url === '') {
    M.toast({html: "<h5><b>Error: </b>You did not enter anything into the input. <i>(err.inputempty-o3)</h5>"})
  } else {
    showFrame();
    setTimeout(() => {
      $('#mainForm').attr('action', 'https://option3.goolag.app/prox');
      $('#mainForm').attr('method', 'POST');
      document.getElementById('mainForm').submit();
    }, wait);
}
}

function option4() {
  var url = document.getElementById('url').value
  if (url === '') {
    M.toast({html: "<h5><b>Error: </b>You did not enter anything into the input. <i>(err.inputempty-o4)</h5>"})
  } else {
    showFrame();
    setTimeout(() => {
      $('#mainForm').attr('action', 'no-js');
      $('#mainForm').attr('method', 'get');
      if(url.substr(0,4) != "http"){
        url = "http://" + url;
      }
      window.location.href= 'https://option4.goolag.app/main/' + url;
      return false;
    }, wait);
}
}

function option5() {
  var url = document.getElementById('url').value
  if (url === '') {
    M.toast({html: "<h5><b>Error: </b>You did not enter anything into the input. <i>(err.inputempty-o5)</h5>"})
  } else {
    showFrame();
    setTimeout(() => {
      $('#mainForm').attr('action', 'no-js');
      $('#mainForm').attr('method', 'get');
      if(url.substr(0,4) != "http"){
        url = "http://" + url;
      }
      window.location.href= `https://option5.goolag.app/prox/?url=${btoa(url)}`;
      return false;
    }, wait);
}
}

function option6() {
  var url = document.getElementById('url').value
  if (url === '') {
    M.toast({html: "<h5><b>Error: </b>You did not enter anything into the input. <i>(err.inputempty-o6)</h5>"})
  } else {
    showFrame();
    setTimeout(() => {
      $('#mainForm').attr('action', 'no-js');
      $('#mainForm').attr('method', 'get');
      if(url.substr(0,4) != "http"){
        url = "http://" + url;
      }
      window.location.href= 'https://option6.goolag.app/main/' + url;
      return false;
    }, wait);
}
}

function searchIt() {
  var url = document.getElementById('url').value
  if (url === '') {
    M.toast({html: "<h5><b>Error: </b>You did not enter anything into the input. <i>(err.inputempty-s1)</h5>"})
  } else {
    showFrame();
    setTimeout(() => {
      $('#mainForm').attr('action', 'no-js');
      $('#mainForm').attr('method', 'get');
      window.location.href= 'https://www.startpage.com/do/dsearch?query=' + url;
    }, wait);
}
}

function translate() {
  var url = document.getElementById('url').value
  if (url === '') {
    M.toast({html: "<h5><b>Error: </b>You did not enter anything into the input. <i>(err.inputempty-t1)</h5>"})
  } else {
    showFrame();
    setTimeout(() => {
      if (url.substr(0, 4) != "http") {
        url = "http://" + url;
      }
      window.location.href = 'https://translate.google.ca/translate?hl=&sl=en&tl=en&u=' + url + '&anno=2';
      return false;
    }, wait);
}
}

function otherSearchIt() {
  var url = document.getElementById('url').value
  if (url === '') {
    M.toast({html: "<h5><b>Error: </b>You did not enter anything into the input. <i>(err.inputempty-s2)</h5>"})
  } else {
    showFrame();
    setTimeout(() => {
      $('#mainForm').attr('action', 'no-js');
      $('#mainForm').attr('method', 'get');
      window.location.href= 'https://duckduckgo.com/?q=' + url;
    }, wait);
}
}

function archive() {
  var url = document.getElementById('url').value
  if (url === '') {
    M.toast({html: "<h5><b>Error: </b>You did not enter anything into the input. <i>(err.inputempty-a1)</h5>"})
  } else {
    showFrame();
    setTimeout(() => {
      $('#mainForm').attr('action', 'no-js');
      $('#mainForm').attr('method', 'get');
      window.location.href= 'https://web.archive.org/web/' + url;
    }, wait);
}
}

function chrome() {
  var url = document.getElementById('url').value
  if (url === '') {
    M.toast({html: "<h5><b>Error: </b>You did not enter anything into the input. <i>(err.inputempty-c1)</h5>"})
  } else {
    showFrame();
    setTimeout(() => {
      $('#mainForm').attr('action', 'no-js');
      $('#mainForm').attr('method', 'get');
      window.location.href= 'https://www.browserling.com/browse/win/7/chrome/86/' + url;
    }, wait);
}
}

function showFrame() {
    var ifrm = document.createElement("iframe");
    ifrm.setAttribute("src", "submit.html");
    ifrm.style.width = "100%";
    ifrm.style.height = "100%";
    ifrm.style.position = "fixed";
    ifrm.style.top = "0px";
    ifrm.style.left = "0px";
    ifrm.style.bottom = "0px";
    ifrm.style.right = "0px";
    ifrm.style.margin = "0";
    ifrm.style.padding = "0";
    ifrm.style.overflow = "hidden";
    ifrm.style.zIndex = "9999";
    ifrm.style.border = "none";
    document.body.appendChild(ifrm);
}
function newPopup(url) {
	popupWindow = window.open(
		url,'popUpWindow','height=300,width=400,left=10,top=10,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no,status=yes')
}
//
// function other() {
//   document.getElementById('mainForm').submit();
// }
