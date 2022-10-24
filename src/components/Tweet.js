import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import * as Styled from './Tweet.style'

import { ReactComponent as BookmarkEmpty } from './../assets/img/bookMarker_empty.svg';
import { ReactComponent as LinkIcon } from './../assets/img/link_icon.svg';
import { ReactComponent as HeartIcon } from './../assets/img/heart_icon.svg';
import { ReactComponent as RetweetIcon } from './../assets/img/retweet_icon.svg';

import { confirm } from './popup/confirm';
import Floating from './popup/Floating';

export const Tweet = ({
  profile,
  name,
  id,
  contents,
  retweet,
  likes,
  link,
}) => {
  const [copy, setCopy] = useState(false);
  // 컴포넌트 사용 예제
  // profile은 img src에 들어갈 내용이며, 추후 api 문서 업데이트 시 수정될 예정입니다.
  // -------------------
  // <Twit
  //   profile={testImg}
  //   name="TestUser"
  //   id="73571D"
  //   contents="트윗 컴포넌트 테스트합니다"
  // />
  // -------------------

  //미완성 http 가 있으면 slice 후 a 태그로 감싸고 싶음
  // link 생성은 완료했는데 앞  string 하고 합치면 [object Object] 로 변경되는 현상 발생
  // const contentLink = () => {
  //   if (contents.indexOf('http') !== -1) {
  //     let topContents = contents.slice(0, contents.indexOf('http'));
  //     let linkContent = contents.slice(contents.indexOf('http'));
  //     if (linkContent.indexOf(' ') !== -1) {
  //       linkContent = linkContent.slice(0, linkContent.indexOf(' '));
  //       let lastConents = linkContent.slice(linkContent.indexOf(' ') - 1);
  //       let linkContentLink = { __html: linkContent };
  //       return (contents = (
  //         <>
  //           {topContents}
  //           <a
  //             href={linkContent}
  //             target='_blank'
  //             rel='noopener noreferrer'
  //             dangerouslySetInnerHTML={linkContentLink}
  //           />
  //           {lastConents}
  //         </>
  //       ));
  //     } else {
  //       let linkContentLink = { __html: linkContent };
  //       return (contents = (
  //         <>
  //           {topContents}
  //           <a
  //             href={linkContent}
  //             target='_blank'
  //             rel='noopener noreferrer'
  //             dangerouslySetInnerHTML={linkContentLink}
  //           />
  //         </>
  //       ));
  //     }
  //   }
  // };

  // const urlRegex = /(https?:\/\/[^\s]+)/g;
  // contents = contents.replace(urlRegex, (url) => {
  //   return (
  //     <Link href={url} target='_blank' rel='noopener noreferrer'>
  //       {url}
  //     </Link>
  //   );
  // });
  // console.log('1', contents);

  useEffect(() => {
    if (copy) {
      setTimeout(() => {
        setCopy(false);
      }, 2000);
    }
  }, [copy]);

  return (
    <Styled.Box>
      <Styled.Header>
        <Styled.Profile background={profile} />
        <Styled.NameSpace>
          <span className='name'>{name}</span>
          <span className='id'>@{id}</span>
        </Styled.NameSpace>
        <Styled.BookMarkContianer
          onClick={() =>
            confirm('로그인 후 이용 가능합니다.', '로그인하기', '취소')
          }
        >
          <BookmarkEmpty />
        </Styled.BookMarkContianer>
      </Styled.Header>
      <CopyToClipboard
        text={contents}
        onCopy={() => {
          setCopy(true);
        }}
      >
        <Styled.Contents>{contents}</Styled.Contents>
      </CopyToClipboard>
      <Styled.Bottom>
        <Styled.IconContainer>
          <Styled.LinkIconA href={link} target='_blank' rel='noopener noreferrer'>
            <LinkIcon />
          </Styled.LinkIconA>
        </Styled.IconContainer>
        <Styled.IconContainer>
          <RetweetIcon />
          <Styled.Number>{retweet}</Styled.Number>
        </Styled.IconContainer>
        <Styled.IconContainer>
          <HeartIcon />
          <Styled.Number>{likes}</Styled.Number>
        </Styled.IconContainer>
      </Styled.Bottom>
      {copy ? <Floating /> : <></>}
    </Styled.Box>
  );
};
