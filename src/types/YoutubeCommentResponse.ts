export interface YoutubeCommentResponse {
  snippet: {
    topLevelComment: {
      snippet: {
        textDisplay: string;
        authorDisplayName: string;
      };
    };
  };
}
