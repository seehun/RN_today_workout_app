const dummy_comments = [
  {
    // id 1 유저의 코멘트
    feed_id: 1,
    comments: [
      {
        id: 1, //댓글 아이디  1부터 시작
        name: "asdf",
        user_id: 2, //유저 아이디
        contents: "wow",
        profileImage: "https://avatar.iran.liara.run/public",
      },
      {
        id: 2,
        name: "asadsfdf",
        user_id: 1,
        contents: "wow",
        profileImage: "https://avatar.iran.liara.run/public",
      },
      {
        id: 3,
        name: "vdf",
        user_id: 4,
        contents: "wow",
        profileImage: "https://avatar.iran.liara.run/public",
      },
    ],
  },
  {
    // id 2 유저의 코멘트
    feed_id: 2,
    comments: [
      {
        id: 1,
        name: "asdf",
        contents: "wow",
        profileImage: "https://avatar.iran.liara.run/public",
      },
    ],
  },
  {
    feed_id: 3,
    comments: [],
  },
];

export default dummy_comments;
