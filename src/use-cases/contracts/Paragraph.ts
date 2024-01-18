
import type { Image } from './Image';
import type { Video } from './Video';

export type Paragraph = {
    title: { text: string };
    body: { json: any };
    images: Image[];
    videos?: Video[];
};