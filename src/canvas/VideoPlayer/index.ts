import { ComponentProps } from '@uniformdev/canvas-react';   
import { VideoPlayer } from './VideoPlayer'
import { registerUniformComponent } from '@uniformdev/canvas-react';



export type VideoPlayerProps = ComponentProps<{
  id: string;
  source: string;
  title: string;
  description: string;
}>;

registerUniformComponent({ type: 'videoPlayer', component: VideoPlayer });


export default VideoPlayer;
