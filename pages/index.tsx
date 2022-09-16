import React from 'react';
import axios from 'axios';

import VideoCard from '../components/VideoCard';
import { Video } from '../types';
import NoResults from '../components/NoResults';

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

interface IProps {
  videos: Video[];
}

const Home = ({ videos }: IProps) => {
  console.log(videos)
  return (
    <div className='flex flex-col gap-10 videos h-full'>
      {videos.length 
        ? videos?.map((video: Video) => (
          <VideoCard post={video} key={video._id} />
        )) 
        : <NoResults text={`还没有视频`} />}
    </div>
  );
};

export const getServerSideProps = async ({
  query: { topic },
}: {
  query: { topic: string };
}) => {
  let response = await axios.get(`${BASE_URL}/api/post`);

  if(topic) {
    response = await axios.get(`${BASE_URL}/api/discover/${topic}`);
  }
  
  return {
    props: { videos: response.data },
  };
};

export default Home;