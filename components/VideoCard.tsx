import React, { useEffect, useRef, useState } from 'react';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { HiVolumeUp, HiVolumeOff } from 'react-icons/hi';
import { BsFillPlayFill, BsFillPauseFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';

import { Video } from './../types';

interface IProps {
    post: Video;
}

const VideoCard: NextPage<IProps> = ({ post }) => {
    const [playing, setPlaying] = useState(false);
    const [isHover, setIsHover] = useState(false);
    // const [isVideoMuted, setIsVideoMuted] = useState(false);
    const [isVideoMuted, setIsVideoMuted] = useState<boolean>(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const onVideoPress = () => {
        if (playing) {
          videoRef?.current?.pause();
          setPlaying(false);
        } else {
          videoRef?.current?.play();
          setPlaying(true);
        }
    };  

    useEffect(() => {
        if (post && videoRef?.current) {
          videoRef.current.muted = isVideoMuted;
        }
      }, [post, isVideoMuted]);

    return (
        <div className='flex flex-col border-b-2 border-gray-200 pb-6'>
            {/* 发布者信息 */}
            <div>
                <div className='flex gap-3 p-2 cursor-pointer font-semibold rounded '>
                    <div className='md:w-12 md:h-12 w-10 h-10'>
                        <Link href='/'>
                        <>
                            <Image
                            width={62}
                            height={62}
                            className=' rounded-full'
                            src={post.postedBy.image}
                            alt='user-profile'
                            layout='responsive'
                            />
                        </>
                        </Link>
                    </div>
                    <div className='flex justify-center'>
                        <Link href='/'>
                        <div className='flex items-center gap-2'>
                            <p className='flex gap-2 items-center md:text-md font-bold text-primary'>
                            {post.postedBy.userName}{' '}
                            <GoVerified className='text-blue-400 text-md' />
                            </p>
                            <p className='capitalize font-medium text-xs text-gray-500 hidden md:block'>
                            {post.postedBy.userName}
                            </p>
                        </div>
                        </Link>
                    </div>
                </div>
            </div>

            {/* 视频内容 */}
            <div className='lg:ml-20 mr-10 flex gap-4 relative'>
                <div
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                    className='rounded-3xl'
                >
                <Link href={`/detail/${post._id}`}>
                    <video
                    loop
                    ref={videoRef}
                    src={post.video.asset.url}
                    className='w-[480px] h-[270px] lg:w-[640px] lg:h-[360px] md:w-[480px] md:h-[270px] first-line:cursor-pointer bg-black'
                    ></video>
                </Link>

                {isHover && (
                    <div className='h-[60px] mt-[-60px] relative cursor-pointer gap-10 flex justify-between bg-[rgba(0,0,0,0.5)]'>
                    {playing ? (
                        <button onClick={onVideoPress}>
                        <BsFillPauseFill className='text-white text-1xl lg:text-4xl ml-5' />
                        </button>
                    ) : (
                        <button onClick={onVideoPress}>
                        <BsFillPlayFill className='text-white text-1xl lg:text-4xl ml-5' />
                        </button>
                    )}
                    {isVideoMuted ? (
                        <button onClick={() => setIsVideoMuted(false)}>
                        <HiVolumeOff className='text-white text-1xl lg:text-4xl mr-5' />
                        </button>
                    ) : (
                        <button onClick={() => setIsVideoMuted(true)}>
                        <HiVolumeUp className='text-white text-1xl lg:text-4xl mr-5' />
                        </button>
                    )}
                    </div>
                )}
                </div>
            </div>



        </div>
    )
}

export default VideoCard