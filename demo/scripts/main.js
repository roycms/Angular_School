/**
 * Created by roy on 15/3/25.
 */

App.controller('IndexCtl',function($scope,$http,$window,$cookieStore) {
    if($cookieStore.get("session_name")!=null){
        $scope.session_name=$cookieStore.get("session_name");
    }
    var loginUrl=DoMain+"mobile/user_login.do";
    $scope.login=function (){
        $http.get(loginUrl,

            {
                withCredentials: true,
                params:{
                    'lv.username' : $scope.username,
                    'lv.pwd' : $scope.password,
                    'lv.schoolId' : '2a6f9cd743b111e4b5e99439e5e88296',
                    'lv.md5' : 0
                }
            }).success(function(data) {
                if(data.user==null){

                    alert("登录错误！账户或密码错误！");
                }
                else{
                    alert("登录成功！");
                    $cookieStore.put("session_name", data.user.id);
                    $scope.session_name=$cookieStore.get("session_name");
                    // $window.location.href="#/ActivityList";
                    $scope.loginShow = false;
                }
            });
    }

    //退出登录
    $scope.loginOut= function(){
        $cookieStore.remove("session_name");
        $scope.session_name=null;
        $scope.loginOutShow = false;
    }
});