var getSteps=function(){
    var json_str_steps=localStorage.getItem('step');
    var json_obj_steps=JSON.parse(json_str_steps);
    return json_obj_steps;
};

//saving the steps by append on the step object
var saveStep=function(step,json_obj){
    var json_obj_steps=getSteps();
    if( json_obj_steps==null)
        json_obj_steps={};
    json_obj_steps[step]=json_obj
    json_obj=json_obj_steps;
    var json_str_attr=JSON.stringify(json_obj);
    localStorage.setItem('step',json_str_attr);
};
    
var cleanAllCookies=function(){
    var cookies = document.cookie.split(";");
    for(var i=0; i < cookies.length; i++) {
        var equals = cookies[i].indexOf("=");
        var name = equals > -1 ? cookies[i].substr(0, equals) : cookies[i];
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
    
};



function StepController(){};

StepController.prototype.show=function(step,callback){
        switch(step){
            case 3:break;
        };
    };
    
StepController.prototype.hide=function(step,callback){
        switch(step){
            case 2: $('#div_before_upload').hide('slow',callback);
                    break;
        };
    };