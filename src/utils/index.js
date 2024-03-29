import storage from "../storage";

import dummy_feed from "../static/dummy_feed";
import {
  feed1_dummy_comment,
  feed2_dummy_comment,
  feed3_dummy_comment,
} from "../static/dummy_comments";

//초기화 로직
export const setInitialFeeds = () => {
  storage.save({
    key: "feeds", // Note: Do not use underscore("_") in key!
    data: dummy_feed,
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
    key: "comments", // Note: Do not use underscore("_") in key!
    id: "3", //feed_id
    data: feed3_dummy_comment,
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
