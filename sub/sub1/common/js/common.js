$(function(){
  //cont2
  var tabMenu2 = $(".tab_menu2>ul>li");  //li를 클릭했을때
  var tabCont2 = $(".tab_cont2>div"); //펼쳐보일때 보이는 내용

  tabCont2.hide().eq(0).show(); //박스전체숨긴후 첫번째박스만 보여주기

  tabMenu2.click(function(e){ //tab버튼을 클릭했을때
    e.preventDefault();  //클릭했을때  클릭방지
    var target2 = $(this); //버튼을 클릭했을때 이벤트가 발생한곳
    var index2 = target2.index();//몇번째 버튼을 클릭했는지 모르니 인덱스번호로
    tabMenu2.removeClass("on");// 활성되있는 버튼외는 지우기
    target2.addClass("on"); //타겟클릭된부분을 추가보여줌
    tabCont2.css("display","none");//클릭된부분외 문장은 숨기고
    tabCont2.eq(index2).css("display","block");//클릭된 부분만 보여주기
  });
});//function end