(function() {
  'use strict';

  $(".button-collapse").sideNav();

  angular.module('blueit')
    .controller('PostCtrl', ['$timeout', PostCtrl])
    .controller('TopicCtrl', ['$timeout', TopicCtrl]);

  function PostCtrl($timeout) {
    var vm = this;

    vm.posts = [
      {
        "created_at": "2016-06-20T14:26:16.000Z",
        "description": "What an awesome story.",
        "id": 1,
        "image_url": "https://b.thumbs.redditmedia.com/WTeAOJlQ98AfIVn7BjV_cDrDLXMuowwmJVo1p1xX5yg.jpg",
        "rating": 6,
        "title": "Dogs Are Not Allowed On NYC Subway Unless They're In A Carrier… So This Happened",
        "topic_id": 1,
        "updated_at": "2016-07-23T14:26:16.000Z",
        "user_id": 1
      },
      {
        "created_at": "2016-07-04T14:26:16.000Z",
        "description": "What an awesome story.",
        "id": 2,
        "image_url": "https://a.thumbs.redditmedia.com/pl1fM2jukfU2xW6hamMUF5dJ5gC_igj-1Z2oMwQM_90.jpg",
        "rating": 2,
        "title": "Wagging That Tail",
        "topic_id": 1,
        "updated_at": "2016-07-23T14:26:16.000Z",
        "user_id": 1
      },
      {
        "created_at": "2016-06-28T14:26:16.000Z",
        "description": "What an awesome story.",
        "id": 3,
        "image_url": "https://b.thumbs.redditmedia.com/9kZ1Hw7MF6zW41tvpivIswSVHzRehsP05friQEgaaYo.jpg",
        "rating": -8,
        "title": "My Friend Got a New Phone Case",
        "topic_id": 2,
        "updated_at": "2016-07-23T14:26:16.000Z",
        "user_id": 1
      },
      {
        "created_at": "2016-05-13T14:26:16.000Z",
        "description": "What an awesome story.",
        "id": 4,
        "image_url": "https://b.thumbs.redditmedia.com/AKy_8KjGjoeeq8CoYxjbWiFTsL2IR6Dh_VMbR1_ddnY.jpg",
        "rating": 0,
        "title": "Okay fine, you can have one more piece of chicken...",
        "topic_id": 2,
        "updated_at": "2016-07-23T14:26:16.000Z",
        "user_id": 1
      },
      {
        "created_at": "2016-07-11T14:26:16.000Z",
        "description": "What an awesome story.",
        "id": 5,
        "image_url": "https://b.thumbs.redditmedia.com/e-zhbAm5T-zELHrhRNYLV12l2fAgcqoM-yMF-IPUE6I.jpg",
        "rating": 3,
        "title": "The look of complete satisfaction",
        "topic_id": 2,
        "updated_at": "2016-07-23T14:26:16.000Z",
        "user_id": 1
      },
      {
        "created_at": "2016-07-25T14:26:16.000Z",
        "description": "What an awesome story.",
        "id": 6,
        "image_url": "http://www.toysrus.com/graphics/product_images/pTRU1-22957329v150.jpg",
        "rating": -2,
        "title": "Crazy Spin",
        "topic_id": 3,
        "updated_at": "2016-07-23T14:26:16.000Z",
        "user_id": 1
      },
      {
        "created_at": "2016-06-18T14:26:16.000Z",
        "description": "What an awesome story.",
        "id": 7,
        "image_url": "http://blog.uberpong.com/wp-content/uploads/2012/11/Impossible-table-tennis-shot-dive-150x150.png",
        "rating": 12,
        "title": "Anyone here play in any clubs in Chicago?",
        "topic_id": 3,
        "updated_at": "2016-07-23T14:26:16.000Z",
        "user_id": 1
      }
    ];

    vm.showPostForm = false;

    vm.submitPost = function() {
      const newPost = {
        "created_at": new Date(),
        "description": vm.postForm.description,
        "id": vm.posts[vm.posts.length - 1].id + 1,
        "image_url": vm.postForm.imageUrl,
        "rating": 0,
        "title": vm.postForm.title,
        "topic_id": vm.postForm.topicId,
        "updated_at": new Date(),
        "user_id": 1
      };

      vm.posts.push(newPost);

      vm.postForm.title = '';
      vm.postForm.imageUrl = '';
      vm.postForm.description = '';
      vm.postForm.topicId = '';
      $('#modal').closeModal();
    };

    vm.initSelect = function() {
      $timeout(() => {
        $('select').material_select();
      }, 10);
    };

    vm.initSelect();

    $('.modal-trigger').leanModal();
  }

  function TopicCtrl($timeout) {
    const vm = this;

    vm.topics = [
      {
        id: 1,
        name: 'Dogs'
      },
      {
        id: 2,
        name: 'Cats'
      },
      {
        id: 3,
        name: 'Table Tennis'
      }
    ];

    vm.showTopicForm = false;

    vm.toggleTopicForm = function() {
      vm.showTopicForm = !vm.showTopicForm;
    };

    vm.submitTopic = function() {
      const newTopic = {
        id: vm.topics[vm.topics.length - 1].id + 1,
        name: vm.topicForm.name
      };

      vm.topics.push(newTopic);
      vm.topicForm.name = '';
      vm.showTopicForm = false;
      vm.initSelect();
    };

    vm.initSelect = function() {
      $timeout(() => {
        $('select').material_select();
      }, 10);
    };

    vm.initSelect();
  }
})();
