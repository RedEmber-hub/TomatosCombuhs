import { Comments } from '@/types/comments';

const API_KEY = 'AIzaSyBREHGSbC4mDknAD5Amw6HyzWXGpEtXlc8';

export async function fetchVideoComments(videoId: string) {
  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&maxResults=20&order=relevance&key=${API_KEY}`
  );

  const data = await response.json();

  return (
    data.items?.map((item: Comments) => ({
      text: item.snippet.topLevelComment.snippet.textDisplay,
      author: item.snippet.topLevelComment.snippet.authorDisplayName,
    })) || []
  );
}
