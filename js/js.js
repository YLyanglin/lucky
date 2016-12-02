/* 
* @Author: Marte
* @Date:   2016-12-01 16:20:01
* @Last Modified by:   Marte
* @Last Modified time: 2016-12-01 17:35:30
*/
$(function(){
    $(".slide").on("click",function(){
        $(this).nextAll().slideToggle()
    })
    
})