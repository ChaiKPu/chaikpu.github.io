function burstframe(){
        if(top!=self)
        top.location.replace(location);
    }
    window.onload = function(){burstframe();}