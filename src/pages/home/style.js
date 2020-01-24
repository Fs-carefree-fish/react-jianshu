import styled from 'styled-components'

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  overflow: hidden;
`
export const HomeLeft = styled.div`
  margin-top: 15px;
  padding-top: 30px;
  width: 625px;
  float: left;
  .banner-img{
    width: 100%;
    height: 270px;
  }
`

export const HomeRight = styled.div`
  margin-top: 15px;
  padding-top: 30px;
  width: 280px;
  float: right;
`


export const TopicWrapper = styled.div`
  padding: 20px 0 10px 0;
  overflow: hidden;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`

export const TopicItem = styled.div`
  float: left;
  height: 32px;
  line-height: 32px;
  background-color: #f7f7f7;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  box-sizing: border-box;
  padding-right: 10px;
  margin-left: 18px;
  margin-bottom: 18px;
  .topic-img{
    margin-right: 10px;
    display: block;
    float: left;
    width: 32px;
    height: 32px;
  }
`

export const ListItem = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  overflow: hidden;
  .list-pic{
    display: block;
    width: 125px;
    height: 100px;
    float: right;
    border-radius: 10px;

  }
`
export const ListInfo = styled.div`
  width: 500px;
  height: 100px;
  float: left;
  .title{
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  .desc{
    line-height: 24px;
    font-size: 13px;
    color: #999;
  }

`

export const RecommedWrapper = styled.div`
  margin: 30px 0:
  width: 280px;
`

export const RecommedItem = styled.div`
  width: 280px;
  height: 50px;
  background: url(${(props) => props.imgUrl});
  background-size: 100% 100%;
`

export const WriterWapper = styled.div`
  width: 280px;
  height: 150px;
  border: 1px solid black;
  border-radius: 10px;
  margin-top: 20px;
  box-sizing: border-box;

`

export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin: 30px 0;
  background-color: #a5a5a5;
  text-align: center;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
`

export const BackTop = styled.div`
  position: fixed;
  right: 100px;
  bottom: 100px;
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  font-size: 14px;
  color: #333;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 10px;
`

