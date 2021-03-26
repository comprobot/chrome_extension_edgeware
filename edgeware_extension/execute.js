const rotateEvent = () => {
  document.body.style.transform = 'rotate(180deg)';
};
const reset = () => {
  document.body.style.transform = '';
}

const gourl = () => {
  document.location.href = 'https://www.yahoo.com.hk';
     window.open("http://www.w3schools.com","_blank",
    "toolbar,scrollbars,resizable,top=500,left=500,width=400,height=400");
}

const onMessage = (message) => {
  switch (message.action) {
    case 'GOURL':
      gourl();
      break;
    case 'RESET':
      reset();
      break;
	case 'ROTATE':
      rotateEvent();
      break;	  
    default:
      break;
  }
}

chrome.runtime.onMessage.addListener(onMessage);
