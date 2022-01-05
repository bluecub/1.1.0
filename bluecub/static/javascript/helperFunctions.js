togglePostCrete = (e) => {
   postTradeForm = document.getElementById("postFormTrade")
   postMediaForm = document.getElementById("postFormMedia");

    if(e.checked){
        postTradeForm.removeAttribute("hidden");
        postMediaForm.setAttribute("hidden", true)
    }else{
        postMediaForm.removeAttribute("hidden");
        postTradeForm.setAttribute("hidden", true)
    }

}

buySellStyling = (e, eleArray) => {

    if(e.checked){

        eleArray.forEach(element => {
            let currEle = document.getElementById(element)
            currEle.classList.remove('bg')
            currEle.classList.add('bg-red')
        });

    }else{

        eleArray.forEach(element => {
            let currEle = document.getElementById(element)
            currEle.classList.remove('bg-red')
            currEle.classList.add('bg')
        });

    }

}

