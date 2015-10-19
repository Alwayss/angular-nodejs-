/**
 * Created by chy on 2015/10/12.
 */

$("input[name='a']").click(function(){



    if($(this).is(":checked")){

        $("input[name='b']").prop("checked",true);

    }else{

        $("input[name='b']").prop("checked",false);

    }

});
$("input[name='aa']").click(function(){
    if($(this).is(":checked")){
        $("input[name='bb']").prop("checked",true);
    }
    else{
        $("input[name='bb']").prop("checked",false);
    }



})
