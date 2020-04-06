import React from 'react';
import styled from 'styled-components';
import CategoryTitle from '../Common/CategoryTitle';
import media from '../../libs/MediaQuery';

const AboutLayout = styled.section`
  padding: 100px 0 0;

  ${media.mobile`
    padding: 30px 0;
  `}
`;

const InfoArea = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px;
  border-radius: 20px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
  background: #f7f7f7;

  ${media.mobile`
    align-items: center;
    flex-direction: column;
    padding: 25px;
  `}
`;

const ImgBox = styled.div`
  overflow: hidden;
  width: 140px;
  min-width: 140px;
  height: 140px;
  border-radius: 50%;
  margin: 0 50px 0 0;

  img {
    width: 100%;
  }

  ${media.mobile`
    margin: 0 0 50px;
  `}
`;

const InfoBox = styled.div`
  flex: 1 1 auto;
`;

const Info = styled.div`
  margin: 0 0 20px;

  .developer {
    font-weight: 700;
    font-size: 2rem;
    strong {
      display: inline-block;
      color: #e22548;
    }
  }

  p {
    font-size: 1.5rem;
    letter-spacing: 0.05em;
    word-break: keep-all;

    &.name {
      font-size: 2rem;
    }

    &.introduce {
      font-size: 1.8rem;
    }

    ${media.mobile`
      text-align: center;
    `}
  }

  p + p {
    margin: 15px 0 0;
  }

  .util-list {
    display: flex;
    margin: 15px 0 0;

    li + li {
      margin: 0 0 0 10px;
    }

    a {
      display: inline-block;
      overflow: hidden;
      border-radius: 50%;
      width: 35px;
      height: 35px;
      background: #efefef;
      padding: 5px;

      img {
        width: 100%;
      }
    }

    ${media.mobile`
      justify-content: center;
    `}
  }
`;

const Intro = styled.div`
  max-width: 800px;
  p {
    font-size: 1.6rem;
    line-height: 1.5;
    word-break: keep-all;
  }
`;

type AboutProps = {
  ref: React.RefObject<HTMLElement>;
};

export default React.forwardRef<HTMLElement, AboutProps>(function About(
  props,
  ref,
) {
  return (
    <AboutLayout ref={ref}>
      <CategoryTitle title="ABOUT ME" />
      <InfoArea>
        <ImgBox>
          <img src="./images/leecheolhwan.jpg" alt="" />
        </ImgBox>
        <InfoBox>
          <Info>
            <p className="developer">
              <strong>지속적인 열정</strong>을 가진 프론트엔드 개발자
            </p>
            <p className="name">이철환</p>
            <p>1992.10.30(+)</p>
            <p>010-9637-7171</p>
            <p>publizm@gmail.com</p>
            <ul className="util-list">
              <li>
                <a
                  href="https://github.com/publizm"
                  title="github 바로가기"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="./images/github.png" alt="" />
                </a>
              </li>
              <li>
                <a
                  href="https://publizm.github.io/"
                  title="블로그 바로가기"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="./images/blog.png" alt="" />
                </a>
              </li>
            </ul>
          </Info>
          <Intro>
            <p>
              2017년부터 마크업과 UI 개발을 하였으며, 현재는 프론트엔드 개발
              전반에 관심이 있어 React, Typescript 등 주력 기술로서 사용하고
              있으며, 친숙해지기 위해 노력하고 있습니다.
              <br />
              프론트엔드 개발자로서 사용자와 가장 가까운 위치에서 소통하며 좋은
              서비스를 제공하기 위해 꾸준히 발전하여 사용자와 동료 개발자를
              만족시킬 수 있는 개발자가 되겠습니다.
            </p>
          </Intro>
        </InfoBox>
      </InfoArea>
    </AboutLayout>
  );
});
