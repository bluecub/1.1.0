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