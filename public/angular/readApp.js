﻿angular.module('readApp', []);
var topics = [
    {
        title: "书山有路第十一期：程序员修炼之道-第八章-注重实效的项目--第二十二天",
        type: "读书",
        visitedCount: 80,
        commentCount: 2,
        createdOn: '2016/7/05 21:32',
        author: 'stoneniqiu',
        img: 'http://upload.jianshu.io/users/upload_avatars/133630/d5370e672fd4.png?imageMogr/thumbnail/90x90/quality/100'
    },
    {
        title: "《明朝那些事儿》之闲言散语",
        type: "书评",
        visitedCount: 180,
        commentCount: 20,
        createdOn: '2016/5/15 21:32',
        author: '卡卡卡萨布兰卡 ',
        img: 'http://upload.jianshu.io/users/upload_avatars/1675188/2d0810ccc03d.jpg?imageMogr/thumbnail/90x90/quality/100'
    },
    {
        title: "有《程序员修炼之道》高清版吗？",
        type: "求书",
        visitedCount: 90,
        commentCount: 1,
        createdOn: '2016/5/15 21:32',
        author: '吾不知 ',
        img: 'http://upload.jianshu.io/users/upload_avatars/1125491/3910f3825f73.jpg?imageMogr/thumbnail/90x90/quality/100',
    }];

var topicData = function ($http) {
  return $http.get('/api/topics');  
};
 
//定义一个homeController
var homeController = function ($scope, topicData) {
    $scope.message = "loading...";
    topicData.success(function (data) {
        console.log(data);
        $scope.message = data.length > 0 ? "" : "暂无数据";
        $scope.data = data;
    }).error(function (e) {
        console.log(e);
        $scope.message = "Sorry, something's gone wrong ";
     });
};

function formdate() {
    return function(dateStr) {
        var date = new Date(dateStr);
        var d = date.getDate();
        var monthNames = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
        var m = monthNames[date.getMonth()];
        var y = date.getFullYear();
        var output = y + '-' + m + '-' + d;
        return output;
    };
};

var ratingStars = function () {
    return {
        scope: {
            thisRating : '=rating'
        },
        templateUrl: '/angular/rating-stars.html'
    };
};
angular.module('readApp')
    .controller('homeController', homeController)
    .filter('formdate', formdate)
    .directive('ratingStars', ratingStars)    
    .service('topicData', topicData);
 
