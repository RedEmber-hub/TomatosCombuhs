import { VideoResponse } from '@/types/videoResponse';

const API_KEY = 'AIzaSyBREHGSbC4mDknAD5Amw6HyzWXGpEtXlc8';

export async function fetchLatestVideo(channelId: string): Promise<VideoResponse | null> {
  const playlistId = 'UU' + channelId.slice(2);

  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=1&key=${API_KEY}`
  );

  const data = await response.json();

  const item = data.items?.[0];

  if (!item) return null;

  return {
    title: item.snippet.title,
    description: item.snippet.description,
    videoId: item.snippet.resourceId.videoId,
  };
}
