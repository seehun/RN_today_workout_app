import storage from "../storage";

import dummy_feed from "../static/dummy_feed";
import {
  feed1_dummy_comment,
  feed2_dummy_comment,
  feed3_dummy_comment,
  feed4_dummy_comment,
} from "../static/dummy_comments";

//초기화 로직
export const setInitialFeeds = () => {
  //feed Data
  storage.save({
    key: "feeds",
    data: dummy_feed,
    expires: 1000 * 60,
  });

  //feed number ->id값으로 이용
  storage.save({
    key: "feedNumber",
    data: 4,
    expires: 1000 * 60,
  });
};

export const setInitialComments = () => {
  //feed1
  storage.save({
    key: "comments", // 댓글
    id: "1", // feed_id가 1번인 데이터
    data: feed1_dummy_comment,
    expires: 1000 * 3600,
  });
  //feed2
  storage.save({
    key: "comments",
    id: "2", //feed_id
    data: feed2_dummy_comment,
    expires: 1000 * 3600,
  });
  //feed3
  storage.save({
    key: "comments",
    id: "3", //feed_id
    data: feed3_dummy_comment,
    expires: 1000 * 3600,
  });

  storage.save({
    key: "comments",
    id: "4", //feed_id
    data: feed4_dummy_comment,
    expires: 1000 * 3600,
  });
};

// 데이터 추가 로직
export const setCommentDataInStorage = (feed_id, newCommentData) => {
  storage.save({
    key: "comments",
    id: feed_id,
    data: newCommentData,
    expires: 1000 * 3600,
  });
};
