export type Video = {
  id: string;
  playlists: string[];
  playlist: string;
  title?: string;
  thumbnails?: any; //throwing error here if Image[] is used;
};