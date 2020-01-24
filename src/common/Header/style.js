
import styled from 'styled-components'
import LogoPic from '../../static/image/logo.png'

export const HeaderWrapper = styled.div`
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
  position:relative;
`

export const Logo = styled.div`
  position:absolute;
  display:block;
  width:100px;
  height: 58px;
  background:url(${LogoPic});
  background-size:contain;
`

export const Nav = styled.div`
  width: 960px;
  margin: 0 auto;
  height: 58px;
  padding-right:70px;
  box-sizing: border-box;
`
export const NavItem = styled.div`
  line-height: 58px;
  padding: 0 15px;
  font-size: 17px;
  color: #333333;
  &.left{
    float: left;
  }
  &.right{
    float: right;
    color: #969696;
  }
  &.active{
    color:#ec6149
  }
`

export const SearchWrapper = styled.div`
  float: left;
  height: 58px;
  position: relative;

  .zoom{
    position: absolute;
    right: 5px;
    bottom: 13px;
    width: 30px;
    height: 30px;
    border-radius: 15px;
    text-align: center;
    line-height: 30px;

    &.focused{
      color:#fff;  
      background-color: gray;
    }
  }
`

export const NavSearch = styled.input`
  width: 140px;
  height: 38px;
  padding: 0 35px 0 20px;
  margin-top: 10px;
  border: none;
  outline: none;
  border-radius: 19px;
  background-color: #eee;
  font-size: 14px;
  margin-left: 20px;
  color: #777;
  &::placeholder{
    color: #999;
  }
  &.focused{
    width: 240px;
  }
  
  &.slide-enter{
    transition: all .2s ease-out;
  }
  &.slide-active{
    width:240px;
  }
  
  &.slide-exit{
    transition: all .2s ease-out;
  }
  &.slide-exit-active{
    width:160px;
  }
`

export const SearchInfo = styled.div`
  width: 240px;
  position: absolute;
  padding: 0 20px;
  left: 0;
  top: 58px;
  box-shadow: 0 0 8px rgba(0, 0, 0, .2);
  background-color: #fff;
`

export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`

export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 13px;
  cursor: pointer;
  .spin{
    display: block;
    float: left;
    margin-right: 2px;
    font-size: 12px;
    transition: all .2s ease-in;
    transform-origin: center center;
  }
`

//触发 BFC
export const SearchInfoList = styled.div`
  overflow: hidden;
`

export const SearchInfoItem = styled.a`
  display: block;
  float: left;
  padding: 0 5px;
  line-height: 20px;
  color: #787878;
  font-size: 12px;
  border: 1px solid #ddd;
  border-radius: 3px;
  margin-left: 10px;
  margin-bottom: 13px;
  cursor: pointer;
`



export const Addition = styled.div`
  height: 38px;
  position: absolute;
  top: 0;
  right: 0;
`

export const Button = styled.div`
  float: right;
  margin-top: 10px;
  margin-right: 20px;
  padding: 0 20px;
  height: 38px;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  font-size:14px;
  &.reg{
    color:#ec6149;
  }
  &.wrting{
    color:#fff;
    background-color: #ec6149;
  }
`




